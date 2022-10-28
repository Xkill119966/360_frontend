import React from "react";

export default function Modal({ isVisible, children, onClose }) {
  React.useEffect(() => {
    let formPage = document.getElementById("formPage");
    let mainFooter = document.getElementById("mainFooter");

    if (isVisible) {
      formPage.style.display = "none";
      mainFooter.style.display = "none";
    } else {
      formPage.style.display = "block";
      mainFooter.style.display = "block";
    }

    return () => {};
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }
  return (
    <div
      className={
        "absolute inset-0 blur-0 flex justify-center items-center top-10"
      }
    >
      <div className="w-[1024x] h-[597x] flex flex-col">
        <div className="bg-white p-2 rounded-xl">{children}</div>
      </div>
    </div>
  );
}
