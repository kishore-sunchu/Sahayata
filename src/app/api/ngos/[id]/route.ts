import { connectToDatabase } from "@/lib/db";
import Ngo from "@/models/Ngo";
import { ApiResponse } from "@/utils/response";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectToDatabase();
    const id = (await params).id;
    const ngo = await Ngo.findById(id);
    if (!ngo) return NextResponse.json(ApiResponse.createError("Ngo with this id is not found", 'NGO_NOT_FOUND'), { status: 404 });
    return NextResponse.json(ApiResponse.createSuccess('Successfully fetched the Ngo', { ngo: ngo }), { status: 200 });
  } catch (error) {
    return NextResponse.json(ApiResponse.createError((error as Error)?.message || "Error occur while fetching a ngo", 'NGO_FETCHED_FAILED'), { status: 400 });
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
    if (!ngo) return NextResponse.json(ApiResponse.createError("Ngo with this id is not found", 'NGO_NOT_FOUND'), { status: 404 });
    return NextResponse.json(ApiResponse.createSuccess('Successfully updated the Ngo', { ngo: ngo }), { status: 200 });
  } catch (error) {
    return NextResponse.json(ApiResponse.createError((error as Error)?.message || "Error occur while updating a ngo", 'NGO_UPDATE_FAILED'), { status: 400 });
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
    if (!ngo) return NextResponse.json(ApiResponse.createError("Ngo with this id is not found", 'NGO_NOT_FOUND'), { status: 404 });
    return NextResponse.json(ApiResponse.createSuccess('Successfully deleting the Ngo', { ngo: ngo }), { status: 200 });
  } catch (error) {
    return NextResponse.json(ApiResponse.createError((error as Error)?.message || "Error occur while deleting a ngo", 'NGO_DELETE_FAILED'), { status: 400 });
  }
}
