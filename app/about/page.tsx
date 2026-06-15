import ProcessSection from "@/features/about/components/ProcessSection";
import ScrollableSection from "@/features/about/components/ScrollableSection";

const page = () => {
  return (
    <div className={`container mx-auto px-6 sm:px-8 py-16`}>
      <ScrollableSection />
      <ProcessSection />
    </div>
  );
};

export default page;
