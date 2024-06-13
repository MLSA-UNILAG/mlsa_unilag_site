import { useSelector, useDispatch } from "react-redux"
import { setCurrentPage } from "../redux/slices/pageSlice"
import { RootState } from '../redux/store'
import { useCallback, useState } from "react"

const Header = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector<RootState>(state => state.currentPage)



  const [sliderPosition, setSliderPosition] = useState(0);

  const goToHome = useCallback(() => {
    dispatch(setCurrentPage("home"));
    setSliderPosition(0)
  }, [dispatch]);

  const goToAbout = useCallback(() => {
    dispatch(setCurrentPage("about-us"));
    setSliderPosition(1)
  }, [dispatch]);

  const goToEvents = useCallback(() => {
    dispatch(setCurrentPage("events"));
    setSliderPosition(2)
  }, [dispatch]);

  const goToResources = useCallback(() => {
    dispatch(setCurrentPage("resources"));
    setSliderPosition(3)
  }, [dispatch]);

  return (
    <div className="px-[4v] w-full h-[12vh] flex items-center justify-between">
      <div className="bg-purple-50 py-[1rem] pr-[1.5rem] flex items-center"><img src="/mlsa.png" alt="" /></div>

      <div className="relative bg-[#ebe7f1b2] w-[62%] text-neutral-500 flex flex-col justify-between pt-[1.2rem] rounded-lg">

        <div className="flex justify-between pb-[1rem]">
          <div className="cursor-pointer w-[25%] flex justify-center" onClick={goToHome}>
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
          </div>

          <div className="cursor-pointer w-[25%] flex justify-center" onClick={goToAbout}>
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
          </div>

          <div className="cursor-pointer w-[25%] flex justify-center" onClick={goToEvents}>
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
          </div>

          <div className="cursor-pointer w-[25%] flex justify-center" onClick={goToResources}>
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
          </div>
        </div>

        <div className="absolute bottom-0 h-[.2rem] flex justify-center w-[25%] transition-all ease-linear" style={{ left: `${sliderPosition*25}%` }} >
          <div className="bg-blue-600 w-[60%]"/>
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