// import Image from "next/image";
// import Button from "../ui/Button";

// export default function Testimonials() {
//   return (
//     <section className="bg-[url(/banner/testimonal-bg.png)] bg-no-repeat bg-cover bg-center h-full w-full">
//       <div className="container mx-auto py-20">
//         <div className="flex flex-col lgx:flex-row gap-4">
//           {/* <div className="w-full md:w-6/12">
//             <div className="border border-[#96722C] rounded-full p-5">
//               <div className="relative w-8/12 aspect-square rounded-full overflow-hidden">
//                 <Image
//                   src="/image/Ellipse 14 (1).png"
//                   alt=""
//                   fill
//                   priority
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div> */}

//           <div className="w-full lgx:w-6/12 flex justify-center relative">
//             <div className="h-full w-[85%] border-t border-[#96722C] absolute -left-1/3" />
//             <div className="h-full w-[200%] border-b border-[#96722C] absolute -right-[150%]" />

//             <div className="border border-[#96722C] rounded-full p-5 md:p-10">
//               <div className="rounded-full ">
//                 <Image
//                   src="/image/Ellipse 14 (1).png"
//                   alt="Profile"
//                   width={100}
//                   height={100}
//                   className="min-h-60 min-w-60 sm:min-h-80 sm:min-w-80 lg:min-w-96 lg:min-h-96"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="w-full lgx:w-6/12 relative">
//             {/* <div className="h-full w-[185%] border-b border-[#96722C] absolute -right-1/3" /> */}

//             <div className="h-full flex flex-col gap-y-2.5 justify-center relative">
//               <h5 className="text-[#96722C]">Testimonials</h5>
//               <h3 className="leading-snug">
//                 Our biggest award is develop thriving communities
//               </h3>
//               <p className="text-gray-700">
//                 “Searching for a dream home within budget, that too in Rajarhat
//                 is a critical job for anybody. We knew this but still ventured
//                 into it looking for something close to our heart, and a envy for
//                 into it looking for something close to our heart, and a envy for
//                 others. ”
//               </p>
//               <h5>Mark Leon</h5>
//               <p>Mumbai, Dadar</p>
//               <Button text="Read More" url="/testimonials" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mark Leon",
    location: "Mumbai, Dadar",
    title: "Our biggest award is develop thriving communities",
    content:
      "Searching for a dream home within budget, that too in Rajarhat is a critical job for anybody. We knew this but still ventured into it looking for something close to our heart, and a envy for others.",
  },
  {
    name: "Sarah Mehta",
    location: "Bangalore, Indiranagar",
    title: "We value client satisfaction over anything else",
    content:
      "We are delighted with the overall experience of finding our dream home. The team made it incredibly easy.",
  },
  {
    name: "Rahul Das",
    location: "Kolkata, Salt Lake",
    title: "Great service and transparent process",
    content:
      "From site visits to documentation, everything was handled professionally. I would highly recommend them.",
  },
    {
    name: "Sarah Mehta",
    location: "Bangalore, Indiranagar",
    title: "We value client satisfaction over anything else",
    content:
      "We are delighted with the overall experience of finding our dream home. The team made it incredibly easy.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[url(/banner/testimonal-bg.png)] bg-no-repeat bg-cover bg-center h-full w-full">
      <div className="container mx-auto py-20">
        <div className="flex flex-col lgx:flex-row gap-4">
          <div className="w-full lgx:w-6/12 flex justify-center relative">
            <div className="h-full w-[85%] border-t border-[#96722C] absolute -left-1/3" />
            <div className="h-full w-[200%] border-b border-[#96722C] absolute -right-[150%]" />
            <div className="border border-[#96722C] rounded-full p-5 md:p-10">
              <div className="rounded-full ">
                <Image
                  src="/image/Ellipse 14 (1).png"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="min-h-60 min-w-60 sm:min-h-80 sm:min-w-80 lg:min-w-96 lg:min-h-96"
                />
              </div>
            </div>
          </div>

          <div className="w-full lgx:w-6/12 relative">
<Swiper
  modules={[Pagination]}
  pagination={{
    el: '.custom-pagination',
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className}">0${index + 1}</span>`,
  }}
  className="h-full"
>

              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full flex flex-col gap-y-2.5 justify-center relative">
                    <h5 className="text-[#96722C]">Testimonials</h5>
                    <h3 className="leading-snug">{item.title}</h3>
                    <p className="text-gray-700">“{item.content}”</p>
                    <h5>{item.name}</h5>
                    <p>{item.location}</p>
                    <div className="w-auto">
                    <Button text="Read More" url="/testimonials" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          <div className="custom-pagination absolute flex justify-end !-bottom-[5%] right-0  gap-3 z-10" />

          </div>
        </div>
      </div>
    </section>
  );
}
