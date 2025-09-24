"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";

export default function IntroSection() {
  const stats = [
    { target: 25, label: "Years of <br/> Experience" },
    { target: 40, label: "Societies <br/> Redeveloped" },
    { target: 20, label: "Lakh Sq. Ft. <br/> Delivered" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row  py-4 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:w-5/12 w-full flex flex-col justify-center">
            <h5 className="text-[#96722C] font-medium mb-2">
              Welcome to Urbania Realty
            </h5>
            <h3 className="text-3xl lg:text-4xl font-semibold leading-snug">
              A legacy built on experience, trust, quality living, and thoughtful
              design
            </h3>
            <div className="py-5">
              <Button text="READ More" url="/" />
            </div>
          </div>

          {/* Right Text + Stats */}
          <div className="lg:w-7/12 w-full">
            <p className="text-gray-700 mb-8">
              We focus on creating design-led homes for people, not just
              projects. While our approach is market-driven, every project is
              backed by thoughtful design and strong execution, defining us as a
              premium developer in Mumbai.
            </p>

            <div className="flex flex-wrap  items-center gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-6">
                  <StatCounter target={stat.target} label={stat.label} />
                  {/* Divider except last */}
                  {index < stats.length - 1 && (
                    <div className="relative flex flex-col items-center justify-center h-[100px] w-[100px]">
                      <span className="absolute top-0 w-px h-5 bg-[#96722C] lg:block hidden"></span>
                      <Image
                        src="/icon/Isolation.svg"
                        alt="decor"
                        width={30}
                        height={30}
                      />
                      <span className="absolute bottom-0 w-px h-5 bg-[#96722C] lg:block hidden"></span>

                      {/* Mobile (horizontal line) */}
                      <span className="absolute left-0 top-1/2 h-px w-5 bg-[#96722C] block lg:hidden"></span>
                      <span className="absolute right-0 top-1/2 h-px w-5 bg-[#96722C] block lg:hidden"></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let frame;
    const duration = 5000;
    const frameRate = 60;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    const increment = target / totalFrames;

    const updateCount = () => {
      setCount((prev) => {
        if (prev + increment >= target) {
          cancelAnimationFrame(frame);
          return target;
        }
        frame = requestAnimationFrame(updateCount);
        return prev + increment;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          frame = requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <div className="text-center min-w-[100px]" ref={ref}>
      <h2 className="md:text-9xl lg:text-9xl text-[#96722C] mb-2">
        {Math.floor(count)}
        <span className="text-3xl align-top">+</span>
      </h2>
      <h6
        className="text-base font-medium text-black leading-snug"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}


