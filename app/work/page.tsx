import type { Metadata } from "next";
import GridProjects from "@/features/work/components/GridProjects";
import Header from "@/features/work/components/Header";

export const metadata: Metadata = {
  title: "Work — Mnmlst",
  description:
    "Explore my portfolio of projects — from productivity apps to AI tools and real-time collaboration platforms.",
};

const WorkPage = () => {
  return (
    <section className="py-24 container mx-auto px-7 sm:px-14">
      {/* Header Container */}
      <Header />

      {/* Grid Container */}
      <GridProjects />
    </section>
  );
};

export default WorkPage;
