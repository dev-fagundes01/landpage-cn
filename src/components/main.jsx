import Illustration from "../assets/general/illustration.svg";
import "../../styles/app.css";
import { Button } from "./ui/button";

export default function Main() {
  return (
    <main className="flex justify-center items-center gap-10 relative h-screen">
      <div className="flex flex-col items-start gap-8 flex-100 w-ful">
        <h1 className="text-6xl">
          Lessons and insights{" "}
          <span className="text-skin-primary">from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button className="bg-skin-primary text-skin-base rounded-md p-pb">
          Register
        </Button>
      </div>
      <img src={Illustration} alt="imagem de ilustração" />
      <div className="flex gap-2 absolute bottom-1">
        <span className="bg-skin-primary rounded-full w-2.5 h-2.5" />
        <span className="bg-skin-primary rounded-full w-2.5 h-2.5 opacity-30" />
        <span className="bg-skin-primary rounded-full w-2.5 h-2.5 opacity-30" />
      </div>
    </main>
  );
}
