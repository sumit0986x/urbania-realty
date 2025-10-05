"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Banner({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  titleClassName = "",
}) {
  const scrollRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Scroll bounce animation
    if (scrollRef.current) {
      gsap.fromTo(
        scrollRef.current,
        { y: -30 },
        {
          y: 30,
          repeat: -1,
          yoyo: true,
          duration: 1.8,
          ease: "power1.inOut",
        }
      );
    }

    // Image zoom in/out animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.1, // max zoom
          duration: 8, // slow zoom for smooth effect
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Banner Background"
          fill
          ref={imageRef}
          className="object-cover object-center"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-2xl  flex flex-col items-center w-full md:w-3/5">
        <h1 className={`text-white text-shadow mt-4 text-4xl ${titleClassName}`}>
          {title}
        </h1>

        {description && <p className="mt-4 w-full md:w-2/5">{description}</p>}

        {buttonText && (
          <div className="border-b-2 pb-2 mt-5 inline-block">
            <a
              href={buttonLink}
              className="text-white no-underline tracking-[2px] px-2.5 uppercase text-shadow"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 flex justify-center w-full">
        <div className="relative w-[1px] h-[80px] bg-white flex justify-center">
          <div
            ref={scrollRef}
            className="absolute w-[5px] h-[20px] bg-white rounded-md top-[38%]"
          ></div>
        </div>
      </div>
    </section>
  );
}
