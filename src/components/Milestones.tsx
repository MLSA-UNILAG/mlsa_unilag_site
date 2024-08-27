const Milestones = () => {
    return (
        <div className="milestone mt-[3rem] flex items-center justify-around rounded-xl border-[2px] border-purple-600 h-[16vh] 2xl:h-[18vh] 3xl:h-[12vh] md:py-[1rem] 2xl:py-[1.2rem] 3xl:py-[1.5rem] lg:px-[3rem] text-white">
            <div className="flex items-center">
                <div className="w-full flex flex-col lg:flex-row lg:gap-4 3xl:gap-8 items-center lg:px-[2rem] px-[1rem]">
                    <span className="text-[1rem] md:text-[1.7rem] lg:text-[2rem] 2xl:text-[2.5rem] 3xl:text-[3.5rem]">300+</span>
                    <span className="text-[.8rem] md:text-[1rem] lg:text-[1.4rem] 2xl:text-[1.8rem] 3xl:text-[2.5rem] text-center">Active members</span>
                </div>
            </div>
            <div className="hidden md:block w-[2px] h-full bg-purple-800 rounded-lg"/>
            <div className="flex items-center">
                <div className="w-full flex flex-col lg:flex-row lg:gap-4 3xl:gap-8 items-center lg:px-[2rem] px-[1rem]">
                    <span className="text-[1rem] md:text-[1.7rem] lg:text-[2rem] 2xl:text-[2.5rem] 3xl:text-[3.5rem]">5+</span>
                    <span className="text-[.8rem] md:text-[1rem] lg:text-[1.4rem] 2xl:text-[1.8rem] 3xl:text-[2.5rem] text-center">Meetups & Events</span>
                </div>
            </div>
            <div className="hidden md:block w-[2px] h-full bg-purple-800 rounded-lg" />
            <div className="flex items-center">
                <div className="w-full flex flex-col lg:flex-row lg:gap-4 3xl:gap-8 items-center lg:px-[2rem] px-[1rem]">
                    <span className="text-[1rem] md:text-[1.7rem] lg:text-[2rem] 2xl:text-[2.5rem] 3xl:text-[3.5rem]">1000+</span>
                    <span className="text-[.8rem] md:text-[1rem] lg:text-[1.4rem] 2xl:text-[1.8rem] 3xl:text-[2.5rem] text-center">Learning materials</span>
                </div>
            </div>

        </div>
    )
}

export default Milestones