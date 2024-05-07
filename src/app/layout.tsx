import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import DynamicHeader from "../components/dynamicHeader";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isa Sloot",
  description: "Portfolio for Isa Sloot",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="  text-slate-100" lang="en">
      <body className={urbanist.className}>
        <DynamicHeader />
        {children}
      </body>
    </html>
  );
}
