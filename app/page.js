import AwardsSection from "@/components/home/AwardsSection";
import BlogSection from "@/components/home/BlogSection";
import Completed from "@/components/home/Compeleted";
import RedevelopmentSection from "@/components/home/ProjectCards";
import Banner from "@/components/ui/Banner";
import Ongoing from "@/components/home/Ongoing";
import Redevelopment from "@/components/home/Redevelopment";
import ProjectTab from "@/components/home/Ongoing";
import Intro from "@/components/home/Intro";
import Testimonials from "@/components/home/Testimonials";
import { fetchPageData } from "@/lib/fetchPageData";
import { API_ENDPOINTS } from "@/utils/endpoints";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export default async function Home() {
  const home = await fetchPageData(API_ENDPOINTS.home);
  // console.log("home", home);
  if (!home) {
    return notFound();
  }

  return (
    <>
      <Banner
        title={
          <>
            Luxury <br /> as it’s meant to be
          </>
        }
        buttonText="Explore Our Projects"
        buttonLink="/projects"
        backgroundImage="/banner/home.jpg"
        titleClassName="text-5xl md:text-6xl"
      />

      <Intro />

      <Completed />
      {/* <Ongoing/> */}
      <ProjectTab />
      <Redevelopment />
      <AwardsSection />
      <Testimonials />
      <BlogSection />
    </>
  );
}
