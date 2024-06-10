import styles from "./faq.module.css";

type FAQ = {
  key?: number;
  question: string;
  answer: React.ReactNode;
};

function CustomLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 break-words"
    >
      {title}
    </a>
  );
}

const FAQContent: FAQ[] = [
  {
    key: 1,
    question: "What is MLSA UNILAG?",
    answer:
      "MLSA stands for Microsoft Learn Student Ambassadors, University of Lagos",
  },
  {
    key: 2,
    question: "How do I join the MLSA community?",
    answer: (
      <>
        Click on this{" "}
        <CustomLink href="https://forms.office.com/r/aQkzLcyXG8" title="link" />
        , you will be redirected to a form. After you complete and submit the
        form, you will subsequently be sent a mail with the link to join the
        community.
      </>
    ),
  },
  {
    key: 3,
    question: "Do I have to pay any fees before I can join the community?",
    answer: "NO! The community is free for all.",
  },
  {
    key: 4,
    question: "What resources do I get access to when I join the community?",
    answer: (
      <>
        Our community blog at{" "}
        <CustomLink
          href="https://dev.to/mlasunilag"
          title="https://dev.to/mlasunilag"
        />
        , and the numerous resources at{" "}
        <CustomLink
          href="https://learn.microsoft.com/en-us/"
          title="https://learn.microsoft.com/en-us/"
        />
      </>
    ),
  },
  {
    key: 5,
    question: " How can I gain access to MLSA community events?",
    answer: `
    By being an active member of the community. Be on the lookout for events
    as they come, and make sure to register and attend. Also, don't forget
    to take great pictures. 😉
    `,
  },
  {
    key: 6,
    question: "How can I contribute to the growth of MLSA UNILAG?",
    answer: `
        Be active in the community, and participate in the many activities
        organized by the MLSA. If you are hungry for more, some volunteer roles
        open up on a rolling basis. So be on the lookout!
      `,
  },
];

export default function FAQ() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-12 xl:px-20 min-[1440px]:px-36">
      <h2 className="mb-4 text-center text-blue-600 text-2xl md:text-4xl font-semibold">
        FAQs
      </h2>
      <p className="mb-12 text-neutral-950 text-center text-base md:text-3xl">
        Everything you need to know about
        <span className="text-blue-600"> MLSA UNILAG</span>
      </p>
      <div className="flex flex-col gap-y-4">
        {FAQContent.map((faq) => (
          <FAQDetail
            key={faq.key}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

function FAQDetail({ question, answer }: FAQ) {
  return (
    <div className={styles.FAQContainer}>
      <details className="text-neutral-950 cursor-pointer w-full text-3xl max-w-full overflow-hidden group">
        <summary className="w-full list-none block marker:hidden font-medium">
          <div className="inline-flex w-full items-center justify-between">
            <div className="inline-flex items-center gap-x-6">
              <IconHelpCircle />
              {question}
            </div>
            <IconChevronUp className="transform transition-transform duration-300 group-open:rotate-180" />
          </div>
        </summary>
      </details>
      <div className={`md:ml-12 ${styles.FAQContent}`}>{answer}</div>
    </div>
  );
}

function IconHelpCircle() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block"
    >
      <path
        d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
        stroke="#0078D4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.08984 9.49996C9.32495 8.83163 9.789 8.26807 10.3998 7.90909C11.0106 7.55012 11.7287 7.4189 12.427 7.53867C13.1253 7.65844 13.7587 8.02148 14.2149 8.56349C14.6712 9.10549 14.9209 9.79148 14.9198 10.5C14.9198 12.5 11.9198 13.5 11.9198 13.5"
        stroke="#0078D4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.5H12.01"
        stroke="#0078D4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronUp({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15.5L12 9.5L6 15.5"
          stroke="#0078D4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
