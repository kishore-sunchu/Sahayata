/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Ngo from "@/models/Ngo";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = await params
    const ngo = await Ngo.findById(id);
    if (!ngo) return NextResponse.json({ success: false, message: "NGO not found" }, { status: 404 });

    return NextResponse.json({ success: true, data: ngo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating NGO" }, { status: 400 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const ngo = await Ngo.findByIdAndUpdate(params.id, body, { new: true });
    if (!ngo) return NextResponse.json({ success: false, message: "NGO not found" }, { status: 404 });

    return NextResponse.json({ success: true, data: ngo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating NGO" }, { status: 400 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const ngo = await Ngo.findByIdAndDelete(params.id);
    if (!ngo) return NextResponse.json({ success: false, message: "NGO not found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "NGO deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting NGO" }, { status: 400 });
  }
}
