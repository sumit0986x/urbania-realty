import Banner from "@/components/ui/Banner";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectTabs from "@/components/ui/ProjectTabs";

export default function Upcoming() {
      const projects = [
    {
      title: "141 Shivaji Park",
      description: "We create design-led homes with thoughtful planning and strong execution, making us a premium developer in Mumbai.",
      image: "/image/project1.jpg",
      logo: "/image/shivajipark.png",
      features: [
        { icon: "/icon/apartment.svg", text: "4 BHK Apartments" },
        { icon: "/icon/storeys.svg", text: "12 Storeys" },
        { icon: "/icon/storeys.svg", text: "Sea ViewApartments" },
        { icon: "/icon/storeys.svg", text: "Ramp Parking" },
      ],
    //   buttonText: "View Details",
      buttonUrl: "/projects/shivaji-park",
    },
  ];
    return (
        <>
            <Banner
                title="Upcoming Project"
                description="Where vision is turning into reality  brick by brick."
                backgroundImage="/banner/redevelopment.png"
            />

            <ProjectTabs
                title="Showcasing our finest creations, built with trust and quality."
                description="We focus on creating design-led homes for people, not just projects. While our approach is market-driven, every project is backed by thoughtful design and strong execution, defining us as a premium developer in Mumbai."
            />
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                  ))}
        </>
    )
}
