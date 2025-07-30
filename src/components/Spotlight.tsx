import { SpotLight } from "@/types/spotlightType";
import arrowUpPurple from "@/assets/icons/arrow-up-right-purple.svg";

const Spotlight = () => {
  const spotlightElements: SpotLight[] = [
    {
      picture: "/images/Samuel.jpeg",
      name: "Samuel Bamgbola",
      role: "Gold Ambassador",
      link: "https://www.linkedin.com/in/samuelbamgbola/",
    },
    {
      picture: "/images/L.png",
      name: "Paul Asalu",
      role: "Beta Ambassador",
      link: "https://www.linkedin.com/in/paul-asalu-7a414b186/",
    },
    {
      picture: "/images/bosun.jpg",
      name: "Olatunbosun Ayinla",
      role: "Community Management Lead",
      link: "http://linkedin.com/in/olatunbosun-alli-balogun",
    },
    {
      picture: "/images/debola.jpg",
      name: "Debola Oyeniran",
      role: "Events Team Lead",
      link: "https://www.linkedin.com/in/adebola-oyeniran",
    },
    {
      picture: "/images/acel01.jpg",
      name: "Emeka Aladimma",
      role: "Tutors Team Lead",
      link: "https://www.linkedin.com/in/acel",
    },
    {
      picture: "/images/basit.jpg",
      name: "Abdulbasit Adesokan",
      role: "Design Team Lead",
      link: "https://www.linkedin.com/in/abdulbasitade",
    },
    // {
    //   picture: "/images/lady-yellow-potrait.png",
    //   name: "Dolapo",
    //   role: "CMUL Lead",
    //   link: "#",
    // }
  ];

  return (
    <div className="mt-[6rem] mb-[3rem] flex flex-col items-center">
      <h3 className="text-blue-600 text-[2rem] 3xl:text-[3rem] text-center font-semibold pb-3">
        Core Team Members
      </h3>
      <span className="w-full flex justify-center text-center text-[1.2rem] 3xl:text-[1.5rem]">
        Our Community members presently setting the pace in the tech industry
      </span>

      <div className="flex w-full justify-center">
        <div className="mt-[7rem] mb-[3rem] flex flex-wrap items-center justify-center w-full gap-y-20 max-w-[800px] gap-x-3 min-[770px]:gap-x-6 ">
          {spotlightElements.map((person: SpotLight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md w-[270px] lg:w-[250px] 3xl:w-[15vw] flex flex-col items-center justify-between"
            >
              <div className="w-full flex justify-center">
                <img
                  src={person.picture}
                  alt=""
                  className="w-[151px] object-cover aspect-square rounded-xl -mt-12"
                />
              </div>
              <div>
                <div className="flex flex-col gap-2 mt-4 px-4">
                  <h4 className="text-center font-semibold text-[1.3rem] 3xl:text-[1.8rem]">
                    {person.name}
                  </h4>
                  <span className="flex justify-center text-center 3xl:text-[1.3rem]">
                    {person.role}
                  </span>
                </div>

                <div className="flex justify-center py-8">
                  <a href={person.link}>
                    <button className="flex items-center text-purple-700 3xl:text-[1.3rem]">
                      <span>View Profile</span>
                      <img src={arrowUpPurple} alt="" className="w-[20px]" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center py-[1rem]">
        <button className="flex items-center w-fit font-medium bg-gradient-to-r from-purple-600 to-purple-500 px-[1.5rem] py-[1rem] rounded-[10px] text-white text-[1rem] 3xl:text-[1.5rem]">
          <span>View more</span>
          <img
            src="/icons/arrow-up-right.svg"
            alt=""
            className="w-[20px] 3xl:w-[40px]"
          />
        </button>
      </div> */}
    </div>
  );
};

export default Spotlight;
