import Heading from "@/components/Heading";
import ThreeDimensionsVisualisation from "@/components/ThreeDimensionsVisualisation";
import { getProject } from "@/lib/projects";
import NewCarousel from "@/components/NewCarousel";
import ProjectContent from "@/components/ProjectContent";

export async function generateStaticParams() {
  return [
    { slug: "project1" },
  ];
}

export default async function ProjectPage({ params: { slug } }) {
  const project = await getProject(slug);

  return (
    <>
      <div className="w-full">
      <Heading delay={0}>{project.title} </Heading>
      
      <NewCarousel project={project} delay={100}/>
      <ProjectContent project={project} delay={200}></ProjectContent>
      
      <ThreeDimensionsVisualisation project={project} delay={300} />

      </div>
    </>
  );
}
