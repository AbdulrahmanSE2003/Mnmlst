"use client";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonIconProps extends HTMLMotionProps<"button"> {
  Icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label: string;
}

const ButtonIcon = ({
  Icon,
  size,
  strokeWidth,
  className,
  label,
  ...props
}: ButtonIconProps) => {
  return (
    <motion.span
      role="button"
      aria-label={label}
      className={`w-10 h-10 p-4 rounded-lg cursor-pointer flex items-center justify-center overflow-hidden relative group transition-colors duration-200`}
      {...props}
    >
      <Icon
        size={size || 18}
        strokeWidth={strokeWidth || 1.5}
        aria-hidden="true"
        className={cn(className)}
      />
    </motion.span>
  );
};

export default ButtonIcon;
