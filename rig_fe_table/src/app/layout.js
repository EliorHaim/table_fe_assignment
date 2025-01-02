import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkModeToggle from './DarkModeToggle';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <header className="p-4 flex justify-end">
            <DarkModeToggle />
        </header>
        <main className="p-4">{children}</main>
        </body>
        </html>
    );
}
