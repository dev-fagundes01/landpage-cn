/* eslint-disable no-unused-vars */
import Vector from "../assets/general/vector.svg";
import { Button } from "./ui/button";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function UnlockPixelgrade() {
  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-pixelgrade",
          scrub: true,
          start: "top 880rem",
          end: "top 0rem"
        }
      })
      .fromTo("#img-pixelgrade", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#h2-pixelgrade", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#p-pixelgrade", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#btn-pixelgrade", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
    }, el)

    return () => {
      gsap.killTweensOf(".content-pixelgrade")
    };
  }, []);
  
  return (
    <section className="flex flex-col-reverse items-center justify-center md:flex-row" ref={el}>
      <img className="content-pixelgrade h-[15rem] md:h-auto" src={Vector} id="img-pixelgrade"/>
      <div className="dm:flex flex-col items-center">
        <h2 className="content-pixelgrade w-[17rem] text-center text-neutral-600 text-[1.5rem] leading-6 font-semibold font-['Inter'] md:leading-[44px] md:text-4xl md:w-[601px]" id="h2-pixelgrade">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="content-pixelgrade w-[20rem] pt-[0.5rem] pb-[1rem] text-center text-neutral-500 text-sm font-normal leading-tight md:w-[601px] md:pb-[2rem]" id="p-pixelgrade">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button className="content-pixelgrade w-[4rem] h-[2rem] px-8 py-3.5 text-[0.5rem] bg-green-500 rounded justify-center items-center gap-2.5 inline-flex text-white md:w-[151px] md:h-[52px]" id="btn-pixelgrade">
          Learn More
        </Button>
      </div>
    </section>
  );
}
