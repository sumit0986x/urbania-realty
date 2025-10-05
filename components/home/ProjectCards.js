// "use client";

// import Image from "next/image";
// import Button from "../ui/Button";

  // title = "Redevelopment Expertise",
  // subtitle = "Innovating Redevelopment",
  // heading = "Redefining old spaces with smart, Redevelopment.",
  // description = "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
  // buttonText = "view details",
  // buttonLink = "/redevelopment",
  // imageSrc = "/image/Rectangle 1560.png",
  // bgColor = "bg-[#FEF7EA]",


// export default function RedevelopmentSection({


//     title = "",
//   subtitle = "",
//   heading = "",
//   description = "",
//   buttonText = "",
//   buttonLink = "",
//   imageSrc = "",
//   bgColor = "",
// }) {
//   return (
//     <section className="py-10">
//       <div className={`redevelopment py-10 ${bgColor}`}>
//         <h3 className="text-center py-10">{title}</h3>

//         <div className="container mx-auto ">
//           <div className="flex flex-col   lgx:flex-row h-full ">
//             <div className="w-full lgx:w-7/12">
//               <div className="relative w-full h-full min-h-[300px] md:min-h-[450px] md:max-h-[550px]">
//                 <Image
//                   src={imageSrc}
//                   alt={title}
//                   fill
//                   priority
//                   className="object-cover rounded-sm"
//                 />
//               </div>
//             </div>

//             <div className="w-full lgx:w-5/12 px-5 lgx:px-0 lgx:py-10 ">
//               <div className="border-l border-r lgx:border-l-0 lgx:border-r-0     lgx:border-t lgx:border-b border-[#96722C80] h-full relative">
//               <Image
//                 src="/icon/Isolation.svg"
//                 alt="decor-icon"
//                 width={100}
//                 height={100}
//                 className="decor-icon absolute w-12 p-2 bg-[#FEF7EA] -left-6 -bottom-6 lgx:left-auto lgx:-right-6 lgx:-top-6"
//               />

//                 <div className="h-full flex flex-col justify-center p-5">
//                   <h5 className="text-[#96722C]">{subtitle}</h5>
//                   <h3 className="leading-snug">
//                     {heading}
//                   </h3>
//                   <p className="text-gray-700 line-clamp-3">{description}</p>

//                   <div className="py-4">
//                     <Button text={buttonText} url={buttonLink} />
//                   </div>
//                 </div>
//               <Image
//                 src="/icon/Isolation.svg"
//                 alt="decor-icon"
//                 width={100}
//                 height={100}
//                 className="decor-icon absolute w-12 p-2 bg-[#FEF7EA] -right-6 -bottom-6"
//               />

//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }













"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ProjectCards({
  title = "",
  bgColor = "",
  projects = [],
  reverse = false, // ✅ Add reverse layout support
}) {
  // ✅ Single Project Card Renderer
  const renderProjectCard = (project, index) => (
    <div
      key={index}
      className={`flex flex-col h-full ${
        reverse ? "lgx:flex-row-reverse" : "lgx:flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="w-full lgx:w-7/12 relative overflow-visible">
        {/* ✅ overflow-visible ensures Isolation icon not cut */}
        <div className="relative w-full h-full min-h-[300px] md:min-h-[450px] md:max-h-[550px]">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            priority
            className="object-cover rounded-sm"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lgx:w-5/12 px-5 lgx:px-0 lgx:py-10 relative overflow-visible">
        <div className="border-l border-r lgx:border-l-0 lgx:border-r-0 lgx:border-t lgx:border-b border-[#96722C80] h-full relative overflow-visible">
          {/* ✅ Top Decorative Icon */}
          <Image
            src="/icon/Isolation.svg"
            alt="decor-icon"
            width={100}
            height={100}
            className={`decor-icon absolute w-12 p-2 rounded-full  ${
              reverse
                ? "bg-[#fffcf5] lgx:left-0 lgx:-top-6 -right-6 bottom-0 lgx-bottom-6"
                : "bg-[#FEF7EA] -left-6 bottom-0 lgx:left-auto lgx:right-0 lgx:-top-6"
            }`}
          />

          <div className="h-full flex flex-col justify-center p-5">
            <h5 className="text-[#96722C]">{project.subtitle}</h5>
            <h3 className="leading-snug">{project.heading}</h3>
            <p className="text-gray-700 line-clamp-3">{project.description}</p>

            <div className="py-4">
              <Button text={project.buttonText} url={project.buttonLink} />
            </div>
          </div>

          {/* ✅ Bottom Decorative Icon */}
          <Image
            src="/icon/Isolation.svg"
            alt="decor-icon"
            width={100}
            height={100}
                        className={`decor-icon absolute w-12 p-2 rounded-full  ${
              reverse ? "bg-[#fffcf5] bottom-0 -left-6 lgx:left-0 lgx:-bottom-6" 
              : "bg-[#FEF7EA] lgx:right-0 -right-6 bottom-0 lgx:-bottom-6"
            }`}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10">
      <div className={`redevelopment py-10 relative overflow-visible ${bgColor}`}>
        {title && <h3 className="text-center py-10">{title}</h3>}

        <div className="container mx-auto relative overflow-visible">
          {projects.length > 1 ? (
            <>
              {/* ✅ Swiper Slider */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".complete-next",
                  prevEl: ".complete-prev",
                }}
                slidesPerView={1}
                loop={true}
                className="completeSwiper py-4 overflow-visible"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="overflow-visible">
                    {renderProjectCard(project, index)}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* ✅ Navigation Arrows */}
              <div className="custom-prev complete-prev absolute hidden lgx:block left-0  lg:left-[2.604vw]  top-1/2 -translate-y-1/2 cursor-pointer">
                <Image
                  src="/icon/arrow-circle-left.svg"
                  alt="prev"
                  width={40}
                  height={40}
                />
              </div>
              <div className="custom-next complete-next absolute hidden lgx:block right-0 lg:right-[2.604vw] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                <Image
                  src="/icon/arrow-circle-right.svg"
                  alt="next"
                  width={40}
                  height={40}
                />
              </div>
            </>
          ) : (
            // ✅ Static Single Card
            projects.map((project, index) => renderProjectCard(project, index))
          )}
        </div>
      </div>
    </section>
  );
}
