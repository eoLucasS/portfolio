"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
  const [activeId, setActiveId] = useState(EXPERIENCES[0].id);
  const active = EXPERIENCES.find((e) => e.id === activeId)!;

  return (
    <section id="s-experience" className="bg-background-secondary py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[4.8rem]">
            Experiências <span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col xl:flex-row gap-[3.2rem]">
          {/* Sidebar */}
          <div className="xl:w-[25%] flex xl:flex-col flex-row gap-0 overflow-x-auto">
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`text-left bg-background py-[2.4rem] px-[3.2rem] border-l-4 transition-all duration-300 min-w-[180px] xl:min-w-0 cursor-pointer ${
                  exp.id === activeId
                    ? "border-l-accent text-accent font-semibold"
                    : "border-l-background text-gray-text font-normal hover:text-foreground"
                }`}
              >
                <span className="text-[1.6rem] block">{exp.role}</span>
                <span className="text-[1.2rem] text-gray-text font-normal block mt-[2px]">
                  {exp.company}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="xl:w-[75%]">
            <ScrollReveal key={activeId}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-[8px]">
                <div>
                  <h3 className="text-[2.4rem] font-normal">{active.role}</h3>
                  {active.subtitle && (
                    <span className="text-accent text-[1.4rem] font-medium">
                      {active.subtitle}
                    </span>
                  )}
                </div>
                <span className="text-gray-text text-[1.6rem] mt-[4px] sm:mt-[6px] shrink-0">
                  {active.period}
                </span>
              </div>
              <p className="text-foreground text-[2rem] font-medium mb-[1.6rem]">
                {active.company}
              </p>
              <p className="text-gray-text text-[1.8rem] leading-[170%]">
                {active.description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
