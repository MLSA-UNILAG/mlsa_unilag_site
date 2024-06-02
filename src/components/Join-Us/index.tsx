export default function JoinUs() {
  return (
    <section className="py-8 md:py-16 px-4 flex flex-col w-full text-center items-center">
      <h2 className="mb-4 text-blue-600 text-2xl md:text-4xl font-semibold">
        Become a Part of our Community
      </h2>
      <p className="mb-12 text-neutral-950 text-base md:text-3xl">
        Join our active community and get access to loads of resources and
        opportunities
      </p>
      <a
        href="https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b2rhIZyiDIRMq6jycZEfjHlUQUVUU0REQTFCSE40WlFKVjlKU0JaWUxMRi4u"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl py-4 px-4 md:px-6 flex items-center gap-x-1 bg-footer w-fit"
      >
        <span className="text-white font-normal text-base md:text-[22px] md:leading-8">
          Join Community
        </span>
        <img
          src="/icons/arrow-top-right.svg"
          alt="Join Community Icon"
          className="size-4 md:size-6 img-white-filter"
        />
      </a>
    </section>
  );
}
