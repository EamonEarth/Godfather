
import OpenAI from "openai";
import { NextRequest, NextResponse } from 'next/server'


// const apiKey = process.env.OPENAI_API_KEY;


const openai = new OpenAI();


interface CreateHaikuProps {
    city: string;
}

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url)
  
    const city = searchParams.get("city")
    const d = searchParams.get("day")
    

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `Write a funny haiku encouraging someone from a place in ${city} to employ the maker of this tech portfolio website. Maybe include the day (${d}). Format it clearly into the haiku syllable count.
` }],
        model: "gpt-4-0125-preview",
      });
      
      const final = completion.choices[0].message.content
    
      return NextResponse.json({final})
    }