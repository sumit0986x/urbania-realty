import Counter from "@/components/about/Counter";
import OurExpertise from "@/components/about/OurExpertise";
import OurTeam from "@/components/about/OurTeam";
import OurVisionMission from "@/components/about/OurVisionMission";
import Overview from "@/components/about/Overview";
import Banner from "@/components/ui/Banner";


export default function About() {
    return (
        <>
      <Banner
        title="About"
        description="Where ideas meet innovation. Committed to excellence in all we do."
        backgroundImage="/banner/about.png"
      />
<Overview/>
<Counter/>
<OurVisionMission/>
<OurTeam/>
<OurExpertise/>
      </>
    )
}
