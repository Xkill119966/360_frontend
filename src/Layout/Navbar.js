import React, { useState } from "react";
import { Camera } from "react-feather";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav class="bg-white fixed px-2 flex justify-between items-center sm:px-4 py-2.5  w-full z-20">
      {/* Logo */}
      <div class="flex items-center">
        <button
          type="button"
          class="items-center p-2 text-sm text-gray-500 rounded-lg 
           block xl:hidden
           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6 16.4H1.6C1.17565 16.4 0.768687 16.5686 0.468629 16.8687C0.168571 17.1687 0 17.5757 0 18C0 18.4244 0.168571 18.8313 0.468629 19.1314C0.768687 19.4315 1.17565 19.6 1.6 19.6H17.6C18.0243 19.6 18.4313 19.4315 18.7314 19.1314C19.0314 18.8313 19.2 18.4244 19.2 18C19.2 17.5757 19.0314 17.1687 18.7314 16.8687C18.4313 16.5686 18.0243 16.4 17.6 16.4ZM1.6 3.60002H30.4C30.8243 3.60002 31.2313 3.43145 31.5314 3.1314C31.8314 2.83134 32 2.42437 32 2.00002C32 1.57568 31.8314 1.16871 31.5314 0.868654C31.2313 0.568596 30.8243 0.400024 30.4 0.400024H1.6C1.17565 0.400024 0.768687 0.568596 0.468629 0.868654C0.168571 1.16871 0 1.57568 0 2.00002C0 2.42437 0.168571 2.83134 0.468629 3.1314C0.768687 3.43145 1.17565 3.60002 1.6 3.60002ZM30.4 8.40002H1.6C1.17565 8.40002 0.768687 8.5686 0.468629 8.86865C0.168571 9.16871 0 9.57568 0 10C0 10.4244 0.168571 10.8313 0.468629 11.1314C0.768687 11.4315 1.17565 11.6 1.6 11.6H30.4C30.8243 11.6 31.2313 11.4315 31.5314 11.1314C31.8314 10.8313 32 10.4244 32 10C32 9.57568 31.8314 9.16871 31.5314 8.86865C31.2313 8.5686 30.8243 8.40002 30.4 8.40002Z"
              fill="black"
            />
          </svg>
        </button>

        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          className="mr-3 h-6 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.73926 16.7425C3.58409 16.1639 3.58407 15.5547 3.73919 14.9761C3.89432 14.3976 4.19911 13.87 4.62295 13.4464L13.4547 4.62025C13.8785 4.19668 14.4064 3.89208 14.9853 3.73705C15.5643 3.58203 16.1738 3.58205 16.7528 3.73711L25.0171 5.95014C25.1031 4.81867 25.4972 3.73227 26.1569 2.80862L16.2032 0.143469C15.4887 -0.0478271 14.7365 -0.0478232 14.022 0.143482C13.3076 0.334787 12.6561 0.710655 12.1331 1.23331L1.23408 12.1255C0.711097 12.6482 0.334996 13.2992 0.143572 14.0132C-0.0478531 14.7272 -0.0478573 15.479 0.143559 16.193L2.91297 26.522C3.8183 25.8311 4.89616 25.4019 6.0289 25.2816L3.73926 16.7425Z"
            fill="#FE9800"
          />
          <path
            d="M32.0988 12.6128L34.465 21.4373C34.6202 22.016 34.62 22.6251 34.465 23.2036C34.3097 23.7823 34.0049 24.3098 33.5811 24.7334L24.7493 33.5598C24.3255 33.9833 23.7977 34.2878 23.2186 34.4429C22.6398 34.5978 22.0301 34.5978 21.4512 34.4429L12.9067 32.1547C12.7864 33.2868 12.357 34.364 11.6656 35.2687L22.0011 38.0363C22.7154 38.2277 23.4677 38.2277 24.1821 38.0363C24.8967 37.845 25.548 37.4693 26.0711 36.9465L36.9701 26.0543C37.4932 25.5316 37.8692 24.8806 38.0606 24.1665C38.2521 23.4526 38.2521 22.7007 38.0606 21.9868L35.1868 11.2711C34.3006 11.994 33.2321 12.4583 32.0988 12.6128Z"
            fill="#FE9800"
          />
          <path
            d="M3.16143 27.9465C2.46146 28.646 1.98477 29.5374 1.79165 30.5075C1.59853 31.4778 1.69764 32.4836 2.07646 33.3976C2.45526 34.3114 3.09677 35.0926 3.91982 35.6423C4.74289 36.1918 5.71054 36.4853 6.70044 36.4853C7.69033 36.4853 8.65799 36.1918 9.48104 35.6423C10.3041 35.0926 10.9456 34.3114 11.3244 33.3976C11.7032 32.4836 11.8023 31.4778 11.6092 30.5075C11.4161 29.5374 10.9394 28.646 10.2395 27.9465C9.30012 27.01 8.02737 26.4839 6.70044 26.4839C5.37352 26.4839 4.10076 27.01 3.16143 27.9465Z"
            fill="#FE9800"
          />
          <path
            d="M27.7052 2.90161C27.0054 3.60112 26.5285 4.49236 26.3356 5.46263C26.1424 6.43288 26.2415 7.43859 26.6203 8.35256C26.9992 9.26652 27.6406 10.0477 28.4635 10.5973C29.2867 11.1469 30.2543 11.4403 31.2441 11.4403C32.2341 11.4403 33.2018 11.1469 34.025 10.5973C34.8479 10.0477 35.4893 9.26652 35.8682 8.35256C36.247 7.43859 36.3461 6.43288 36.1529 5.46263C35.96 4.49236 35.4831 3.60112 34.7833 2.90161C33.844 1.96498 32.5711 1.43896 31.2441 1.43896C29.9174 1.43896 28.6445 1.96498 27.7052 2.90161Z"
            fill="#FE9800"
          />
          <path
            d="M22.0398 32.3486C21.8388 32.3486 21.6388 32.3223 21.4446 32.2703L13.6232 30.1757C13.3624 28.7839 12.6867 27.5033 11.6848 26.5021C10.6829 25.5009 9.40161 24.8255 8.00893 24.565L5.91327 16.7491C5.80938 16.3592 5.80967 15.949 5.91416 15.5593C6.01865 15.1696 6.22366 14.8141 6.50868 14.5284L14.5365 6.50541C14.8221 6.22001 15.1778 6.01478 15.5679 5.91031C15.958 5.80586 16.3687 5.80588 16.7588 5.91037L24.3609 7.9461C24.6625 9.3293 25.375 10.5892 26.4052 11.5609C27.4354 12.5325 28.7353 13.1705 30.1344 13.3914L32.2897 21.432C32.3935 21.822 32.3933 22.2323 32.2887 22.6218C32.1842 23.0116 31.9793 23.367 31.6941 23.6529L23.6663 31.6756C23.4532 31.8896 23.1995 32.0594 22.9204 32.1748C22.6412 32.2904 22.342 32.3494 22.0398 32.3486Z"
            fill="#FE9800"
          />
        </svg>
        <span class="self-center text-xl whitespace-nowrap dark:text-black font-inter font-bold">
          360 Kids
        </span>
      </div>
      <div class="flex items-center gap-14 p-0 ">
        <p className="text-base font-medium text-black hidden xl:block font-gordita">
          About Us
        </p>
        <button
          type="button"
          class="text-white bg-primary focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center md:mr-0 font-workSans"
        >
          Join As Center
        </button>
      </div>
    </nav>
  );
}
