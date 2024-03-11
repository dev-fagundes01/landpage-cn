import Image9 from "../assets/customers/image-9.svg";

export default function Customers() {
  return (
    <section className="mt-[5.06rem] ml-[9rem] flex gap-[2.88rem]">
      <img src={Image9} className="w-[326px] h-[326px] rounded-lg shadow" />
      <div>
        <p className="w-[748px] text-neutral-500 text-base font-medium leading-normal">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h4 className="w-[748px] text-green-500 text-xl font-semibold leading-7">
          Tim Smith
        </h4>
        <p className="w-[748px] text-gray-400 text-base font-normal leading-normal">
          British Dragon Boat Racing Association
        </p>
      </div>
    </section>
  );
}
