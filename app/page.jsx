"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import FlightSearch from "./components/FlightSearch";
import { queryClient } from "./utils/http";

export default function HomePage() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex gap-3 p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center lg:flex-1 gap-2">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <span className="text-bold">Erencan Taşbaş</span>
          </div>
          <a
            href="https://www.linkedin.com/in/erencantasbas/"
            className="-m-1.5 p-1.5"
          >
            <img className="h-8 w-auto" src="/linkedin.svg" alt="" />
          </a>
          <a
            href="https://github.com/letheri/flight-search"
            className="-m-1.5 p-1.5"
          >
            <img className="h-8 w-auto" src="/github.svg" alt="" />
          </a>
        </nav>
      </header>

      <div className="relative isolate px-3 pt-10 lg:px-4">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
          <div className="text-center">
            <img
              src="/hero.png"
              className="relative -z-10 -mt-8 px-4 mx-auto lg:-mt-14 rounded object-cover"
            />
            <QueryClientProvider client={queryClient}>
              <FlightSearch />
            </QueryClientProvider>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
