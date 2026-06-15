import Contact from "@/features/home/Contact";
import Glimpse from "@/features/home/Glimpse";
import Hero from "@/features/home/Hero";
import Projects from "@/features/home/Projects";
import Stats from "@/features/home/Stats";
import Testimonials from "@/features/home/Testimonials";
import TextReveal from "@/features/home/TextReveal";

const page = async () => {
  return (
    <div>
      <Hero />
      <Glimpse />
      <TextReveal />
      <Projects />
      <Testimonials />
      <Stats />
      <Contact />
    </div>
  );
};

export default page;
