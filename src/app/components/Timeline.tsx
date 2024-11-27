import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Timeline } from "../components/ui/timeline";

const TimelineData = [
    {
        title: "2024",
        content: (
          <div>
            <p className="dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Built and launched this Portfolio website from scratch using Next.js
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/2024-1.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/2024-2.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/2024-3.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/2024-4.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Mid 2023",
        content: (
          <div>
            <p className="dark:text-neutral-200 text-xs md:text-sm font-sans mb-8">
              I was in my second year at Swinburne University. 
            </p>
            <p className="dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              I focused on learning Kotlin for Mobile Development while also understanding the concepts of Cybersecurity.
            </p>
            <div className="grid gap-4">
              <Image
                src="/images/cinerate.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 md:h-60 lg:h-80 w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Early 2022",
        content: (
          <div>
            <p className="dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Started my Computer Science Degree at Swinburne University.
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center dark:text-neutral-300 text-xs md:text-sm mb-1">
                <FaArrowRight />Built various websites to practice and test my skills.
              </div>
              <div className="flex gap-2 items-center dark:text-neutral-300 text-xs md:text-sm mb-1">
                <FaArrowRight />Took a gap year to learn about cryptocurrency and study programming.
              </div>
              <div className="flex gap-2 items-center dark:text-neutral-300 text-xs md:text-sm mb-1">
                <FaArrowRight />Took a diploma course in Informatics Management and graduated with a 4.0 GPA.
              </div>
              <div className="flex gap-2 items-center dark:text-neutral-300 text-xs md:text-sm mb-1">
                <FaArrowRight />Finished high school in Mathematics and Computer Science with an average score of 89.8.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            </div>
          </div>
        ),
      },
    ];

const Portfolio = () => {
  return (
    <section id="timeline">
      <Timeline data={TimelineData} />
    </section>
  );
};

export default Portfolio;
