"use client";

import Image from "next/image";
import Button from "../ui/Button";

export default function RedevelopmentSection({
  title = "Redevelopment Expertise",
  subtitle = "Innovating Redevelopment",
  heading = "Redefining old spaces with smart, Redevelopment.",
  description = "With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution.",
  buttonText = "view details",
  buttonLink = "/redevelopment",
  imageSrc = "/image/Rectangle 1560.png",
  bgColor = "bg-[#FEF7EA]",
}) {
  return (
    <section className="py-10">
      <div className={`redevelopment py-10 ${bgColor}`}>
        <h3 className="text-center py-10">{title}</h3>

        <div className="container mx-auto ">
          <div className="flex flex-col   lgx:flex-row h-full ">
            <div className="w-full lgx:w-7/12">
              <div className="relative w-full h-full min-h-[300px] md:min-h-[450px] md:max-h-[550px]">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  priority
                  className="object-cover rounded-sm"
                />
              </div>
            </div>

            <div className="w-full lgx:w-5/12 px-5 lgx:px-0 lgx:py-10 ">
              <div className="border-l border-r lgx:border-l-0 lgx:border-r-0     lgx:border-t lgx:border-b border-[#96722C80] h-full relative">
              <Image
                src="/icon/Isolation.svg"
                alt="decor-icon"
                width={100}
                height={100}
                className="decor-icon absolute w-12 p-2 bg-[#FEF7EA] -left-6 -bottom-6 lgx:left-auto lgx:-right-6 lgx:-top-6"
              />

                <div className="h-full flex flex-col justify-center p-5">
                  <h5 className="text-[#96722C]">{subtitle}</h5>
                  <h3 className="leading-snug">
                    {heading}
                  </h3>
                  <p className="text-gray-700 line-clamp-3">{description}</p>

                  <div className="py-4">
                    <Button text={buttonText} url={buttonLink} />
                  </div>
                </div>
              <Image
                src="/icon/Isolation.svg"
                alt="decor-icon"
                width={100}
                height={100}
                className="decor-icon absolute w-12 p-2 bg-[#FEF7EA] -right-6 -bottom-6"
              />

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
