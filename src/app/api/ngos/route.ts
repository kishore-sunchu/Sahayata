/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Ngo from "@/models/Ngo";
import { ApiResponse } from "@/utils/response";
import { validateNgoSchema } from "./schema";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get("search") || "";

    const query = search
      ? {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { city: { $regex: search, $options: "i" } },
          { state: { $regex: search, $options: "i" } },
        ],
      }
      : {};

    const ngo = await Ngo.find(query).sort({ createdAt: -1 });

    return NextResponse.json(ApiResponse.createSuccess('Successfully fetched all the Ngo', { ngo }), { status: 200 });
  } catch (error) {
    return NextResponse.json(ApiResponse.createError("Error occur while fetching ngo", 'NGO_FETCHED_FAILED'), { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const parsedBody = validateNgoSchema(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          isSuccess: false,
          message: parsedBody.error.errors,
          payload: {},
          errorCode: 'VALIDATION_FAILED'
        },
        { status: 400 }
      );
    }
    const ngo = await Ngo.create(body);
    return NextResponse.json(ApiResponse.createSuccess('Successfully added a new Ngo', { ngo }), { status: 201 });
  } catch (error) {
    return NextResponse.json(ApiResponse.createError("Error occur while adding new ngo", 'NGO_ADD_FAILED'), { status: 400 });
  }
}
