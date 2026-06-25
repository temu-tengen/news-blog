import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bitcount_Grid_Single_Ink } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "",
  description: "Welcome to my website",
  icons: {
    icon: "/favicon.ico", // Paths are relative to the public folder
    apple: "/apple-icon.png", 
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = Bitcount_Grid_Single_Ink({
  variable: "--pixel-font",
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelFont.variable}`}>
      <body>
        <Header />
        {children}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </body>
    </html>
  );
}
