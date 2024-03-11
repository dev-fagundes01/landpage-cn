import MobileLogin from "../assets/mobile-login.svg";

export default function UnlockDesign() {
  return (
    <section className="mt-[3rem] ml-[9rem] flex">
      <img src={MobileLogin} />
      <dir>
        <h2 className="w-[601px] text-neutral-600 text-4xl font-semibold leading-[44px]">
          How to design your site footer like we did
        </h2>
        <p className="w-[601px] mb-[2rem] mt-[1rem] text-neutral-500 text-sm font-normal leading-tight">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="w-[151px] h-[52px] px-8 py-3.5 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex text-white">
          Learn More
        </button>
      </dir>
    </section>
  );
}
