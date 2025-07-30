import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/pageSlice";
import { RootState } from "../redux/store";
import { useCallback, useState } from "react";

import arrowUpRight from "@/assets/icons/arrow-up-right-white.svg";

const Header = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector<RootState>((state) => state.currentPage);

  const [sliderPosition, setSliderPosition] = useState(0);

  const goToHome = useCallback(() => {
    dispatch(setCurrentPage("home"));
    setSliderPosition(0);
  }, [dispatch]);

  const goToAbout = useCallback(() => {
    dispatch(setCurrentPage("about-us"));
    setSliderPosition(1);
  }, [dispatch]);

  const goToEvents = useCallback(() => {
    dispatch(setCurrentPage("events"));
    setSliderPosition(2);
  }, [dispatch]);

  const goToResources = useCallback(() => {
    dispatch(setCurrentPage("resources"));
    setSliderPosition(3);
    console.log("Resources");
  }, [dispatch]);

  return (
    <>
      <div className="MOBILE absolute z-40 top-6 md:hidden">
        MOBILE HEADER IS HERE
      </div>
      <div className="hidden absolute z-40 top-6 md:flex px-[4px] w-full h-[12vh] items-center justify-between">
        <div className="py-[1rem] pr-[1.5rem] flex items-center ">
          <img
            className="min-[1440px]:w-[100px] min-[1440px]:relative min-[1440px]:top-6"
            src="/mlsa.png"
            alt=""
          />
        </div>

        <div className="relative bg-[#ebe7f1b2] w-[62%] text-neutral-500 flex flex-col justify-between pt-[1.2rem] rounded-lg">
          <div className="flex justify-between pb-[1rem]">
            <button
              className="cursor-pointer w-[25%] flex justify-center min-[1440px]:text-[22px]"
              onClick={goToHome}
            >
              <div className="flex flex-row items-center justify-center">
                <div
                  className={`${currentPage === "home" ? "text-blue-600" : ""}`}
                >
                  Home
                </div>
              </div>
            </button>

            <button
              className="cursor-pointer w-[25%] flex justify-center min-[1440px]:text-[22px]"
              onClick={goToAbout}
            >
              <div className="flex flex-row items-center justify-center">
                <div
                  className={`${
                    currentPage === "about-us" ? "text-blue-600" : ""
                  }`}
                >
                  About Us
                </div>
              </div>
            </button>

            <button
              className="cursor-pointer w-[25%] flex justify-center min-[1440px]:text-[22px]"
              onClick={goToEvents}
            >
              <div className="flex flex-row items-center justify-center">
                <div
                  className={`${
                    currentPage === "events" ? "text-blue-600" : ""
                  }`}
                >
                  Events
                </div>
              </div>
            </button>

            <button
              className="cursor-pointer w-[25%] flex justify-center min-[1440px]:text-[22px]"
              onClick={goToResources}
            >
              <div className="flex flex-row items-center justify-center">
                <div
                  className={`${
                    currentPage === "resources" ? "text-blue-600" : ""
                  }`}
                >
                  Resources
                </div>
              </div>
            </button>
          </div>

          <div
            className="absolute bottom-0 h-[.2rem] flex justify-center w-[25%] transition-all ease-linear"
            style={{ left: `${sliderPosition * 25}%` }}
          >
            <div className="bg-blue-600 w-[60%]" />
          </div>
        </div>

        <div className="">
          <button className="flex justify-center items-center font-semibold bg-gradient-to-r from-purple-600 to-purple-700 2xs:px-[.7rem] 2xs:text-[.9rem] lg:text-sm lg:px-[1.5rem] py-4 rounded-[10px] text-white min-[1200px]:text-base min-[1200px]:w-[16vw] min-[1440px]:text-[22px] min-[1440px]:w-[238px]">
            <span>Join Community</span>
            <img
              src={arrowUpRight}
              alt=""
              className="w-[20px] min-[1440px]:w-[24px]"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
