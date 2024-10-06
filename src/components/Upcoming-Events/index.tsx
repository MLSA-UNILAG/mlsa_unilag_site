import styles from "./events.module.css";

export default function UpcomingEvents() {
  return (
    <section className={styles.bg}>
      <div className="mb-20">
        <h2 className="text-blue-600 font-medium mb-4 text-4xl text-center leading-[54px]">
          Upcoming Events
        </h2>
        <p className="text-neutral-950 text-center text-3xl leading-8">
          Checkout our upcoming events and programs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[11fr_14fr] max-w-[1440px] mx-auto justify-items-center md:justify-items-start gap-6 md:px-16 min-[1444px]:px-0">
        <div
          className={`rounded-3xl w-full flex flex-col max-w-[484px] lg:max-w-full p-6 bg-white ${styles.event}`}
        >
          <div className="mb-6">
            <img
              src="/images/guy-amebo.png"
              alt="Event Poster"
              className="rounded-3xl w-full -mt-12 aspect-[436/193]"
            />
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-x-4">
            <time
              dateTime="03-15"
              className="text-blue-600 font-medium text-center"
            >
              <span className="text-29xl leading-[48px]">15</span>
              <br />
              <span className="text-9xl leading-7">Mar</span>
            </time>
            <div className="flex flex-col gap-y-2 text-neutral-950 ">
              <p className="font-medium text-9xl leading-[150%]">
                Microsoft Student Summit
              </p>
              <p className="text-lg leading-7 inline-flex items-center gap-x-2">
                <Location />
                <span>NITHUB, Faculty of Social Sciences</span>
              </p>
              <p className="text-lg leading-7 inline-flex items-center gap-x-2">
                <Time />
                <span>3:00 pm WAT</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="inline-flex gap-x-1 items-center">
              <PeopleIconRow />
              <span className="text-neutral-950 text-lg leading-[150%]">
                300+ registered
              </span>
            </span>
            <button
              type="button"
              className={styles.registerbtn}
              onClick={() => alert("Successful")}
            >
              <span>Register now</span>
              <RegisterNow />
            </button>
          </div>
        </div>
        <div className="flex flex-col min-h-full justify-between w-full">
          <div className="hidden md:gap-6 md:flex md:flex-col lg:flex-row">
            <div className="min-w-min flex-1">
              <img
                src="/images/guy-amebo.png"
                alt="Event Poster"
                className="rounded-3xl lg:w-full -mt-6 aspect-square"
              />
            </div>
            <div className="md:hidden lg:block min-w-min flex-1">
              <img
                src="/images/guy-amebo.png"
                alt="Event Poster"
                className="rounded-3xl lg:w-full lg:-mt-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-end mt-4 items-center gap-x-4 lg:gap-x-[3.75rem]">
            <button type="button" className={styles.backbtn}>
              <ChevronLeft />
            </button>
            <button type="button" className={styles.vieweventsbtn}>
              <span>View Events</span>
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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

const ChevronLeft = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

const ArrowUp = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.16016 17.5L17.1602 7.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.16016 7.5H17.1602V17.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
