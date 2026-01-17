import type { Metadata } from "next";
import { Outfit, Prompt } from "next/font/google"; // Modern & Wow + Clean Thai
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miruway Shop",
  description: "Miruway Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${prompt.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
