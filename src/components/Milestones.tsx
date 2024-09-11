const Milestones = () => {
    return (
        <div className="mt-[3rem] bg-gradient-to-r from-purple-900 to-purple-400 flex items-center justify-between rounded-xl border-[2px] border-purple-600 h-[16vh] py-[1rem] px-[3rem] w-full text-white">
            <div className="flex items-center gap-6 border-r-[2px] border-purple-800">
                <span className="text-[2rem]">300+</span>
                <span className="text-[1.5rem] w-[60%]">Active members</span>
            </div>
            <div className="flex items-center gap-6 border-r-[2px] border-purple-800">
                <span className="text-[2rem]">5+</span>
                <span className="text-[1.5rem] w-[60%]">Meetups & Events</span>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-[2rem]">1000+</span>
                <span className="text-[1.5rem] w-[60%]">Learning materials</span>
            </div>

        </div>
    )
}

export default Milestones