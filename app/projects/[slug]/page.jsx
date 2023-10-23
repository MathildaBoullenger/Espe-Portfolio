import Heading from "@/components/Heading";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ThreeDimensionsVisualisation from "@/components/ThreeDimensionsVisualisation";
import { getProject } from "@/lib/projects";
import NewCarousel from "@/components/NewCarousel";

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
      <Heading>{project.title}</Heading>

      <ProjectsCarousel project={project} delay={750} />
      <NewCarousel project={project} delay={750}/>

      <div className="mt-10">
        <article
          dangerouslySetInnerHTML={{ __html: project.body }}
          className="font-poppins max-w-screen-sm prose prose-slate"
        />
      </div>

      <ThreeDimensionsVisualisation
        project={project}
        delay={1000}
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
