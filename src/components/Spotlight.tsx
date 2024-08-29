import { SpotLight } from "@/types/spotlightType"

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
            <h3 className="text-blue-600 text-[2rem] 3xl:text-[3rem] text-center font-medium pb-3">Community Spotlight</h3>
            <span className="w-full flex justify-center text-center text-[1.2rem] 3xl:text-[1.5rem]">Our Community members presently setting the pace in the tech industry</span>

            <div className="flex w-full justify-center">
                <div className="mt-[5rem] mb-[3rem] flex flex-wrap items-center lg:justify-between justify-center w-[65vw] 3xl:w-[50vw] gap-y-[3.5rem]">
                    {spotlightElements.map((person: SpotLight) => (
                        <div className="bg-white rounded-xl shadow-md w-[260px] 3xl:w-[15vw] xs:h-[55vh] md:h-[60vh] xl:h-[45vh] 3xl:h-[33vh] flex flex-col items-center justify-between">
                            <div className="relative w-full bg-blue-100 flex justify-center">
                                <img src={person.picture} alt="" className="absolute 2xs:w-[120px] xs:h-[25vh] md:w-[155px] md:h-[25vh] xl:h-[20vh] 2xs:h-[22vh] 3xl:h-[17vh] 3xl:w-[10vw] rounded-xl top-[-2.5rem]" />
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 mt-[5.5rem]">
                                    <h4 className="text-center font-medium text-[1.3rem] 3xl:text-[1.8rem]">{person.name}</h4>
                                    <span className="flex justify-center 3xl:text-[1.3rem]">{person.role}</span>
                                </div>

                                <div className="flex justify-center py-[2rem]">
                                    <a href={person.link}>
                                        <button className="flex items-center text-purple-700 3xl:text-[1.3rem]">
                                            <span>View profile</span>
                                            <img src="/icons/arrow-up-right-purple.svg" alt="" className="w-[20px]" />
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center py-[1rem]">
                <button className="flex items-center w-fit font-medium bg-gradient-to-r from-purple-600 to-purple-500 px-[1.5rem] py-[1rem] rounded-[10px] text-white text-[1rem] 3xl:text-[1.5rem]">
                    <span>View more</span>
                    <img src="/icons/arrow-up-right.svg" alt="" className="w-[20px] 3xl:w-[40px]" />
                </button>
            </div>
        </div>
    )
}

export default Spotlight