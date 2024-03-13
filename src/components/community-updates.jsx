/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import Image1 from "../assets/community-updates/image1.svg";
import Image2 from "../assets/community-updates/image2.svg";
import Image3 from "../assets/community-updates/image3.svg";
import Arrows from "../assets/general/arrows.svg";
import { Button } from "./ui/button";

export default function CommunityUpdates() {
  return (
    <section className="h-[31.625rem] my-[5rem] flex flex-col items-center">
      <h2 className="w-[1110px] text-center text-neutral-600 text-4xl font-semibold leading-[44px]">
        Caring is the new marketing
      </h2>
      <p className="w-[628px] my-[1rem] text-center text-neutral-500 text-base font-normal leading-normal">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="flex">
        <div className="relative">
          <img className="w-[368px] h-[286px] rounded-lg" src={Image1} />
          <div className="bg-slate-50 shadow rounded-md absolute top-[12rem] left-[2rem]">
            <p className="w-[285px] text-center text-neutral-500 text-xl font-semibold leading-7">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <Button className="w-[285px] mt-[1.5rem] text-green-500 text-xl font-semibold leading-7">
              Readmore <img src={Arrows} />
            </Button>
          </div>
        </div>
        <div className="relative">
          <img className="w-[368px] h-[286px] rounded-lg" src={Image2} />
          <div className="bg-slate-50 shadow rounded-md absolute top-[12rem] left-[2rem]">
            <p className="w-[285px] text-center text-neutral-500 text-xl font-semibold leading-7">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <Button className="w-[285px] mt-[1.5rem] text-green-500 text-xl font-semibold leading-7">
              Readmore <img src={Arrows} />
            </Button>
          </div>
        </div>
        <div className="relative">
          <img className="w-[368px] h-[286px] rounded-lg" src={Image3} />
          <div className="bg-slate-50 shadow rounded-md absolute top-[12rem] left-[2rem]">
            <p className="w-[285px] text-center text-neutral-500 text-xl font-semibold leading-7">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <Button className="w-[285px] mt-[1.5rem] text-green-500 text-xl font-semibold leading-7">
              Readmore <img src={Arrows} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}