import { NextResponse } from 'next/server';
import { prisma } from '@/db';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, companyName, contactName, email, companyInfo, requirements } = body;

    // Save to database
    const workRequest = await prisma.workRequest.create({
      data: {
        type,
        companyName,
        contactName,
        email,
        companyInfo,
        requirements,
      },
    });

    // Send to Discord
    if (DISCORD_WEBHOOK_URL) {
      const discordMessage = {
        embeds: [{
          title: `New ${type} Work Request`,
          color: type === 'VC' ? 0x4299E1 : 0x34D399, // Blue for VC, Green for Startup
          fields: [
            {
              name: 'Company',
              value: companyName,
              inline: true,
            },
            {
              name: 'Contact',
              value: contactName,
              inline: true,
            },
            {
              name: 'Email',
              value: email,
              inline: true,
            },
            {
              name: 'Company Info',
              value: companyInfo,
            },
            {
              name: 'Requirements',
              value: requirements,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: 'BVL Work Request',
          },
        }],
      };

      await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      });
    }

    return NextResponse.json({ success: true, data: workRequest });
  } catch (error) {
    console.error('Work request error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit work request' },
      { status: 500 }
    );
  }
} 