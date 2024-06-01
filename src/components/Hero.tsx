const Hero = () => {
  return (
    <div className="relative mt-[1rem] h-[100vh] bg-[url('/images/students-collab-2.png')] bg-cover">
      <div className="flex flex-col pt-[15%] w-fit">
        <div className="text-blue-950 text-[3rem] font-medium">
          <h1 className="bg-white pr-[2rem] rounded-tr-lg w-fit">Empowering Students</h1>
          <h1 className="bg-white pr-[2rem] rounded-r-lg w-fit flex items-center gap-3 pl-[3rem]"><img src="/icons/arrow-up-right-blue.svg" alt="" className="w-[50px]" />Shaping the future</h1>
        </div>

        <div className="text-neutral-800 text-[1.5rem] w-[75%] flex flex-col">
          <span className="bg-white pr-[2rem] rounded-br-lg pt-[2rem] pb-[1rem]">
            Join the <span className="text-blue-600 w-fit">Microsoft Learn Student</span>
          </span>
          <span className="bg-white pr-[2rem] rounded-br-lg text-blue-600 w-fit pb-[1rem]">Ambassadors, Unilag</span>
        </div>

        <div className="bg-white pr-[2rem] rounded-br-lg w-fit pt-[2rem] pb-[1rem]">
          <button className="flex items-center w-fit font-medium bg-gradient-to-r from-purple-600 to-purple-500 px-[1.5rem] py-[1rem] rounded-[10px] text-white">
            <span>Join Community</span>
            <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px]" />
          </button>
        </div>

      </div>

      <span className="absolute top-[85%] right-[70%] text-[1.1rem] gap-3 flex w-fit items-center text-white border border-blue-500 rounded-lg bg-[#0c92eb88] px-[1rem] py-[.4rem]">
        <div className="bg-blue-600 border border-blue-300 w-fit p-[.4rem] rounded"><img src="/icons/lock-open-1.svg" alt="" className="w-[22px]" /></div>
        Unlock a world of learning
      </span>
      <span className="absolute top-[30%] right-[25%] text-[1.1rem] gap-3 flex w-fit items-center text-white border border-blue-500 rounded-lg bg-[#0c92eb88] px-[1rem] py-[.4rem]">
        <div className="bg-blue-600 border border-blue-300 w-fit p-[.4rem] rounded"><img src="/icons/lock-open-1.svg" alt="" className="w-[22px]" /></div>
        An enabling environment
      </span>
      <span className="absolute top-[55%] right-[5%] text-[1.1rem] gap-3 flex w-fit items-center text-white border border-blue-500 rounded-lg bg-[#0c92eb88] px-[1rem] py-[.4rem]">
        <div className="bg-blue-600 border border-blue-300 w-fit p-[.4rem] rounded"><img src="/icons/lock-open-1.svg" alt="" className="w-[22px]" /></div>
        Experience exponential growth
      </span>
    </div>
  )
}

export default Hero