"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { OWNER, SOCIAL_LINKS } from "@/lib/constants";

export default function About() {
  return (
    <section id="s-about" className="bg-background py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <div className="bg-background-secondary border-2 border-border rounded-[4px] p-[2.4rem] flex flex-col lg:flex-row gap-[3.2rem]">
            {/* Photo Column */}
            <div className="relative lg:w-[40%] w-full min-h-[500px] max-md:min-h-[350px] max-lg:min-h-[400px]">
              <div
                className="absolute inset-0 rounded-[4px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/foto-lucas.png')" }}
              />
              <div className="absolute bottom-[16px] left-[16px] bg-accent text-[#111111] text-[1.4rem] font-medium px-[16px] py-[6px] rounded-full z-10">
                Ciência da Computação
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:w-[60%] w-full flex flex-col justify-center">
              <span className="text-accent text-[2rem] font-medium mb-[8px]">
                Quem sou
              </span>
              <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[8px]">
                {OWNER.name}
              </h2>
              <p className="text-foreground text-[1.8rem] font-light mb-[1.6rem]">
                {OWNER.title}
              </p>
              <p className="text-accent text-[1.4rem] font-medium mb-[2.4rem]">
                Pós-graduando em {OWNER.postGrad} // {OWNER.postGradInstitution}
              </p>
              <p className="text-gray-text text-[1.8rem] leading-[160%] mb-[3.2rem]">
                {OWNER.bio}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-[1.6rem]">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="bg-background border-2 border-border rounded-[6px] p-[16px] hover:border-accent transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
