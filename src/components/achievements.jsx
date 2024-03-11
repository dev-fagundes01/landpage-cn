import IconMembers from "../assets/achievements/icon-members.svg";
import IconClubs from "../assets/achievements/icon-clubs.svg";
import IconEvent from "../assets/achievements/icon-event.svg";
import IconPayments from "../assets/achievements/icon-payments.svg";

export default function Achievements() {
  return (
    <section className="ml-[9rem] py-[4rem] grid grid-cols-2 grid-rows-1 justify-center items-center">
      <h2 className="col-start-1 row-start-1 w-[25.5rem] mb-[5rem]">
        <span className="grid text-neutral-600 text-4xl font-semibold leading-[44px]">
          Helping a local
        </span>
        <span className="text-green-500 text-4xl font-semibold leading-[44px]">
          business reinvent itself
        </span>
      </h2>
      <p className="col-start-1 row-start-1 mt-[5rem]">
        We reached here with our hard work and dedication
      </p>
      <div className="grid grid-cols-2 gap-y-[2.5rem]">
        <div className="col-start-1">
          <img src={IconMembers} />
          <p>2,245,341</p>
          <p>Members</p>
        </div>
        <div className="col-start-2">
          <img src={IconClubs} />
          <p>46,328</p>
          <p>Clubs</p>
        </div>
        <div className="col-start-1">
          <img src={IconEvent} />
          <p>828,867</p>
          <p>Event Bookings</p>
        </div>
        <div className="col-start-2">
          <img src={IconPayments} />
          <p>1,926,436</p>
          <p>Payments</p>
        </div>
      </div>
    </section>
  );
}
