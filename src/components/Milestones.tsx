const Milestones = () => {
  return (
    <div className="milestone mt-[3rem] flex items-center justify-around rounded-xl border-[2px] border-purple-600 lg:h-[16vh] 2xl:h-[18vh] 3xl:h-[12vh] py-[1rem] 2xl:py-[1.2rem] 3xl:py-[1.5rem] lg:px-[3rem] text-white">
      <div className="flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:gap-4 3xl:gap-8 items-center lg:px-[2rem] px-[1rem]">
          <span className="text-[1rem] font-semibold md:text-[1.7rem] lg:text-4xl 2xl:text-[2.5rem] 3xl:text-[3.5rem]">
            300+
          </span>
          <span className="text-[.8rem] md:text-[1rem] min-[1100px]:text-[20px] min-[1440px]:text-[22px] min-[1440px]:w-[90px]">
            Active members
          </span>
        </div>
      </div>
      <div className="w-[1px] h-[4rem] lg:h-full bg-purple-800 rounded-lg" />
      <div className="flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:gap-4 3xl:gap-8 items-center lg:px-[2rem] px-[1rem]">
          <span className="text-[1rem] font-semibold md:text-[1.7rem] lg:text-4xl 2xl:text-[2.5rem] 3xl:text-[3.5rem]">
            5+
          </span>
          <span className="text-[.8rem] md:text-[1rem] min-[1100px]:text-[20px] min-[1440px]:text-[22px] min-[1440px]:w-[90px]">
            Meetups & Events
          </span>
        </div>
      </div>
      <div className="w-[1px] h-[4rem] lg:h-full bg-purple-800 rounded-lg" />
      <div className="flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:gap-4 3xl:gap-8 items-center lg:px-[2rem] px-[1rem]">
          <span className="text-[1rem] font-semibold md:text-[1.7rem] lg:text-4xl 2xl:text-[2.5rem] 3xl:text-[3.5rem]">
            1000+
          </span>
          <span className="text-[.8rem] md:text-[1rem] lg:text-[1.4rem] min-[1100px]:text-[20px] min-[1440px]:text-[22px] min-[1440px]:w-[90px]">
            Learning materials
          </span>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
