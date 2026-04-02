import ScrollReveal from "../ScrollReveal";

export default function ContactCTA() {
  return (
    <section id="s-contact-cta" className="bg-background-secondary border-t border-border py-[96px] max-md:py-[48px]">
      <div className="max-w-[700px] mx-auto px-[2.4rem] text-center">
        <ScrollReveal>
          <h2 className="text-[4rem] max-md:text-[3rem] font-medium mb-[2.4rem]">
            Vamos trabalhar <span className="text-accent">juntos</span>?
          </h2>
          <p className="text-gray-text text-[1.8rem] leading-[160%] mb-[4.8rem]">
            Precisa de um profissional de segurança da informação para
            proteger sua infraestrutura, implementar governança de TI ou
            fortalecer seus controles de acesso? Vamos conversar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-[2.4rem]">
            <a
              href="mailto:lucascontato1419@gmail.com"
              className="bg-accent text-[#111111] text-[1.6rem] font-semibold py-[16px] px-[32px] rounded-[4px] hover:brightness-90 hover:-translate-y-[2px] hover:shadow-[0_4px_20px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              Entrar em contato
            </a>
            <a
              href="https://www.linkedin.com/in/lucaslopesdasilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground text-[1.6rem] font-normal py-[16px] px-[32px] rounded-[4px] hover:border-accent hover:text-accent hover:-translate-y-[2px] transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
