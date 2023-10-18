import Heading from "@/components/Heading";
import { getProjects } from "@/lib/projects";
import ProjectGalleryWithFilters from "@/components/ProjectGalleryWithFilters";

export default async function ProjectsPage() {
  const projects = await getProjects();
  console.log("projects from page element", projects);

  return (
    <>
      <Heading delay={250}>Projects</Heading>

      <ProjectGalleryWithFilters
        projects={projects}
      ></ProjectGalleryWithFilters>
    </>
  );
}

{
  /*<ProjectsCarousel projects={projects}></ProjectsCarousel>*/
}

{
  /*<div>
        <ul className="mt-8 flex flex-wrap justify-center gap-10">
          {projects.map((project) => (

            <li
              key={project.slug}
              className="lg:w-100 hover:scale-110 transition-all ease-out duration-200"
            >
              <Link href={`/projects/${project.slug}`}>


                <img src={project.image} alt="" className="object-cover rounded-lg h-80" />
                <h2 className="font-inter py-1 my-4 text-left font-semibold">
                  {project.title}
                </h2>

              </Link>

            </li>

          ))}
        </ul>
          </div>*/
}

{
  /*
<div class="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
  <div class="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
    <div class="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto" style={{ height: '600px' }}>
      <Link href={`/projects/${project.slug}`}>
      <img
        alt="Project One Test"
        class="h-full w-full lg:w-1/2 object-cover hover:scale-110 transition-all ease-out duration-300"
        src={project.image}
      />
      </Link>
    </div>
    <h1 class="mt-5 text-3xl font-poppins font-light">Featured project</h1>
    <h2 class="font-lato text-xl opacity-50">{project.title}</h2>
  </div>
</div>
*/
}
