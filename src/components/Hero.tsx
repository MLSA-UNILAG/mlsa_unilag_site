import Header from "./Header"

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center max-w-screen-xl">
            <img className="py-6" src='/images/hero-image-mask-group.png' alt="hero mask" />
            <Header />
            <div className='flex gap-0 w-full h-[75%] absolute top-0 z-20'>
                <div className='w-[40%] h-full flex flex-col gap-0'>
                    <div className='w-full h-1/3 flex gap-0 flex-col'>
                    </div>
                    <div className='w-full h-[30%] flex gap-0 flex-col text-[44px] font-segoe text-blue-950 font-bold'>
                        <div className='w-full h-1/2'>
                            <h1>Empowering Students</h1>
                        </div>
                        <div className='w-full h-1/2 flex gap-0 ml-12'>
                            <div>
                                <img src="/images/arrow-up-right.svg" alt="" />
                            </div>
                            <h1>Shaping the future</h1>
                        </div>
                    </div>
                    <div className='w-full h-1/3 flex gap-0 flex-col'>
                        <div className='w-full h-1/2 text-blue-950 font-normal text-[22px]'>
                            <h3>Join the <span className='text-blue-600'>Microsoft Learn Student Ambassadors, Unilag</span></h3>
                        </div>
                        <div className='w-full h-1/2 mt-10'>
                            <button className="flex items-center   bg-gradient-to-r from-purple-600 to-purple-700 px-[1.5rem] py-[1rem] rounded-[10px] text-white">
                                <span>Join Community</span>
                                <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px]" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-[60%] h-full flex relative'>
                    <img className='absolute -bottom-1/4 -left-1/2 w-[380px]' src="/images/pill-1.png" alt="text-pill" />
                    <img className='absolute bottom-0 right-0 w-[380px]' src="/images/pill-2.png" alt="text-pill" />
                    <img className='absolute top-1/3 left-16 w-[380px]' src="/images/pill-3.png" alt="text-pill" />
                </div>
            </div>
        </div>
    )
}

export default Hero

