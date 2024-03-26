import Client1 from "../assets/clients/client1.svg";
import Client2 from "../assets/clients/client2.svg";
import Client3 from "../assets/clients/client3.svg";
import Client4 from "../assets/clients/client4.svg";
import Client5 from "../assets/clients/client5.svg";
import Client6 from "../assets/clients/client6.svg";
import Client7 from "../assets/clients/client7.svg";

// eslint-disable-next-line react/prop-types
export default function Clients({el}) {
  return (
    <section className="h-36 flex flex-col items-center my-[5.5rem] md:flex-nowrap md:gap-4" ref={el}>
      <h2 className="content-clients text-[1.5rem] not-italic font-semibold leading-10 md:text-4xl" id="h2-clients">
        Our Clients
      </h2>
      <p className="content-clients w-[19rem] text-base text-center not-italic font-normal leading-6 md:w-auto" id="p-clients">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="content-clients flex gap-[0.5rem] md:gap-10" id="div-clients">
        <img className="w-[1.5rem] md:w-[3.43rem]" src={Client1} />
        <img className="w-[1.5rem] md:w-[3.43rem]" src={Client2} />
        <img className="w-[1.5rem] md:w-[3.43rem]" src={Client3} />
        <img className="w-[1.5rem] md:w-[3.43rem]" src={Client4} />
        <img className="w-[1.5rem] md:w-[3.43rem]" src={Client5} />
        <img className="w-[1.5rem] md:w-[3.43rem]" src={Client6} />
        <img className="w-[1.5rem] md:w-[3.43rem]" src={Client7} />
      </div>
    </section>
  );
}