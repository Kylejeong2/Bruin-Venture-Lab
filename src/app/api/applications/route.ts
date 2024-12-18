import { NextResponse } from 'next/server'
import { fetchFormResponses } from '@/lib/utils/google-forms'
import { ApplicationAnalyzer } from '@/lib/services/application-analyzer'
import { sendApplicationToDiscord } from '@/lib/services/discord'
import { prisma } from '@/db'

export const runtime = 'nodejs'

const FORM_ID = process.env.GOOGLE_FORM_ID!
const SYSTEM_PROMPT = process.env.APPLICATION_SYSTEM_PROMPT!

export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      orderBy: { timestamp: 'desc' },
    })
    return NextResponse.json(applications)
  } catch (error) {
    console.error('Failed to fetch applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    const responses = await fetchFormResponses(FORM_ID)
    const analyzer = new ApplicationAnalyzer(SYSTEM_PROMPT)
    
    const analyzedApplications = await Promise.all(
      responses.map(async (response) => {
        const analysis = await analyzer.analyzeApplication(response)
        
        // Convert analysis objects to JSON-safe format
        const firstAnalysisJson = JSON.parse(JSON.stringify({
          status: analysis.firstAnalysis.status,
          confidence: analysis.firstAnalysis.confidence,
          reasoning: analysis.firstAnalysis.reasoning
        }))
        
        const secondAnalysisJson = JSON.parse(JSON.stringify({
          status: analysis.secondAnalysis.status,
          confidence: analysis.secondAnalysis.confidence,
          reasoning: analysis.secondAnalysis.reasoning
        }))

        const savedApplication = await prisma.application.create({
          data: {
            id: response.id,
            timestamp: new Date(response.timestamp),
            candidateName: response.candidateName,
            email: response.email,
            responses: JSON.parse(JSON.stringify(response.responses)),
            firstAnalysis: firstAnalysisJson,
            secondAnalysis: secondAnalysisJson,
            finalStatus: analysis.finalStatus,
            needsManualReview: analysis.needsManualReview,
          },
        })

        // Send to Discord
        await sendApplicationToDiscord({
          ...response,
          ...analysis,
        })

        return savedApplication
      })
    )

    return NextResponse.json(analyzedApplications)
  } catch (error) {
    console.error('Failed to process applications:', error)
    return NextResponse.json(
      { error: 'Failed to process applications' },
      { status: 500 }
    )
  }
} 