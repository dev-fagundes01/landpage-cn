import MobileLogin from "../assets/general/mobile-login.svg";
import { Button } from "./ui/button";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function UnlockDesign() {
  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    // eslint-disable-next-line no-unused-vars
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-design",
          scrub: true,
          start: "translateY 800vh",
          end: "translateY 100vh"
        }
      })
      .fromTo("#h2-design", {
        opacity: 0,
        x: -100,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#p-design", {
        opacity: 0,
        x: -100,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#btn-design", {
        opacity: 0,
        x: -50,
      }, {
        opacity: 1,
        x: 0
      })
    }, el)

    return () => {
      gsap.killTweensOf(".content-design")
    };
  }, []);
  
  return (
    <section className="my-[5rem] flex flex-col-reverse items-center md:flex-row md:justify-center" ref={el}>
      <img className="w-[18rem] md:w-auto" src={MobileLogin}/>
      <div className="flex flex-col dm:items-center">
        <h2 className="content-design w-[20rem] text-neutral-600 text-[1.5rem] dm:text-center font-semibold md:w-[601px] md:leading-[44px] md:text-4xl" id="h2-design">
          How to design your site footer like we did
        </h2>
        <p className="content-design w-[16rem] mb-[0.5rem] text-neutral-500 text-sm font-normal leading-tight md:w-[601px] md:mb-[2rem] md:mt-[1rem]" id="p-design">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button className="content-design px-2 py-1 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex text-white md:w-[151px] md:h-[52px] md:px-8 md:py-3.5" id="btn-design">
          Learn More
        </Button>
      </div>
    </section>
  );
}
