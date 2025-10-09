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
  { id: 5, src: "/image/Rectangle 1569.jpg", alt: "Shared Interior 4" },
  { id: 6, src: "/image/Rectangle 1569.jpg", alt: "Shared Interior 4" },
  { id: 7, src: "/image/Rectangle 1569.jpg", alt: "Shared Interior 4" },

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
        <div className="flex flex-col lgx:flex-row items-end justify-between gap-4">
          <div className="w-full lgx:w-6/12">
            <h3>A Glimpse Into Luxury</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="flex border border-[#96722C] rounded-full lgx:mx-0 mx-auto">
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
  {activeTab === "shared" && (
    <>
      <Swiper
        key="shared"
        modules={[Navigation, Scrollbar]}
        navigation={{
          nextEl: ".custom-next-shared",
          prevEl: ".custom-prev-shared",
        }}
        scrollbar={{ el: ".custom-scrollbar-shared", draggable: true }}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        className="mt-6"
      >
        {sharedImages.map((img) => (
          <SwiperSlide
            key={img.id}
            className="!w-[80%] md:!w-[60%] lg:!w-[50%] xl:!w-[40%] transition-all duration-300 ease-in-out"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={1000}
              className="w-full object-cover rounded-sm shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
<div className="container mx-auto">
      <div className="flex gap-10 sm:gap-20 mt-6 pr-4 lg:pr-[2.604vw] items-center justify-between">
        <div className="custom-scrollbar-shared flex-grow h-[2px] w-full rounded-full bg-gray-300 cursor-pointer"></div>

<div className="gap-2 sm:gap-4 flex">
        <div className="custom-prev-shared cursor-pointer">
          <Image
            src="/icon/arrow-circle-left.svg"
            alt="prev"
            width={40}
            height={40}
                        className="w-10 h-10 md:w-12 md:h-12"

          />
        </div>
        <div className="custom-next-shared cursor-pointer">
          <Image
            src="/icon/arrow-circle-right.svg"
            alt="next"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12"

          />
        </div>
        </div>
      </div>
      </div>
    </>
  )}

  {activeTab === "living" && (
    <>
      <Swiper
        key="living"
        modules={[Navigation, Scrollbar]}
        navigation={{
          nextEl: ".custom-next-living",
          prevEl: ".custom-prev-living",
        }}
        scrollbar={{ el: ".custom-scrollbar-living", draggable: true }}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        className="mt-6"
      >
        {livingImages.map((img) => (
          <SwiperSlide
            key={img.id}
            className="!w-[80%] md:!w-[60%] lg:!w-[50%] xl:!w-[40%] transition-all duration-300 ease-in-out"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={1000}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

<div className="container mx-auto">
      <div className="flex gap-10 sm:gap-20 mt-6 pr-4 lg:pr-[2.604vw] items-center justify-between">
        <div className="custom-scrollbar-living flex-grow h-[2px] w-full rounded-full bg-gray-300 cursor-pointer"></div>

<div className="gap-2 sm:gap-4 flex">
        <div className="custom-prev-living cursor-pointer">
          <Image
            src="/icon/arrow-circle-left.svg"
            alt="prev"
            width={40}
            height={40}
                        className="w-10 h-10 md:w-12 md:h-12"

          />
        </div>
        <div className="custom-next-living cursor-pointer">
          <Image
            src="/icon/arrow-circle-right.svg"
            alt="next"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12"

          />
        </div>
        </div>
      </div>
      </div>
    </>
  )}
</div>

      </div>
    </section>
  );
}
