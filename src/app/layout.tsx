import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanitian Island",
  description: "The ultimate vacation destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh]`}
      >
        <NavMenu />
        {children}
        <Footer />
      </body>
      {/* <p>
        Header image Photo by{" "}
        <a href="https://unsplash.com/@vjpedro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Pedro Bariak
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/green-palm-trees-near-swimming-pool-during-daytime-lVRolxDY5q0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </p> */}
    </html>
  );
}
