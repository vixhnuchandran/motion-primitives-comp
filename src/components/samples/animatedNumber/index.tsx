"use client";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function AnimatedNumberInView() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(10000);
  }

  return (
    <div
      className=" text-black flex w-full items-center justify-center"
      ref={ref}
    >
      <AnimatedNumber
        className="inline-flex items-center font-mono text-2xl font-light text-zinc-800 "
        springOptions={{
          bounce: 0,
          duration: 10000,
        }}
        value={value}
      />
    </div>
  );
}
