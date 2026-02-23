import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import { Navbar } from "@/components/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight : ["400", "500", "600", "700"] 
    
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agenforce",
  description: "a template for Agenforce agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Navbar />
        <main className="bg-background text-foreground">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
