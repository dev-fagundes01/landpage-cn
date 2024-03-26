/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import Image1 from "../assets/community-updates/image1.svg";
import Image2 from "../assets/community-updates/image2.svg";
import Image3 from "../assets/community-updates/image3.svg";
import Arrows from "../assets/general/arrows.svg";
import { Button } from "./ui/button";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CommunityUpdates() {
  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    // eslint-disable-next-line no-unused-vars
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-communityUpdates",
          scrub: true,
          start: "top 880rem",
          end: "top 100rem"
        }
      })
      .fromTo("#h2-communityUpdates", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#p-communityUpdates", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#div1-communityUpdates", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#div2-communityUpdates", {
        opacity: 0,
        x: -500,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#div3-communityUpdates", {
        opacity: 0,
        x: -250,
      }, {
        opacity: 1,
        x: 0
      })
    }, el)

    return () => {
      gsap.killTweensOf(".content-communityUpdates")
    };
  }, []);
  
  return (
    <section className="h-[31.625rem] mt-[5rem] dm:mb-[22rem] flex flex-col items-center" ref={el}>
      <h2 className="content-communityUpdates text-neutral-600 font-semibold leading-[44px] md:w-[1110px] md:text-4xl md:text-center" id="h2-communityUpdates">
        Caring is the new marketing
      </h2>
      <p className="content-communityUpdates w-[18rem] text-[0.8rem] text-center text-neutral-500 font-normal leading-normal  md:w-[628px] md:my-[1rem] md:text-base" id="p-communityUpdates">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="flex flex-col gap-[3.5rem] md:flex-row">
        <div className="content-communityUpdates relative" id="div1-communityUpdates">
          <img className="h-[11rem] rounded-lg md:w-[368px] md:h-[286px]" src={Image1} />
          <div className="bg-slate-50 shadow text-center rounded-md absolute top-[7rem] left-[0.5rem] md:top-[12rem] md:left-[2rem]">
            <p className="w-[13rem] text-[0.8rem] text-neutral-500 md:text-xl font-semibold md:leading-7 md:w-[285px]">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <Button className="text-green-500 gap-0 font-semibold leading-7 md:w-[285px] md:mt-[1.5rem] md:text-xl">
              Readmore <img src={Arrows} />
            </Button>
          </div>
        </div>
        <div className="content-communityUpdates relative" id="div2-communityUpdates">
          <img className="h-[11rem] rounded-lg md:w-[368px] md:h-[286px]" src={Image2} />
          <div className="bg-slate-50 shadow text-center rounded-md absolute top-[7rem] left-[0.5rem] md:top-[12rem] md:left-[2rem]">
            <p className="w-[13rem] text-neutral-500 md:text-xl font-semibold md:leading-7 md:w-[285px]">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <Button className="text-green-500 gap-0 font-semibold leading-7 md:w-[285px] md:mt-[1.5rem] md:text-xl">
              Readmore <img src={Arrows} />
            </Button>
          </div>
        </div>
        <div className="content-communityUpdates relative" id="div3-communityUpdates">
          <img className="h-[11rem] rounded-lg md:w-[368px] md:h-[286px]" src={Image3} />
          <div className="bg-slate-50 shadow text-center rounded-md absolute top-[7rem] left-[0.5rem] md:top-[12rem] md:left-[2rem]">
            <p className="w-[13rem] text-neutral-500 md:text-xl font-semibold md:leading-7 md:w-[285px]">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <Button className="text-green-500 gap-0 font-semibold leading-7 md:w-[285px] md:mt-[1.5rem] md:text-xl">
              Readmore <img src={Arrows} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}