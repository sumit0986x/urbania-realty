import AwardCard from "@/components/AwardCard";
import Banner from "@/components/ui/Banner";

export default function Awards() {
  const dummyAwards = [
    {
      id: 1,
      year: "2025",
      title: "Global Architecture Awards",
      subtitle: "Innovative Use of Space in Urban Projects",
      image: "/image/Rectangle 1571.jpg",
    },
    {
      id: 2,
      year: "2024",
      title: "Best Design Award",
      subtitle: "Sustainable Urban Solutions",
      image: "/image/Rectangle 1570.jpg",
    },
    {
      id: 3,
      year: "2023",
      title: "Excellence in Architecture",
      subtitle: "Creative Use of Materials",
      image: "/image/Rectangle 1569.jpg",
    },
        {
      id: 4,
      year: "2025",
      title: "Excellence in Architecture",
      subtitle: "Creative Use of Materials",
      image: "/image/Rectangle 1569.png",
    },
  ];

  return (
    <>
      <Banner
        subtitle="Awards"
        description="Recognizing the Best, Inspiring the Rest"
        backgroundImage="/banner/awards.png"
      />
      <AwardCard awards={dummyAwards} />
    </>
  );
}
