import React, { useState } from "react";
import Modal from "../components/Modal";
import ImageSlider from "../components/Slider";
import { SliderData } from "../constants";
export default function FormPage() {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({
    centerName: "",
    centerAddress: "",
    centerPhone: "",
    centerEmail: "",
    postalCode: "",
    name: "",
    email: "",
    phoneNumber: "",

    // checkbox

    // Age Rates
    sixMonthAndTwelveMonth: false,
    TwelveMonthAndTwentyFourMonth: false,
    twoYearAndTwelveYear: false,
    fourYearAndSixYear: false,
    sevenYear: false,

    artAndCraft: false,
    taekwondon: false,
    threeGAbacusAndCreativeMaths: false,
    swimming: false,
    speechAndDrama: false,
    stem: false,
    ballet: false,
    cycling: false,
    soccer: false,
    phonicsAndEnglish: false,
    softSkills: false,
    chinese: false,
    musicAndDance: false,
    codingAndProgramming: false,
    multiSports: false,
    musicalInstruments: false,
    language: false,
    gymnastics: false,
  });

  const handleInputChange = (e) => {};

  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ImageSlider slides={SliderData} />
      </Modal>
      <div className="px-8 pt-6 pb-8 mb-4 gap-10">
        <div className="xl:ml-64 xl:mr-52 lg:ml-24 lg:mr-20 md:ml-16 md:mr-12 sm:ml-4 sm:mr-2 pt-16">
          <p className="text-dark">We are launching soon !</p>
          <h1 className="my-4 font-bold text-gray-900 dark:text-white xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl">
            Sign up before launch to get $100 worth of credit !
          </h1>
          <div className="my-4 flex">
            <p className="text-gray my-4">Join with us to get more leads !</p>
            <div className="flex mt-4 mx-2 text-left">
              <a
                className="font-bold text-md text-blue-800 hover:text-blue-800 "
                href="#"
                onClick={() => setShowModal(true)}
              >
                How It Works
              </a>
              <svg
                width="18"
                height="2"
                viewBox="0 0 18 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-3.5 ml-1.5"
              >
                <path
                  d="M1 1H17"
                  stroke="#3E0ABD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="#3E0ABD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="xl:mx-64 lg:mx-24 md:mx-16 sm:mx-4 xl:pb-40 lg:pb-40 md:pb-40 sm:pb-96 grid gap-y-2">
          <form>
            <div className="my-4">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerName"
                type="text"
                placeholder="Center Name"
                value={input.centerName}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4 grid gap-x-1 grid-cols-2">
              <input
                className="shadow-none appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerAdd"
                type="text"
                placeholder="Center Address"
                value={input.centerAddress}
                onChange={handleInputChange}
              />
              <input
                className="shadow-none appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerCode"
                type="text"
                placeholder="Center Postal Code"
                value={input.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <input
                className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerPhone"
                type="tel"
                placeholder="Center Phone Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={input.centerPhone}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <input
                className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerEmail"
                type="email"
                placeholder="Center Email"
                value={input.centerAddress}
                onChange={handleInputChange}
              />
            </div>
            <h5 className="my-4 font-bold text-gray-900 dark:text-white text-left">
              Age rates
            </h5>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.sixMonthAndTwelveMonth}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  6 months - 12 months
                </label>
              </div>

              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.TwelveMonthAndTwentyFourMonth}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  12 months - 24 months
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.twoYearAndTwelveYear}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  2 years - 12 years
                </label>
              </div>

              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.fourYearAndSixYear}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  4 years - 6 years
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className="my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.sevenYear}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  About 7 years
                </label>
              </div>
            </div>
            <h5 className="my-4 font-bold text-gray-900 dark:text-white text-left">
              Center Categories
            </h5>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.artAndCraft}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Art & Craft
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.phonicsAndEnglish}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phonics & English
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.taekwondon}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Taekwondo
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.softSkills}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Soft Skills
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.threeGAbacusAndCreativeMaths}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  3G Abacus & Creative Maths
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.chinese}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Chinese
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.swimming}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Swimming
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.musicAndDance}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Music & Dance
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.speechAndDrama}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Speech & Drama
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.codingAndProgramming}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Coding & Programming
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.stem}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  STEM
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.multiSports}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Multi-Sports
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.ballet}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Ballet
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.musicalInstruments}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Musical Instruments
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.cycling}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Cycling
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.language}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Language
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 ">
              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.soccer}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Soccer
                </label>
              </div>

              <div className=" my-4 text-left">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  checked={input.gymnastics}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary accent-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-primary focus:ring-2 dark:bg-primary dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Gymnastics
                </label>
              </div>
            </div>
            <h5 className="my-4 font-bold text-gray-900 dark:text-white text-left">
              Please fill in your personal information
            </h5>
            <div className="my-4">
              <input
                className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerCode"
                type="text"
                placeholder="Name"
                value={input.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <input
                className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerPhone"
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="my-4">
              <input
                className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="centerEmail"
                type="email"
                placeholder="Email"
                value={input.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <button
                className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Submit
              </button>
            </div>
            <div className="my-4 text-center">
              <a
                className="font-bold text-lg text-blue-800 hover:text-blue-800"
                href="#"
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
