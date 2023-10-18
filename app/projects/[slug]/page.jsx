import Heading from "@/components/Heading";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ThreeDimensionsVisualisation from "@/components/ThreeDimensionsVisualisation";
import { getProject } from "@/lib/projects";

export async function generateStaticParams() {
    return [{ slug: 'interior-visualisation-1' }, { slug: 'interior-visualisation-2' }]
}

export default async function ProjectPage({ params: { slug } }) {
  const project = await getProject(slug);
  const projects = [project];
  return (
    <>
      <Heading>{project.title}</Heading>
      <ProjectsCarousel projects={projects} delay={750} />

      <div className="mt-10">
        <article
          dangerouslySetInnerHTML={{ __html: project.body }}
          className="font-poppins max-w-screen-sm prose prose-slate"
        />
      </div>

      <ThreeDimensionsVisualisation
        projects={projects}
        delay={1000}
      ></ThreeDimensionsVisualisation>

      {/*<p className="italic pb-2">{project.date}</p>
            <img src={project.images[0]} alt=""
            width="640" height="360" className="mb-2 rounded"
            />
        <article dangerouslySetInnerHTML={{ __html: project.body }}
        className="max-w-screen-sm prose prose-slate"
    />*/}
    </>
  );
}
