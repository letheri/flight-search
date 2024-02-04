import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("FlightSearch");

    const movies = await db
      .collection("airlines")
      .find({ code: "LH" })
      .limit(10)
      .toArray();

    // res.json(movies);

    return NextResponse.json(movies);
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};
