// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const floorPlans = [
//     {
//         id: 1,
//         title: "Typical Floor Plan",
//         image: "/project/gallery1.png",
//     },
//     {
//         id: 2,
//         title: "3BHK Floor Plan",
//         image: "/project/gallery2.png",
//     },
//     {
//         id: 3,
//         title: "5BHK Floor Plan",
//         image: "/project/gallery3.png",
//     },
//     {
//         id: 4,
//         title: "Penthouse Floor Plan",
//         image: "/project/gallery1.png",
//     },
//     {
//         id: 5,
//         title: "Studio Floor Plan",
//         image: "/project/gallery2.png",
//     },
// ];

// export default function FloorPlan() {
//     return (
//         <section className="py-20">
//             <div className="container mx-auto relative">
//                 <div className="pb-20 ">
//                     <h3 className="text-center  mb-6">Comprehensive Floor Plan</h3>

//                     <Swiper
//                         modules={[Autoplay, Navigation]}
//                         navigation={{
//                             nextEl: ".floor-next",
//                             prevEl: ".floor-prev",
//                         }}
//                         loop={true}
//                         autoplay={{ delay: 3000, disableOnInteraction: false }}
//                         breakpoints={{
//                             0: {
//                                 slidesPerView: 1,
//                                 spaceBetween: 20,
//                             },
//                             768: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 30,
//                             },
//                             1024: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 40,
//                             },
//                         }}
//                     >
//                         {floorPlans.map((plan) => (
//                             <SwiperSlide key={plan.id}>
//                                 <div className="flex flex-col items-center">
//                                     <Image
//                                         src={plan.image}
//                                         alt={plan.title}
//                                         width={1000}
//                                         height={1000}
//                                         quality={100}
//                                         className="w-full h-full object-cover"
//                                     />
//                                     <h6 className="mt-2">{plan.title}</h6>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                     <div className="floor-prev absolute hidden lgx:block left-0  lg:left-[2.604vw]  top-1/3 -translate-y-1/2 cursor-pointer">
//                         <Image
//                             src="/icon/arrow-circle-left.svg"
//                             alt="prev"
//                             width={40}
//                             height={40}
//                         />
//                     </div>
//                     <div className="floor-next absolute hidden lgx:block right-0 lg:right-[2.604vw] top-1/3 -translate-y-1/2 cursor-pointer z-10">
//                         <Image
//                             src="/icon/arrow-circle-right.svg"
//                             alt="next"
//                             width={40}
//                             height={40}
//                         />
//                     </div>

//                 </div>
                // <div className="disclaimer py-5 border-t border-b border-[#e6d9d1] mb-10">
                //     <span className="">
                //         <strong>Project Disclaimer:</strong> Lorem Ipsum is simply dummy text of the
                //         printing and typesetting industry. Lorem Ipsum has been the industrys standard
                //         dummy text ever since the 1500s, when an unknown printer took a galley of type
                //         and scrambled it to make a type specimen book. It has survived not only five
                //         centuries, but also the leap into electronic typesetting, remaining essentially
                //         unchanged. It was popularised in the 1960s with the release of Letraset sheets
                //         containing Lorem Ipsum passages, and more recently with desktop publishing
                //         software like Aldus PageMaker including versions of Lorem Ipsum.
                //     </span>

                // </div>
//             </div>
//         </section>
//     );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const floorPlans = [
    { id: 1, title: "Typical Floor Plan", image: "/project/gallery1.png" },
    { id: 2, title: "3BHK Floor Plan", image: "/project/gallery2.png" },
    { id: 3, title: "5BHK Floor Plan", image: "/project/gallery3.png" },
    { id: 4, title: "Penthouse Floor Plan", image: "/project/gallery1.png" },
    { id: 5, title: "Studio Floor Plan", image: "/project/gallery2.png" },
];

export default function FloorPlan() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="py-20">
            <div className="container mx-auto relative">
                <div className="pb-20">
                    <h3 className="text-center mb-6">Comprehensive Floor Plan</h3>

                    {isClient && (
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            navigation={{
                                nextEl: ".floor-next",
                                prevEl: ".floor-prev",
                            }}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 30 },
                                1024: { slidesPerView: 3, spaceBetween: 40 },
                            }}
                        >
                            {floorPlans.map((plan) => (
                                <SwiperSlide key={plan.id}>
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={plan.image}
                                            alt={plan.title}
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                            className="w-full h-full object-cover"
                                        />
                                        <h6 className="mt-2 font-semibold">{plan.title}</h6>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    <div className="floor-prev absolute hidden lgx:block left-0 lg:left-[2.604vw] top-1/3 -translate-y-1/2 cursor-pointer">
                        <Image src="/icon/arrow-circle-left.svg" alt="prev" width={40} height={40} />
                    </div>
                    <div className="floor-next absolute hidden lgx:block right-0 lg:right-[2.604vw] top-1/3 -translate-y-1/2 cursor-pointer z-10">
                        <Image src="/icon/arrow-circle-right.svg" alt="next" width={40} height={40} />
                    </div>
                </div>

                <div className="py-5 border-t border-b border-[#e6d9d1] mb-10">
                    <span className="">
                        <strong className="font-semibold">Project Disclaimer:</strong> Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </div>
            </div>
        </section>
    );
}
