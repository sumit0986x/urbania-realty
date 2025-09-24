"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // <-- modules
import "swiper/css";
import "swiper/css/navigation";
import Button from "./ui/Button";

const awards = [
  { year: 2025, title: "Global Architecture Awards", description: "Innovative Use of Space in Urban Projects", img: "/icon/achieve.svg" },
  { year: 2025, title: "Realty Leadership Awards", description: "Best Customer-Centric Residential Project", img: "/icon/achieve.svg" },
  { year: 2025, title: "Property Achievers Awards", description: "Sustainable Design Initiative of the Year", img: "/icon/achieve.svg" },
  { year: 2025, title: "Luxury Real Estate Awards", description: "Outstanding Premium Housing Project", img: "/icon/achieve.svg" },
  { year: 2025, title: "Luxury Real Estate Awards", description: "Outstanding Premium Housing Project", img: "/icon/achieve.svg" },
  { year: 2025, title: "Luxury Real Estate Awards", description: "Outstanding Premium Housing Project", img: "/icon/achieve.svg" },
];

export default function AwardSection() {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold">Awards & Recognition</h3>
        <p className="text-[#96722C] font-light mt-2">
          Recognized globally for our commitment to quality and excellence.
        </p>
      </div>

      <div className="relative container mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".award-next",
            prevEl: ".award-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img src={award.img} alt={award.title} className="w-24 h-24 mx-auto mb-4" />
                <p className="text-gray-500">{award.year}</p>
                <h6 className="mt-1">{award.title}</h6>
                <span className="text-gray-600">{award.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="award-prev absolute left-[40px] top-1/2 -translate-y-1/2 cursor-pointer">
          <img src="/icon/arrow-circle-left.svg" alt="prev" className="w-8 h-8" />
        </div>
        <div className="award-next absolute right-[40px] top-1/2 -translate-y-1/2 cursor-pointer">
          <img src="/icon/arrow-circle-right.svg" alt="next" className="w-8 h-8" />
        </div>
      </div>

      <div className="text-center py-5">
        <Button text="Read More" url="/contact" />

      </div>
    </section>
  );
}
