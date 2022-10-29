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
        "absolute inset-0 blur-0 flex justify-center items-center xl:top-10 lg:top-96"
      }
    >
      <div className="xl:w-[1024x] xl:h-[597x] lg:w-[800x] lg:h-[451x] flex flex-col">
        <div className="bg-white p-2 rounded-xl">{children}</div>
      </div>
    </div>
  );
}
