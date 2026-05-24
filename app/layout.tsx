import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Elite Store",
  description: "Une boutique en ligne de vetement pour hommes et femmes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}