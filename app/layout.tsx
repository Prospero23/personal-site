import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben Eidson",
  description: "Its me, Ben Eidson",
  openGraph: {
    images: ["/Website.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-customPink`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
