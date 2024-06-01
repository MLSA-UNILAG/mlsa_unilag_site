const Milestones = () => {
    return (
        <div className="mt-[3rem] bg-gradient-to-r from-purple-900 to-purple-400 flex items-center justify-between rounded-lg border-[2px] border-purple-600 h-[16vh] py-[1rem] px-[3rem] text-white">
            <div className="flex items-center gap-4 border-r-[2px] border-purple-800">
                <span className="text-[3rem]">10k+</span>
                <span className="text-[1.5rem] w-[60%]">Active members</span>
            </div>
            <div className="flex items-center gap-4 border-r-[2px] border-purple-800">
                <span className="text-[3rem]">70+</span>
                <span className="text-[1.5rem] w-[60%]">Meetups & Events</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-[3rem]">15k+</span>
                <span className="text-[1.5rem] w-[60%]">Learning materials</span>
            </div>

        </div>
    )
}

export default Milestones