import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchAirports({ signal, name }) {
  let url = "/api/airports";

  if (name) {
    url += `?name=${name}`;
  }

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}

export async function findFlights({ signal, origin, destination, time }) {
  const url = `/api/flights?origin=${origin}&destination=${destination}&time=${time}`;
  console.log(url);
  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const flights = await response.json();

  return flights;
}
