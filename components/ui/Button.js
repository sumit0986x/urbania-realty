"use client";
import Link from "next/link";
import React from "react";


export default function Button({ text, url }) {
    return (
        <Link href={url} >
            <button className="relative px-7 lgx:px-10 py-[10px] uppercase rounded-[25px] border border-[#96722c] text-[#96722c] bg-transparent font-normal small-text tracking-[1px]">
                {text}
                <span className="absolute top-1/2 right-[-25px] w-[40px] h-[40px] bg-[#96722c] rounded-full bg-center bg-no-repeat bg-[length:60%] transform -translate-y-1/2 transition-transform duration-600 ease-in-out"
              style={{ backgroundImage: "url('/icon/arrow.svg')" }}
        />
            </button>
        </Link>
    );
}
