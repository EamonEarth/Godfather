
import OpenAI from "openai";
import { NextRequest, NextResponse } from 'next/server'


const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({apiKey:apiKey});


interface CreateHaikuProps {
    city: string;
}

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url)
  
    const city = searchParams.get("city")
    const d = searchParams.get("day")
    

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `Write a funny, non-cheesy, off-beat haiku to get someone from a place in ${city} to employ me. Maybe include the day (${d}). Format it clearly into the haiku syllable count.
` }],
        // model: "gpt-3.5-turbo-0125",
        model: "gpt-4-0125-preview",
      });
      
      const final = completion.choices[0].message.content
    
      return NextResponse.json({final})
    }