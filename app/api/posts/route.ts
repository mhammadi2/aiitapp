// app/api/posts/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.error()
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json()
    const post = await prisma.post.create({
      data: {
        title,
        content,
        // published defaults to false
      },
    })
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.error()
  }
}
