'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      date: '05 July 2024 • Blog',
      title: '5 Key Trends Transforming the Industry Right Now',
      image: '/Image/Rectangle 1569 (1).jpg',
    },
    {
      id: 2,
      date: '05 July 2024 • News',
      title: 'This Month in Focus: Key Industry Trends Unveiled',
      image: '/Image/Rectangle 1571 (1).jpg',
    },
    {
      id: 3,
      date: '05 July 2024 • Blog',
      title: 'Inside Look: Highlights from Our Latest Milestone',
      image: '/Image/Rectangle 1570 (3).jpg',
    },
    {
      id: 4,
      date: '05 July 2024 • Blog',
      title: 'Inside Look: Highlights from Our Latest Milestone',
      image: '/Image/Rectangle 1571 (1).jpg',
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-end">
          <div className="w-full sm:w-2/3">
            <h5 className=" text-[#96722C]">Insights & Updates</h5>
            <h3 className="">
              Latest Blogs to Stay Inspired
            </h3>
          </div>
          <div className="hidden sm:flex gap-2 items-center">
            <div className="blog-prev cursor-pointer">
              <Image
                src="/icon/arrow-circle-left.svg"
                alt="arrow-left"
                width={40}
                height={40}
              />
            </div>
            <div className="blog-next cursor-pointer">
              <Image
                src="/icon/arrow-circle-right.svg"
                alt="arrow-right"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className="py-6">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              nextEl: '.blog-next',
              prevEl: '.blog-prev',
            }}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="blogSwiper"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blogs-slider">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover rounded-sm"
                  />
                  <div className="blog-content mt-5 px-5 border-l border-[#96722C80]">
                    <p className="text-[#96722C] small-text">{blog.date}</p>
                    <h6 className="font-semibold mt-1">
                      {blog.title}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
