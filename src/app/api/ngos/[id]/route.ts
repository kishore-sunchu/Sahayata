/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectToDatabase } from "@/lib/db";
import Ngo from "@/models/Ngo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectToDatabase();
    const id = (await params).id;
    const ngo = await Ngo.findById(id);
    if (!ngo) return NextResponse.json({ success: false, message: "NGO not found" }, { status: 404 });

    return NextResponse.json({ success: true, data: ngo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating NGO" }, { status: 400 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectToDatabase();
    const id = (await params).id;
    const body = await request.json();
    const ngo = await Ngo.findByIdAndUpdate(id, body, { new: true });
    if (!ngo) return NextResponse.json({ success: false, message: "NGO not found" }, { status: 404 });

    return NextResponse.json({ success: true, data: ngo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating NGO" }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectToDatabase();
    const id = (await params).id;
    const ngo = await Ngo.findByIdAndDelete(id);
    if (!ngo) return NextResponse.json({ success: false, message: "NGO not found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "NGO deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting NGO" }, { status: 400 });
  }
}
