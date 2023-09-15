import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation/Navigation";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});
export const metadata: Metadata = {
  title: "Where in the World?",
  description: "Search countries by name and learn about them",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} text-base-content text-bodyS md:text-bodyM  bg-base-100`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
