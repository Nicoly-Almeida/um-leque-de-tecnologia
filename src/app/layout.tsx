import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NickDev — Um leque de tecnologia",
  description:
    "Site pessoal do NickDev: artigos, materiais de aula e experimentos sobre desenvolvimento, dados e educação em tecnologia.",
  openGraph: {
    title: "NickDev — Um leque de tecnologia",
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
