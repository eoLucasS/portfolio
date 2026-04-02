import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const OG_IMAGE = "/api/og?title=Blog+//+Seguran%C3%A7a+da+Informa%C3%A7%C3%A3o";

export const metadata: Metadata = {
  title: "Blog // Lucas Silva // Segurança da Informação",
  description:
    "Artigos sobre segurança da informação, defesa cibernética, proteção de dados, governança de TI e boas práticas de Blue Team. Por Lucas Silva.",
  keywords: [
    "blog segurança da informação",
    "blue team",
    "proteção de dados",
    "governança de TI",
    "DLP",
    "IAM",
    "cibersegurança",
    "defesa cibernética",
  ],
  alternates: {
    canonical: "https://portfolio-lucaslopes.vercel.app/blog",
  },
  openGraph: {
    title: "Blog // Lucas Silva // Segurança da Informação",
    description:
      "Artigos sobre segurança da informação, defesa cibernética, proteção de dados e governança de TI.",
    url: "https://portfolio-lucaslopes.vercel.app/blog",
    siteName: "Lucas Silva Portfolio",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Blog // Lucas Silva // Segurança da Informação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog // Lucas Silva // Segurança da Informação",
    description:
      "Artigos sobre segurança da informação, defesa cibernética e governança de TI.",
    images: [OG_IMAGE],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-background min-h-screen pt-[140px] pb-[96px]">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">

        {/* Hero do Blog */}
        <div className="text-center mb-[4.8rem] max-w-[720px] mx-auto">
          <span className="text-accent text-[1.4rem] font-medium uppercase tracking-[3px] mb-[1.6rem] block">
            Blog
          </span>
          <h1 className="text-[4rem] max-md:text-[3rem] font-medium leading-[130%] mb-[2rem]">
            Segurança da Informação{" "}
            <span className="text-accent">na prática</span>
          </h1>
          <p className="text-gray-text text-[1.8rem] leading-[170%]">
            Conteúdos sobre defesa cibernética, proteção de dados, governança de
            TI e boas práticas para manter ambientes corporativos seguros.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border mb-[4.8rem]" />

        {/* Posts section */}
        <div className="flex items-center justify-between mb-[3.2rem]">
          <h2 className="text-[2.4rem] font-medium">
            Artigos Recentes <span className="text-accent">.</span>
          </h2>
          <span className="text-gray-text text-[1.4rem]">
            {posts.length} {posts.length === 1 ? "artigo" : "artigos"} publicados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3.2rem]">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-background-secondary border border-border border-l-4 border-l-accent rounded-[4px] p-[3.2rem] hover:border-accent hover:-translate-y-[4px] hover:shadow-[0_4px_20px_rgba(0,255,255,0.1)] transition-all duration-400 h-full flex flex-col">
                {/* Meta */}
                <div className="flex items-center gap-[8px] text-gray-text text-[1.3rem] mb-[2rem]">
                  <span className="flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent inline-block" />
                    {post.date}
                  </span>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-foreground text-[2.2rem] font-medium leading-[140%] mb-[1.2rem] group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-text text-[1.6rem] leading-[170%] mb-[2.4rem] flex-1">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-[8px] mb-[2rem]">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border text-gray-text text-[1.2rem] rounded-[20px] px-[12px] py-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-[6px] text-accent text-[1.4rem] font-medium">
                  <span>Ler artigo</span>
                  <span className="inline-block group-hover:translate-x-[4px] transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA de contato */}
        <div className="mt-[8rem] bg-background-secondary border border-border rounded-[4px] p-[4.8rem] max-md:p-[3.2rem] text-center">
          <h3 className="text-[2.4rem] max-md:text-[2rem] font-medium mb-[1.6rem]">
            Quer trocar uma ideia sobre <span className="text-accent">segurança</span>?
          </h3>
          <p className="text-gray-text text-[1.6rem] leading-[170%] max-w-[500px] mx-auto mb-[3.2rem]">
            Se você curtiu o conteúdo ou tem alguma dúvida sobre segurança da
            informação, governança de TI ou defesa cibernética, me chama.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[1.6rem]">
            <a
              href="mailto:lucascontato1419@gmail.com"
              className="bg-accent text-[#111111] text-[1.4rem] font-semibold py-[12px] px-[28px] rounded-[4px] hover:brightness-90 hover:-translate-y-[2px] transition-all duration-300"
            >
              Entrar em contato
            </a>
            <a
              href="https://www.linkedin.com/in/lucaslopesdasilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-gray-text text-[1.4rem] font-medium py-[12px] px-[28px] rounded-[4px] hover:border-accent hover:text-accent hover:-translate-y-[2px] transition-all duration-300"
            >
              Conectar no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
