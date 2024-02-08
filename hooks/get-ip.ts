
"use server"
import { headers } from "next/headers";

export async function getIpHook() {
    const header = headers()
    console.log(header)
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    console.log("ip from hook", ip)
    return ip
}




