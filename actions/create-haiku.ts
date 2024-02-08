"use server"

import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });


interface CreateHaikuProps {
    city: string;
}

export async function createHaiku(city : CreateHaikuProps) {

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `Create an elegant funny haiku encouraging the reader to employ the maker of this website. Reference ${city} and tech.` }],
        model: "gpt-3.5-turbo",
      });
      console.log(completion.choices)
      console.log("completion", completion)
    
      return (completion.choices[0].message.content);
    }

