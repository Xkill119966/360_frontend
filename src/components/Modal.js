import React from "react";

export default function Modal({ isVisible, children, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute inset-0 blur-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[1024x] h-[597x] flex flex-col">
        <div className="bg-white p-2 rounded-xl">{children}</div>
      </div>
    </div>
  );
}
