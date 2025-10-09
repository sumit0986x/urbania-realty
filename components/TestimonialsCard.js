"use client";

import { useState } from "react";
import Image from "next/image";
import Pagination from "./Pagination";

export default function TestimonialsCard({ testimonials }) {
  const ITEMS_PER_PAGE = 1;
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTestimonials = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div>
      {paginatedTestimonials.map((item, index) => {
        const isReversed = index % 2 === 1;

        return (
          <div
            key={index + startIndex}
            className={`relative flex items-center py-16 lg:py-5 ${
              isReversed ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
            } justify-end`}
          >
            <div className="w-full h-full lg:w-[20%] relative flex items-center justify-center">
              <div
                className={`bg-[#96722C] p-12 lg:p-16 xl:p-20 rounded-full absolute z-10 ${
                  isReversed ? "lg:-left-[50%]" : "lg:-right-[50%]"
                }`}
              >
                <Image
                  src="/icon/doubale.svg"
                  alt="quote icon"
                  width={100}
                  height={100}
                  className="lgx:w-16 lgx:h-16 h-12 w-12"
                />
              </div>
            </div>
            <div
              className={`w-full lg:w-[80%] border border-[#96722C80] rounded-sm lg:py-20 ${
                isReversed ? "lg:pr-40 lg:pl-12" : "lg:pl-40 lg:pr-12"
              } lgx:px-20 px-8 pt-24 pb-12 rounded-br-[40px] relative`}
            >
              <p className="text-lg italic">{item.text}</p>
              <h4 className="font-semibold">{item.name}</h4>
              <h4>{item.address}</h4>
              <p className="text-gray-600">{item.location}</p>
            </div>
          </div>
        );
      })}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        
      />
    </div>
  );
}

