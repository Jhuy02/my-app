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

    // let smoother = ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,
    // });

    // ScrollTrigger.create({
    //   trigger: "#smbg",
    //   pin: true,
    //   markers: true,
    //   start: "top top",
    //   end: "bottom +=5",
    //   // scrub: true,
    //   // pinSpacing: true,
    // });

    gsap.to("#smbg", {
      scrollTrigger: {
        trigger: "#smbg",
        // markers: true,
        scrub: true,
        start: "top top",
        // end: "bottom top",
      },
      position: "fixed",
      top: 0,
    });
    gsap.to("#t", {
      scrollTrigger: {
        trigger: "#smbg",
        // markers: true,
        scrub: true,
        start: "top top",
        // end: "bottom top",
      },
      display: "block",
    });
    // gsap.to("#centent", {
    //   scrollTrigger: {
    //     trigger: "#smbg",
    //     // markers: true,
    //     scrub: true,
    //     start: "top bottom",
    //     end: "bottom bottom",
    //   },
    //   transform: "translateY(100vh)",
    // });
    // gsap.to("#img1", {
    //   scrollTrigger: {
    //     trigger: "#img1",
    //     // markers: true,
    //     scrub: true,
    //     start: "top 100",
    //     // end: "bottom top",
    //   },
    //   position: "fixed",
    //   // top: 100,
    // });
    // gsap.to("#img2", {
    //   scrollTrigger: {
    //     trigger: "#img1",
    //     // markers: true,
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top bottom",
    //   },
    //   top: 750,
    // });
    // gsap.to("#img3", {
    //   scrollTrigger: {
    //     trigger: "#img1",
    //     // markers: true,
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top bottom",
    //   },
    //   top: 750,
    // });
    // gsap.to("#img2", {
    //   scrollTrigger: {
    //     trigger: "#img2",
    //     // markers: true,
    //     scrub: true,
    //     start: "top 200",
    //     // end: "bottom top",
    //   },
    //   position: "fixed",
    //   top: 100,
    // });
    // gsap.to("#img3", {
    //   scrollTrigger: {
    //     trigger: "#img1",
    //     // markers: true,
    //     scrub: true,
    //     start: "top bottom",
    //     end: "bottom bottom",
    //   },
    //   top: 1000,
    // });
    // gsap.to("#img3", {
    //   scrollTrigger: {
    //     trigger: "#img3",
    //     // markers: true,
    //     scrub: true,
    //     start: "top 100",
    //     // end: "bottom top",
    //   },
    //   position: "fixed",
    //   // top: 10,
    // });
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
          <div className="sticky top-[100px]">
            <Image
              id="img1"
              className="z-[1]"
              width={500}
              height={1000}
              src="/img1.jpeg"
              alt=""
            />
          </div>
          <Image
            id="img2"
            className="z-[2] relative top-[100px]"
            width={500}
            height={1000}
            src="/img2.jpg"
            alt=""
          />
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
      <div className="h-[100vh] bg-white relative top-[100vh] "></div>
    </section>
  );
}
