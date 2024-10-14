import Header from "./Header";
import MobileNav from "./MobileNav";

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
        <div className="flex gap-0 w-full h-[75%] absolute top-0 z-20">
          <div className="w-[40%] h-full flex flex-col gap-0">
            <div className="w-full h-1/3 flex gap-0 flex-col"></div>
            <div className="w-full h-[30%] flex gap-0 flex-col text-[32px] text-header font-segoe text-blue-950 font-bold">
              <div className="w-full h-1/2 relative">
                <h1 className="absolute bottom-0 left-0">
                  Empowering Students
                </h1>
              </div>
              <div className="w-full h-1/2 flex items-center gap-0 ml-12">
                <div>
                  <img src="/images/arrow-up-right.svg" alt="" />
                </div>
                <h1 className="leading-[0]">Shaping the future</h1>
              </div>
            </div>
            <div className="w-full h-1/3 flex gap-0 flex-col">
              <div className="w-full h-1/2 text-blue-950 font-normal text-[20px] text-sub">
                <h3>
                  Join the{" "}
                  <span className="text-blue-600">
                    Microsoft Learn Student Ambassadors,
                    <span className="block">Unilag</span>
                  </span>
                </h3>
              </div>
              <div className="w-full h-1/2 mt-10">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 px-[1.5rem] py-[1rem] text-btn rounded-[10px] text-white">
                  <span>Join Community</span>
                  <img
                    src="/icons/arrow-up-right.svg"
                    alt=""
                    className="w-[20px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-full flex relative">
            <img
              className="absolute -bottom-1/4 -left-1/2 w-[380px] pill"
              src="/images/pill-1.png"
              alt="text-pill"
            />
            <img
              className="absolute bottom-0 right-0 w-[380px] pill"
              src="/images/pill-2.png"
              alt="text-pill"
            />
            <img
              className="absolute top-1/3 left-16 w-[380px] pill"
              src="/images/pill-3.png"
              alt="text-pill"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex h-screen w-full items-center mobile-hero rounded-lg relative">
        <div className="w-full h-full absolute top-0 left-0 bg-white opacity-60 z-10"></div>
        <div className="flex flex-col w-full items-center gap-16 relative z-20">
          <div className="flex flex-col items-center w-full gap-2">
            <div className="w-full relative font-segoe text-center text-blue-950 font-bold text-[32px]">
              <h1>Empowering Students, Shaping the future</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 w-full items-center justify-center">
            <img className="w-[45%]" src="/images/pill-1.png" alt="text-pill" />
            <img className="w-[45%]" src="/images/pill-2.png" alt="text-pill" />
            <img className="w-[45%]" src="/images/pill-3.png" alt="text-pill" />
          </div>
          <div className="flex flex-col w-full items-center gap-6">
            <h3 className="text-[20px] text-center">
              Join the{" "}
              <span className="text-blue-600">
                Microsoft Learn Student Ambassadors, Unilag
              </span>
            </h3>
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 px-[1.5rem] py-[1rem] text-btn rounded-[10px] text-white">
              <span>Join Community</span>
              <img
                src="/icons/arrow-up-right.svg"
                alt=""
                className="w-[20px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
