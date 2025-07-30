import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/pageSlice";
import { RootState } from "../redux/store";
import { twMerge } from "tailwind-merge";

const MobileNav = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);
  const currentPage = useSelector<RootState>((state) => state.currentPage);
  const goToHome = useCallback(() => {
    dispatch(setCurrentPage("home"));
  }, [dispatch]);

  const goToAbout = useCallback(() => {
    dispatch(setCurrentPage("about-us"));
  }, [dispatch]);

  const goToEvents = useCallback(() => {
    dispatch(setCurrentPage("events"));
  }, [dispatch]);

  const goToResources = useCallback(() => {
    dispatch(setCurrentPage("resources"));
    console.log("Resources");
  }, [dispatch]);

  return (
    <div className="w-full flex lg:hidden items-center justify-center my-4 flex-col gap-0 relative">
      <div className="flex items-center justify-between w-full relative z-40">
        <img width={50} src="/mlsa.png" alt="" />
        <button
          onClick={() => setShowNav(!showNav)}
          className={twMerge(
            `flex w-6 transition-all duration-300 flex-col`,
            showNav && "gap-0",
            !showNav && "gap-1"
          )}
        >
          <div
            className={`w-full h-[2px] bg-blue-500 origin-center transition-all duration-300  ${
              showNav ? "rotate-45 mt-[2px]" : "rotate-0 mt-0"
            }`}
          ></div>
          <div
            className={`w-full h-[2px] bg-blue-500 transition-all duration-300  ${
              showNav ? "hidden" : "flex"
            }`}
          ></div>
          <div
            className={`w-full h-[2px] bg-blue-500 origin-center transition-all duration-300 ${
              showNav ? "-rotate-45 -mt-[2px]" : "rotate-0 mt-0"
            }`}
          ></div>
        </button>
      </div>
      <div
        className={`bg-[#fbf5ff] w-full absolute top-0 left-0 z-30 transition-all duration-300 flex items-center justify-center ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex flex-col items-center gap-6 pt-16 pb-6 text-base">
          <div
            className={`${currentPage === "home" ? "text-blue-600" : ""}`}
            onClick={goToHome}
          >
            Home
          </div>
          <div
            className={`${currentPage === "about-us" ? "text-blue-600" : ""}`}
            onClick={goToAbout}
          >
            About Us
          </div>
          <div
            className={`${currentPage === "events" ? "text-blue-600" : ""}`}
            onClick={goToEvents}
          >
            Events
          </div>
          <div
            className={`${currentPage === "resources" ? "text-blue-600" : ""}`}
            onClick={goToResources}
          >
            Resources
          </div>
          {/* <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 w-full py-3 text-btn rounded-[10px] text-white">
            <span>Join Community</span>
            <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px]" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
