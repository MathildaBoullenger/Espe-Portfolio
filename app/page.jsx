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
      <Heading delay={100}>I'm Esperanza - a 3D Designer</Heading>
      <Heading delay={200}> based in Auckland, New Zealand.</Heading>

      <div className="mt-2 laptop:mt-5 flex flex-wrap mob:flex-nowrap link">
        <Link
          href="https://www.linkedin.com/in/esperanzalbani/"
          target="_blank"
        >
          <Button delay={300}>
            <Image
              src={LinkedInLogo} // Path to your image in the public directory
              alt="LinkedIn Logo"
              height={20} // Specify the desired height
            />
          </Button>
        </Link>

        <Link href="mailto:esperanzalbani@gmail.com" target="_blank">
          <Button delay={300}>
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
        delay={400}
        project={project}
      ></DisplayFeaturedProject>

      {/* services section */}

      <div className="mt-16 mb-16 laptop:mt-30 p-2 laptop:p-0">
        <Heading delay={500}>Services.</Heading>
        <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
          <Service
            delay={500}
            title={"3D Modeling of Exterior and Interior Designs"}
            content={"Detailed 3D models of both exterior and interior spaces."}
          ></Service>          
          <Service
            delay={500}
            title={"Virtual Environments"}
            content={"Immersive virtual experiences, including 360-degree tours for a lifelike walkthrough of your designs."}
          ></Service>          
          <Service
            delay={500}
            title={"3D Plans"}
            content={"Comprehensive 3D plans that give a deeper understanding of your designs."}
          ></Service>
          <Service
            delay={500}
            title={"Real Estate 3D Rendering Services"}
            content={"For realtors and developers- a powerful tool to reveal the full potential of properties."}
          ></Service>
          <Service
            delay={500}
            title={"Amenities Visualization"}
            content={"Showcase community spaces, amenities, and communal areas to enhance property marketing."}
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
