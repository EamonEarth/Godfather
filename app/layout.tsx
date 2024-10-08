import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import TrackerProvider from "./components/TrackerProvider";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import { ScrollProvider } from "./context/ScrollContext";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eamon Travers | Dev",
  description: "Portfolio",
  icons: {
    icon: "/favattempt.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-primary antialiased", inter.className)}>
        <ScrollProvider>
          <TrackerProvider />
          {children}
          <Toaster />
        </ScrollProvider>
      </body>
    </html>
  );
}
