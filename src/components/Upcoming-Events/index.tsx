import { useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import { Options } from "@splidejs/splide";
import styles from "./events.module.css";
import "react-splide-ts/css";

import location from "@/assets/icons/location.svg";
import clock from "@/assets/icons/clock.svg";
import { twMerge } from "tailwind-merge";

interface EventData {
  event: string;
  dateTime: string;
  day: string;
  month: string;
  time?: string;
  location?: string;
  event_image?: string;
  register_link?: string;
  attendance?: number;
}

const carouselData: EventData[] = [
  {
    event: "MLSA x SWYI Community Outreach Initiative",
    dateTime: "2024-04-28",
    day: "28",
    month: "Apr",
    time: "9am WAT",
    location: "Makoko",
    event_image: "/images/mlsaxswyi.jpg",
    register_link: "https://forms.office.com/r/zjSSQzVctj",
    attendance: 50,
  },
  {
    event: "Microsoft Build Watch Party",
    dateTime: "2023-04-12",
    day: "12",
    month: "April",
    time: "12pm WAT",
    location: "NITHUB, Beside Faculty of Social Sciences",
    event_image: "/images/watch_party.JPG",
    register_link: "https://forms.office.com/r/6n6NBjFh92",
    attendance: 100,
  },
  {
    event: "An Introduction to the VinuChain Blockchain System",
    dateTime: "2024-06-22",
    day: "22",
    month: "Jun",
    time: "11am WAT",
    location: "RM 255, Faculty of Engineering",
    event_image: "/images/Vinuchain.jpg",
    register_link: "https://forms.office.com/r/6n6NBjFh92",
    attendance: 150,
  },
  {
    event: "Health 'n Tech Fest",
    dateTime: "2024-11-23",
    day: "23",
    month: "Nov",
    time: "11am WAT",
    location: "Unilag Campus",
    event_image: "/images/hntf.jpg",
    register_link: "https://forms.office.com/r/8d1hxssB26",
    attendance: 140,
  },
];

export default function UpcomingEvents() {
  const splideRef = useRef<Splide>(null);

  const options: Options = {
    type: "loop",
    gap: "1rem",
    perPage: 1,
    height: "80vh",
    mediaQuery: "min",
    breakpoints: {
      450: {
        height: "85vh",
      },

      768: {
        perPage: 2,
        height: "95vh",
      },
      900: {
        perPage: 2,
        height: "90vh",
      },
      1024: {
        perPage: 3,
        height: "95vh",
      },
      1250: {
        perPage: 3,
        height: "90vh",
      },
      1350: {
        perPage: 3,
        height: "95vh",
      },
    },
    width: "99vw",
    slideFocus: true,
    focus: 0,
    arrows: false,
    pagination: false,
    perMove: 1,
    keyboard: true,
    updateOnMove: true,
  };

  return (
    <section className={styles.bg}>
      <div className="mb-20">
        <h2 className="carousel-header text-blue-600 font-semibold mb-4 text-4xl text-center leading-[54px]">
          Events
        </h2>
        <p className="text-neutral-950 text-center text-xl leading-8 px-2">
          Checkout our past, ongoing and upcoming activities.
        </p>
      </div>
      <Splide
        aria-labelledby="carousel-header"
        options={options}
        hasTrack={false}
        ref={splideRef}
        className="px-6"
      >
        <SplideTrack>
          {carouselData.map((datum) => (
            <SplideSlide key={datum.event}>
              <SlideContainer datum={datum} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
      <SlideControls splideRef={splideRef} />
    </section>
  );
}

const SlideContainer = ({ datum }: { datum: EventData }) => (
  <div className="slide-container w-full">
    <div className="slide-image-container mb-6">
      <img
        src={datum.event_image}
        alt="Event Poster"
        className="rounded-3xl block w-full h-[200px] object-cover sm:h-[300px]"
      />
    </div>
    <div className="slide-data gap-x-4 grid-cols-[80px_1fr] flex">
      <time
        dateTime={datum.dateTime}
        className="text-blue-600 font-semibold text-center"
      >
        <span className="text-29xl leading-[48px]">{datum.day}</span>
        <br />
        <span className="text-9xl leading-7">{datum.month}</span>
      </time>
      <div className="flex flex-col gap-y-2 text-neutral-950 font-semibold">
        <p className={`font-semibold text-xl`}>{datum.event}</p>
        <p className="text-lg font-normal leading-7 inline-flex items-center gap-x-2">
          <img src={location} alt="" />
          <span>{datum.location || "TBD"}</span>
        </p>
        <p className="text-lg font-normal leading-7 inline-flex items-center gap-x-2">
          <img src={clock} alt="" />
          <span>{datum.time || "TBD"}</span>
        </p>
      </div>
    </div>
    <div className="slide-stats flex flex-col 2xl:flex-row pt-4 justify-between">
      <span className="inline-flex items-center mb-2">
        <PeopleIconRow />
        <div className="mr-4" />
        <span className="text-neutral-950 min-[1560px]:text-lg min-[1560px]:leading-[150%]">
          {datum.attendance}+&nbsp;registered
        </span>
      </span>
      <button
        type="button"
        className={twMerge(styles.registerbtn, "text-sm")}
        onClick={() => window.open(datum.register_link, "_blank")}
      >
        <span>Register now</span>
        <RegisterNow />
      </button>
    </div>
  </div>
);

const SlideControls = ({
  splideRef,
}: {
  splideRef: React.MutableRefObject<Splide> | React.RefObject<Splide>;
}) => (
  <div className="flex w-full justify-center lg:justify-end mt-4 md:mt-4 px-6 items-center gap-x-4">
    <button
      type="button"
      aria-label="Previous slide"
      aria-controls="splide01-track"
      onClick={() => splideRef.current?.go("<")}
      className={styles.arrowbtn}
    >
      <ChevronLeft />
    </button>
    <button
      type="button"
      aria-label="Next slide"
      aria-controls="splide01-track"
      onClick={() => splideRef.current?.go(">")}
      className={styles.arrowbtn}
    >
      <ChevronLeft extraClasses="rotate-180" />
    </button>
    {/* <button type="button" className={styles.vieweventsbtn}>
          <span>View Events</span>
          <ArrowUp />
        </button> */}
  </div>
);

const PeopleIconRow = () => (
  <div className="inline-flex items-center">
    <div className={styles.peopleicon}></div>
    <div className={styles.peopleicon}></div>
    <div
      className={twMerge(styles.peopleicon, "hidden min-[390px]:block")}
    ></div>
    <div
      className={twMerge(styles.peopleicon, "hidden min-[390px]:block")}
    ></div>
    <div
      className={twMerge(styles.peopleicon, "hidden min-[390px]:block")}
    ></div>
  </div>
);

const RegisterNow = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17.5L17 7.5"
      stroke="#8747D6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7.5H17V17.5"
      stroke="#8747D6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeft = ({ extraClasses }: { extraClasses?: string }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={extraClasses ?? ""}
  >
    <path
      d="M18.8877 8.05446L11.6655 15.2767L18.8877 22.4989"
      stroke="white"
      strokeWidth="2.40741"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
