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
        <span class= "App-logo">
          {/* <img class="h-10 inline"
          src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" /> */}
          360 Kids
        </span>

        {/* <span class="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span> */}
      </div>

<div class="flex flex-row space-x-4 space-x-reverse">
<div>
<button class="About-text flex-auto">About Us</button>
</div>
<div>
<button class="Btn Btn-text">Join As Center</button>
</div>
</div>
     
    </nav>
  );
}
