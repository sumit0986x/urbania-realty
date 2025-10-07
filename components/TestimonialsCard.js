"use client"
import Image from "next/image";

const testimonials = [
  {
    name: "Mrs. & Mr. Bharat Yadav",
    address: "140 Shivaji Park",
    location: "Dadar, Mumbai",
    text: `“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”`,
  },
  {
    name: "Mr. & Mrs. Singh",
    address: "302 Skyline Apartments",
    location: "Bandra, Mumbai",
    text: `“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”`,
  },
  {
    name: "Mrs. & Mr. Mehta",
    address: "24 Marine Drive",
    location: "Churchgate, Mumbai",
    text: `“Their dedication and attention to detail stood out. We couldn’t be happier with our new home.”`,
  },
    {
    name: "Mrs. & Mr. Bharat Yadav",
    address: "140 Shivaji Park",
    location: "Dadar, Mumbai",
    text: `“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”`,
  },
  {
    name: "Mr. & Mrs. Singh",
    address: "302 Skyline Apartments",
    location: "Bandra, Mumbai",
    text: `“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”`,
  },
    {
    name: "Mrs. & Mr. Bharat Yadav",
    address: "140 Shivaji Park",
    location: "Dadar, Mumbai",
    text: `“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”`,
  },
  {
    name: "Mr. & Mrs. Singh",
    address: "302 Skyline Apartments",
    location: "Bandra, Mumbai",
    text: `“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”`,
  },
];

export default function TestimonialsCard() {
  return (
    <div className="container mx-auto py-10">
      <div className="lg:container mx-auto py-10">
        <h3 className="text-center mb-16 ">
          Real stories. Real families. Real happiness.
        </h3>

        {testimonials.map((item, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={index}
              className={`relative flex items-center py-16 lg:py-5 ${isReversed ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
                } justify-end`}
            >
              <div className="w-full h-full lg:w-[20%] relative flex items-center justify-center">
                <div
                  className={`bg-[#96722C] p-12 lg:p-16 xl:p-20 rounded-full absolute z-10 ${isReversed ? "lg:-left-[50%]" : "lg:-right-[50%]"
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
                className={`w-full lg:w-[80%] border border-[#96722C80] rounded-sm lg:py-20 ${isReversed ? "lg:pr-40 lg:pl-12" : "lg:pl-40 lg:pr-12"
                  } lgx:px-20 px-8 pt-24 pb-12 rounded-br-[40px] relative`}
              >
                <p className="text-lg italic ">{item.text}</p>
                <h4 className="font-semibold">{item.name}</h4>
                <h4>{item.address}</h4>
                <p className="text-gray-600">{item.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}




// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Mrs. & Mr. Bharat Yadav",
//     address: "140 Shivaji Park",
//     location: "Dadar, Mumbai",
//     text: `“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”`,
//   },
//   {
//     name: "Mr. & Mrs. Singh",
//     address: "302 Skyline Apartments",
//     location: "Bandra, Mumbai",
//     text: `“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”`,
//   },
//   {
//     name: "Mrs. & Mr. Mehta",
//     address: "24 Marine Drive",
//     location: "Churchgate, Mumbai",
//     text: `“Their dedication and attention to detail stood out. We couldn’t be happier with our new home.”`,
//   },
//   {
//     name: "Mrs. & Mr. Bharat Yadav",
//     address: "140 Shivaji Park",
//     location: "Dadar, Mumbai",
//     text: `“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”`,
//   },
//   {
//     name: "Mr. & Mrs. Singh",
//     address: "302 Skyline Apartments",
//     location: "Bandra, Mumbai",
//     text: `“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”`,
//   },
//   {
//     name: "Mrs. & Mr. Bharat Yadav",
//     address: "140 Shivaji Park",
//     location: "Dadar, Mumbai",
//     text: `“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”`,
//   },
//   {
//     name: "Mr. & Mrs. Singh",
//     address: "302 Skyline Apartments",
//     location: "Bandra, Mumbai",
//     text: `“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”`,
//   },
// ];

// const ITEMS_PER_PAGE = 4;

// export default function TestimonialsCard() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

//   const paginatedTestimonials = testimonials.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const renderPageNumbers = () => {
//     const pages = [];

//     if (totalPages <= 3) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (currentPage <= 2) {
//         pages.push(1, 2, 3, "...", totalPages);
//       } else if (currentPage >= totalPages - 1) {
//         pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         pages.push(1, "...", currentPage, "...", totalPages);
//       }
//     }

//     return pages.map((page, index) =>
//       typeof page === "number" ? (
//         <button
//           key={index}
//           className={`mx-1 px-3 py-1 border ${currentPage === page ? "bg-[#96722C] text-white" : "bg-white text-black"
//             }`}
//           onClick={() => handlePageClick(page)}
//         >
//           {page}
//         </button>
//       ) : (
//         <span key={index} className="mx-1 px-3 py-1 text-gray-600">
//           ...
//         </span>
//       )
//     );
//   };

//   return (
//     <>
//       {/* Testimonials */}
//       <div className="container mx-auto py-10">
//         <div className="lg:container mx-auto py-10">
//           <h3 className="text-center mb-16">
//             Real stories. Real families. Real happiness.
//           </h3>

//           {paginatedTestimonials.map((item, index) => {
//             const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
//             const isReversed = globalIndex % 2 === 1;

//             return (
//               <div
//                 key={globalIndex}
//                 className={`relative flex items-center py-16 lg:py-5 ${isReversed ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
//                   } justify-end`}
//               >
//                 <div className="w-full h-full lg:w-[20%] relative flex items-center justify-center">
//                   <div
//                     className={`bg-[#96722C] p-12 lg:p-16 xl:p-20 rounded-full absolute z-10 ${isReversed ? "lg:-left-[50%]" : "lg:-right-[50%]"
//                       }`}
//                   >
//                     <Image
//                       src="/icon/doubale.svg"
//                       alt="quote icon"
//                       width={100}
//                       height={100}
//                       className="lgx:w-16 lgx:h-16 h-12 w-12"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   className={`w-full lg:w-[80%] border border-[#96722C80] rounded-sm lg:py-20 ${isReversed ? "lg:pr-40 lg:pl-12" : "lg:pl-40 lg:pr-12"
//                     } lgx:px-20 px-8 pt-24 pb-12 rounded-br-[40px] relative`}
//                 >
//                   <p className="text-lg italic">{item.text}</p>
//                   <h4 className="font-semibold">{item.name}</h4>
//                   <h4>{item.address}</h4>
//                   <p className="text-gray-600">{item.location}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center mt-8 gap-2 mb-10">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className="px-4 py-2 border bg-white text-black disabled:opacity-50"
//         >
//           Prev
//         </button>
//         {renderPageNumbers()}
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 border bg-white text-black disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// }
