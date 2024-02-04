import { useQuery } from "@tanstack/react-query";
import FlightItem from "./FlightItem";
import { findFlights } from "@/app/utils/http";

function Flights({ origin, destination, time }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["find"],
    queryFn: ({ signal, queryKey }) =>
    findFlights({
        signal,
        origin: origin,
        destination: destination,
        time: time,
      }),
  });

  return (
    <div className="pb-4">
      {data &&
        data.map((flight) => <FlightItem key={flight._id} flight={flight} />)}
      {isLoading && <div>Loading..</div>}
      {isError && <div>There was and error getting the flights.</div>}
    </div>
  );
}

export default Flights;
