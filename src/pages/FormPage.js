import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import ImageSlider from "../components/Slider";
import Footer from "../Layout/Footer";

export default function FormPage() {
  const SliderData = [
    {
      image: "rest",
      description: "description1",
      text: "text1",
    },
    {
      image: "rest",
      description: "description2",
      text: "text1",
    },
    {
      image: "rest",
      description: "description3",
      text: "text1",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ImageSlider slides={SliderData} />
      </Modal>
      <div className="px-8 pt-6">
        <div className="xl:ml-64 xl:mr-52 lg:ml-24 lg:mr-20 md:ml-16 md:mr-12 sm:ml-4 sm:mr-2 pt-16">
          <p className="text-dark font-gordita">We are launching soon !</p>
          <h1 className="my-4 font-bold text-gray-900 xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl font-gordita-bold">
            Sign up before launch to get $100 worth of credit !
          </h1>
          <div className="my-4 flex">
            <p className="text-gray my-4 font-gordita">
              Join with us to get more leads !
            </p>
            <div className="flex mt-4 mx-2 text-left">
              <a
                className="font-bold text-md text-blue-800 hover:text-blue-800 font-gordita"
                href="#"
                onClick={() => setShowModal(true)}
              >
                How It Works
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-800 hover:text-blue-800 mt-0.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="xl:mx-64 lg:mx-24 md:mx-16 sm:mx-4 grid gap-y-2">
          <form>
            <div className="my-4">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerName"
                type="text"
                placeholder="Center Name"
              />
            </div>
            <div className="my-4 grid gap-x-1 grid-cols-2">
              <input
                className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerAdd"
                type="text"
                placeholder="Center Address"
              />
              <input
                className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerCode"
                type="text"
                placeholder="Center Postal Code"
              />
            </div>
            <div className="my-4">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerPhone"
                type="tel"
                placeholder="Center Phone Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="my-4">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerEmail"
                type="email"
                placeholder="Center Email"
              />
            </div>
            <h5 className="my-4 mt-8 font-bold text-gray-900 text-left font-gordita-bold">
              Age rates
            </h5>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  6 months - 12 months
                </label>
              </div>

              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  12 months - 24 months
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  2 years - 12 years
                </label>
              </div>

              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  4 years - 6 years
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  About 7 years
                </label>
              </div>
            </div>
            <h5 className="my-4 mt-8 font-bold text-gray-900 text-left font-gordita-bold">
              Center Categories
            </h5>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Art & Craft
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Phonics & English
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Taekwondo
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Soft Skills
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  3G Abacus & Creative Maths
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Chinese
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Swimming
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Music & Dance
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Speech & Drama
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Coding & Programming
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  STEM
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Multi-Sports
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Ballet
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Musical Instruments
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Cycling
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Language
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 font-gordita-bold">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Soccer
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900"
                >
                  Gymnastics
                </label>
              </div>
            </div>
            <h5 className="my-2 mt-8 font-bold text-gray-900 text-left font-gordita-bold">
              Please fill in your personal information
            </h5>
            <p className="text-darkgray my-2 mb-4 font-gordita">
              This information will not be shared publicly !
            </p>
            <div className="my-4">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerCode"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="my-4">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerPhone"
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="my-4">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-workSans"
                id="centerEmail"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="my-4 mt-8">
              <button
                className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full font-workSans"
                type="button"
              >
                Submit
              </button>
            </div>
            <div className="my-4 mb-8 text-center">
              <a
                className="font-bold text-lg text-blue-800 hover:text-blue-800 font-gordita"
                href="#"
                onClick={() => setShowModal(true)}
              >
                How it works
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
