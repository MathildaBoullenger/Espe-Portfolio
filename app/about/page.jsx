import Heading from "@/components/Heading";
import ProfilePic from "@/components/ProfilePic";
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {

  return (
    <>
      <Heading delay={0}>About Me</Heading>
      <div className="mt-8 md:flex md:items-center md:space-x-10">

        <AboutContent delay={100}></AboutContent>

       </div>
    </>
  );
}
