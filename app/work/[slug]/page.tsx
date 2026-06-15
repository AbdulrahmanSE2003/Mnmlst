import ProjectView from "@/features/work/components/ProjectView";
import { projects } from "@/lib/constants";
import { toSlug } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => toSlug(p.title) === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Mnmlst`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: toSlug(p.title),
  }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => toSlug(p.title) === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <ProjectView project={project} />
    </main>
  );
};

export default ProjectPage;
