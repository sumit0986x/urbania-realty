"use client";

import { useState } from "react";
import Image from "next/image";

export default function OurExpertise() {
    const expertiseData = [
        {
            title: "Property Identification",
            description:
                "Finding prime locations with potential for sustainable and profitable development.",
            image: "/image/Ellipse 14.png",
        },
        {
            title: "Development Rights & Negotiations",
            description:
                "Navigating complex property laws and securing favorable agreements for all parties involved.",
            image: "/image/development.png",
        },
        {
            title: "Project Planning & Proposal",
            description:
                "Crafting innovative and practical development plans that align with strategic goals.",
            image: "/image/planning.png",
        },
        {
            title: "Sustainable Spaces",
            description:
                "Designing and developing eco-friendly spaces that promote long-term environmental balance.",
            image: "/image/sustainable.png",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-[#fdfaf5]">
            <div className="container mx-auto">
                <div className="flex flex-col lgx:flex-row items-end sm:gap-8 h-full">
                    <div className="w-full lgx:w-4/12">
                        <h5 className="text-gold">Our Expertise</h5>
                        <h3 className="">
                            Built on trust & integrity.
                        </h3>
                        <ul className="">
                            {expertiseData.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={` py-2 cursor-pointer flex items-center justify-between transition-all  ${activeIndex === index
                                        ? "text-gold font-semibold border-b border-gold"
                                        : "text-gray-700 hover:text-gold border-b border-[#00000033]"
                                        }`}
                                >
                                    <h6 className={`${activeIndex === index ? "text-gold" : ""}`}>
                                        <span>{item.title}</span>
                                    </h6>

                                    {activeIndex === index && (
                                        <Image
                                            src="/icon/arrow-right.svg"
                                            alt="arrow icon"
                                            width={16}
                                            height={16}
                                            className="object-contain"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full lgx:w-8/12 relative mt-10 lgx:mt-0">

                        <div className="flex flex-col-reverse sm:flex-row items-center justify-between sm:gap-5 relative transition-all duration-500">
                            <div className="h-full w-[170%] sm:w-[205%] border-b border-gold absolute -right-[120%] lg:-right-[125%]" />

                            <div className="w-80 h-80 min-h-80 min-w-80 rounded-full border border-gold p-5 overflow-hidden transition-all duration-500">
                                <Image
                                    src={expertiseData[activeIndex].image}
                                    alt={expertiseData[activeIndex].title}
                                    width={340}
                                    height={340}
                                    quality={100}
                                    className="w-full h-full object-cover border border-gold rounded-full"
                                />
                            </div>

                            <div className="w-full sm:w-6/12 py-5 sm:p-10 transition-all duration-500">
                                <p className="text-gray-700">
                                    {expertiseData[activeIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
