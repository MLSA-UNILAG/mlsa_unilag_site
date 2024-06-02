const Community = () => {
  return (
    <div className="flex items-center h-[30vh]">
      <div className="w-[40%] flex flex-col">
        <div className="bg-white rounded-t-xl rounded-br-xl">
          <h2>Why Join Our Community</h2>
          <p>
            We are on a mission to equip students with the latest Microsoft
            tech skills and empower them to lead tech innovation on campus and beyond.
          </p>
        </div>



        <div className="flex justify-between bg-white bg-gradient-to-b from-white to-purple-50 rounded-bl-xl rounded-br-xl">
          <div className="bg-white rounded-b-xl w-[50%]">
            <img src="/icons/arrow-up-right-blue.svg" alt="" className="w-[50px] rotate-90" />
          </div>
          <div className="bg-purple-50 border-t-purple-50 border-l-purple-50 border-r-transparent border-b-transparent border-[.5px] pt-[1.5rem] pl-[1.5rem] rounded-tl-xl w-[50%] flex justify-end">
            <button className="flex items-center w-fit font-medium bg-gradient-to-r from-purple-600 to-purple-500 px-[1.5rem] py-[1rem] rounded-[10px] text-white">
              <span>Join Community</span>
              <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[]"></div>
    </div>
  )
}

export default Community