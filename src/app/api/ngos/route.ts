/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Ngo from "@/models/Ngo";
import { ApiResponse } from "@/utils/response";

export async function GET() {
  try {
    await connectToDatabase();
    const ngos = await Ngo.find({});
    return NextResponse.json(ApiResponse.createSuccess('Successfully fetched all the Ngo', ngos), { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching NGOs" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const ngo = await Ngo.create(body);
    return NextResponse.json({ success: true, data: ngo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error creating NGO" }, { status: 400 });
  }
}
