import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACELEST NLG ",
  description: "ACELEST NLG ",
  metadataBase: new URL("https://acelest-ngl.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acelest-ngl.vercel.app",
    siteName: "ACELEST NLG / Pose moi une question ",
    images: [
      {
        url: "https://acelest-ngl.vercel.app/banner.jpeg",
        width: 917,
        height: 725,
        alt: "ACELEST NLG ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@acelestcode",
    creator: "@acelestcode",
    images: [
      {
        url: "https://acelest-ngl.vercel.app/banner.jpeg",
        width: 917,
        height: 725,
        alt: "ACELEST NLG ",
      },
    ],
  },
  authors: [{ name: "Aubin DJOU", url: "https://bento.me/aubindjou" }],
  keywords: "Acelest Code, ngl link, responses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
