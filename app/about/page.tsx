import type { Metadata } from "next";
import ProcessSection from "@/features/about/components/ProcessSection";
import ScrollableSection from "@/features/about/components/ScrollableSection";

export const metadata: Metadata = {
  title: "About — Mnmlst",
  description:
    "Frontend engineer who builds clean, fast, and intentional digital products. Learn about my approach, experience, and the tools I work with.",
};

const page = () => {
  return (
    <div className={`container mx-auto px-6 sm:px-8 py-16`}>
      <ScrollableSection />
      <ProcessSection />
    </div>
  );
};

export default page;
