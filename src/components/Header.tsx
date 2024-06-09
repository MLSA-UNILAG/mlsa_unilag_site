import { useSelector, useDispatch } from "react-redux"
import { setCurrentPage } from "../redux/slices/pageSlice"
import { RootState } from '../redux/store'
import { useCallback } from "react"

const Header = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector<RootState>(state => state.currentPage)

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
  }, [dispatch]);

  return (
    <div className="px-[4v] w-full h-[12vh] flex items-center justify-between">
      <div className="bg-purple-50 py-[1rem] pr-[1.5rem] flex items-center"><img src="/mlsa.png" alt="" /></div>

      <div className="bg-[#ebe7f1b2] w-[62%] text-neutral-500 flex justify-between px-[4rem] pt-[1.2rem] rounded-lg">

        <div className="cursor-pointer" onClick={goToHome}>
          <div className="flex flex-row items-center justify-center">
            <div
              className={`${currentPage === "home"
                ? "text-blue-600"
                : ""
                }`}
            >
              Home
            </div>
          </div>

          <div
            className={`h-[1.2rem] border-b-[3px] border-solid border-blue-600 ${currentPage === "home" ? "" : "opacity-[0]"}`}
          />
        </div>

        <div className="cursor-pointer" onClick={goToAbout}>
          <div className="flex flex-row items-center justify-center">
            <div
              className={`${currentPage === "about-us"
                ? "text-blue-600"
                : ""
                }`}
            >
              About Us
            </div>
          </div>

          <div
            className={`h-[1.2rem] border-b-[3px] border-solid border-blue-600 ${currentPage === "about-us" ? "" : "opacity-[0]"}`}
          />
        </div>

        <div className="cursor-pointer" onClick={goToEvents}>
          <div className="flex flex-row items-center justify-center">
            <div
              className={`${currentPage === "events"
                ? "text-blue-600"
                : ""
                }`}
            >
              Events
            </div>
          </div>

          <div
            className={`h-[1.2rem] border-b-[3px] border-solid border-blue-600 ${currentPage === "events" ? "" : "opacity-[0]"}`}
          />
        </div>

        <div className="cursor-pointer" onClick={goToResources}>
          <div className="flex flex-row items-center justify-center">
            <div
              className={`${currentPage === "resources"
                ? "text-blue-600"
                : ""
                }`}
            >
              Resources
            </div>
          </div>

          <div
            className={`h-[1.2rem] border-b-[3px] border-solid border-blue-600 ${currentPage === "resources" ? "" : "opacity-[0]"}`}
          />
        </div>

      </div>

      <div className="bg-purple-50 rounded-bl-[10px] py-[1rem] pl-[1.5rem]">
        <button className="flex items-center font-medium bg-gradient-to-r from-purple-600 to-purple-700 px-[1.5rem] py-[1rem] rounded-[10px] text-white">
          <span>Join Community</span>
          <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px]" />
        </button>
      </div>
    </div>
  )
}

export default Header