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
    <footer className="flex flex-col items-center">
      <h2 className="w-[887px] text-center text-gray-800 text-[64px] font-semibold leading-[76px]">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <Button className="w-auto my-[2rem] bg-green-500 rounded justify-center items-center gap-2 inline-flex text-skin-base">
        Get a Demo <img src={Arrows} />
      </Button>
      <div className="w-screen py-[4rem] px-[10.31rem] bg-gray-800 flex">
        <div className="mr-[7.81rem]">
          <img src={Logo} />
          <p className="mt-[1.5rem] text-slate-50 text-sm font-normal leading-tight">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="mt-[0.5rem] mb-[1.5rem] text-slate-50 text-sm font-normal leading-tight">
            All rights reserved
          </p>
          <div className="flex gap-[1rem]">
            <a href="#">
              <img src={SocialIcon1} />
            </a>
            <a href="#">
              <img src={SocialIcon2} />
            </a>
            <a href="#">
              <img src={SocialIcon3} />
            </a>
            <a href="#">
              <img src={SocialIcon4} />
            </a>
          </div>
        </div>
        <div className="w-[10rem] mr-[1.88rem] flex flex-col gap-[0.75rem]">
          <h4 className="text-white text-xl font-semibold leading-7">
            Company
          </h4>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            About us
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Blog
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Contact us
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Pricing
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Testimonials
          </a>
        </div>
        <div className="w-[10rem] mr-[1.88rem] flex flex-col gap-[0.75rem]">
          <h4 className="text-white text-xl font-semibold leading-7">
            Support
          </h4>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Help center
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Terms of service
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Legal
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Privacy policy
          </a>
          <a
            className="text-slate-50 text-sm font-normal leading-tight"
            href=""
          >
            Status
          </a>
        </div>
        <div>
          <h4 className="text-white text-xl font-semibold leading-7">
            Stay up to date
          </h4>
          <Input className='text-skin-base' type="email" id="email" name="email" placeholder="Your email address" />
        </div>
      </div>
    </footer>
  );
}
