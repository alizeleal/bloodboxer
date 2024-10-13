import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header/Header";
import "./globals.css";
import "./styles_reset.css"
import Footer from "./components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Centro de Treinamento Blood Boxer",
  description: "Centro de Treinamento Blood Boxer - Mestre Gustavo Nascimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="icon" href="images/favicon.ico" sizes="any" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
