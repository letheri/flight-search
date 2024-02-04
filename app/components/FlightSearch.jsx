import { useState } from "react";
import { Tab } from "@headlessui/react";
import FlightType from "./FlightType/FlightType";
import SearchForm from "./Search/SearchForm";
import TripTypeSelector from "./TripType/TripType";
import Flights from "./Flights/Flights";

function FlightSearch() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [flightParams, setFlightParams] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setFlightParams({
      origin: data.from,
      destination: data.to,
      time: data.start,
      endtime: isRoundTrip ? data.end : null,
    });
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="container container-lg -mt-16 bg-white/[.9] rounded shadow-2xl">
      <FlightType />
      <div className="rounded bg-white  p-4">
        <div className="w-44 max-w-sm rounded-md mb-1">
          <TripTypeSelector
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <SearchForm isRoundTrip={isRoundTrip} />
        </form>
      </div>
      {flightParams && (
        <Tab.Group>
          <Tab.List className="flex space-x-1 gap-4 justify-center rounded-xl bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "rounded-lg py-2.5 text-sm font-medium px-2 leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Departing Flights
            </Tab>
            {isRoundTrip && (
              <Tab
                className={({ selected }) =>
                  classNames(
                    "rounded-lg py-2.5 text-sm font-medium px-2 leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Returning Flights
              </Tab>
            )}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Flights
                origin={flightParams.origin}
                destination={flightParams.destination}
                time={flightParams.time}
              />
            </Tab.Panel>
            {isRoundTrip && (
              <Tab.Panel>
                <Flights
                  origin={flightParams.destination}
                  destination={flightParams.origin}
                  time={flightParams.endtime}
                />
              </Tab.Panel>
            )}
          </Tab.Panels>
        </Tab.Group>
      )}
    </div>
  );
}

export default FlightSearch;
