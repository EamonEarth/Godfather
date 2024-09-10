import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'



export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const ip = searchParams.get('ip')
    const url = `http://ip-api.com/json/${ip}`;

    try {
        const {data} = await axios.get(url);
        
        return NextResponse.json({data})
    } catch (error) {
        console.error('Failed to fetch location:', error);
        throw error; 
    }
}
