import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 // Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-[2.4rem]">
      <h1 className="text-[12rem] max-md:text-[8rem] font-semibold text-accent leading-none mb-[2.4rem]">
        404
      </h1>
      <h2 className="text-[2.8rem] font-medium mb-[1.6rem]">
        Página não encontrada
      </h2>
      <p className="text-gray-text text-[1.8rem] max-w-[450px] mb-[4.8rem]">
        A página que você procura pode ter sido movida, removida ou nunca
        existiu.
      </p>
      <Link
        href="/"
        className="bg-accent text-[#111111] text-[1.6rem] font-semibold py-[16px] px-[32px] rounded-[4px] hover:bg-white transition-all duration-300"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
