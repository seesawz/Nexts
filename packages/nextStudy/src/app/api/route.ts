// app/api/route.js
import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://dog-api.kinduff.com/api/facts')
  const data = await res.json()
 
  return NextResponse.json({ data })
}
