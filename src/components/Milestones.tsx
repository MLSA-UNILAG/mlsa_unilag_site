const Milestones = () => {
    return (
        <div className="milestone mt-[3rem] flex items-center justify-around rounded-xl border-[2px] border-purple-600 h-[16vh] 3xl:h-[12vh] py-[1rem] 3xl:py-[1.5rem] px-[3rem] text-white">
            <div className="flex items-center">
                <div className="w-full flex gap-4 3xl:gap-8 items-center px-[2rem]">
                    <span className="text-[2rem] 3xl:text-[3.5rem]">300+</span>
                    <span className="text-[1.5rem] 3xl:text-[2.5rem]">Active members</span>
                </div>
            </div>
            <div className="w-[2px] h-full bg-purple-800 rounded-lg"/>
            <div className="flex items-center">
                <div className="w-full flex gap-4 3xl:gap-8 items-center px-[2rem]">
                    <span className="text-[2rem] 3xl:text-[3.5rem]">5+</span>
                    <span className="text-[1.5rem] 3xl:text-[2.5rem]">Meetups & Events</span>
                </div>
            </div>
            <div className="w-[2px] h-full bg-purple-800 rounded-lg" />
            <div className="flex items-center">
                <div className="w-full flex gap-4 3xl:gap-8 items-center px-[2rem]">
                    <span className="text-[2rem] 3xl:text-[3.5rem]">1000+</span>
                    <span className="text-[1.5rem] 3xl:text-[2.5rem]">Learning materials</span>
                </div>
            </div>

        </div>
    )
}

export default Milestones