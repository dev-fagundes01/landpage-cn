import IconOrg from "../assets/community/icon-org.svg";
import IconCiations from "../assets/community/icon-ciations.svg";
import IconGroup from "../assets/community/icon-group.svg";

export default function Community() {
  return (
    <section className="h-[30rem] mt-[4rem] flex flex-col items-center md:h-96 md:mb-[5rem]">
      <h2 className="w-[20rem] text-[1.5rem] text-center leading-6 not-italic font-semibold md:leading-10 md:w-[33.875rem] md:text-4xl">
        Manage your entire community in a single system
      </h2>
      <p className="mt-[.5rem] text-[0.8rem] not-italic font-normal leading-6 text-center md:text-base">
        Who is Nextcent suitable for?
      </p>
      <div className="justify-center gap-x-44 md:mt-9 md:flex">
        <div className="flex flex-col items-center text-center">
          <img className="h-8 w-8 md:h-12 md:w-12" src={IconOrg} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[1rem] font-bold leading-9 md:text-[28px]">
            Membership Organisations
          </h3>
          <p className="w-[15.6875rem] text-center text-neutral-500 text-[0.6rem] font-normal leading-tight md:text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="h-8 w-8 md:h-12 md:w-12" src={IconCiations} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[1rem] font-bold leading-9 md:text-[28px]">
            National Associations
          </h3>
          <p className="w-[15rem] text-center text-neutral-500 text-[0.6rem] font-normal leading-tight md:text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="h-8 w-8 md:h-12 md:w-12" src={IconGroup} />
          <h3 className="w-[267px] text-center text-neutral-600 text-[1rem] font-bold leading-9 md:text-[28px]">
            Clubs And Groups
          </h3>
          <p className="w-[15.6875rem] text-center text-neutral-500 text-[0.6rem] font-normal leading-tight md:text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
}
