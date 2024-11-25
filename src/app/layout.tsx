import type { Metadata } from "next";
import "./globals.css";
import { Lora, Figtree } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Get Thin USA",
  description:
    "A multi-step questionnaire form designed to provide users with tailored medication recommendations for effective weight loss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} ${lora.variable} antialiased bg-background flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
