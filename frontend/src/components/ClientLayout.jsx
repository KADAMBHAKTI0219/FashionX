"use client";
import { usePathname } from 'next/navigation';
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.includes('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}