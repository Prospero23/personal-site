import { NextResponse } from "next/server"

NextResponse

export async function POST(request: Request) {

    const data = await request.json()
    console.log(data.data)


    return NextResponse.json({message: 'good'});
}
