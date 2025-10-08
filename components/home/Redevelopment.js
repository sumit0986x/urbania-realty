import ProjectCards from "./ProjectCards";

export default function Redevelopment() {
  return (
    <>
      <ProjectCards
        title="Redevelopment Projects"
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
        ]}
      />
    </>
  )
}
