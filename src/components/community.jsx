import IconOrg from "../assets/community/icon-org.svg";
import IconCiations from "../assets/community/icon-ciations.svg";
import IconGroup from "../assets/community/icon-group.svg";

export default function Community() {
  return (
    <section className="h-96 mt-[4rem]">
      <h2 className="text-4xl not-italic font-semibold leading-10 text-center w-full px-96">
        Manage your entire community in a single system
      </h2>
      <p className="text-base not-italic font-normal leading-6 text-center">
        Who is Nextcent suitable for?
      </p>
      <div className="flex justify-center gap-x-44 mt-9">
        <div className="flex flex-col items-center text-center">
          <img className="h-12 w-12" src={IconOrg} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[28px] font-bold leading-9">
            Membership Organisations
          </h3>
          <p className="w-[15.6875rem] text-center text-neutral-500 text-sm font-normal leading-tight">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="h-12 w-12" src={IconCiations} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[28px] font-bold leading-9">
            National Associations
          </h3>
          <p className="w-[15rem] text-center text-neutral-500 text-sm font-normal leading-tight">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="h-12 w-12" src={IconGroup} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[28px] font-bold leading-9">
            Clubs And Groups
          </h3>
          <p className="w-[15.6875rem] text-center text-neutral-500 text-sm font-normal leading-tight">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
}
