import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Providers from "@/Providers";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "500"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "500", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Value Jet",
  description: "Creating a world were everyone can fly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen h-full bg-background antialiased")}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
