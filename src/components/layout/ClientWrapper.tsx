"use client";

import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import LoadingEffect from "../effects/LoadingEffect";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 1200); // match loader duration
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      {showLoader && <LoadingEffect />} {/* overlay loader */}
    </>
  );
}
