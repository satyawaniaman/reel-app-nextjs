import ImageKit from "imagekit"
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export async function GET() {
    try{
        return NextResponse.json(imagekit.getAuthenticationParameters());
    }catch {
        return NextResponse.json(
            {error: "image kit auth failed"},
            {status: 500}
        )
    }
  
}