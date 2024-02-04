import React from "react";
import { OneWayIcon } from "../icons/OneWayTrip";
import dayjs from "dayjs";

function FlightItem({ flight }) {
  console.log(flight);
  return (
    <div className="flex content-between justify-between px-16 py-4 m-4 border rounded bg-gray-100">
      <span>{dayjs(flight.Start_time).format("HH:MM A")}</span>
      <div className="flex gap-1 align-center items-center">
        <span>{flight.Origin}</span>
        <OneWayIcon />
        <span>{flight.Destination}</span>
      </div>
      <div className="flex flex-row items-center">
        <span className="font-extralight text-xs">Flight: &nbsp;</span>
        <span>{flight.Flight_number}</span>
      </div>
      <span>{flight.Plane}</span>
    </div>
  );
}

export default FlightItem;
