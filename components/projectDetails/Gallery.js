"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Navigation, Scrollbar } from "swiper/modules";
import Image from "next/image";

const sharedImages = [
  { id: 1, src: "/image/Rectangle 1569.jpg", alt: "Shared Interior 1" },
  { id: 2, src: "/image/Rectangle 1569.jpg", alt: "Shared Interior 2" },
  { id: 3, src: "/image/Rectangle 1569.jpg", alt: "Shared Interior 3" },
  { id: 4, src: "/image/Rectangle 1569.jpg", alt: "Shared Interior 4" },
];

const livingImages = [
  { id: 1, src: "/image/Rectangle 1569.jpg", alt: "Living Space 1" },
  { id: 2, src: "/image/Rectangle 1569.jpg", alt: "Living Space 2" },
  { id: 3, src: "/image/Rectangle 1569.jpg", alt: "Living Space 3" },
  { id: 4, src: "/image/Rectangle 1569.jpg", alt: "Living Space 4" },
  { id: 5, src: "/image/Group887.png", alt: "Living Space 5" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("shared");

  const tabs = [
    { name: "Shared Space", key: "shared" },
    { name: "Your Living Space", key: "living" },
  ];

  const getImages = () => {
    return activeTab === "shared" ? sharedImages : livingImages;
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex items-end justify-between gap-4">
          <div className="w-full md:w-6/12">
            <h3>A Glimpse Into Luxury</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="flex border border-[#96722C] rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`uppercase transition-colors py-2 px-6 xs:px-10 rounded-full small-text
                  ${
                    activeTab === tab.key
                      ? "bg-[#96722C] text-white"
                      : "text-[#96722C] hover:text-[#96722C]"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 relative">
        <div className="relative">
          <Swiper
            modules={[Navigation, Scrollbar]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            
            scrollbar={{el: ".custom-scrollbar", draggable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-6"
          >
            {getImages().map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="container mx-auto">
            <div className="flex gap-4 mt-6 pr-4 lg:pr-[2.604vw] items-center justify-between">
              <div className="custom-scrollbar flex-grow h-[2px] w-full rounded-full bg-gray-300 cursor-pointer"></div>

              <div className="custom-prev cursor-pointer">
                <Image
                  src="/icon/arrow-circle-left.svg"
                  alt="prev"
                  width={40}
                  height={40}
                />
              </div>
              <div className="custom-next cursor-pointer">
                <Image
                  src="/icon/arrow-circle-right.svg"
                  alt="next"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
