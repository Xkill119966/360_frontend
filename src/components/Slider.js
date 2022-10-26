import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import Image from "../assets/images/logo.png";
const SliderData = [
  {
    image: "rest",
    description: "description1",
    text: "text1",
  },
  {
    image: "rest",
    description: "description2",
    text: "text1",
  },
  {
    image: "rest",
    description: "description3",
    text: "text1",
  },
];
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section>
      {SliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <figure className="md:flex  p-8 md:p-0">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src={Image}
                  alt=""
                  width="384"
                  height="512"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4 flex flex-col">
                  <blockquote>
                    <p className="text-lg font-medium">{slide.description}</p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                      {slide.text}
                    </div>
                  </figcaption>
                  <div className="flex justify-end">
                    <ArrowLeft onClick={prevSlide} />
                    <ArrowRight onClick={nextSlide} />
                  </div>
                </div>
              </figure>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
