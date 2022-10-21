import Navbar from "./navbar";

export default function FormPage() {
  return (
    <>
      <div className="xl:mx-64 lg:mx-24 md:mx-16 sm:mx-4">
        <form className=" px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerName"
              type="text"
              placeholder="Center Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow-none appearance-none border w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerAdd"
              type="text"
              placeholder="Center Address"
            />
            <input
              className="shadow-none appearance-none border w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerCode"
              type="text"
              placeholder="Center Postal Code"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerPhone"
              type="tel"
              placeholder="Center Phone Number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerEmail"
              type="email"
              placeholder="Center Email"
            />
          </div>
          <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-left">
            Age rates
          </h3>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                6 months - 12 months
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                12 months - 24 months
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                2 years - 12 years
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                4 years - 6 years
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                About 7 years
              </label>
            </div>
          </div>
          <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-left">
            Center Categories
          </h3>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Art & Craft
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phonics & English
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Taekwondo
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Soft Skills
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                3G Abacus & Creative Maths
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Chinese
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Swimming
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Music & Dance
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Speech & Drama
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Coding & Programming
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                STEM
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Multi-Sports
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ballet
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Musical Instruments
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Cycling
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Language
              </label>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Soccer
              </label>
            </div>

            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full text-left">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                className="py-3 ml-2 w-1/2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Gymnastics
              </label>
            </div>
          </div>
          <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-left">
          Please fill in your personal information
          </h3>
          <div className="mb-4">
          <input
              className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerCode"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerPhone"
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="centerEmail"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
       Submit
      </button>
      </div>
          <div class="mb-4">
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      How it works
      </a>
    </div>
        </form>
      </div>
    </>
  );
}
