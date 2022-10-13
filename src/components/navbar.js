import React, { useState } from "react";
import { Camera } from "react-feather";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav class="p-5 bg-white h-82 shadow flex items-center justify-between">
      <div class="flex justify-between items-center ">
        <span>
          <Camera />
        </span>
        <span class="">
          {/* <img class="h-10 inline"
          src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" /> */}
          360 Kids
        </span>

        {/* <span class="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span> */}
      </div>

      <ul class="md:flex md:items-center">
        <li class="my-6 md:my-0">
          <a href="#" class="">
            About Us
          </a>
        </li>
        <button class="bg-cyan-400 text-white rounded">Join As Center</button>
        <h2 class=""></h2>
      </ul>
    </nav>
  );
}
