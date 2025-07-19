import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reaction Game",
  description: "Reaction Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}
      >
        <Header />

        <main className="bg-gray-900">
          <div className="container mx-auto h-full flex">{children}</div>
        </main>
      </body>
    </html>
  );
}
