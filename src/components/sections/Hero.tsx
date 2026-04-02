"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import TypeWriter from "../TypeWriter";
import { OWNER } from "@/lib/constants";

export default function Hero() {
  const handleClick = () => {
    const el = document.querySelector("#s-projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 2, delay, ease: "easeInOut" as const }, opacity: { duration: 0.5, delay } },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: { duration: 1, delay },
    }),
  };

  const pulse = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay: number) => ({
      opacity: [0, 0.8, 0.4, 0.8],
      scale: 1,
      transition: {
        opacity: { duration: 3, delay, repeat: Infinity, repeatType: "reverse" as const },
        scale: { duration: 0.6, delay },
      },
    }),
  };

  return (
    <section id="s-home" className="bg-background min-h-[90vh] flex items-center py-[200px] max-lg:py-[120px] max-md:py-[100px] relative">
      <div className="max-w-[1140px] mx-auto px-[2.4rem] flex items-center justify-between w-full">
        <div className="max-w-[600px]">
          {/* Availability badge */}
          <ScrollReveal>
            <div className="flex items-center gap-[8px] mb-[2.4rem]">
              <span className="relative flex h-[10px] w-[10px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-green-500" />
              </span>
              <span className="text-gray-text text-[1.4rem]">
                Aberto a novas oportunidades
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h1 className="text-[4rem] max-md:text-[3rem] font-medium leading-[140%] mb-[2.4rem]">
              Protegendo sistemas com{" "}
              <span className="text-accent">defesa cibernética</span> e infraestrutura segura.
            </h1>
          </ScrollReveal>

          <div className="text-gray-text text-[1.8rem] leading-[160%] mb-[3.2rem]">
            <TypeWriter text="Proteção de dados, governança de TI e controle de acessos em ambientes corporativos Microsoft 365." />
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-[1.6rem]">
              <button
                onClick={handleClick}
                className="bg-accent text-[#111111] text-[1.8rem] font-semibold py-[20px] px-[32px] rounded-[4px] hover:px-[45px] transition-all duration-300 cursor-pointer"
              >
                Conheça meus projetos
              </button>
              <a
                href={OWNER.cvUrl}
                download
                className="border border-border text-foreground text-[1.6rem] font-medium py-[18px] px-[28px] rounded-[4px] hover:border-accent hover:text-accent hover:-translate-y-[2px] transition-all duration-300 flex items-center gap-[8px]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Animated Cyber Shield */}
        <div className="hidden xl:flex items-center justify-center">
          <motion.svg
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
            initial="hidden"
            animate="visible"
          >
            <motion.path d="M210 30L50 100V210C50 320 120 380 210 390C300 380 370 320 370 210V100L210 30Z" stroke="#00FFFF" strokeWidth="2" fill="none" variants={draw} custom={0.2} style={{ opacity: 0.3 }}/>
            <motion.path d="M210 60L80 120V210C80 300 135 355 210 365C285 355 340 300 340 210V120L210 60Z" stroke="#00FFFF" strokeWidth="1.5" fill="none" variants={draw} custom={0.8} style={{ opacity: 0.15 }}/>
            <motion.rect x="170" y="195" width="80" height="60" rx="6" stroke="#00FFFF" strokeWidth="2.5" fill="none" variants={draw} custom={1.4}/>
            <motion.path d="M185 195V175C185 160 195 150 210 150C225 150 235 160 235 175V195" stroke="#00FFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" variants={draw} custom={1.8}/>
            <motion.circle cx="210" cy="220" r="8" fill="#00FFFF" variants={fadeIn} custom={2.4} style={{ opacity: 0.8 }}/>
            <motion.rect x="207" y="225" width="6" height="14" rx="2" fill="#00FFFF" variants={fadeIn} custom={2.4} style={{ opacity: 0.8 }}/>
            <motion.line x1="130" y1="160" x2="170" y2="195" stroke="#00FFFF" strokeWidth="1" variants={draw} custom={2.0} style={{ opacity: 0.2 }}/>
            <motion.line x1="290" y1="160" x2="250" y2="195" stroke="#00FFFF" strokeWidth="1" variants={draw} custom={2.2} style={{ opacity: 0.2 }}/>
            <motion.line x1="130" y1="280" x2="170" y2="255" stroke="#00FFFF" strokeWidth="1" variants={draw} custom={2.4} style={{ opacity: 0.2 }}/>
            <motion.line x1="290" y1="280" x2="250" y2="255" stroke="#00FFFF" strokeWidth="1" variants={draw} custom={2.6} style={{ opacity: 0.2 }}/>
            <motion.circle cx="130" cy="160" r="4" fill="#00FFFF" variants={pulse} custom={2.8}/>
            <motion.circle cx="290" cy="160" r="4" fill="#00FFFF" variants={pulse} custom={3.0}/>
            <motion.circle cx="130" cy="280" r="4" fill="#00FFFF" variants={pulse} custom={3.2}/>
            <motion.circle cx="290" cy="280" r="4" fill="#00FFFF" variants={pulse} custom={3.4}/>
            <motion.text x="100" y="225" fill="#00FFFF" fontSize="48" fontFamily="monospace" variants={fadeIn} custom={2.8} style={{ opacity: 0.25 }}>&lt;</motion.text>
            <motion.text x="290" y="225" fill="#00FFFF" fontSize="48" fontFamily="monospace" variants={fadeIn} custom={3.0} style={{ opacity: 0.25 }}>&gt;</motion.text>
          </motion.svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[3.2rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[8px] max-md:hidden">
        <span className="text-gray-text text-[1.2rem] uppercase tracking-[2px]">Scroll</span>
        <motion.div
          className="w-[1px] h-[40px] bg-accent/40 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
