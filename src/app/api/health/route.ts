import { NextResponse } from "next/server";

// Con esto le indicamos que el runtime que debe de utilizar no es el de NodeJS
// Si no que el de NextResponse
export const runtime = "edge";

export async function GET() {
  return NextResponse.json({ status:"ok" });
}