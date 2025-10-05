import ProjectCards from "./ProjectCards";


export default function Completed() {
    return (
        <>
            
            <ProjectCards
              title="Completed Projects"
              bgColor="bg-[#FEF7EA]"
              projects={[
                {
                  title: "140 Shivaji Park",
                  subtitle: "140 Shivaji Park",
                  heading: "Shaping Skylines, One Project at a Time",
                  description:
                    "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces.",
                  buttonText: "VIEW DETAILS",
                  buttonLink: "/projects/140-shivaji-park",
                  imageSrc: "/image/Rectangle 1555.png",
                },
                {
                  title: "Kohinoor Square",
                  subtitle: "Kohinoor Square",
                  heading: "A Landmark of Excellence",
                  description:
                    "Modern architecture meets heritage in this stunning redevelopment project in Dadar.",
                  buttonText: "VIEW DETAILS",
                  buttonLink: "/projects/kohinoor-square",
                  imageSrc: "/image/Rectangle 1555.png",
                },
              ]}
            />
        </>
    )
}
