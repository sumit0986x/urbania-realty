"use client"; // For Next.js 13+ app directory

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./ui/Button";

const blogs = [
  {
    img: "/image/Rectangle 1569 (1).jpg",
    date: "05 July 2024",
    type: "Blog",
    title: "5 Key Trends Transforming the Industry Right Now",
  },
  {
    img: "/image/Rectangle 1571 (1).jpg",
    date: "05 July 2024",
    type: "News",
    title: "This Month in Focus: Key Industry Trends Unveiled",
  },
  {
    img: "/image/Rectangle 1570 (3).jpg",
    date: "05 July 2024",
    type: "Blog",
    title: "Inside Look: Highlights from Our Latest Milestone",
  },
  {
    img: "/image/Rectangle 1571 (1).jpg",
    date: "05 July 2024",
    type: "Blog",
    title: "Inside Look: Highlights from Our Latest Milestone",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-6">
          <div className="sm:w-2/3">
            <h3 className="text-2xl font-semibold">Insights & Updates</h3>
            <p className="text-[#96722C] font-light">
              Explore our latest blogs and press releases to stay informed and inspired.
            </p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <div className="blog-prev cursor-pointer">
              <img src="/icon/arrow-circle-left.svg" alt="arrow-left" className="w-10 h-10" />
            </div>
            <div className="blog-next cursor-pointer">
              <img src="/icon/arrow-circle-right.svg" alt="arrow-right" className="w-10 h-10" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
          }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {blogs.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <div className="blogs-slider">
                <img src={blog.img} alt={blog.title} className="w-full h-full rounded-md" />
                <div className="blog-content border-l border-[#96722C80] pl-5 mt-5">
                  <p className="text-[#96722C] text-sm">
                    {blog.date} • {blog.type}
                  </p>
                  <h6 className="mt-1 font-semibold">{blog.title}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6">
          <Button text="Contact Us" url="/contact" />
        </div>
      </div>
    </section>
  );
}
