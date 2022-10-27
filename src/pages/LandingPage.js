import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="xl:ml-64 xl:mr-52 lg:ml-24 lg:mr-20 md:ml-16 md:mr-12 sm:ml-4 sm:mr-2 pt-24 pb-16">
        <h3 className="my-4 font-bold text-gray-900 xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl font-gordita-bold">
          Find perfect enrichment centers for your kid
        </h3>
        <p className="text-gray my-4 font-gordita">
          Search nearby centers by postal code
        </p>
        <form className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
          <div className="my-3">
            <input
              className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-gordita"
              id="PostalCode"
              type="text"
              placeholder="Postal code"
            />
          </div>
          <Link to={"/enquiry"}>
            <div className="my-3 xl:mx-2">
              <button
                className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline xl:w-1/2 lg:w-full md:w-full sm:w-full font-gordita"
                type="button"
              >
                Search
              </button>
            </div>
          </Link>
        </form>
        <div className="grid grid-cols-6">
          <div className="my-4 col-span-1">
            <h3 className="my-4 font-bold text-gray-900 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-gordita-bold">
              OR
            </h3>
          </div>

          <div className="mt-10 text-left col-span-3">
            <Link to={"/form"} className="flex items-center">
              <span className="font-bold text-lg text-blue-800 hover:text-blue-800 font-gordita">
                Join As A Center
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-800 hover:text-blue-800 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
