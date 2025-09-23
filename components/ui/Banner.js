// "use client";
// import Image from "next/image";

// export default function Banner({
//   title,
//   subtitle,
//   description,
//   buttonText,
//   buttonLink,
//   backgroundImage
// }) {
//   return (
//     <section
//       className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden px-4"
//     >
//       <Image
//         src={backgroundImage}
//         alt="Banner Background"
//         fill
//         className="object-cover object-center"
//         style={{ objectFit: "cover", objectPosition: "center" }}
//         priority
//       />

//       <div className="absolute inset-0 bg-black/20"></div>

//       <div className="relative max-w-2xl z-10 flex flex-col items-center w-full md:w-3/5">
//         <h1 className="text-white text-shadow">{title}</h1>
//         {/* <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow">{title}</h1> */}

//         {subtitle && (
//           <h3 className="mt-4 text-white text-shadow">{subtitle}</h3>
//           // <h2 className="mt-4 text-lg md:text-2xl text-white text-shadow">{subtitle}</h2>
//         )}

//         {description && (
//           <p className="mt-4 w-full md:w-2/5 ">{description}</p>
//           // <p className="mt-4 text-base md:text-lg text-gray-200 text-white  w-full md:w-3/5">{description}</p>
//         )}

//         {buttonText && (
//           <div className="border-b-2 pb-2 mt-5 inline-block">
//             <a
//               href={buttonLink}
//               className="text-white no-underline tracking-[2px] px-2.5 uppercase text-shadow"
//             >
//               {buttonText}
//             </a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Banner({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) {
  const scrollRef = useRef(null);

    useEffect(() => {
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
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden px-4">
      <Image
        src={backgroundImage}
        alt="Banner Background"
        fill
        className="object-cover object-center"
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-2xl z-10 flex flex-col items-center w-full md:w-3/5">
        <h1 className="text-white text-shadow">{title}</h1>

        {subtitle && <h3 className="mt-4 text-white text-shadow">{subtitle}</h3>}

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

<div className="absolute bottom-10 flex justify-center w-full z-10">
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
