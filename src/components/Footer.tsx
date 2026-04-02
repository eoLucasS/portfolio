import Image from "next/image";
import { FOOTER_SOCIALS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-[3.2rem]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem] flex flex-col md:flex-row items-center justify-between gap-[2.4rem]">
        <p className="text-gray-text text-[1.4rem]">
          &copy; {currentYear} Lucas Silva. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-[1.6rem]">
          {FOOTER_SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[36px] h-[36px] rounded-full border border-border flex items-center justify-center hover:border-accent hover:-translate-y-[2px] transition-all duration-300"
              aria-label={social.name}
            >
              <Image src={social.icon} alt={social.name} width={18} height={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
