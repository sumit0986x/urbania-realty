"use client";
import React from "react";
import Image from "next/image";

export default function AwardCard({ awards }) {
  return (
    <section className="py-12 bg-[#FEFBF5]">
      <div className="container mx-auto py-10">
        <h3 className="text-center mb-10">
          Recognizing Our Journey of Excellence
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {awards.map((award) => (
            <div
              key={award.id}
              className="relative border border-[#96722C80] p-2 rounded-md h-80 cursor-pointer group"
            >
              <div className="h-full relative overflow-hidden">
                <div className="relative w-full h-full z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                  <div className="relative w-full h-40">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-lg text-[#96722C] font-semibold">{award.year}</p>
                    <h5 className="text-lg">{award.title}</h5>
                    <p className="text-gray-500">{award.subtitle}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#96722C] p-4 opacity-0 z-20 flex flex-col justify-center items-center text-white transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  <p className="text-lg">{award.year}</p>
                  <h5 className="text-lg text-white">{award.title}</h5>
                  <p>{award.subtitle}</p>
                  <p className="mt-2">Lorem Ipsum: {award.subtitle}</p>
                </div>
              </div>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#FEFBF5] py-[25px] px-[10px] rounded-[50%] z-30 ">
                <Image
                  src="/icon/achieve.svg"
                  alt="Achieve Icon"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
