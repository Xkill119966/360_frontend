import React from "react";
import Image from "../assets/images/EmptyStates.png"

export default function EnquiryPage() {
  return (
    <>
      <div className="pt-20">
        <img class="object-contain w-full h-auto bg-fixed" src={Image}/>
      
      <div class="fixed top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center pt-12">
        <h3 className="font-bold text-gray-900 xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl font-gordita-bold">
          Thanks for<br></br> your enquiry.
        </h3>
      </div>
      </div>
    </>
  );
}
