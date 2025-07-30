import arrowUpWhite from "@/assets/icons/arrow-up-right-white.svg";
import arrowUpBlue from "@/assets/icons/arrow-up-right-blue.svg";

const Community = () => {
  return (
    <div className="my-[3rem] 3xl:mt-[5rem] flex flex-col md:flex-row items-stretch lg:h-[40vh] 3xl:h-[30vh] md:gap-6 gap-10">
      <div className="xl:w-[40%] md:w-[50%] flex flex-col">
        <div className="h-[70%] bg-white rounded-t-xl rounded-br-xl pt-[1.5rem] px-[2rem]">
          <h2 className="text-blue-600 text-xl lg:text-[28px] 3xl:text-[3rem] font-semibold pb-[1rem]">
            Why Join Our Community
          </h2>
          <p className="3xl:text-[1.8rem] pb-[1rem] lg:text-[22px] text-[#292929]">
            We are on a mission to equip students with the latest Microsoft tech
            skills and empower them to lead tech innovation on campus and
            beyond.
          </p>
        </div>

        <div className="h-[30%] flex justify-between bg-white bg-gradient-to-b from-white to-purple-50 rounded-bl-xl rounded-br-xl">
          <div className="flex items-end bg-white rounded-b-xl w-[50%] 3xl:w-[65%] pl-[2rem] pb-[.8rem]">
            <img
              src={arrowUpBlue}
              alt=""
              className="w-[45px] 3xl:w-[80px] rotate-90"
            />
          </div>
          <div className="bg-purple-50 border-t-purple-50 border-l-purple-50 border-r-transparent border-b-transparent border-[.5px] pt-[1.5rem] pl-[1.5rem] rounded-tl-xl w-[50%] 3xl:w-[45%] flex justify-end">
            <button className="flex justify-center items-center w-full font-semibold px-2 text-sm bg-gradient-to-r from-purple-600 to-purple-500 xs:px-[.5rem] lg:px-[1.5rem] py-3 rounded-[10px] text-white xs:text-[.8rem] lg:text-[1rem] min-[1440px]:text-[22px] min-[1440px]:px-0">
              <span>Join Community</span>
              <img
                src={arrowUpWhite}
                alt=""
                className="w-[20px] min-[1440px]:w-6"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between xl:w-[60%] md:w-[50%] h-auto text-[.8rem] sm:text-[.9rem] font-semibold xl:text-[1.4rem] lg:text-[1.2rem] 3xl:text-[2rem] gap-10">
        <div className="flex items-center gap-4 md:h-[40%] h-[12vh] lg:h-[22vh]">
          <div className="relative bg-white shadow-md w-[60%] h-full rounded-xl flex items-center px-[1rem] md:px-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 sm:w-[95%] 3xl:w-[65%]">
              Exclusive learning resources
            </span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#d59dff8f] rounded-lg w-[36px] p-[.5rem] xl:w-16 xl:h-16 xl:p-0">
              <img
                src={arrowUpWhite}
                alt=""
                className="w-[30px] md:w-[40px] rotate-90 xl:w-16 xl:h-16"
              />
            </div>
          </div>
          <div className="relative bg-white shadow-md w-[40%] h-full rounded-xl flex items-center px-[1rem] md:px-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 sm:w-[95%] 3xl:w-[65%]">
              Mentorship opportunities
            </span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#7cc7fd8f] rounded-lg w-[36px] p-[.5rem] xl:w-16 xl:h-16 xl:p-0">
              <img
                src={arrowUpWhite}
                alt=""
                className="w-[30px] md:w-[40px] rotate-90 xl:w-16 xl:h-16"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:h-[40%] h-[12vh] lg:h-[22vh]">
          <div className="relative bg-white shadow-md w-[40%] h-full rounded-xl flex items-center px-[1rem] md:px-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 sm:w-[95%] 3xl:w-[65%]">
              Networking events
            </span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#7cc7fd8f] rounded-lg w-[36px]  p-[.5rem] xl:w-16 xl:h-16 xl:p-0">
              <img
                src={arrowUpWhite}
                alt=""
                className="w-[30px] md:w-[40px] rotate-90 xl:w-16 xl:h-16"
              />
            </div>
          </div>
          <div className="relative bg-white shadow-md w-[60%] h-full rounded-xl flex items-center px-[1rem] md:px-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 sm:w-[80%] md:w-[75%]">
              A chance to give back to the community
            </span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#d59dff8f] rounded-lg w-[36px] p-[.5rem] xl:w-16 xl:h-16 xl:p-0">
              <img
                src={arrowUpWhite}
                alt=""
                className="w-[30px] md:w-[40px] rotate-90 xl:w-16 xl:h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
