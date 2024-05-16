"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import TransitionLink from "./TransitionLink";

export default function HomeSmoother() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);

    gsap.to("#smbg", {
      scrollTrigger: {
        trigger: "#smbg",
        scrub: true,
        start: "top top",
      },
      position: "fixed",
      top: 0,
    });
    gsap.to("#t", {
      scrollTrigger: {
        trigger: "#smbg",
        scrub: true,
        start: "top top",
      },
      display: "block",
    });
    gsap.to("#ghimimg1", {
      scrollTrigger: {
        trigger: "#centent",
        scrub: true,
        start: "top top",
        markers: true,
      },
      position: "fixed",
    });
    gsap.to("#ghimimg1block", {
      scrollTrigger: {
        trigger: "#centent",
        scrub: true,
        start: "top top",
        markers: true,
      },
      display: "block",
    });
  });
  return (
    <section>
      <div className="h-[100vh]">
        <TransitionLink href={"/"}>Home</TransitionLink>
      </div>
      <div id="sm1" className="flex relative flex-col w-full">
        <div
          id="smbg"
          className="h-[100vh] flex justify-end items-start relative bg-orange-600 w-full"
        >
          <Image className="" width={500} height={1000} src="/bg.jpg" alt="" />
        </div>
        <div id="t" className="h-[100vh] hidden"></div>
        <div
          id="centent"
          className="flex relative w-full justify-end z-[999] flex-col h-max overflow-hidden"
        >
          <div id="ghimimg1block" className="h-[1000px] hidden"></div>
          <div id="ghimimg1" className="relative top-[100px]">
            <Image
              id="img1"
              className="z-[1]"
              width={500}
              height={1000}
              src="/img1.jpeg"
              alt=""
            />
          </div>
          <div id="ghimimg2" className="relative top-[100px]">
            <Image
              id="img2"
              className="z-[2] relative top-[100px]"
              width={500}
              height={1000}
              src="/img2.jpg"
              alt=""
            />
          </div>
          <Image
            id="img3"
            className="z-[3] relative"
            width={500}
            height={1000}
            src="/img3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="h-[100vh] bg-white relative top-[100vh] z-[9999]"></div>
    </section>
  );
}
