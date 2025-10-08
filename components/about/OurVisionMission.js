"use client";
import Image from "next/image";

const missionData = {
  title: "Our Mission",
  heading: "To create spaces that inspire, uplift, and redefine luxury living.",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  icon: "/icon/Isolation.svg",
  image: "/image/Rectangle 1560.png",
};
const visionData = {
  title: "Our Vision",
  heading: "To create spaces that inspire, uplift.",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  icon: "/icon/Isolation.svg",
  image: "/image/Rectangle 1560.png",
};

export default function OurVisionMission() {
  return (
    <section className="bg-[#fff3db] p-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-16 py-10">
          <div className="w-full md:w-6/12">
            <div className="h-full flex flex-col gap-y-2.5 justify-center relative">
              <div className="h-full w-[130%] border-b border-[#96722C] absolute -left-1/3" />

              <Image
                src="/icon/Isolation.svg"
                alt="decor-icon"
                width={100}
                height={100}
                className="absolute w-12 p-2 rounded-full -bottom-6 right-0 bg-[#fff3db]"
              />

              <h5 className="text-[#96722C]">{missionData.title}</h5>
              <h3 className="leading-snug">{missionData.heading}</h3>
              <p className="text-gray-700 mb-5">{missionData.description}</p>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="relative w-full h-64 md:h-[400px]">
              <Image
                src={missionData.image}
                alt="Overview Image"
                className="object-cover rounded-sm"
                fill
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-16 py-10">
          <div className="w-full md:w-6/12">
            <div className="relative w-full h-64 md:h-[400px]">
              <Image
                src={visionData.image}
                alt="Overview Image"
                className="object-cover rounded-sm"
                fill
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="h-full flex flex-col gap-y-2.5 justify-center relative">
              <div className="h-full w-[130%] border-b border-[#96722C] absolute -right-1/3" />

              <Image
                src="/icon/Isolation.svg"
                alt="decor-icon"
                width={100}
                height={100}
                className="absolute w-12 p-2 rounded-full -bottom-6 left-0 bg-[#fff3db]"
              />

              <h5 className="text-[#96722C]">{visionData.title}</h5>
              <h3 className="leading-snug">{visionData.heading}</h3>
              <p className="text-gray-700 mb-5">{visionData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
