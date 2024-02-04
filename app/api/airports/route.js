export const dynamic = 'force-dynamic'
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const {searchParams} = new URL(req.url);
    const searchName = searchParams.get("name");
    const regex = { $regex: `.*${searchName}.*`, $options: "i" };
    const search = searchName
      ? { $or: [{ name: regex }, { name_en: regex }] }
      : {};

    const client = await clientPromise;
    const db = client.db("FlightSearch");

    const movies = await db
      .collection("airports")
      .find(search)
      .sort({})
      .limit(10)
      .toArray();

    // res.json(movies);
    return NextResponse.json(movies);
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};
