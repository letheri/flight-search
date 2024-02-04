"use client";
import TripTypeSelector from "../components/TripType/TripType";
import SearchForm from "../components/Search/SearchForm";
import FlightType from "../components/FlightType/FlightType";

function Search() {
  return (
    <div className="container container-lg px-16">
      <FlightType />
      <div className="rounded bg-stone-200  p-4">
        <div className="w-64 max-w-sm rounded-md mb-1">
          <TripTypeSelector />
        </div>
        <SearchForm />
      </div>
    </div>
  );
}

export default Search;
