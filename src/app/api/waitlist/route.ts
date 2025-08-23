import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }
    await prisma.waitlist.create({ data: { email } })
    return NextResponse.json({ success: true })
  } catch (error: any) {
    if (error.code === 'P2002') {
      // Unique constraint failed
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
