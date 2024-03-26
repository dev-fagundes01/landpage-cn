import MobileLogin from "../assets/general/mobile-login.svg";
import { Button } from "./ui/button";

export default function UnlockDesign() {
  return (
    <section className="unlockDesign my-[5rem] flex flex-col-reverse items-center md:flex-row md:justify-center">
      <img className="w-[18rem] md:w-auto" src={MobileLogin} />
      <div className="flex flex-col items-center">
        <h2 className="w-[20rem] text-neutral-600 text-[1.5rem] dm:text-center font-semibold md:w-[601px] md:leading-[44px] md:text-4xl">
          How to design your site footer like we did
        </h2>
        <p className="w-[16rem] mb-[0.5rem] text-neutral-500 text-sm font-normal leading-tight md:w-[601px] md:mb-[2rem] md:mt-[1rem]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button className="px-2 py-1 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex text-white md:w-[151px] md:h-[52px] md:px-8 md:py-3.5">
          Learn More
        </Button>
      </div>
    </section>
  );
}
