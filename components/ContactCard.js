"use client";
import React from "react";
import Image from "next/image";

export default function ContactCard({contactdata}) {
  return (
    <div className="py-12 bg-[#FEFBF5]">
      <div className="container mx-auto py-12">
        <h3 className="text-center mb-10">
          Your Gateway to Exceptional Living
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  items-center">
            {contactdata.map((contacts) => (
            <div key={contacts.id} className="relative border border-[#96722C] text-center px-3 pt-12 pb-5 min-h-56 rounded-md
            flex flex-col justify-center">
                <Image 
                src={contacts.icon}
                alt={contacts.alt}
                width={80}
                height={80}
                className="absolute left-1/2 -translate-x-1/2 -top-10 p-4 bg-[#FEFBF5] "
                />
                <h6 className="text-[#96722C] font-semibold">{contacts.title}</h6>
                <p className="text-2xl py-2">{contacts.subtitle}</p>
                <p>{contacts.description}</p>
            </div>
            ))}

        </div>


                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  items-center">
            <div className="relative border border-[#96722C] text-center px-4 pt-12 pb-5">
                <Image 
                src="/icon/location.svg"
                alt=""
                width={80}
                height={80}
                className="absolute left-1/2 -translate-x-1/2 -top-10 p-4 bg-[#FEFBF5] "
                />
                <h6 className="text-[#96722C] font-semibold">Office Address</h6>
                <p className="font-sm"></p>
                <p>501, Vastu Precinct, Atchuytrao Patwardhan Marg, Lokhandwala Complex, Andheri (West), Mumbai 400 053.</p>
            </div>
        </div> */}
      </div>
    </div>
  );
}
