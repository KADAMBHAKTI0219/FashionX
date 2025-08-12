import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "../../../public/assets/fonts/ubuntu.css";
import FloatingActionButtons from "@/components/dashboard/FloatingActionButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FashionX Dashboard",
  description: "FashionX Dashboard - Manage your fashion AI tools",
};

export default function DashboardLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
      {children}
      <FloatingActionButtons />
    </div>
  );
}