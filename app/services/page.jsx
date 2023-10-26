import Heading from "@/components/Heading";
import RoundedCard from "@/components/RoundedCard";
import Service1 from "@/public/images/Service1.webp";
import Service2 from "@/public/images/Service2.webp";
import Service3 from "@/public/images/Service3.webp";
import Service4 from "@/public/images/Service4.webp";
import Service5 from "@/public/images/Service5.webp";
import Service6 from "@/public/images/Service6.webp";
import Paragraph from "@/components/Paragraph";

export default function ServicesPage() {


  return (
<>
    <Heading delay={100}>Services</Heading>

    <div className="text-center">
      <div className="mx-auto">

        <Paragraph 
        text={"3D Architectural Visualization Services with an Artistic Approach: My 3D architectural visualization services combine technical precision with artistic finesse to bring architectural designs to life. I create highly realistic and aesthetically pleasing visual representations of your projects, enabling you to present your ideas with clarity and impact."}
        delay={200}
        >

        </Paragraph>

        <RoundedCard 
          title="3D Modeling of Exterior and Interior Designs"
          text="I specialize in creating detailed 3D models of both exterior and interior spaces. My models capture every aspect of your designs, from architectural elements and materials to lighting and furnishings. This helps you visualize the final outcome and make informed design decisions."
          image={Service2}
          delay={300}
        ></RoundedCard>

        <RoundedCard
          title="Virtual Environments"
          text="Virtual 360 Tours: Take your clients on a virtual journey through their future spaces. My 360-degree tours provide a lifelike walkthrough of your designs, allowing clients to explore every angle and detail."          
          image={Service3}
          delay={300}
        ></RoundedCard>

        <RoundedCard           
          title="3D Plans"
          text="I provide comprehensive 3D plans that give a deeper understanding of your designs. This includes: Floor Plans: Detailed 3D floor plans with accurate measurements and spatial relationships.
          Interior Layouts: Visualize how furniture and decor fit within the space.
          Exterior Layouts: Present the landscaping, hardscaping, and outdoor design elements."          
          image={Service4}
          delay={300}  
          >
        </RoundedCard>

        <RoundedCard
          title="Real Estate 3D Rendering Services"
          text="For realtors and developers, my 3D rendering services are a powerful tool to reveal the full potential of properties. I help you deliver the true value of the building to future residents by showcasing:
          Exterior Renderings: Highlight the architectural features and landscaping to attract potential buyers.
          Interior Renderings: Present interiors with photorealistic quality to help clients envision their dream spaces."          
          image={Service1}
          delay={300} 
        ></RoundedCard>

        <RoundedCard
          title="Amenities Visualization"
          text="Showcase community spaces, amenities, and communal areas to enhance property marketing.
          My services are designed to elevate your architectural and interior design projects, whether you're an architect, interior designer, or a real estate professional. I aim to provide a comprehensive and compelling visual representation of your vision."          
          image={Service6}
          delay={300} 
        ></RoundedCard>

      </div>
    </div>
    </>
  );
}
