
import Banner from "@/components/ui/Banner"
import AwardsSection from "@/components/AwardSection";
import BlogSection from "@/components/BlogSection";
import CompletedProjects from "@/components/CompletedProjects";
import IntroSection from "@/components/IntroSection";
import ProjectsTabs from "@/components/ProjectTabs";
import RedevelopmentSection from "@/components/RedevelopmentSection";
// import Redevelopment from "@/components/Redevelopment";

export default function Home() {
  return (
    <>
      <Banner 
        title={<> Luxury <br/> as it’s meant to be</>}
        buttonText="Explore Our Projects"
        buttonLink="/projects"
        backgroundImage="/banner/home.jpg"
      />
      <IntroSection/>
      <CompletedProjects/>
      <ProjectsTabs/>
      {/* <Redevelopment/> */}
      <RedevelopmentSection/>
      <AwardsSection/>
      <BlogSection/>
      </>
  );
}
