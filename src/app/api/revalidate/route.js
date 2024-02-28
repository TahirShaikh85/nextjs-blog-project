import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request) {
    const secret = request.nextUrl.searchParams.get('secret')

    if (secret !== process.env.SECRET_KEY) {
        return new Response(JSON.stringify({ message: 'Invalid Token' }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const path = request.nextUrl.searchParams.get('path') || '/'

    revalidatePath(path)

    return Response.json({ revalidated: true })
}