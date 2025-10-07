"use client";
import Link from "next/link";
import React from "react";

export default function Button({ text, url, bgColor = "transparent", textColor = "#96722c", borderColor = "#96722c" }) {
    return (
        <Link href={url}>
            <button
                className={`relative px-7 lgx:px-10 py-[10px] uppercase rounded-[25px] font-normal  text-sm tracking-[1px] transition-colors duration-300`}
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    border: `1px solid ${borderColor}`,
                }}
            >
                {text}
                <span
                    className="absolute top-1/2 right-[-25px] w-[40px] h-[40px] rounded-full bg-center bg-no-repeat bg-[length:60%] transform -translate-y-1/2 transition-transform duration-600 ease-in-out"
                    style={{
                        backgroundImage: "url('/icon/arrow.svg')",
                        backgroundColor: textColor,
                    }}
                />
            </button>
        </Link>
    );
}
