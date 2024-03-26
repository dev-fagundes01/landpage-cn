import IconMembers from "../assets/achievements/icon-members.svg";
import IconClubs from "../assets/achievements/icon-clubs.svg";
import IconEvent from "../assets/achievements/icon-event.svg";
import IconPayments from "../assets/achievements/icon-payments.svg";

export default function Achievements() {
  return (
    <section className="achievements grid-cols-2 grid-rows-1 justify-center items-center md:ml-[12rem] md:py-[4rem] md:grid">
      <h2 className="dm:text-[1.1rem] grid dm:justify-center col-start-1 row-start-1 md:mb-[5rem]">
        <span className="text-neutral-600 font-semibold md:grid md:leading-[44px] md:text-4xl">
          Helping a local
        </span>
        <span className="text-green-500 font-semibold md:leading-[44px] md:text-4xl">
          business reinvent itself
        </span>
      </h2>
      <p className="col-start-1 row-start-1 mt-[1rem] dm:text-center md:mt-[5rem]">
        We reached here with our hard work and dedication
      </p>
      <div className="flex justify-center gap-x-[2.5rem]">
        <div>
          <div className="grid grid-rows-3 dm:justify-items-center md:grid-rows-1 relative">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconMembers} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">2,245,341</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2">Members</p>
          </div>
          <div className="grid grid-rows-3 dm:justify-items-center md:grid-rows-1 md:justify-center md:pr-[1.5rem] relative md:mt-[2.5rem]">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconClubs} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">46,328</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2">Clubs</p>
          </div>
        </div>
        <div>
          <div className="grid grid-rows-3 dm:justify-items-center md:grid-rows-1 relative">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconEvent} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">828,867</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2 w-max">Event Bookings</p>
          </div>
          <div className="grid grid-rows-3 dm:justify-items-center md:grid-rows-1 md:justify-center md:pr-[1.5rem] relative md:mt-[2.5rem]">
            <img className="row-span-2 h-[2rem] md:h-[3rem]" src={IconPayments} />
            <p className="row-start-2 md:col-start-2 md:row-start-1">1,926,436</p>
            <p className="row-start-3 md:col-start-2 md:row-start-2">Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
