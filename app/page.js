import Banner from "@/components/ui/Banner"

export default function Home() {
  return (
    <>
      <Banner
        title={<>Luxury <br /> as it’s meant to be</>}
        buttonText="Explore Our Projects"
        buttonLink="/projects"
        backgroundImage="/banner/home.jpg"
        titleClassName="text-5xl md:text-6xl"
      />

    </>
  );
}
