import { socialLinks } from "@/lib/constants";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className={`flex items-center gap-3`}>
      {socialLinks.map((link, i) => (
        <Link
          key={i}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 flex-center border border-border/50 dark:border-border rounded-xl group hover:bg-white transition-colors duration-500`}
        >
          <span
            className={`group-hover:text-black transition-colors duration-500`}
          >
            {link.icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
