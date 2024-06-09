import { SpotLight } from "@/types/spotlightType"
import { current } from "@reduxjs/toolkit"

const Spotlight = () => {
    const spotlightElements: SpotLight[] = [
        {
            picture: "/images/lady-yellow-potrait.png",
            name: "Samuel Bamgola",
            role: "Gold Ambassador",
            link: "#"
        },
        {
            picture: "/images/lady-yellow-potrait.png",
            name: "Paul Asalu",
            role: "Beta Ambassador",
            link: "#"
        },
        {
            picture: "/images/lady-yellow-potrait.png",
            name: "Emeka Aladimma",
            role: "Alpha Ambassador",
            link: "#"
        },

    ]

    return (
        <div className="mt-[6rem] mb-[3rem] flex flex-col items-center">
            <h3 className="text-blue-600 text-[2rem] text-center font-medium pb-3">Community Spotlight</h3>
            <span className="w-full flex justify-center text-[1.2rem]">Our Community members presently setting the pace in the tech industry</span>
            <div className="mt-[5rem] mb-[3rem] flex items-center justify-between w-[65vw]">
                {spotlightElements.map((person: SpotLight, idx:number) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md w-[20vw] h-[40vh] flex flex-col items-center justify-between">
                        <div className="relative w-full bg-blue-100 flex justify-center">
                            <img src={person.picture} alt="" className="absolute w-[12vw] h-[20vh] rounded-xl top-[-2.5rem]" />
                        </div>
                        <div>
                            <div className="flex flex-col gap-2 mt-[5.5rem]">
                                <h4 className="text-center font-medium text-[1.3rem]">{person.name}</h4>
                                <span className="flex justify-center">{person.role}</span>
                            </div>

                            <div className="flex justify-center py-[2rem]">
                                <a href={person.link}>
                                    <button className="flex items-center text-purple-700">
                                        <span>View profile</span>
                                        <img src="/icons/arrow-up-right-purple.svg" alt="" className="w-[20px]" />
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="flex justify-center py-[1rem]">
                <button className="shadow-lg flex items-center font-medium bg-gradient-to-r from-purple-600 to-purple-700 px-[1.5rem] py-[1rem] rounded-[10px] text-white">
                    <span>View more</span>
                    <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px]" />
                </button>
            </div>
        </div>
    )
}

export default Spotlight