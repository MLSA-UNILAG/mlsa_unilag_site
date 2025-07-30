import Header from "./Header";
import MobileNav from "./MobileNav";

import arrowUpRightBlue from "@/assets/icons/arrow-up-right-blue.svg";
import arrowUpRightWhite from "@/assets/icons/arrow-up-right-white.svg";
import users from "@/assets/icons/users.svg";
import ascending from "@/assets/icons/ascending.svg";
import unlock from "@/assets/icons/unlock.svg";
import { twMerge } from "tailwind-merge";

const pills = [
  {
    icon: users,
    text: "An enabling environment",
    positionClass: "top-10 left-[5%]",
  },
  {
    icon: ascending,
    text: "Experience exponential growth",
    positionClass: "top-[360px] right-[8%] w-[260px]",
  },
  {
    icon: unlock,
    text: "Unlock a world of learning",
    positionClass: "top-[500px] left-4 w-[260px]",
  },
];

const Hero = () => {
  return (
    <div className="w-full">
      <MobileNav />
      <div className="relative hidden lg:flex items-center justify-center w-full">
        <img
          className="py-6 w-screen"
          src="/images/hero-image-mask-group.png"
          alt="hero mask"
        />
        <Header />
        <div className="flex gap-0 w-full absolute top-0 z-20">
          <div className="w-[40%] text-[32px] font-semibold text-blue-950 min-[1100px]:text-[36px] min-[1200px]:text-[40px] min-[1300px]:text-[44px] min-[1440px]:text-[48px]">
            <h1 className="absolute top-[16vw] left-0 min-[1300px]:top-[15vw] min-[1440px]:top-[210px]">
              Empowering Students
            </h1>
            <div className="w-full flex items-center ml-4 absolute left-0 top-[20.5vw] min-[1200px]:top-[21vw] min-[1300px]:top-[21vw] min-[1440px]:top-[290px] min-[1440px]:ml-6">
              <img
                className="w-10 mr-6 min-[1300px]:w-12 min-[1440px]:w-14"
                src={arrowUpRightBlue}
                alt=""
              />
              <h1 className="leading-[0]">Shaping the future</h1>
            </div>

            <div className="absolute top-[27vw] left-0 min-[1100px]:top-[28vw] min-[1200px]:top-[27vw] min-[1440px]:top-[394px]">
              <div className="w-full h-1/2 text-blue-950 font-normal text-[20px] min-[1200px]:text-[24px] min-[1300px]:text-[26px] min-[1440px]:text-[28px]">
                <h3>
                  Join the{" "}
                  <span className="text-blue-600">
                    Microsoft Learn Student
                    <span className="block">Ambassadors, Unilag</span>
                  </span>
                </h3>
              </div>
              <div className="mt-4 min-[1100px]:mt-6 min-[1300px]:mt-10">
                <button className="flex items-center bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 rounded-[10px] text-white text-sm min-[1200px]:text-lg min-[1440px]:text-[22px]">
                  <span>Join Community</span>
                  <img
                    src={arrowUpRightWhite}
                    alt=""
                    className="w-[20px] min-[1440px]:w-[24px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="">
            {pills.map((pill, idx) => (
              <div
                className={twMerge(
                  "flex items-center border border-blue-500 rounded-2xl py-[10px] px-6 absolute",
                  idx == 0 &&
                    "top-[14vw] left-[38vw] min-[1200px]:left-[39vw] min-[1440px]:top-[215px] min-[1440px]:left-[578px]",
                  idx == 1 &&
                    "top-[29vw] right-[4vw] min-[1440px]:top-[450px] min-[1440px]:right-[45px]",
                  idx == 2 &&
                    "top-[42vw] left-[4vw] min-[1100px]:top-[45vw] min-[1440px]:top-[680px] min-[1440px]:left-[58px]"
                )}
                key={idx}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(32, 57, 97, 0.5) 0%, rgba(0, 120, 212, 0.5) 100%)",
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 border border-blue-300 p-[6px] mr-6">
                  <img src={pill.icon} className="" alt="" />
                </div>
                <em className="not-italic font-semibold tracking-[0] text-lg text-white min-[1440px]:text-[22px]">
                  {pill.text}
                </em>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden flex h-screen w-full mobile-hero rounded-lg relative">
        <div className="w-full h-full absolute top-0 left-0 bg-white opacity-60 z-10"></div>
        <div className="flex flex-col w-full items-center relative z-20 pt-20">
          <h1 className="w-full relative font-segoe text-center text-blue-950 font-semibold text-2xl mb-6">
            <span>Empowering Students</span>
            <span className="block">
              <img
                className="inline-block w-6 m-0"
                src={arrowUpRightBlue}
                alt=""
              />{" "}
              Shaping the future
            </span>
          </h1>

          <div className="flex flex-col w-full items-center gap-6">
            <h3 className="text-[20px] text-center text-[#464646]">
              Join the{" "}
              <span className="text-blue-600 block">
                Microsoft Learn Student Ambassadors, Unilag
              </span>
            </h3>
            <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 w-[240px]  py-4 text-btn rounded-[10px] text-white">
              <span>Join Community</span>
              <img src={arrowUpRightWhite} alt="" className="w-[20px]" />
            </button>
          </div>
          <div className="space-y-2 mt-10 md:flex md:justify-evenly md:items-center md:flex-wrap md:max-w-[650px] md:space-y-0 md:gap-y-4">
            {pills.map((pill, idx) => (
              <div
                className={twMerge(
                  "flex items-center border border-blue-500 rounded-2xl py-[10px] px-2"
                )}
                key={idx}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(32, 57, 97, 0.5) 0%, rgba(0, 120, 212, 0.5) 100%)",
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 border border-blue-300 p-[6px] mr-2">
                  <img src={pill.icon} className="" alt="" />
                </div>
                <em className="not-italic font-semibold tracking-[0] text-sm text-white">
                  {pill.text}
                </em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
