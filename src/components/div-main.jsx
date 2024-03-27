import Illustration from "../assets/general/illustration.svg";
import { Button } from "./ui/button";

export default function Main() {
  return (
    <main className="mt-[5rem] flex flex-col justify-center items-center relative md:h-screen md:mt-[0rem] md:px-[9rem] md:flex-row md:flex-nowrap md:gap-10">
      <div className="dm:mb-4 flex flex-col items-center gap-3 flex-100 w-ful md:items-start md:gap-8">
        <h1 className="w-[15rem] text-[1.5rem] leading-6 md:w-[41.06rem] md:text-6xl">
          Lessons and insights
          <span className="text-skin-primary"> from 8 years</span>
        </h1>
        <p className="w-[17rem] text-[1rem] leading-4 md:w-auto">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button className="text-[1rem] bg-skin-primary text-skin-base rounded-md md:p-pb">
          Register
        </Button>
      </div>
      <img className="h-[15rem] md:h-[25.4375rem]" src={Illustration} alt="imagem de ilustração" />
      <div className="flex gap-2 md:absolute bottom-1">
        <span className="w-1.5 h-1.5 bg-skin-primary rounded-full md:w-2.5 md:h-2.5" />
        <span className="w-1.5 h-1.5 bg-skin-primary rounded-full md:w-2.5 md:h-2.5 opacity-30" />
        <span className="w-1.5 h-1.5 bg-skin-primary rounded-full md:w-2.5 md:h-2.5 opacity-30" />
      </div>
    </main>
  );
}
