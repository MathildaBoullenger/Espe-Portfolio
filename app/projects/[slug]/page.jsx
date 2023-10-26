import Heading from "@/components/Heading";
import ThreeDimensionsVisualisation from "@/components/ThreeDimensionsVisualisation";
import { getProject } from "@/lib/projects";
import NewCarousel from "@/components/NewCarousel";
import ProjectContent from "@/components/ProjectContent";

export async function generateStaticParams() {
  return [
    { slug: "project1" },
    { slug: "project2" },
    { slug: "project3" }
  ];
}

export default async function ProjectPage({ params: { slug } }) {
  const project = await getProject(slug);

  return (
    <>
      <Heading delay={0}>{project.title}</Heading>

      {/*<ProjectsCarousel project={project} delay={750} />*/}

      <NewCarousel project={project} delay={100}/>

<ProjectContent project={project} delay={200}></ProjectContent>

      <ThreeDimensionsVisualisation
        project={project}
        delay={300}
      />

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
