import ProjectView from "@/features/work/components/ProjectView";
import { projects } from "@/lib/constants";
import { notFound } from "next/navigation";
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.title === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen pt-32 pb-24">
      <ProjectView project={project} />
    </main>
  );
};

export default ProjectPage;
