import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Rintia Islam | Full Stack Developer",
  description: "Personal portfolio website of Rintia Islam, showcasing skills in React, Next.js, Node.js, and modern full-stack web applications.",
  keywords: ["Next.js", "React", "Portfolio", "Full-Stack Developer", "Software Engineer", "Web Developer"],
  authors: [{ name: "Rintia Islam" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased bg-bg-dark text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
