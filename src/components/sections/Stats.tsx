"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-accent text-[4.8rem] max-md:text-[3.6rem] font-semibold leading-none">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-background-secondary py-[64px] max-md:py-[40px] border-y border-border">
      <div className="max-w-[1140px] mx-auto px-[2.4rem]">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[4.8rem] max-md:gap-[3.2rem]">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-text text-[1.4rem] mt-[8px] leading-[140%]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
