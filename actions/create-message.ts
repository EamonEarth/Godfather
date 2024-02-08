"use server";

import { z } from "zod";

const createMessage = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string()
})

export async function create(formData: FormData) {

  const parsedData = createMessage.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  })
  const returnData = createMessage.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  })


  const messageToSend = 
  `FROM: ${parsedData.name} \n
  SENDER EMAIL: ${parsedData.email} \n
  MESSAGE: ${parsedData.message} 
  `

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'eamon.trav@gmail.com', // Change to your recipient
    from: 'eamon.trav@gmail.com', // Change to your recipient
    subject: `Port mail from ${parsedData.name}`,
    text: parsedData.message,
    html: `<p> ${messageToSend} </p>`
    }

    console.log(msg)

sgMail.send(msg).then(() => {
    console.log('Email sent')
  })
  .catch((error:any) => {
    console.error(error)
  })

  return returnData.success

  }

