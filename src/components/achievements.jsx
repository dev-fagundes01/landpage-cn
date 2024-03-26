import IconMembers from "../assets/achievements/icon-members.svg";
import IconClubs from "../assets/achievements/icon-clubs.svg";
import IconEvent from "../assets/achievements/icon-event.svg";
import IconPayments from "../assets/achievements/icon-payments.svg";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Achievements() {
  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    // eslint-disable-next-line no-unused-vars
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-achievements",
          scrub: true,
          start: "top 1080rem",
          end: "top 200rem"
        }
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
      .fromTo("#members-achievements", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#clubs-achievements", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#event-achievements", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#payments-achievements", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
    }, el)

    return () => {
      gsap.killTweensOf(".content-achievements")
    };
  }, []);

  return (
    <section className="grid-cols-2 grid-rows-1 justify-center items-center md:ml-[12rem] md:py-[4rem] md:grid" ref={el}>
      <h2 className="content-achievements dm:text-[1.1rem] grid dm:justify-center col-start-1 row-start-1 md:mb-[5rem]" id="h2-achievements">
        <span className="text-neutral-600 font-semibold md:grid md:leading-[44px] md:text-4xl">
          Helping a local
        </span>
        <span className="text-green-500 font-semibold md:leading-[44px] md:text-4xl">
          business reinvent itself
        </span>
      </h2>
      <p className="content-achievements col-start-1 row-start-1 mt-[1rem] dm:text-center md:mt-[5rem]" id="p-achievements">
        We reached here with our hard work and dedication
      </p>
      <div className="flex justify-center gap-x-[2.5rem]">
        <div>
          <div className="content-achievements grid grid-rows-3 dm:justify-items-center md:grid-rows-1 relative" id="members-achievements">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconMembers} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">2,245,341</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2">Members</p>
          </div>
          <div className="content-achievements grid grid-rows-3 dm:justify-items-center md:grid-rows-1 md:justify-center md:pr-[1.5rem] relative md:mt-[2.5rem]" id="clubs-achievements">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconClubs} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">46,328</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2">Clubs</p>
          </div>
        </div>
        <div>
          <div className="content-achievements grid grid-rows-3 dm:justify-items-center md:grid-rows-1 relative" id="event-achievements">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconEvent} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">828,867</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2 w-max">Event Bookings</p>
          </div>
          <div className="content-achievements grid grid-rows-3 dm:justify-items-center md:grid-rows-1 md:justify-center md:pr-[1.5rem] relative md:mt-[2.5rem]" id="payments-achievements">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconPayments} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">1,926,436</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2">Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
