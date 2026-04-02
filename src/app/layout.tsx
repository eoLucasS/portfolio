import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const OG_IMAGE = "/api/og?title=Lucas+Silva+//+Seguran%C3%A7a+da+Informa%C3%A7%C3%A3o+%26+Blue+Team";

export const viewport: Viewport = {
  themeColor: "#00FFFF",
};

export const metadata: Metadata = {
  title: "Lucas Silva // Segurança da Informação & Blue Team",
  description:
    "Portfolio de Lucas Silva. Profissional de Segurança da Informação com atuação em proteção de dados, IAM, DLP e governança de TI em ambiente Microsoft 365.",
  keywords: [
    "Lucas Silva",
    "Segurança da Informação",
    "Blue Team",
    "Cybersecurity",
    "DLP",
    "IAM",
    "Microsoft 365",
    "Entra ID",
    "Intune",
    "Governança de TI",
    "Analista de Segurança",
    "Portfolio",
  ],
  authors: [{ name: "Lucas Silva" }],
  metadataBase: new URL("https://portfolio-lucaslopes.vercel.app"),
  alternates: {
    canonical: "https://portfolio-lucaslopes.vercel.app",
  },
  openGraph: {
    title: "Lucas Silva // Segurança da Informação & Blue Team",
    description:
      "Profissional de Segurança da Informação. Proteção de dados, IAM, DLP e governança de TI em ambiente Microsoft 365.",
    url: "https://portfolio-lucaslopes.vercel.app",
    siteName: "Lucas Silva Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lucas Silva // Segurança da Informação & Blue Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Silva // Segurança da Informação & Blue Team",
    description:
      "Profissional de Segurança da Informação. Proteção de dados, IAM, DLP e governança de TI.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/images/logo-page1.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-scroll-behavior="smooth" className={`${archivo.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
