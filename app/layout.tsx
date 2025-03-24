import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "A modern weather application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
