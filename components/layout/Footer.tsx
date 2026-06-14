import Image from "next/image";
import FooterContent from "./footer/FooterContent";
import { bgTextures } from "@/lib/constants";

const Footer = () => {
  return (
    <footer
      className={`w-full rounded-t-[4rem] md:rounded-t-[8rem] relative overflow-hidden min-h-128 bg-zinc-950 dark:bg-zinc-900/35 text-white p-16 md:p-24 transition-colors duration-500`}
    >
      {/* Footer Image */}
      <Image
        src={bgTextures}
        fill
        alt="background image"
        sizes="100vw"
        className={`object-cover opacity-35 dark:opacity-20`}
      />

      {/* Footer Content */}
      <FooterContent />

      {/* Footer Brand */}
      <span
        className={`font-plus-jakarta-sans text-7xl sm:text-[6rem] md:text-[12rem] tracking-[1rem] text-muted-foreground/25 font-bold absolute bottom-0 md:-bottom-14 -right-2 sm:right-2`}
      >
        Mnmlst.
      </span>
    </footer>
  );
};

export default Footer;
