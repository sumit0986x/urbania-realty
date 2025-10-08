"use client";

import Image from "next/image";
import Button from "../ui/Button";
import CountUp from "react-countup";


export default function Intro() {
  return (
    <section className="py-10">
    <div className='container mx-auto'>
      <div className="flex flex-col lgx:flex-row gap-10">
        <div className="w-full lgx:w-5/12">
          <div className="h-full">
            <h5 className="text-[#96722C]">Welcome to Urbania Realty</h5>
            <h3 className="leading-snug">A legacy built on experience, trust,
              quality living, and thoughtful design</h3>
            <Button text="Read More" url="/" />
          </div>
        </div>
        <div className="w-full lgx:w-7/12">
          <div className="h-full">
            <p className="text-gray-700 line-clamp-3">
              We focus on creating design-led homes for people, not just projects. While our approach is
              market-driven, every project is backed by thoughtful design and strong execution,
              defining us as a premium developer in Mumbai.
            </p>


      <div className="grid grid-cols-1 xs:grid-cols-5 gap-6 items-center text-center w-full">
        <div className="w-full">
          <div className="flex justify-center items-end ">
            <h2 className="text-6xl sm:text-[7.5vw] text-[#96722C]">
              <CountUp end={40} duration={10} className="text-6xl sm:text-[7.5vw]" />
            </h2>
            <h3 className=" text-2xl sm:text-4xl  text-[#96722C]">+</h3>
          </div>
          <h6 className="text-sm mt-3">Years of Experience</h6>
        </div>

        <div className="flex flex-row xs:flex-col items-center justify-center">
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] mr-2 xs:mr-0 xs:mb-2" />
          <Image src="/icon/Isolation.svg" alt="" width={40} height={40} />
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] ml-2 xs:ml-0 xs:mt-2" />
        </div>

        <div className="w-full">
          <div className="flex justify-center items-end">
            <h2 className="text-6xl sm:text-[7.5vw] text-[#96722C]">
              <CountUp end={25} duration={10} className="text-6xl sm:text-[7.5vw]" />
            </h2>

            <h3 className=" text-2xl sm:text-4xl  text-[#96722C]">+</h3>

          </div>
          <h6 className="text-sm mt-3">Societies Redeveloped</h6>
        </div>

        <div className="flex flex-row xs:flex-col items-center justify-center">
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] mr-2 xs:mr-0 xs:mb-2" />
          <Image src="/icon/Isolation.svg" alt="" width={40} height={40} />
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] ml-2 xs:ml-0 xs:mt-2" />
        </div>

        <div className="w-full h-full">
          <div className="flex justify-center items-end ">
            <h2 className="text-6xl sm:text-[7.5vw] text-[#96722C]">
              <CountUp end={20} duration={10} className="text-6xl sm:text-[7.5vw]" />
            </h2>

            <h3 className=" text-2xl sm:text-4xl  text-[#96722C]">+</h3>
          </div>
          <h6 className="text-sm mt-3">Lakh Sq. Ft. Delivered</h6>
        </div>
      </div>

          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
