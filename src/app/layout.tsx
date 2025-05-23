﻿import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William's Software Portfolio",
  description: "A place for my software projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
			<header className="fixed top-0 left-0 w-full z-50 p-4 font-bold border-b-2 border-[var(--background)]">
				<nav className="container mx-auto flex items-center">
					<div className="flex-grow">
						<Link
							href="/"
							className="font-bold px-3 py-2 rounded transition duration-300 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
						>
							Home
						</Link>
					</div>
					<div className="flex space-x-4">
						<Link
							href="/#portfolio"
							className="font-bold px-3 py-2 rounded transition duration-300 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
						>
							Portfolio
						</Link>
					</div>
				</nav>
			</header>
			<main className="pt-1 min-h-screen flex items-center justify-center">{children}</main> 
	  </body>
	</html>
  );
}
