"use client"; // for Next.js 13+ if using app directory
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from "./ui/Button";


const completedProjects = [
  {
    title: "140 Shivaji Park",
    subtitle: "Shaping Skylines, One Project at a Time",
    description:
      "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
    image: "/image/Rectangle 1555.png",
  },
  {
    title: "140 Shivaji Park",
    subtitle: "Shaping Skylines, One Project at a Time",
    description:
      "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
    image: "/image/Rectangle 1555.png",
  },
];

export default function CompletedProjects() {
  return (
    <section className="py-5 bg-[#FEF7EA]">
      <div className="text-center py-5">
        <h3 className="text-2xl font-semibold">Completed Projects</h3>
      </div>

      <div className="relative container mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".complete-next",
            prevEl: ".complete-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="py-4"
        >
          {completedProjects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-7/12 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>

                          <div className="lg:w-5/12 w-full flex flex-col justify-between  py-3 lg:py-0 ">
                            <div className="flex items-center gap-3 mb-4">
                              <hr className="flex-grow border-t border-gray-300" />
                              <Image
                                src="/icon/Isolation.svg"
                                width={24}
                                height={24}
                                alt="decor-icon"
                              />
                            </div>
                
                    <div className="flex flex-col justify-center px-5">
                      <h5 className="text-[#96722C] font-semibold">{project.title}</h5>
                      <h3 className="font-semibold">{project.subtitle}</h3>
                      <p className="mt-2">{project.description}</p>
                      <div className="py-3">
                        <Button text="View Details" url="/about"/>
                      </div>
                    </div>
                
                            <div className="flex items-center gap-3 mt-4">
                              <hr className="flex-grow border-t border-gray-300" />
                              <Image
                                src="/icon/Isolation.svg"
                                width={24}
                                height={24}
                                alt="decor-icon"
                              />
                            </div>
                          </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer complete-prev">
          <Image
            src="/icon/arrow-circle-left.svg"
            width={40}
            height={40}
            alt="arrow-left"
          />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer complete-next">
          <Image
            src="/icon/arrow-circle-right.svg"
            width={40}
            height={40}
            alt="arrow-right"
          />
        </div>
      </div>
    </section>
  );
}
