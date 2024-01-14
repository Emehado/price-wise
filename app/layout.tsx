import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Price Tracker",
  description:
    "Track prices of products from various e-commerce websites and save money shopping online!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`prose md:prose-lg lg:prose-xl dark:prose-invert ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
