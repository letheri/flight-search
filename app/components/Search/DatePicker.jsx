import { Popover } from "@headlessui/react";
import { CalendarIcon, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useState } from "react";

export default function DatePicker({
  isRoundTrip,
  startDate,
  endDate,
  onOpenCalendar,
}) {
  return (
    <>
      <div className="relative" onClick={() => onOpenCalendar()}>
        <div className="shadow-inner py-1 text-gray-600 w-56 items-center justify-center text-sm flex gap-2 divide-x divide-solid">
          <div className="flex items-center">
            <CalendarIcon />
            {dayjs(startDate).format("ddd, MMM D")}
          </div>

          {isRoundTrip && (
            <div className="pl-2">{dayjs(endDate).format("ddd, MMM D")}</div>
          )}
        </div>
      </div>
    </>
  );
}
