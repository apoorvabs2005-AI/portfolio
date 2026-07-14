import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apoorva B S | AI & Machine Learning Engineer Portfolio",
  description: "Personal portfolio website of Apoorva B S - AI & Machine Learning Engineering Student. Showcasing projects in AI, Machine Learning, Data Science, and Full Stack development.",
  keywords: ["AI Engineer", "Machine Learning", "Data Science", "Apoorva B S", "Portfolio", "Python Developer", "Full Stack Developer", "Software Engineer"],
  authors: [{ name: "Apoorva B S" }],
  openGraph: {
    title: "Apoorva B S | AI & Machine Learning Engineer Portfolio",
    description: "Intelligent systems with AI, Machine Learning, Data Science, and Modern Web Technologies.",
    url: "https://apoorvabs.dev",
    siteName: "Apoorva B S Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoorva B S | AI & Machine Learning Engineer Portfolio",
    description: "AI, Machine Learning, Data Science, and Full Stack development showcase.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
