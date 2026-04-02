"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export default function CertificationsSection() {
  return (
    <section id="s-certifications" className="bg-background py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[4.8rem]">
            Formação e Certificações <span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        {/* Education - Big highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.4rem] mb-[4.8rem]">
          {EDUCATION.map((edu, index) => (
            <ScrollReveal key={edu.field} delay={index * 0.12}>
              <div className="relative bg-background-secondary border border-border rounded-[4px] p-[3.2rem] overflow-hidden hover:border-accent transition-all duration-400 group h-full">
                {/* Accent line top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Status */}
                <span
                  className={`inline-block text-[1.1rem] font-semibold uppercase tracking-[2px] px-[12px] py-[4px] rounded-full mb-[2rem] ${
                    edu.status === "Em andamento"
                      ? "bg-accent/10 text-accent border border-accent/30"
                      : "bg-green-500/10 text-green-400 border border-green-500/30"
                  }`}
                >
                  {edu.status}
                </span>

                {/* Degree type */}
                <p className="text-accent text-[1.4rem] font-medium mb-[6px]">
                  {edu.degree}
                </p>

                {/* Field */}
                <h3 className="text-foreground text-[2.2rem] max-md:text-[1.8rem] font-medium leading-[140%] mb-[1.6rem]">
                  {edu.field}
                </h3>

                {/* Institution + Period */}
                <div className="flex flex-col gap-[4px]">
                  <span className="text-foreground text-[1.5rem] font-medium">
                    {edu.institution}
                  </span>
                  <span className="text-gray-text text-[1.3rem]">
                    {edu.period}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications - Compact list */}
        <ScrollReveal>
          <h3 className="text-[2rem] font-medium mb-[2.4rem] text-gray-text">
            Certificações e Cursos
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.6rem]">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-[12px] bg-background-secondary border border-border rounded-[4px] p-[2rem] hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Check icon */}
              <div className="w-[28px] h-[28px] rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-[2px] group-hover:bg-accent/20 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div>
                <p className="text-foreground text-[1.4rem] font-medium leading-[140%]">
                  {cert.title}
                </p>
                <p className="text-gray-text text-[1.2rem] mt-[2px]">
                  {cert.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
