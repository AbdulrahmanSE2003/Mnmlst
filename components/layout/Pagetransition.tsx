"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, delay: 1.1, ease: "easeOut" },
          }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* BG overlay — flicker */}
      <AnimatePresence>
        <motion.div
          key={`overlay-${pathname}`}
          className="fixed inset-0 z-40 bg-background pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 0.1, delay: 1.1 } }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      {/* Curtain */}
      <AnimatePresence>
        <motion.div
          key={`curtain-${pathname}`}
          className="fixed inset-0 z-50 bg-foreground pointer-events-none"
          initial={{ scaleY: 0, originY: "100%" }}
          animate={{
            scaleY: [0, 1, 1, 0],
            originY: ["100%", "100%", "0%", "0%"],
            transition: {
              duration: 1.3,
              times: [0, 0.25, 0.55, 1],
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          exit={{ scaleY: 0, originY: "0%" }}
        />
      </AnimatePresence>
    </>
  );
}
