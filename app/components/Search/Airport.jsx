import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { fetchAirports } from "@/app/utils/http";

const AirportSearch = ({ label, name: inputName }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", inputValue],
    queryFn: ({ signal, queryKey }) =>
      fetchAirports({ signal, name: queryKey[1] }),
    enabled: inputValue.length > 1,
  });

  const handleInputChange = (value) => {
    setInputValue(value);
    queryClient.cancelQueries("search");
  };

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  const clearInput = () => {
    if (!inputValue) {
      setSelectedValue("");
    }
    setInputValue("");
  };

  let content;

  if (isLoading) {
    content = (
      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
        Loading..
      </div>
    );
  }

  if (isError) {
    content = (
      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
        Error getting the airport list..
      </div>
    );
  }

  if (data && data.length === 0) {
    content = (
      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
        Please search for another airport. We only fly to European airports.
      </div>
    );
  } else if (data) {
    content = (
      <>
        {data.map((airport) => (
          <Combobox.Option
            key={airport._id}
            value={airport.iata}
            className={({ active }) =>
              `relative cursor-default select-none text-left py-2 px-4 ${
                active ? "bg-sky-600 text-white" : "text-gray-900"
              }`
            }
          >
            {airport.name} - <b>{airport.iata}</b>
          </Combobox.Option>
        ))}
      </>
    );
  }

  return (
    <div className="w-36 sm:w-44">
      <Combobox
        value={selectedValue}
        onChange={(selectedItem) => {
          handleSelection(selectedItem);
        }}
        name={inputName}
        >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              placeholder={label || "Search..."}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full border-none shadow-inner shadow-gray-200/70 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              required
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => clearInput()}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-72 z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {content}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default AirportSearch;
