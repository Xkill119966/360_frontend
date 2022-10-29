import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const ImageSlider = ({ slides, onClose }) => {
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
      <div className="mx-12 mt-8 mb-2">
        <div className="flex justify-end" onClick={onClose}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17L1 1M17 1L1 17"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h1 className="font-gordita-bold text-5xl my-4">How it works</h1>
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <figure className="md:flex p-8 md:p-0">
                  <div className=" xl:w-[528x] xl:h-[426x] lg:w-[342x] lg:h-[280x]">
                  <img
                    className="mx-auto"
                    src={slide.image}
                    alt=""
                    width="528"
                    height="426"
                  />
                  </div>
                  <div className="pt-6 md:p-8 text-left space-y-4 flex flex-col">
                    <div className="xl:h-[354px] lg:h-[280px]">
                      <div className="xl:w-[299px] xl:h-[184px] lg:w-[289px] lg:h-[80px]">
                        <blockquote>
                          <p className="text-4xl font-medium font-gordita-bold">
                            {slide.description}
                          </p>
                        </blockquote>
                        <figcaption className="font-medium font-gordita pt-8">
                          <div className="text-darkgray">{slide.text}</div>
                        </figcaption>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <ArrowLeft onClick={prevSlide} />
                      <ArrowRight onClick={prevSlide} />
                    </div>
                  </div>
                </figure>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSlider;
