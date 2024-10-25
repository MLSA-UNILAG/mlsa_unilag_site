import styles from "./footer.module.css";

const quickLinks: LinkProps[] = [
  {
    key: "home",
    text: "Home",
    link: "/",
    external: false,
  },
  // {
  //   key: "resources",
  //   text: "Resources",
  //   link: "/resources",
  //   external: false,
  // },
  {
    key: "events",
    text: "Events",
    link: "/events",
    external: false,
  },
  {
    key: "about-us",
    text: "About Us",
    link: "/about-us",
    external: false,
  },
];

const opportunities: LinkProps[] = [
  // {
  //   key: "volunteer",
  //   text: "Volunteer",
  //   link: "/volunteer",
  //   external: false,
  // },
  // {
  //   key: "contribute",
  //   text: "Contribute",
  //   link: "/contribute",
  //   external: false,
  // },
  // {
  //   key: "spotlight",
  //   text: "Spotlight",
  //   link: "/spotlight",
  //   external: false,
  // },
  {
    key: "ambassadors",
    text: "Become an Ambassador",
    link: "https://mvp.microsoft.com/studentambassadors",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer w-full px-12 py-8 xl:px-20 xl:py-16">
      <div className="flex flex-col xl:flex-row gap-x-12 2xl:gap-x-[62px] max-w-[1440px] mx-auto">
        <Card />
        <FooterColumns />
      </div>
      <p className="pt-8 xl:pt-12 font-normal text-white text-center text-sm md:text-lg md:leading-7">
        © 2024 MLSA UNILAG All right reserved
      </p>
    </footer>
  );
}

function Card() {
  return (
    <div className={styles.FooterCard}>
      <div className="flex flex-col lg:flex-row gap-2 items-start">
        <img
          src="/badges/logo-main.svg"
          alt="MLSALogo"
          className="self-center md:self-start"
        />
        <div>
          <p className="text-neutral-950 text-xl md:text-9xl   md:leading-[42px]">
            Microsoft Learn Student Ambassadors
          </p>
          <p className="mb-2 md:mb-4 text-neutral-950 text-lg md:text-3xl font-normal md:leading-8">
            University of Lagos
          </p>
          <p className="text-neutral-700 text-base md:text-lg md:leading-7 italic">
            Be a force for good
          </p>
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b2rhIZyiDIRMq6jycZEfjHlUQUVUU0REQTFCSE40WlFKVjlKU0JaWUxMRi4u"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl py-4 px-4 md:px-6 mt-9 flex items-center gap-x-1 bg-footer w-fit"
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
        </div>
      </div>
    </div>
  );
}

function FooterColumns() {
  return (
    <div className="flex-1 flex flex-col md:flex-row gap-y-12 gap-x-[62px]">
      <FooterLinkTower title="Quick Links" links={quickLinks} />
      <FooterLinkTower title="Opportunities" links={opportunities} />
      <div className="flex-1 flex flex-col">
        <p className={styles.FooterLinkTowerTitle}>Follow Us</p>
        <div className="flex gap-x-2">
          <SocialMediaLink
            link="https://x.com/mlsa_unilag"
            image="/icons/twitter-logo.svg"
            alt="Twitter"
          />
          <SocialMediaLink
            link="https://www.instagram.com/mlsa_unilag"
            image="/icons/instagram-logo.svg"
            alt="Instagram"
          />
        </div>
      </div>
    </div>
  );
}

type LinkProps = {
  key?: string;
  text: string;
  link: string;
  external?: boolean;
};

function FooterLinkTower({
  title,
  links,
}: {
  title: string;
  links: LinkProps[];
}) {
  return (
    <div className="flex flex-col flex-1">
      <p className={styles.FooterLinkTowerTitle}>{title}</p>
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        {links.map((Ilink) => {
          const { link, text, external, key } = Ilink;
          return (
            <Link
              key={key ?? text}
              external={external}
              text={text}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
}

function Link({ text, link, external = false }: LinkProps) {
  return (
    <a
      href={link}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-flex flex-row items-center"
    >
      <span className={styles.FooterLinkTitle}>{text}</span>
      <img
        src="/icons/arrow-top-right.svg"
        alt="Arrow Icon"
        className="size-4 md:size-6 img-white-filter"
      />
    </a>
  );
}

function SocialMediaLink({
  link,
  image,
  alt,
}: {
  link: string;
  image: string;
  alt: string;
}) {
  return (
    <a
      className={styles.SocialMediaLink}
      href={link}
      title={alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={alt} className={styles.SocialMediaImage} />
    </a>
  );
}
