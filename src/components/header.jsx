import Logo from "../assets/general/logo.svg";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="mt-4 mx-[0.5rem] flex justify-between md:justify-around">
      <img className="max-w-[3rem] md:max-w-[24%]" src={Logo} alt="imagem da logo" />
      <nav className="flex items-center gap-2">
        <ul className="hidden gap-x-[2.5rem] p-pb ml-[8rem] mr-[3rem] md:flex">
          <li>
            <link rel="stylesheet" href="#" className="text-skin-base" />
            Home
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-skin-base" />
            Service
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-skin-base" />
            Feature
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-skin-base" />
            Product
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-skin-base" />
            Testimonial
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-skin-base" />
            FAQ
          </li>
        </ul>
        <Button type="button" className="text-[10px] text-skin-primary">
          Login
        </Button>
        <Button
          type="button"
          className="py-1 px-2 text-[10px] bg-skin-primary text-skin-base rounded-md p-pb"
        >
          Sign up
        </Button>
      </nav>
    </header>
  );
}
