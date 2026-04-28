import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { villeSlug, service, tarifAffiche, reponses } = body ?? {};
    if (!villeSlug || !service || typeof tarifAffiche !== 'number') {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    if (prisma) {
      try {
        await prisma.appelTracking.create({
          data: {
            villeSlug,
            service,
            tarifAffiche,
            reponses,
            userAgent: request.headers.get('user-agent') ?? undefined,
            referrer: request.headers.get('referer') ?? undefined,
          },
        });
      } catch (e) {
        console.warn('[tracking-appel] DB indisponible:', e);
      }
    } else {
      console.log('[tracking-appel]', { villeSlug, service, tarifAffiche });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
