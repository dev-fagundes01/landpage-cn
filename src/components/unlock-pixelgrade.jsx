import Vector from "../assets/general/vector.svg";
import { Button } from "./ui/button";

export default function UnlockPixelgrade() {
  return (
    <section className="ml-[9rem] flex">
      <img src={Vector} />
      <div>
        <h2 className="w-[601px] text-neutral-600 text-4xl font-semibold font-['Inter'] leading-[44px]">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="w-[601px] pt-[0.5rem] pb-[2rem] text-neutral-500 text-sm font-normal leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button className="w-[151px] h-[52px] px-8 py-3.5 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex text-white">
          Learn More
        </Button>
      </div>
    </section>
  );
}
