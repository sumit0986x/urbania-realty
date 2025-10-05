// import Image from "next/image";
// export default function TestimonialsCard() {
//     return (
//         <>
            
//             <div className="container mx-auto">
                
//                 <div className="lg:container mx-auto py-20">
                    
//                     <h2 className="text-center">
                        
//                         Real stories. Real families. Real happiness.
//                     </h2>
//                     <div className="relative flex items-center justify-end lg:flex-row flex-col py-20">
                        
//                         <div className="w-full h-full lg:w-[20%] relative flex items-center justify-center ">
                            
//                             <div className="bg-[#96722C] p-12 lg:p-16 xl:p-20 rounded-full absolute lg:-right-[50%] z-10">
                                
//                                 <Image
//                                     src="/icon/doubale.svg"
//                                     alt=""
//                                     width={100}
//                                     height={100}
//                                     className="lgx:w-16 lgx:h-16 h-12 w-12"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-full lg:w-[80%] border border-[#96722C80] rounded-sm lg:py-20 lg:pl-60 lg:pr-20 lgx:px-20 px-8 lgx:pt-32 pt-24 pb-12 rounded-br-[40px] relative">
                            
//                             <p>
                                
//                                 “Urbina Realty turned what we thought would be a stressful
//                                 process into an enjoyable journey. Their guidance, constant
//                                 updates, and genuine care made finding our dream home a truly
//                                 memorable experience”
//                             </p>
//                             <h4>Mrs. & Mr. Bharat Yadav</h4> <h4>140 Shivaji Park</h4>
//                             <p>Dadar, Mumbai</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }




import Image from "next/image";

const testimonials = [
  {
    name: "Mrs. & Mr. Bharat Yadav",
    address: "140 Shivaji Park",
    location: "Dadar, Mumbai",
    text: `“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”`,
  },
  {
    name: "Mr. & Mrs. Singh",
    address: "302 Skyline Apartments",
    location: "Bandra, Mumbai",
    text: `“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”`,
  },
  {
    name: "Mrs. & Mr. Mehta",
    address: "24 Marine Drive",
    location: "Churchgate, Mumbai",
    text: `“Their dedication and attention to detail stood out. We couldn’t be happier with our new home.”`,
  },
];

export default function TestimonialsCard() {
  return (
    <div className="container mx-auto py-10">
        <div className="lg:container mx-auto py-10">
      <h3 className="text-center mb-16 ">
        Real stories. Real families. Real happiness.
      </h3>

      {testimonials.map((item, index) => {
        const isReversed = index % 2 === 1; 

        return (
          <div
            key={index}
            className={`relative flex items-center py-16 lg:py-5 ${
              isReversed ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
            } justify-end`}
          >
            <div className="w-full h-full lg:w-[20%] relative flex items-center justify-center">
              <div
                className={`bg-[#96722C] p-12 lg:p-16 xl:p-20 rounded-full absolute z-10 ${
                  isReversed ? "lg:-left-[50%]" : "lg:-right-[50%]"
                }`}
              >
                <Image
                  src="/icon/doubale.svg"
                  alt="quote icon"
                  width={100}
                  height={100}
                  className="lgx:w-16 lgx:h-16 h-12 w-12"
                />
              </div>
            </div>
<div
  className={`w-full lg:w-[80%] border border-[#96722C80] rounded-sm lg:py-20 ${
    isReversed ? "lg:pr-40 lg:pl-12" : "lg:pl-40 lg:pr-12"
  } lgx:px-20 px-8 pt-24 pb-12 rounded-br-[40px] relative`}
>

            {/* <div className="w-full lg:w-[80%] border border-[#96722C80] rounded-sm lg:py-20 lg:pl-40  lgx:px-20 px-8  pt-24 pb-12 rounded-br-[40px] relative"> */}
              <p className="text-lg italic ">{item.text}</p>
              <h4 className="font-semibold">{item.name}</h4>
              <h4>{item.address}</h4>
              <p className="text-gray-600">{item.location}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
