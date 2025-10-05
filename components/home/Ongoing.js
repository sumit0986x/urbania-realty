// import ProjectCards from "./ProjectCards";

// export default function ProjectTab() {
//     return (
//         <>
//                         <ProjectCards
//                         reverse
//                           title="Ongoing Projects"
//                           bgColor="bg-[#FEF7EA]"
//                           projects={[
//                             {
//                               title: "140 Shivaji Park",
//                               subtitle: "140 Shivaji Park",
//                               heading: "Shaping Skylines, One Project at a Time",
//                               description:
//                                 "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces.",
//                               buttonText: "VIEW DETAILS",
//                               buttonLink: "/projects/140-shivaji-park",
//                               imageSrc: "/image/Rectangle 1555.png",
//                             },
//                             {
//                               title: "Kohinoor Square",
//                               subtitle: "Kohinoor Square",
//                               heading: "A Landmark of Excellence",
//                               description:
//                                 "Modern architecture meets heritage in this stunning redevelopment project in Dadar.",
//                               buttonText: "VIEW DETAILS",
//                               buttonLink: "/projects/kohinoor-square",
//                               imageSrc: "/image/Rectangle 1555.png",
//                             },
//                           ]}
//                         />
//         </>
//     )
// }


"use client";
import { useState } from "react";
import ProjectCards from "./ProjectCards";

export default function ProjectTab() {
  // Step 1: Define your dummy data for both tabs
  const ongoingProjects = [
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
  ];

  const upcomingProjects = [
    {
      title: "Sunrise Towers",
      subtitle: "Sunrise Towers",
      heading: "Elevating Urban Living",
      description:
        "A premium upcoming project that redefines modern living with cutting-edge design and sustainability.",
      buttonText: "COMING SOON",
      buttonLink: "#",
      imageSrc: "/image/Rectangle 1555.png",
    },
    {
      title: "Ocean View Residency",
      subtitle: "Ocean View Residency",
      heading: "Where Luxury Meets the Sea",
      description:
        "Experience coastal luxury like never before — an iconic address in the making.",
      buttonText: "COMING SOON",
      buttonLink: "#",
      imageSrc: "/image/Rectangle 1555.png",
    },
  ];

  // Step 2: Manage which tab is active
  const [activeTab, setActiveTab] = useState("ongoing");

  // Step 3: Conditionally render projects based on the active tab
  const currentProjects =
    activeTab === "ongoing" ? ongoingProjects : upcomingProjects;

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-center ">
        <button
          onClick={() => setActiveTab("ongoing")}
          className="border-none outline-none ">
         <h5 className={`px-2 sm:px-4 py-2 transition-all md:text-[2.5vw] ${
            activeTab === "ongoing"
              ? " text-black"
              : "  text-gray-400 hover:text-black"
          }`}> Ongoing Project</h5>
        </button>

        <button
          onClick={() => setActiveTab("upcoming")}
          className="border-none outline-none ">
         <h5 className={`px-2 sm:px-4 py-2 transition-all lg:text-[2.5vw] ${
            activeTab === "upcoming"
              ? " text-black"
              : "  text-gray-400 hover:text-black"
          }`}> Upcoming Project</h5>
        </button>
      </div>

      {/* ProjectCards component */}
      <ProjectCards
        reverse
        // title={activeTab === "ongoing" ? "Ongoing Projects" : "Upcoming Projects"}
        // bgColor={activeTab === "ongoing" ? "bg-[#FEF7EA]" : "bg-[#EAF7FE]"}
        projects={currentProjects}
      />
    </div>
  );
}
