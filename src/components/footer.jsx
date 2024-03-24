import Logo from "../assets/footer/logo.svg";
import Arrows from "../assets/footer/arrows.svg";
import SocialIcon1 from "../assets/footer/social-icon1.svg";
import SocialIcon2 from "../assets/footer/social-icon2.svg";
import SocialIcon3 from "../assets/footer/social-icon3.svg";
import SocialIcon4 from "../assets/footer/social-icon4.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col  items-center">
      <h2 className="w-[14rem] text-center text-gray-800 font-semibold md:w-[887px] md:leading-[76px] md:text-[64px]">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <Button className="w-auto mb-1 px-[.4rem] text-[0.75rem] bg-green-500 rounded justify-center gap-18 items-center inline-flex text-skin-base md:my-[1rem] md:gap-2">
        Get a Demo <img src={Arrows} />
      </Button>
      <div className="w-full py-[2rem] px-[1rem] grid grid-cols-2 grid-rows-2 bg-gray-800 md:py-[4rem] md:pl-[9rem] md:flex">
        <div className="dm:mt-2 md:mr-[7.81rem]">
          <img className="dm:w-[6rem]" src={Logo} />
          <p className="mt-[.5rem] text-slate-50 text-sm font-normal leading-tight md:mt-[1.5rem]">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="mt-[0.5rem] md:mb-[1.5rem] text-slate-50 text-sm font-normal leading-tight">
            All rights reserved
          </p>
          <div className="flex gap-1 md:gap-[1rem]">
            <a href="#">
              <img className="dm:h-[1.5rem]" src={SocialIcon1} />
            </a>
            <a href="#">
              <img className="dm:h-[1.5rem]" src={SocialIcon2} />
            </a>
            <a href="#">
              <img className="dm:h-[1.5rem]" src={SocialIcon3} />
            </a>
            <a href="#">
              <img className="dm:h-[1.5rem]" src={SocialIcon4} />
            </a>
          </div>
        </div>
        <div className="row-start-1 w-[10rem] mr-[1.88rem] flex flex-col gap-[.2rem] md:gap-[0.75rem]">
          <h4 className="text-[0.9rem] text-white font-semibold leading-7 md:text-xl">
            Company
          </h4>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            About us
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Blog
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Contact us
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Pricing
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Testimonials
          </a>
        </div>
        <div className="row-start-1 w-[10rem] mr-[1.88rem] flex flex-col gap-[.2rem] md:gap-[0.75rem]">
          <h4 className="text-[0.9rem] text-white font-semibold leading-7 md:text-xl">
            Support
          </h4>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Help center
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Terms of service
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Legal
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Privacy policy
          </a>
          <a
            className="text-[0.65rem] text-slate-50 font-normal leading-tight md:text-sm"
            href=""
          >
            Status
          </a>
        </div>
        <div className="dm:mt-1">
          <h4 className="text-[0.9rem] text-white font-semibold leading-7 md:text-xl">
            Stay up to date
          </h4>
          <Input
            className="dm:w-[10rem] text-[0.5rem] w-[22rem] md:text-skin-base"
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
          />
        </div>
      </div>
    </footer>
  );
}
