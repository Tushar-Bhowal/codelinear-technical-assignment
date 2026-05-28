import type { Metadata } from "next";
import { Archivo, Chivo_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "N7 — The new foundation of modern banking",
  description:
    "N7 / CB7 — cloud-native core and digital banking platform built for the future of financial services.",
  openGraph: {
    title: "N7 — The new foundation of modern banking",
    description:
      "N7 / CB7 — cloud-native core and digital banking platform built for the future of financial services.",
    siteName: "N7 Banking",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N7 — The new foundation of modern banking",
    description:
      "N7 / CB7 — cloud-native core and digital banking platform built for the future of financial services.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-display">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
