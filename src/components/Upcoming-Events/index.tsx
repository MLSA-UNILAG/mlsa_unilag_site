import { useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import { Options } from "@splidejs/splide";
import styles from "./events.module.css";
import "react-splide-ts/css";

interface EventData {
  event: string;
  dateTime: string;
  day: string;
  month: string;
  time?: string;
  location?: string;
  event_image?: string;
  register_link?: string;
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
    register_link: "https://forms.office.com/r/zjSSQzVctj"
  },
  {
    event: "Microsoft Build Watch Party",
    dateTime: "2023-04-12",
    day: "12",
    month: "April",
    time: "12pm WAT",
    location: "NITHUB, Beside Faculty of Social Sciences",
    event_image: "/images/watch_party.JPG",
    register_link: "https://forms.office.com/r/6n6NBjFh92"
  },
  {
    event: "An Introduction to the VinuChain Blockchain System",
    dateTime: "2024-06-22",
    day: "22",
    month: "Jun",
    time: "11am WAT",
    location: "RM 255, Faculty of Engineering",
    event_image: "/images/Vinuchain.jpg",
    register_link: "https://forms.office.com/r/6n6NBjFh92"
  },
  {
    event: "Health ‘n Tech Fest",
    dateTime: "2024-11-23",
    day: "23",
    month: "Nov",
    time: "11am WAT",
    location: "Unilag Campus",
    event_image: "/images/hntf.jpg",
    register_link: "https://forms.office.com/r/8d1hxssB26"
  },
];

export default function UpcomingEvents() {
  const splideRef = useRef<Splide>(null);

  const options: Options = {
    type: "slide",
    gap: "1rem",
    perPage: 1,
    height: "100vh",
    mediaQuery: "min",
    breakpoints: {
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
        height: "80vh",
      },
      1440: {
        height: "60vh",
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
        <h2 className="carousel-header text-blue-600 font-medium mb-4 text-4xl text-center leading-[54px]">
          Events
        </h2>
        <p className="text-neutral-950 text-center text-3xl leading-8">
          Checkout our upcoming events and programs
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
        className="rounded-3xl"
      />
    </div>
    <div className="slide-data gap-x-4 grid-cols-[80px_1fr]">
      <time
        dateTime={datum.dateTime}
        className="text-blue-600 font-medium text-center"
      >
        <span className="text-29xl leading-[48px]">{datum.day}</span>
        <br />
        <span className="text-9xl leading-7">{datum.month}</span>
      </time>
      <div className="flex flex-col gap-y-2 text-neutral-950 ">
        <p
          className={`font-medium 
                        ${
                          datum.event.length > 20
                            ? "text-xl"
                            : "text-9xl leading-[150%]"
                        }`}
        >
          {datum.event}
        </p>
        <p className="text-lg leading-7 inline-flex items-center gap-x-2">
          <Location />
          <span>{datum.location || "TBD"}</span>
        </p>
        <p className="text-lg leading-7 inline-flex items-center gap-x-2">
          <Time />
          <span>{datum.time || "TBD"}</span>
        </p>
      </div>
    </div>
    <div className="slide-stats flex-col 2xl:flex-row pt-4 justify-between items-center mt-6">
      <span className="inline-flex gap-x-1 items-center">
        <PeopleIconRow />
        <span className="text-neutral-950 min-[1560px]:text-lg min-[1560px]:leading-[150%]">
          300+&nbsp;registered
        </span>
      </span>
      <button
        type="button"
        className={styles.registerbtn}
        onClick={
          () => window.open(datum.register_link, '_blank')
        }
      >
        <span>Register&nbsp;now</span>
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
  <div className="flex w-full justify-center lg:justify-end mt-12 md:mt-4 px-6 items-center gap-x-4">
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

const Location = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
      stroke="#656565"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      stroke="#656565"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Time = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#656565"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6V12H7.5"
      stroke="#656565"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PeopleIconRow = () => (
  <div className="inline-flex items-center">
    <div className={styles.peopleicon}></div>
    <div className={styles.peopleicon}></div>
    <div className={styles.peopleicon}></div>
    <div className={styles.peopleicon}></div>
    <div className={styles.peopleicon}></div>
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

// const ArrowUp = () => (
//   <svg
//     width="25"
//     height="25"
//     viewBox="0 0 25 25"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M7.16016 17.5L17.1602 7.5"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M7.16016 7.5H17.1602V17.5"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );
