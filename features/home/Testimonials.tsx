// src/components/home/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/constants";

function FlipCard({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <div className="relative h-80" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full h-full"
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: 180 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.3, ease: [0.5, 0.72, 0.45, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl bg-foreground text-background flex flex-col items-center justify-center gap-4 p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.initial}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl border border-border bg-foreground text-background flex flex-col justify-between p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-md font-medium leading-relaxed text-background/90">
            &quot;{item.quote}&quot;
          </p>
          <div>
            <p className="text-xs font-medium text-background">{item.name}</p>
            <p className="text-xs text-background/40 font-mono">{item.role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-7 sm:px-14 py-24">
      <div className="container mx-auto ">
        <div className="flex items-end justify-between mb-16">
          <div>
            <SectionHeading>What people say</SectionHeading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, i) => (
            <FlipCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
