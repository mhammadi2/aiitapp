// app/api/events/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'asc' },
    })
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.error()
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, date } = await request.json()
    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
      },
    })
    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    return NextResponse.error()
  }
}
