import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { GlobalHeader } from "@/components/global-header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App Boilerplate",
  description: "Generated by create next app",
  icons: [
    {
      url: "./favicon.ico",
      href: "/images/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <GlobalHeader />
            <div className="flex-1 w-full lg:px-8">
                <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
