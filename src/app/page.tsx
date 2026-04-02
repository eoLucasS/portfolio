import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Security from "@/components/sections/Security";
import Skills from "@/components/sections/Skills";
import Methodology from "@/components/sections/Methodology";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { SITE_URL } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Lucas Silva",
            url: SITE_URL,
            image: `${SITE_URL}/images/foto-lucas.png`,
            description:
              "Profissional de Segurança da Informação com atuação em proteção de dados, IAM, DLP e governança de TI em ambiente Microsoft 365.",
            email: "lucascontato1419@gmail.com",
            jobTitle: "Analista de Segurança da Informação",
            worksFor: {
              "@type": "Organization",
              name: "PEC Energia S.A.",
            },
            sameAs: [
              "https://github.com/eoLucasS",
              "https://www.linkedin.com/in/lucaslopesdasilva/",
              "https://www.instagram.com/lucas.revolt/",
            ],
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Universidade São Judas Tadeu",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "FIAP",
              },
            ],
            knowsAbout: [
              "Cybersecurity",
              "Blue Team",
              "DLP",
              "IAM",
              "Microsoft 365",
              "Microsoft Entra ID",
              "Microsoft Intune",
              "Microsoft Purview",
              "Governança de TI",
              "ITIL",
              "Infraestrutura",
            ],
          }),
        }}
      />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <Certifications />
      <Projects />
      <Security />
      <Skills />
      <Methodology />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
