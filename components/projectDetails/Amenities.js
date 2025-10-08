"use client";

import { useState } from "react";
import Image from "next/image";

export default function Amenities() {
  const tabs = [
    {
      title: "Essential Amenities",
      description:
        "All amenities have been planned keeping in mind the lifestyle requirements of residents. So, whether you enjoy doing activities or just like to lay back; there’s something for all members of the family to do.",
      icons: [
        { src: "/project/outdoor.svg", label: "Outdoor Seating Lawn" },
        { src: "/project/plant.svg", label: "Kids Plant Theatre" },
        { src: "/project/rock.svg", label: "Kids Rock Climbing" },
        { src: "/project/garden.svg", label: "Organic Garden" },
        { src: "/project/playarea.svg", label: "Kids Play Area" },
        { src: "/project/cycle.svg", label: "Cycle Hub" },
      ],
    },
    {
      title: "Quintessential Amenities",
      description: "Description for Quintessential Amenities.",
      icons: [
        { src: "/project/garden.svg", label: "Infinity Pool" },
        { src: "/project/cycle.svg", label: "Luxury Lobby" },
      ],
    },
    {
      title: "Rooftop Amenities",
      description: "Description for Rooftop Amenities.",
      icons: [
        { src: "/project/climbing.svg", label: "Skywalk" },
        { src: "/project/outdoor.svg", label: "Rooftop Lounge" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#fff3db]">
      <div className="container mx-auto py-20">
        <div className="flex flex-col lgx:flex-row items-center gap-10">
          <div className="w-full lgx:w-6/12">
            <ul className="bg-[#a87b32] rounded-md rounded-bl-[60px] py-5">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`p-6 px-11 cursor-pointer text-white transition-all ${
                    activeIndex === index ? "border-b last:border-t last:border-b-0" : ""
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <h4 className="text-white">{tab.title}</h4>
                    {activeIndex === index && (
                      <Image
                        src="/icon/arrow-right.svg"
                        alt="arrow icon"
                        width={20}
                        height={20}
                        className="object-contain filter invert brightness-200"
                      />
                    )}
                  </div>
                  {activeIndex === index && (
                    <p className="mt-2 text-white">
                      {tab.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lgx:w-6/12 transition-all duration-500">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
              {tabs[activeIndex].icons.map((item, index) => (
                <div key={index} className="mx-auto text-center">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={100}
                    height={100}
                    className="mx-auto w-16 h-16"
                  />
                  <h6 className="text-lg mt-2">{item.label}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


