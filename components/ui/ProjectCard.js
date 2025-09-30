import Image from "next/image";
import Button from "./Button";

export default function ProjectCard({
  title = "",
  description = "",
  image = "",
  logo = "",
  features = [],
  buttonText,
  buttonUrl = "#",
  index = 0,
}) {
  const reverse = index % 2 === 1;

  return (
    <div className="bg-[#fffcf5] ">
      <div className="container mx-auto py-10">
        <div
          className={`flex flex-col ${reverse ? "lgx:flex-row-reverse" : "lgx:flex-row"
            }`}
        >
          <div className="w-full lgx:w-6/12">
            <div className="relative w-full h-full min-h-[450px]">
              <Image
                src={image}
                alt={title || "Project Image"}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lgx:w-6/12 px-5 lgx:px-0 lgx:py-5 ">
            <div
              className={`border border-[#96722C80] border-t-0 lgx:border-t ${reverse ? "lgx:border-r-0" : "lgx:border-l-0"
                } ${reverse
                  ? "rounded-br-[60px] lgx:rounded-br-none lgx:rounded-bl-[60px] "
                  : "rounded-bl-[60px] lgx:rounded-br-[60px] lgx:rounded-bl-none"
                } h-full relative`}
            >
             
                <Image
                  src="/icon/Isolation.svg"
                  alt="Decoration Icon"
                  width={100}
                  height={100}
                  className={`absolute w-12 p-2 bg-[#fffcf5] ${reverse
                    ? "lgx:-top-6 -left-6"
                    : "lgx:-top-6 -right-6"
                    } -bottom-6`}
                />
              

              <div className="py-5 px-10 sm:py-10 sm:px-20 flex flex-col h-full">
                {title && (
                  <div className="flex items-center gap-3">
                    <Image
                      src={logo}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <h5 className="text-lg font-semibold">{title}</h5>
                  </div>
                )}

                {description && (
                  <p className="py-5 text-gray-700">{description}</p>
                )}

                {features?.length > 0 && (
                  <div className="flex flex-wrap gap-y-6 text-center">
                    {features.map((item, idx) => (
                      <div
                        key={idx}
                        className="w-1/2 sm:w-1/3 lg:w-1/4 px-2 flex flex-col items-center"
                      >
                        <Image
                          src={item.icon}
                          alt={item.text}
                          width={50}
                          height={50}
                          className="w-10 h-10 mb-2"
                        />
                        <p className="text-sm sm:text-base">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {buttonText && buttonUrl && (
                  <div className="py-5">
                    <Button text={buttonText} url={buttonUrl} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





//     <div className="container mx-auto py-20">
//       <div className="flex flex-col lgx:flex-row">
//         <div className="w-full lgx:w-6/12">
//           <div className="relative w-full h-full min-h-96">
//             <Image
//               src="/image/project1.jpg"
//               alt="Project Image"
//               fill
//               priority
//               className="object-cover rounded-t-2xl lgx:rounded-none"
//             />
//           </div>
//         </div>

//         <div className="w-full lgx:w-6/12 px-5 lgx:px-0 lgx:py-5">
//           <div className="border border-[#96722C80] border-t-0 lgx:border-t lgx:border-l-0 rounded-bl-[60px] lgx:rounded-bl-none lgx:rounded-br-[60px] h-full relative">
//             <Image
//               src="/icon/Isolation.svg"
//               alt="Decoration Icon"
//               width={100}
//               height={100}
//               className="absolute w-12 p-2 -bottom-6 lgx:-top-6 -right-6 bg-[#fffcf5]"
//             />
//             <div className="py-5 px-10 sm:py-10 sm:px-20">
//               <div className="flex items-center">
//                 <Image src="/image/shivajipark.png" alt="" width={50} height={50} />
//                 <h5 className="">141 Shivaji Park </h5>
//               </div>
//               <p className="py-5">We focus on creating design-led homes for people, strong execution, defining us as a premium developer in Mumbai.</p>
// <div className="flex flex-wrap justify-between gap-y-6 text-center">
//   {[
//     { icon: '/icon/apartment.svg', text: '3 BHK Apartments' },
//     { icon: '/icon/storeys.svg', text: '19 Storeys' },
//     { icon: '/icon/parkview.svg', text: 'Park View Apartments' },
//     { icon: '/icon/parking.svg', text: 'Ramp Parking' },
//   ].map((item, index) => (
//     <div
//       key={index}
//       className="w-1/2 sm:w-1/3 lg:w-1/4 px-2 flex flex-col items-center"
//     >
//       <Image
//         src={item.icon}
//         alt={item.text}
//         width={50}
//         height={50}
//         className="w-10 h-10 mb-2"
//       />
//       <p className="text-sm sm:text-base">{item.text}</p>
//     </div>
//   ))}
// </div>

//               <div className="py-5">
//                 <Button text="View Details" url="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>