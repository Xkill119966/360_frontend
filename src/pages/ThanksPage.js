import React from "react";
import { Link } from "react-router-dom";

export default function ThanksPage() {
  return (
    <>
      <div className="xl:ml-64 xl:mr-52 lg:ml-24 lg:mr-20 md:ml-16 md:mr-12 sm:ml-4 sm:mr-2 pt-24 text-center">
        <h3 className="my-4 font-bold text-gray-900 dark:text-white xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl pb-8 ">
        Thank you for joining us!
        </h3>
        <p className="text-gray my-6 text-center pb-8">We will keep you updated with our launch information</p>
        <div className="my-5 items-center">
            <button
              className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
              type="button"
            >
              Back To Home Page
            </button>
          </div>
      </div>
    </>
  );
}
