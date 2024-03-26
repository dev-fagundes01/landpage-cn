/* eslint-disable no-unused-vars */
import IconOrg from "../assets/community/icon-org.svg";
import IconCiations from "../assets/community/icon-ciations.svg";
import IconGroup from "../assets/community/icon-group.svg";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Community() {
  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-community",
          scrub: true,
          start: "top 750rem",
          end: "top 0rem"
        }
      })
      .fromTo("#h2-community", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#p-community", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#div-organisations", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#div-associations", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#div-clubs", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
    }, el)

    return () => {
      gsap.killTweensOf(".content-community")
    };
  }, []);
  
  return (
    <section className="h-[30rem] mt-[4rem] flex flex-col items-center md:h-96 md:mb-[5rem]" ref={el}>
      <h2 className="content-community w-[20rem] text-[1.5rem] text-center leading-6 not-italic font-semibold md:leading-10 md:w-[33.875rem] md:text-4xl" id="h2-community">
        Manage your entire community in a single system
      </h2>
      <p className="content-community mt-[.5rem] text-[0.8rem] not-italic font-normal leading-6 text-center md:text-base" id="p-community">
        Who is Nextcent suitable for?
      </p>
      <div className="justify-center gap-x-44 md:mt-9 md:flex" >
        <div className="content-community flex flex-col items-center text-center" id="div-organisations">
          <img className="h-8 w-8 md:h-12 md:w-12" src={IconOrg} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[1rem] font-bold leading-9 md:text-[28px]">
            Membership Organisations
          </h3>
          <p className="w-[15.6875rem] text-center text-neutral-500 text-[0.6rem] font-normal leading-tight md:text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="content-community flex flex-col items-center text-center" id="div-associations">
          <img className="h-8 w-8 md:h-12 md:w-12" src={IconCiations} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[1rem] font-bold leading-9 md:text-[28px]">
            National Associations
          </h3>
          <p className="w-[15rem] text-center text-neutral-500 text-[0.6rem] font-normal leading-tight md:text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="content-community flex flex-col items-center text-center" id="div-clubs">
          <img className="h-8 w-8 md:h-12 md:w-12" src={IconGroup} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[1rem] font-bold leading-9 md:text-[28px]">
            Clubs And Groups
          </h3>
          <p className="w-[15.6875rem] text-center text-neutral-500 text-[0.6rem] font-normal leading-tight md:text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
}
