import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxwell Wickersham | Premium Web Design & Development",
  description: "Boston-based web developer specializing in high-performance Next.js applications, UI/UX design, and scalable digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cold.cool",
    title: "Maxwell Wickersham | Premium Web Design & Development",
    description: "Boston-based web developer specializing in high-performance Next.js applications, UI/UX design, and scalable digital experiences.",
    siteName: "Maxwell Wickersham",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
