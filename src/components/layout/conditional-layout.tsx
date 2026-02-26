"use client";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";

const noLayoutPaths = ["/login", "/signup"];

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = noLayoutPaths.some((p) => pathname === p);

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
