import GridProjects from "@/features/work/components/GridProjects";
import Header from "@/features/work/components/Header";

// ─── Components ──────────────────────────────────────────────

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
