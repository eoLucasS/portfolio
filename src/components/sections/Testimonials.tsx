"use client";

import ScrollReveal from "../ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="s-testimonials" className="bg-background py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[2rem]">
            O que dizem sobre mim <span className="text-accent">.</span>
          </h2>
          <p className="text-gray-text text-[1.6rem] mb-[4.8rem]">
            Recomendações de colegas e profissionais no LinkedIn
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.4rem]">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.12}>
              <div className="bg-background-secondary border border-border rounded-[4px] p-[3.2rem] hover:border-accent/40 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent/20 mb-[2rem] shrink-0"
                >
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                </svg>

                {/* Text */}
                <p className="text-gray-text text-[1.5rem] leading-[170%] flex-1 mb-[2.4rem]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-[12px] pt-[1.6rem] border-t border-border">
                  <div className="w-[40px] h-[40px] rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.3rem] font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-foreground text-[1.4rem] font-medium leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-text text-[1.2rem] leading-tight mt-[2px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
