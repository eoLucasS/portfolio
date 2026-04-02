"use client";

import ScrollReveal from "../ScrollReveal";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="s-projects" className="bg-background py-[96px] max-md:py-[48px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[4.8rem]">
            Projetos <span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[3.2rem]">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div
                className="bg-background-secondary border border-border rounded-[4px] p-[3.2rem] hover:-translate-y-[4px] transition-all duration-400 group"
                style={{ borderTop: `3px solid ${project.color}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = project.color;
                  e.currentTarget.style.boxShadow = `0 8px 30px ${project.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1F1F1F";
                  e.currentTarget.style.borderTop = `3px solid ${project.color}`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3 className="text-[2.4rem] font-medium mb-[1.6rem]">
                  {project.title}
                </h3>
                <p className="text-gray-text text-[1.6rem] leading-[3.2rem] mb-[2.4rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-[8px] mb-[2.4rem]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border text-gray-text text-[1.2rem] rounded-[20px] px-[10px] py-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.6rem] font-medium animated-underline"
                  style={{ color: project.color }}
                >
                  Ver no GitHub
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-[4.8rem]">
          <a
            href="https://github.com/eoLucasS?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-text text-[1.6rem] hover:text-accent animated-underline transition-colors duration-300"
          >
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
