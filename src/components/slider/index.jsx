"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

export default function Sliderr() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    const slides = swiperInstance.slides;
    const sliderContents = document.querySelectorAll(".slider_content");
    let startX, startY;

    swiperInstance.on("slideChange", () => {
      console.log("Slide changed to: " + swiperInstance.activeIndex);
    });
    swiperInstance.on("touchStart", (event) => {
      startX = event.touches.currentX;
      sliderContents.forEach((content, index) => {
        content.style.transitionDuration = "0ms";
      });
    });

    swiperInstance.on("touchMove", (event) => {
      const currentX = event.touches.currentX;

      const diffX = (currentX / startX) * 100;
      console.log(diffX);
      sliderContents.forEach((content, index) => {
        const dataAttribute = content.getAttribute("data-example");
        content.style.transform = `translate3d(-${
          dataAttribute - (diffX / 100) * dataAttribute
        }%,0,0)`;
      });
    });

    swiperInstance.on("touchEnd", () => {
      sliderContents.forEach((content, index) => {
        content.style.transitionDuration = "900ms";
        content.style.transform = "translate3d(0,0,0)";
        setTimeout(() => {
          content.style.transitionDuration = "0ms";
        }, 900);
      });
    });
  }, []);
  return (
    <div className="w-full h-[70vh]">
      <Swiper
        ref={swiperRef}
        // loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[80rem] h-full"
      >
        <SwiperSlide>
          <Image
            className="w-full h-full object-cover"
            alt=""
            src={"/slider1.jpg"}
            width={1230}
            height={760}
          />
          <div className="transi z-20 absolute top-0 left-0 size-full pointer-events-none">
            <div
              data-example="10"
              className="slider_content absolute top-0 left-0 h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-0 pointer-events-none"
                alt=""
                src={"/slider1.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="-40"
              className="slider_content absolute top-0 left-[20%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 -left-full pointer-events-none"
                alt=""
                src={"/slider1.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="30"
              className="slider_content absolute top-0 left-[40%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-[-200%] pointer-events-none"
                alt=""
                src={"/slider1.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="-80"
              className="slider_content absolute top-0 left-[60%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-[-300%] pointer-events-none"
                alt=""
                src={"/slider1.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="50"
              className="slider_content absolute top-0 left-[80%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-[-400%] pointer-events-none"
                alt=""
                src={"/slider1.jpg"}
                width={1230}
                height={760}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full object-cover"
            alt=""
            src={"/slider2.jpg"}
            width={1230}
            height={760}
          />
          <div className="z-20 absolute top-0 left-0 size-full pointer-events-none">
            <div
              data-example="10"
              className="slider_content absolute top-0 left-0 h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-0 pointer-events-none"
                alt=""
                src={"/slider2.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="-40"
              className="slider_content absolute top-0 left-[20%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 -left-full pointer-events-none"
                alt=""
                src={"/slider2.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="30"
              className="slider_content absolute top-0 left-[40%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-[-200%] pointer-events-none"
                alt=""
                src={"/slider2.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="-80"
              className="slider_content absolute top-0 left-[60%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-[-300%] pointer-events-none"
                alt=""
                src={"/slider2.jpg"}
                width={1230}
                height={760}
              />
            </div>
            <div
              data-example="50"
              className="slider_content absolute top-0 left-[80%] h-full w-[20%] pointer-events-none overflow-hidden"
            >
              <Image
                data-example="10"
                className="slider_content w-[80rem] h-full max-w-[80rem] object-center object-cover absolute top-0 left-[-400%] pointer-events-none"
                alt=""
                src={"/slider2.jpg"}
                width={1230}
                height={760}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full object-cover"
            alt=""
            src={"/slider3.jpg"}
            width={1230}
            height={760}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
