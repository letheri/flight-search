import { OneWayIcon } from "../icons/OneWayTrip";
import { RoundTripIcon } from "../icons/RoundTripIcon";

import DatePicker from "./DatePicker";

import AirportSearch from "./Airport";
import dayjs from "dayjs";
import { useState } from "react";

const TODAY = dayjs().format("YYYY-MM-DD");
const TOMORROW = dayjs().add(1, "day").format("YYYY-MM-DD");

function SearchForm({ isRoundTrip }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState(TODAY);
  const [endDate, setEndDate] = useState(TOMORROW);

  function handleDateChange(type, event) {
    const date = event.target.value;
    console.log(date);
    if (type === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  }

  function handleCalendarOpen(){
    setIsCalendarOpen(!isCalendarOpen);
  }

  return (
    <>
      <div className="gap-1 flex flex-wrap items-center justify-center">
        <AirportSearch label="Where from?" name="from" />
        {isRoundTrip ? <RoundTripIcon /> : <OneWayIcon />}
        <AirportSearch label="Where to?" name="to" />
        <div className="hidden sm:block sm:border-l sm:border-slate-900/15 sm:pl-4 sm:ml-4">
          <DatePicker
            isRoundTrip={isRoundTrip}
            startDate={startDate}
            endDate={endDate}
            onOpenCalendar={handleCalendarOpen}
          />
        </div>
      </div>
      <div className="sm:hidden my-4 ">
        <DatePicker isRoundTrip={isRoundTrip} />
      </div>
      <div
        className="columns-2 divide-x divide-solid gap-0 mt-2"
        style={{
          visibility: isCalendarOpen ? "visible" : "hidden",
          height: isCalendarOpen ? "unset" : 0,
        }}
      >
        <div>
          <p className="font-semibold bg-stone-100 py-2">Departure</p>
          <input
            onChange={(event) => handleDateChange("start", event)}
            type="date"
            min="2024-02-01"
            max="2024-03-01"
            value={startDate}
            name="start"
          />
        </div>
        {isRoundTrip && (
          <div>
            <p className="font-semibold bg-stone-100 py-2">Return</p>
            <input
              onChange={(event) => handleDateChange("end", event)}
              type="date"
              min="2024-02-01"
              max="2024-03-01"
              value={endDate}
              name="end"
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="rounded bg-sky-300/[.6] text-sky-900  px-4 py-2 mt-8"
      >
        Search
      </button>
    </>
  );
}

export default SearchForm;
