import { NextResponse } from "next/server";
import { getRandomColourSwatch } from "../../../../../backend/src/services/colourService"; 

export async function GET() {
  return NextResponse.json(getRandomColourSwatch());
}