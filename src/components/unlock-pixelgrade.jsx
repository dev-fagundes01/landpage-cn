import Vector from "../assets/general/vector.svg";
import { Button } from "./ui/button";

export default function UnlockPixelgrade() {
  return (
    <section className="unlockPixelgrade flex flex-col-reverse items-center justify-center md:flex-row">
      <img className="h-[15rem] md:h-auto" src={Vector} />
      <div className="dm:flex flex-col items-center">
        <h2 className="w-[17rem] text-center text-neutral-600 text-[1.5rem] leading-6 font-semibold font-['Inter'] md:leading-[44px] md:text-4xl md:w-[601px]">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="w-[20rem] pt-[0.5rem] pb-[1rem] text-center text-neutral-500 text-sm font-normal leading-tight md:w-[601px] md:pb-[2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button className="w-[4rem] h-[2rem] px-8 py-3.5 text-[0.5rem] bg-green-500 rounded justify-center items-center gap-2.5 inline-flex text-white md:w-[151px] md:h-[52px]">
          Learn More
        </Button>
      </div>
    </section>
  );
}
