import clientPromise from "@/lib/mongodb";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const time = searchParams.get("time");
    const day = +dayjs(time);
    const nextDay = +dayjs(time).add(1, "day");
    console.log({
      Origin: origin,
      Destination: destination,
      Start_time: { $gt: day, $lt: nextDay },
    });

    const client = await clientPromise;
    const db = client.db("FlightSearch");

    const flights = await db
      .collection("flights")
      .find({
        Origin: origin,
        Destination: destination,
        Start_time: { $gt: +day, $lt: nextDay },
      })
      .sort({ Start_time: 1 })
      .limit(10)
      .toArray();

    console.log(flights);
    // res.json(movies);
    return NextResponse.json(flights);
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};
