"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Mapeamento",
    description: "Entendo o ambiente, os riscos e os ativos críticos antes de qualquer ação.",
  },
  {
    number: "02",
    title: "Implementação",
    description: "Aplico controles alinhados a frameworks como ITIL, ISO 27001 e boas práticas Microsoft.",
  },
  {
    number: "03",
    title: "Monitoramento",
    description: "Analiso logs, investigo alertas e refino políticas de forma contínua.",
  },
  {
    number: "04",
    title: "Documentação",
    description: "Registro tudo. Política sem documento não existe. Processo sem métrica não evolui.",
  },
];

export default function Methodology() {
  return (
    <section className="bg-background-secondary py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[2rem]">
            Como trabalho <span className="text-accent">.</span>
          </h2>
          <p className="text-gray-text text-[1.6rem] mb-[4.8rem] max-w-[600px]">
            Minha abordagem para proteger ambientes corporativos segue um ciclo estruturado e repetível.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[2.4rem]">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-background border border-border rounded-[4px] p-[3.2rem] hover:border-accent hover:-translate-y-[2px] transition-all duration-400 h-full">
                {/* Number */}
                <span className="text-accent/20 text-[4.8rem] font-semibold leading-none block mb-[1.6rem] group-hover:text-accent/40 transition-colors duration-300">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-foreground text-[2rem] font-medium mb-[1.2rem]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-text text-[1.5rem] leading-[160%]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
