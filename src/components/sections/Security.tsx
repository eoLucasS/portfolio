"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { SECURITY_TRIAD } from "@/lib/constants";

export default function Security() {
  return (
    <section id="s-security" className="bg-background-secondary py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[4.8rem] text-center">
            Segurança da Informação <span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3.2rem]">
          {SECURITY_TRIAD.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="bg-background border border-border rounded-[4px] p-[3.2rem] text-center hover:border-accent hover:-translate-y-[4px] transition-all duration-400">
                <div className="h-[90px] flex items-center justify-center mb-[8px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className="text-[2.4rem] font-medium py-[2.4rem]">
                  {item.title}
                </h3>
                <p className="text-gray-text text-[1.8rem] leading-[3.2rem]">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
