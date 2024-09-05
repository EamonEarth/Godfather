import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'



export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const ip = searchParams.get('ip')
    
    // const ip = req.nextUrl.searchParams.get('id') || "127.0.0.1"
    const url = `http://ip-api.com/json/${ip}`;

    try {
        // await returns a res that has data as the first key, and all the
        // actual data as the value pair
        //That's why we destructure vvv
        const {data} = await axios.get(url);
        
        // however this destructured data is still in Object notation. 
        // the NextResponse is converting the response  from an AxiosResponse to something
        // that we can called .json() on. 
        return NextResponse.json({data})
    } catch (error) {
        console.error('Failed to fetch location:', error);
        throw error; // or handle the error as needed
    }
}
