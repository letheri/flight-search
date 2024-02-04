import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { DownIcon } from "../icons/DownIcon";
import { RoundTripIcon } from "../icons/RoundTripIcon";
import { OneWayIcon } from "../icons/OneWayTrip";



export default function TripTypeSelector({isRoundTrip, setIsRoundTrip}) {
  const value = isRoundTrip ? "round-trip" : "one-way";

  return (
    <Listbox
      value={value}
      onChange={(value) => setIsRoundTrip(value === "round-trip")}
    >
      {({ open }) => (
        <>
          <Listbox.Button
            className={
              "relative cursor-default w-full py-1.5 pl-3 pr-10 text-left text-gray-900 sm:text-sm sm:leading-6 " +
              (open ? "bg-indigo-600/[.06]" : "bg-transparent")
            }
          >
            <span className="flex items-center">
              {isRoundTrip ? <RoundTripIcon /> : <OneWayIcon />}
              <span className="ml-3 block truncate">
                {isRoundTrip ? "Round-Trip" : "One-Way"}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <DownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-64 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <Listbox.Option
              className={
                "relative cursor-default select-none py-2 pl-3 pr-9 " +
                (isRoundTrip ? "bg-indigo-600 text-white" : "text-gray-900")
              }
              value="round-trip"
              static
            >
              <div className="flex items-center">
                <RoundTripIcon />
                <span
                  className={
                    "ml-3 block truncate " +
                    (isRoundTrip ? "font-semibold" : "font-normal")
                  }
                >
                  Round-Trip
                </span>
              </div>
            </Listbox.Option>
            <Listbox.Option
              className={
                "relative cursor-default select-none py-2 pl-3 pr-9 " +
                (!isRoundTrip ? "bg-indigo-600 text-white" : "text-gray-900")
              }
              value="one-way"
              static
            >
              <div className="flex items-center">
                <OneWayIcon />
                <span
                  className={
                    "ml-3 block truncate " +
                    (!isRoundTrip ? "font-semibold" : "font-normal")
                  }
                >
                  One-way
                </span>
              </div>
            </Listbox.Option>
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
}
