export default function SearchPage() {
  return (
    <>
      <div className="xl:ml-64 xl:mr-52 lg:ml-24 lg:mr-20 md:ml-16 md:mr-12 sm:ml-4 sm:mr-2 pt-24">
        <h3 className="my-4 font-bold text-gray-900 dark:text-white xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl ">
          Find perfect enrichment centers for your kid
        </h3>
        <p className="text-gray my-4">Search nearby centers by postal code</p>
        <form className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
          <div className="my-3">
            <input
              className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="PostalCode"
              type="text"
              placeholder="Postal code"
            />
          </div>
          <div className="my-3 xl:mx-2">
            <button
              className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline xl:w-1/2 lg:w-full md:w-full sm:w-full"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="grid grid-cols-6">
          <div className="my-4">
            <h3 className="my-4 font-bold text-gray-900 dark:text-white xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl ">
              OR
            </h3>
          </div>
          <div className="flex mt-10 text-left">
            <a
              className="font-bold text-lg text-blue-800 hover:text-blue-800"
              href="#"
            >
              Join As A Center
            </a>
            <svg
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 ml-1.5"
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
              className="mt-2.5"
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
    </>
  );
}
