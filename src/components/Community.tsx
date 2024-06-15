const Community = () => {
  return (
    <div className="my-[3rem] 3xl:mt-[5rem] flex items-center h-[40vh] 3xl:h-[30vh] gap-6">
      <div className="w-[40%] flex flex-col h-full">
        <div className="h-[70%] bg-white rounded-t-xl rounded-br-xl pt-[1.5rem] px-[2rem]">
          <h2 className="text-blue-600 text-[2rem] 3xl:text-[3rem] font-medium pb-[1rem] text-center">Why Join Our Community</h2>
          <p className="text-[1.1rem] 3xl:text-[1.8rem]">
            We are on a mission to equip students with the latest Microsoft
            tech skills and empower them to lead tech innovation on campus and beyond.
          </p>
        </div>


        <div className="h-[30%] flex justify-between bg-white bg-gradient-to-b from-white to-purple-50 rounded-bl-xl rounded-br-xl">
          <div className="flex items-end bg-white rounded-b-xl w-[50%] 3xl:w-[65%] pl-[2rem] pb-[.8rem]">
            <img src="/icons/arrow-up-right-blue.svg" alt="" className="w-[45px] 3xl:w-[80px] rotate-90" />
          </div>
          <div className="bg-purple-50 border-t-purple-50 border-l-purple-50 border-r-transparent border-b-transparent border-[.5px] pt-[1.5rem] pl-[1.5rem] rounded-tl-xl w-[50%] 3xl:w-[45%] flex justify-end">
            <button className="flex items-center w-fit font-medium bg-gradient-to-r from-purple-600 to-purple-500 px-[1.5rem] py-[1rem] rounded-[10px] text-white text-[1rem] 3xl:text-[1.5rem]">
              <span>Join Community</span>
              <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px] 3xl:w-[40px]" />
            </button>
          </div>
        </div>
      </div>



      <div className="flex flex-col w-[60%] h-full text-[1.4rem] 3xl:text-[2rem] gap-10">
        <div className="flex items-center gap-4 h-[50%]">
          <div className="relative bg-white shadow-md w-[60%] h-full rounded-xl flex items-center pl-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 w-[70%] 3xl:w-[65%]">Exclusive learning resources</span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#d59dff8f] rounded-lg w-fit p-[.5rem]">
              <img src="/icons/arrow-up-right.svg" alt="" className="w-[40px] rotate-90" />
            </div>
          </div>
          <div className="relative bg-white shadow-md w-[40%] h-full rounded-xl flex items-center pl-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 w-[70%] 3xl:w-[65%]">Mentorship opportunities</span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#7cc7fd8f] rounded-lg w-fit p-[.5rem]">
              <img src="/icons/arrow-up-right.svg" alt="" className="w-[40px] rotate-90" />
            </div>
          </div>
        </div>


        <div className="flex items-center gap-4 h-[50%]">
          <div className="relative bg-white shadow-md w-[40%] h-full rounded-xl flex items-center pl-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 w-[70%] 3xl:w-[65%]">Networking events</span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#7cc7fd8f] rounded-lg w-fit p-[.5rem]">
              <img src="/icons/arrow-up-right.svg" alt="" className="w-[40px] rotate-90" />
            </div>
          </div>
          <div className="relative bg-white shadow-md w-[60%] h-full rounded-xl flex items-center pl-[1.5rem] 3xl:pl-[2rem]">
            <span className="text-blue-600 w-[75%]">A chance to give back to the community</span>
            <div className="float absolute top-[-1.5rem] right-[1rem] bg-[#d59dff8f] rounded-lg w-fit p-[.5rem]">
              <img src="/icons/arrow-up-right.svg" alt="" className="w-[40px] rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community