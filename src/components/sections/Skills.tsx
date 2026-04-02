"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeDescription = hoveredSkill
    ? SKILLS.find((s) => s.name === hoveredSkill)?.description
    : null;

  return (
    <section id="s-skills" className="bg-background py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[4.8rem]">
            Conhecimentos <span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-[4.8rem]">
          {/* Text area - hidden on mobile */}
          <div className="hidden lg:flex lg:w-[50%] items-start">
            <p className="text-gray-text text-[1.8rem] leading-[3.2rem] max-w-[500px] transition-opacity duration-300">
              {activeDescription || (
                <em>*passe o cursor do mouse no card para ler*</em>
              )}
            </p>
          </div>

          {/* Skills grid */}
          <div className="lg:w-[50%] w-full">
            <div className="flex flex-wrap gap-[2.4rem]">
              {SKILLS.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 0.05}>
                  <div
                    className="w-[calc(20%-20px)] min-w-[100px] flex-grow h-[130px] max-md:h-[110px] bg-background-secondary border border-border rounded-[4px] flex flex-col items-center justify-center gap-[8px] hover:border-accent hover:-translate-y-[2px] transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={60}
                      height={60}
                    />
                    <span className="lg:hidden text-gray-text text-[1.1rem] uppercase">
                      {skill.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
