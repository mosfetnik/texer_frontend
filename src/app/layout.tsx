import type { Metadata } from "next";
import {  Raleway } from "next/font/google";
import "./globals.css";
import SessionProviders from "@/providers/SessionProviders";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "teXer",
  description: "Not a normal chat app",
};
import { Toaster } from "@/components/ui/sonner"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={raleway.variable} suppressHydrationWarning>
      <SessionProviders>
      <body className= "font-raleway antialiased">{children}
        <Toaster richColors duration={3000} />
      </body>
      </SessionProviders>
    </html>
  );
}
