import { NextRequest, NextResponse } from 'next/server';
import { addInquiry } from '@/lib/inquiries';
import { backupFetch } from "../../../lib/inquiry-backup";

async function sendDiscordNotification(inquiry: {
  name: string;
  phone: string;
  message: string;
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord webhook URL is not configured');
    return;
  }

  const embed = {
    title: '새로운 상담 문의가 접수되었습니다!',
    color: 0xf97316,
    fields: [
      {
        name: '이름',
        value: inquiry.name,
        inline: true,
      },
      {
        name: '전화번호',
        value: inquiry.phone,
        inline: true,
      },
      {
        name: '상담 문의',
        value: inquiry.message,
        inline: false,
      },
    ],
    footer: {
      text: '전국사다리원',
    },
    timestamp: new Date().toISOString(),
  };

  try {
    await backupFetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    const inquiry = await addInquiry({ name, phone, message });

    await sendDiscordNotification({ name, phone, message });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    return NextResponse.json(
      { error: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
