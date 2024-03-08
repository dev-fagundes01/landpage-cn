import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between">
      <img src={Logo} alt="imagem da logo" />
      <nav className="flex gap-8">
        <ul className="flex gap-10 m-r-20">
          <li>
            <link rel="stylesheet" href="#" className="text-gray"/>
            Home
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-gray"/>
            Service
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-gray"/>
            Feature
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-gray"/>
            Product
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-gray"/>
            Testimonial
          </li>
          <li>
            <link rel="stylesheet" href="#" className="text-gray"/>
            FAQ
          </li>
        </ul>
        <button type="button">Login</button>
        <button>Sign up</button>
      </nav>
    </header>
  );
}
