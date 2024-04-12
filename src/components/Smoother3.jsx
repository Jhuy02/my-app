"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

export default function Smoother3() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      smooth: 2,
      speed: 2,
      effects: true,
      // normalizeScroll: true,
      smoothTouch: 0.1,
    });
    let skewSetter = gsap.quickTo("img", "skewY"),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 2,
      speed: 3,
      effects: true,
      onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
      onStop: () => skewSetter(0),
    });
  });

  return (
    <section>
      <h1 className="text fixed top-[50vh] font-black text-[8rem] text-center w-full translate-y-[-100%] z-[2] text-white">
        Scrolly Images
      </h1>
      <h1 aria-hidden="true" className="text outline-text text-transparent ">
        Scrolly Images
      </h1>
      <h1 aria-hidden="true" className="text filter-text ">
        Scrolly Images
      </h1>
      <div id="wrapper" className="!static overflow-hidden size-full inset-0">
        <section id="content" className="overflow-visible w-full">
          <section className="imagessm3 pt-[60vh] relative w-full max-w-[1200px] my-0 mx-auto justify-center items-center z-[1] object-cover">
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="0.8"
              alt=""
              src={"/img2.jpg"}
            />
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="0.9"
              alt=""
              src={"/img2.jpg"}
            />
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="1"
              alt=""
              src={"/img2.jpg"}
            />
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="1.1"
              alt=""
              src={"/img2.jpg"}
            />
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="0.9"
              alt=""
              src={"/img2.jpg"}
            />
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="1.2"
              alt=""
              src={"/img2.jpg"}
            />
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="0.8"
              alt=""
              src={"/img2.jpg"}
            />
            <Image
              width={500}
              height={500}
              className="size-auto"
              data-speed="1"
              alt=""
              src={"/img2.jpg"}
            />
          </section>
        </section>
      </div>
      <div className="h-[2000px]"></div>
    </section>
  );
}
