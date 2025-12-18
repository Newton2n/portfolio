"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface lazyProps {
  children: React.ReactNode;
  minHeight?: string;
}
export default function LazySection({
  children,
  minHeight = "min-h-[400px]",
}: lazyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-200px 0px", // preload before visible
  });

  return <div ref={ref} className={minHeight}>{isInView ? children : null}</div>;
}
