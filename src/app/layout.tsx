import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Um leque de tecnologia",
  description:
    "Site pessoal do NickDev: artigos, materiais de aula e experimentos sobre desenvolvimento, dados e educação em tecnologia.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Um leque de tecnologia",
    description:
      "Artigos, materiais de aula e experimentos sobre desenvolvimento, dados e educação em tecnologia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="ambient" aria-hidden="true">
          <span className="glow magenta" />
          <span className="glow purple" />
        </div>
        {children}
      </body>
    </html>
  );
}
