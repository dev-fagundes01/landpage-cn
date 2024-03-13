import Client1 from "../assets/clients/client1.svg";
import Client2 from "../assets/clients/client2.svg";
import Client3 from "../assets/clients/client3.svg";
import Client4 from "../assets/clients/client4.svg";
import Client5 from "../assets/clients/client5.svg";
import Client6 from "../assets/clients/client6.svg";
import Client7 from "../assets/clients/client7.svg";

export default function Clients() {
  return (
    <section className="flex flex-col items-center gap-4 h-36 my-[5.5rem]">
      <h2 className="text-4xl not-italic font-semibold leading-10">
        Our Clients
      </h2>
      <p className="text-base not-italic font-normal leading-6">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex gap-10">
        <img src={Client1} />
        <img src={Client2} />
        <img src={Client3} />
        <img src={Client4} />
        <img src={Client5} />
        <img src={Client6} />
        <img src={Client7} />
      </div>
    </section>
  );
}