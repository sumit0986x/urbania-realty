"use client";
import Image from "next/image";

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-5 relative my-5">
      <hr className="w-full border-gold -ml-60" />

      <div className="flex items-center justify-center gap-2 w-auto">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 flex items-center justify-center ${currentPage === 1 ? "opacity-50" : ""
            }`}
        >
          <Image
            src="/icon/arrow.svg"
            alt="arrow icon"
            width={20}
            height={20}
            className="object-contain filter brightness-0 rotate-180"
          /><span> Prev</span>
        </button>

{getPageNumbers().map((page, index) =>
  page === "..." ? (
    <span key={index} className="px-3 py-2 text-gray-500">
      ...
    </span>
  ) : (
    <button
      key={index}
      onClick={() => onPageChange(page)}>
      <h6
      className={`w-12 h-12 m-0 p-0 flex items-center justify-center border transition-all duration-300 transform rounded-full active:scale-95 ${
        currentPage === page
          ? "bg-gold text-white border-[#96722C] scale-105 shadow-md"
          : "border-gold hover:bg-gold hover:text-white hover:scale-105 ease-in-out"
      }`}
      >
        {page}
      </h6>
    </button>
  )
)}




        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 flex items-center justify-center ${currentPage === totalPages ? "opacity-50": "" }`}>
          
          <span> Next</span>  
          <Image
            src="/icon/arrow.svg"
            alt="arrow icon"
            width={20}
            height={20}
            className="object-contain filter brightness-0"
          />
        </button>
      </div>

      <hr className="w-full border-gold -mr-60" />


    </div>
  );
}
