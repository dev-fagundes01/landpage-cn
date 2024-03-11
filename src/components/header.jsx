import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between mt-2">
      <img src={Logo} alt="imagem da logo" />
      <nav className="flex gap-8">
        <ul className="flex gap-x-14 mr-28 p-pb">
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
        <button type="button" className="text-skin-primary">
          Login
        </button>
        <button
          type="button"
          className="bg-skin-primary text-skin-base rounded-md p-pb"
        >
          Sign up
        </button>
      </nav>
    </header>
  );
}
