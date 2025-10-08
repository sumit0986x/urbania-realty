"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    {
      id: 1,
      year: "2025",
      title: "Global Architecture Awards",
      subtitle: "Innovative Use of Space in Urban Projects",
      image: "/icon/achieve.svg",
    },
    {
      id: 2,
      year: "2025",
      title: "Realty Leadership Awards",
      subtitle: "Best Customer-Centric Residential Project",
      image: "/icon/achieve.svg",
    },
    {
      id: 3,
      year: "2025",
      title: "Property Achievers Awards",
      subtitle: "Sustainable Design Initiative of the Year",
      image: "/icon/achieve.svg",
    },
    {
      id: 4,
      year: "2025",
      title: "Luxury Real Estate Awards",
      subtitle: "Outstanding Premium Housing Project",
      image: "/icon/achieve.svg",
    },
    {
      id: 5,
      year: "2025",
      title: "Luxury Real Estate Awards",
      subtitle: "Outstanding Premium Housing Project",
      image: "/icon/achieve.svg",
    },
  ];

  return (
    <section className="py-10 relative">
      <div className="awards relative">
        <div className="flex items-center justify-center gap-4 mb-5">
          <hr className="w-1/2 border-[#96722C80]" />

          <Image
            src="/icon/Isolation-gray.svg"
            alt="Left Icon"
            width={60}
            height={60}
            className="hidden sm:block animate-spin-slow"
          />
          <div className="text-center px-3  w-full">
            <h5 className="text-[#96722C]">Awards & Recognition</h5>
            <h3 className="mt-1 mb-12">Celebrating Our Legacy of Awards</h3>
          </div>
          <Image
            src="/icon/Isolation-gray.svg"
            alt="Left Icon"
            width={60}
            height={60}
            className="hidden sm:block animate-spin-slow"
          />
          <hr className="w-1/2 border-[#96722C80]" />
        </div>

        <div className="container mx-auto relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
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
            className="awardSwiper py-5 relative"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="award-slider text-center">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={120}
                    height={120}
                    className="mx-auto w-1/2 h-auto"
                  />
                  <div className="award-content mt-4">
                    <p className="text-base text-[#96722C] font-medium">
                      {award.year}
                    </p>
                    <h6 className="text-lg font-semibold mt-1">
                      {award.title}
                    </h6>
                    <span className="text-sm block text-gray-600 mt-1">
                      {award.subtitle}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev award-prev absolute hidden lgx:block left-0  lg:left-[2.604vw]  top-1/2 -translate-y-1/2 cursor-pointer">
            <Image
              src="/icon/arrow-circle-left.svg"
              alt="arrow-left"
              width={40}
              height={40}
            />
          </div>
          <div className="custom-next award-next absolute hidden lgx:block right-0  lg:right-[2.604vw]   top-1/2 -translate-y-1/2 cursor-pointer">
            <Image
              src="/icon/arrow-circle-right.svg"
              alt="arrow-right"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
