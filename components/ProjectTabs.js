"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import Button from "./ui/Button";

const projectsData = {
  ongoing: [
    {
      title: "46 Juhu",
      subtitle: "Innovation Meets Lifestyle, Dreams Come True",
      description:
        "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
      image: "/image/Group 887.png",
    },
    {
      title: "46 Juhu",
      subtitle: "Innovation Meets Lifestyle, Dreams Come True",
      description:
        "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
      image: "/image/Group 887.png",
    },
  ],
  upcoming: [
    {
      title: "46 Juhu",
      subtitle: "Innovation Meets Lifestyle, Dreams Come True",
      description:
        "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
      image: "/image/Rectangle 1555.png",
    },
    {
      title: "46 Juhu",
      subtitle: "Innovation Meets Lifestyle, Dreams Come True",
      description:
        "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
      image: "/image/Rectangle 1560.png",
    },
  ],
};

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <section className="py-5">
      <div className="py-5">
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "ongoing"
                ? "border-b-2 border-[#96722C] text-[#96722C]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("ongoing")}
          >
            Ongoing Projects
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "upcoming"
                ? "border-b-2 border-[#96722C] text-[#96722C]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Projects
          </button>
        </div>

        <div className="container mx-auto relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: `.${activeTab}-next`,
              prevEl: `.${activeTab}-prev`,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="py-4"
          >
            {projectsData[activeTab].map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-5/12 w-full order-2 lg:order-1 flex flex-col justify-between py-3 lg:py-0 ">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src="/icon/Isolation.svg"
                        width={24}
                        height={24}
                        alt="decor-icon"
                      />
                      <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <div className="flex flex-col justify-center gap-3 h-full px-5">
                      <h5 className="text-[#96722C] font-semibold">{project.title}</h5>
                      <h3 className="font-semibold">{project.subtitle}</h3>
                      <p>{project.description}</p>
                      <div className="py-3">
                        <Button text="View Details" url="/contact"/>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <Image
                        src="/icon/Isolation.svg"
                        width={24}
                        height={24}
                        alt="decor-icon"
                      />
                      <hr className="flex-grow border-t border-gray-300" />
                    </div>
                  </div>

                  <div className="lg:w-7/12 w-full order-1 lg:order-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer ${activeTab}-prev`}>
            <Image
              src="/icon/arrow-circle-left.svg"
              width={40}
              height={40}
              alt="arrow-left"
            />
          </div>
          <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer ${activeTab}-next`}>
            <Image
              src="/icon/arrow-circle-right.svg"
              width={40}
              height={40}
              alt="arrow-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
