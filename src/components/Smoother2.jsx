"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

export default function Smoother2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // let smoother = ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,
    // });

    // console.log(
    //   -document.querySelector(".img-wrapper-unq1").clientWidth - 1000
    // );

    gsap.set("#slider", { x: 1000 });

    gsap.to("#slider", {
      scrollTrigger: {
        trigger: "#box",
        // markers: true,
        scrub: true,
        start: "top top",
        // end: "bottom top",
      },
      x: -document.querySelector(".img-wrapper-unq1").clientWidth - 1000,
    });

    gsap.to("#box", {
      scrollTrigger: {
        trigger: "#box",
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
      position: "fixed",
      top: 0,
    });
    gsap.to("#a", {
      scrollTrigger: {
        trigger: "#box",
        // markers: true,
        scrub: true,
        start: "top top",
        // end: "bottom top",
      },
      display: "block",
    });
  });

  return (
    <section className="">
      <div className="h-[100vh]"></div>
      <div id="a" className="h-[200vh] hidden"></div>
      <div
        id="box"
        className="relative bg-amber-400 w-full h-[100vh] overflow-hidden"
      >
        <div
          id="slider"
          className="img-wrapper-unq1 flex absolute gap-[5rem] mt-[10rem]"
        >
          <Image
            className=""
            width={500}
            height={1000}
            src="/img1.jpeg"
            alt=""
          />
          <Image
            className=""
            width={500}
            height={1000}
            src="/img2.jpg"
            alt=""
          />
          <Image
            className=""
            width={500}
            height={1000}
            src="/img3.jpg"
            alt=""
          />
          <Image
            className=""
            width={500}
            height={1000}
            src="/img1.jpeg"
            alt=""
          />
          <Image
            className=""
            width={500}
            height={1000}
            src="/img2.jpg"
            alt=""
          />
          <Image
            className=""
            width={500}
            height={1000}
            src="/img3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="h-[100vh] bg-white relative z-[9999]"></div>
    </section>
  );
}
