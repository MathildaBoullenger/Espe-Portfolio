import Heading from "@/components/Heading";
import Button from "@/components/Button";
import DisplayFeaturedProject from "@/components/DisplayFeaturedProject";
import { getFeaturedProject } from "@/lib/projects";
import Service from "@/components/Service";
import Link from "next/link";
import Image from "next/image";

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
              src="/LI-Logo-white.png" // Path to your image in the public directory
              alt="LinkedIn Logo"
              width={50} // Specify the desired width
              height={20} // Specify the desired height
              className="h-5"
            />
          </Button>
        </Link>
        In the Image component, you specify the path to your image, its alt
        text, and the desired width and height attributes. You can adjust the
        width and height values according to your design requirements. Make sure
        to replace /LI-Logo-white.png with the actual path to your image in the
        public directory. This will ensure that the image is properly optimized
        and served by Next.js.
        <Link href="mailto:esperanzalbani@gmail.com" target="_blank">
          <Button delay={750}>
            <img src="/images/Email1.png" className="h-5" />
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
            title={"Renders"}
            content={"This is my best skill!"}
          ></Service>
          <Service
            delay={2000}
            title={"3D Design"}
            content={"This is my second best skill!"}
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
