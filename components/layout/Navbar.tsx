"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/ThemeToggle";
import NavLinks from "./navbar/NavLinks";
import ButtonIcon from "../ui/ButtonIcon";
import { useState } from "react";
import MobileNavMenu from "./navbar/MobileNavMenu";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        className="mt-3 w-[75%] md:w-[43%] bg-background mx-auto rounded-xl h-16 border-[1.5px] border-muted-foreground dark:border-foreground/10 shadow-xl flex items-center justify-between px-4 fixed top-1 left-1/2 -translate-x-1/2 z-999"
      >
        {/* LOGO */}
        <Link href="/">
          <Logo size={32} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <NavLinks />
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-2 h-full">
          <ThemeToggle />
          <Button asChild>
            <Link href="/#contact" className="capitalize px-4 py-5">
              Get In Touch
            </Link>
          </Button>
        </div>

        {/* Mobile Right */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant={"primary"}
            size={"icon-lg"}
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            className={`group`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <ButtonIcon
                  Icon={X}
                  key="x"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              ) : (
                <ButtonIcon
                  Icon={Menu}
                  key="menu"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileNavMenu open={open} setOpen={setOpen} />
    </>
  );
}
