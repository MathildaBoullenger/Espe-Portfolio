import Heading from "@/components/Heading";
import Button from "@/components/Button";
import DisplayFeaturedProject from "@/components/DisplayFeaturedProject";
import { getFeaturedProject } from "@/lib/projects";
import Service from "@/components/Service";
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../public/images/LI-Logo-white.png"
import EmailLogo from "../public/images/Email1.png"


export default async function HomePage() {
  const project = await getFeaturedProject();

  return (
    <>
      <Heading delay={0}>Welcome!</Heading>
      <Heading delay={250}>I'm Esperanza - a 3D Designer</Heading>
      <Heading delay={500}> based in Auckland, New Zealand.</Heading>

      <div className="mt-2 laptop:mt-5 flex flex-wrap mob:flex-nowrap link">
        <Link
          href="https://www.linkedin.com/in/esperanzalbani/"
          target="_blank"
        >
          <Button delay={750}>
            <Image
              src={LinkedInLogo} // Path to your image in the public directory
              alt="LinkedIn Logo"
              height={20} // Specify the desired height
            />
          </Button>
        </Link>

        <Link href="mailto:esperanzalbani@gmail.com" target="_blank">
          <Button delay={750}>
            <Image
            src={EmailLogo}
            alt="Email Logo"
            height={20}
            />
          </Button>
        </Link>
      </div>

      {/* project section */}

      <DisplayFeaturedProject
        delay={1500}
        project={project}
      ></DisplayFeaturedProject>

      {/* services section */}

      <div className="mt-16 mb-16 laptop:mt-30 p-2 laptop:p-0">
        <Heading delay={1750}>Services.</Heading>
        <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
          <Service
            delay={2000}
            title={"3D Architectural Visualization Services with an Artistic Approach"}
            content={"My 3D architectural visualization services combine technical precision with artistic finesse to bring architectural designs to life. I create highly realistic and aesthetically pleasing visual representations of your projects, enabling you to present your ideas with clarity and impact."}
          ></Service>
          <Service
            delay={2000}
            title={"3D Modeling of Exterior and Interior Designs"}
            content={"I specialize in creating detailed 3D models of both exterior and interior spaces. My models capture every aspect of your designs, from architectural elements and materials to lighting and furnishings. This helps you visualize the final outcome and make informed design decisions."}
          ></Service>
          <Service
            delay={2000}
            title={"Virtual Environments"}
            content={"I offer immersive virtual experiences, including: Virtual 360 Tours: Take your clients on a virtual journey through their future spaces. My 360-degree tours provide a lifelike walkthrough of your designs, allowing clients to explore every angle and detail."}
          ></Service>
          <Service
            delay={2000}
            title={"3D Plans:"}
            content={"I provide comprehensive 3D plans that give a deeper understanding of your designs. This includes: Floor Plans: Detailed 3D floor plans with accurate measurements and spatial relationships. Interior Layouts: Visualize how furniture and decor fit within the space. Exterior Layouts: Present the landscaping, hardscaping, and outdoor design elements."}
          ></Service>


        </div>
      </div>

      {/* Continue adding more project blocks here */}

      {/*<div classNameName="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
          <Link href={`/projects/${project.slug}`}
          classNameName="flex flex-col sm:flex-row">
            <img
              src={project.image}
              alt=""
              width="320"
              height="180"
              classNameName="rounded-t sm:rounded-l sm:rounded-r-none">
            <h2 classNameName="font-roboto py-1 text-center sm:px-2">
                {project.title}
            </h2>
          </Link>
    </div>*/}
    </>
  );
}
