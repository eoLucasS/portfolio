import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post não encontrado" };

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const ogImage = `/api/og?title=${encodeURIComponent(post.title)}`;

  return {
    title: `${post.title} // Lucas Silva`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "Lucas Silva Portfolio",
      type: "article",
      publishedTime: post.date,
      authors: ["Lucas Silva"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`;

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-background min-h-screen pt-[140px] pb-[96px]">
      <div className="max-w-[800px] mx-auto px-[2.4rem]">
        {/* JSON-LD BlogPosting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              image: `${SITE_URL}/api/og?title=${encodeURIComponent(post.title)}`,
              author: {
                "@type": "Person",
                "@id": `${SITE_URL}/#person`,
                name: "Lucas Silva",
                url: SITE_URL,
              },
              publisher: {
                "@type": "Person",
                name: "Lucas Silva",
                url: SITE_URL,
              },
              datePublished: post.date,
              dateModified: post.date,
              description: post.excerpt,
              url: postUrl,
              mainEntityOfPage: postUrl,
            }),
          }}
        />
        {/* JSON-LD BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
                { "@type": "ListItem", position: 3, name: post.title },
              ],
            }),
          }}
        />

        {/* Breadcrumb */}
        <nav className="flex items-center gap-[8px] text-[1.4rem] mb-[4rem]">
          <Link href="/" className="text-gray-text hover:text-accent transition-colors">
            Início
          </Link>
          <span className="text-border">/</span>
          <Link href="/blog" className="text-gray-text hover:text-accent transition-colors">
            Blog
          </Link>
          <span className="text-border">/</span>
          <span className="text-accent truncate max-w-[250px]">
            {post.title}
          </span>
        </nav>

        {/* Post Header */}
        <header className="mb-[4.8rem]">
          <div className="flex flex-wrap gap-[8px] mb-[2rem]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-accent/30 text-accent text-[1.2rem] rounded-[20px] px-[12px] py-[4px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[4rem] max-md:text-[2.8rem] font-semibold leading-[130%] mb-[2.4rem]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-[1.6rem] text-gray-text text-[1.4rem]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[32px] h-[32px] border-2 border-accent rounded-full flex items-center justify-center">
                <span className="text-accent text-[1.1rem] font-semibold">LS</span>
              </div>
              <span className="text-foreground font-medium">Lucas Silva</span>
            </div>
            <span className="w-[4px] h-[4px] rounded-full bg-border" />
            <span>{post.date}</span>
            <span className="w-[4px] h-[4px] rounded-full bg-border" />
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border mb-[4.8rem]" />

        {/* Content */}
        <article
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Share + Back */}
        <div className="border-t border-border mt-[6.4rem] pt-[3.2rem]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[2.4rem]">
            <Link
              href="/blog"
              className="text-accent text-[1.6rem] font-medium group flex items-center gap-[8px]"
            >
              <span className="inline-block group-hover:-translate-x-[4px] transition-transform">
                &larr;
              </span>
              Voltar ao Blog
            </Link>

            <div className="flex items-center gap-[8px]">
              <span className="text-gray-text text-[1.3rem] mr-[4px]">Compartilhar:</span>
              <a
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all text-gray-text"
                aria-label="Compartilhar no LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all text-gray-text"
                aria-label="Compartilhar no X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-[6.4rem]">
            <h3 className="text-[2rem] font-medium mb-[2.4rem]">
              Continue lendo <span className="text-accent">.</span>
            </h3>
            <div className="grid grid-cols-1 gap-[2.4rem]">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                  <div className="bg-background-secondary border border-border rounded-[4px] p-[2.4rem] hover:border-accent hover:-translate-y-[2px] transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-[1.6rem]">
                    <div className="flex-1">
                      <div className="flex items-center gap-[8px] text-gray-text text-[1.2rem] mb-[8px]">
                        <span>{related.date}</span>
                        <span>&middot;</span>
                        <span>{related.readingTime}</span>
                      </div>
                      <h4 className="text-foreground text-[1.8rem] font-medium group-hover:text-accent transition-colors">
                        {related.title}
                      </h4>
                    </div>
                    <span className="text-accent text-[1.4rem] group-hover:translate-x-[4px] transition-transform shrink-0">
                      &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
