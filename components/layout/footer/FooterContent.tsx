import { links } from "@/lib/constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const FooterContent = () => {
  return (
    <div
      className={`grid md:grid-cols-2 gap-y-10 justify-between items-start w-full relative z-10`}
    >
      {/* Left Col */}
      <div className={`flex flex-col gap-6 md:gap-12`}>
        {/* Footer Social Links */}
        <SocialLinks />

        {/* Navigation Links */}
        <div className={`capitalize flex items-center gap-3`}>
          {links.map((link, i) => (
            <div key={i} className="flex items-center gap-3">
              <Link href={link.href}>
                <span
                  className={`text-white/75 hover:text-white transition-colors duration-500`}
                >
                  {link.label}
                </span>
              </Link>
              {i < links.length - 1 && (
                <span className="text-white/30">/</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Col */}
      <div className={`flex flex-col gap-1.5`}>
        <span className={`text-muted-foreground capitalize tracking-wider`}>
          Contact Me
        </span>
        <Link
          href={"mailto:abdulrahman.saad2303@gmail.com"}
          className="text-white/85 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
        >
          abdulrahman.saad2303@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
