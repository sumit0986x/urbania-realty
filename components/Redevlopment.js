"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ✅ Process Section
export function ProcessSection({ data }) {
  return (
    <div className="bg-[#fffcf5]">
    <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-10 py-10 items-center">
      <div>
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={500}
          className=" mx-auto md:mx-0"
        />
      </div>
      <div>
        <h5 className=" text-[#96722C]">{data.title}</h5>
        <h3 className="mb-4">{data.subtitle}</h3>
        <p className="text-[#3C3C3C] leading-relaxed">{data.description}</p>
      </div>
    </div>
    </div>
    </div>
  );
}

// ✅ Benefits Section
export function BenefitsSection({ data }) {
  return (
        <div className="bg-[#FFF3DB]">
    <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-10 items-center  py-10 md:py-20 rounded-xl">
      <div>
        <h5 className="text-[#96722C]">{data.title}</h5>
        <h3 className="mb-4">{data.subtitle}</h3>
        <p className="text-[#3C3C3C] leading-relaxed">{data.description}</p>
      </div>
      <div>
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={500}
          className=" mx-auto md:mx-0 lg:float-right"
        />
      </div>
    </div>
    </div>
    </div>
  );
}

// ✅ Partner Form
export function PartnerForm() {
  return (
        <div className="bg-[#fffcf5]">
    <div className="container mx-auto">
    <div className="w-full lgx:w-[60%] mx-auto py-10">
        <h5 className="text-[#96722C] text-center">Partner with Us</h5>
        <h3 className="mb-4 text-center mx-auto w-full sm:w-[80%]">Lorem Ipsum is simply dummy text of the printing</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Society Name" className="border p-2 rounded" />
        <input type="text" placeholder="Location" className="border p-2 rounded" />
        <input type="text" placeholder="Secretary / Contact Name" className="border p-2 rounded" />
        <input type="text" placeholder="Mobile Number" className="border p-2 rounded" />
        <input type="text" placeholder="Email" className="border p-2 rounded md:col-span-2" />
        <textarea placeholder="Message" className="border p-2 rounded md:col-span-2"></textarea>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded-md md:col-span-2">
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

