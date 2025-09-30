import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center bg-[#FDF9F3] border border-[#E2D6BE] rounded-2xl p-10 shadow-sm">
        
        {/* Quote Circle */}
        <div className="flex-shrink-0 flex items-center justify-center w-40 h-40 rounded-full bg-[#96722C]">
          <Image
            src="/icon/double.svg" // ✅ Make sure the file name matches exactly
            alt="quotation mark"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="pl-12 pr-6 w-full">
          <p className="text-[#3A3A3A] text-[16px] leading-relaxed mb-6 italic">
            “Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience”
          </p>

          <h4 className="font-semibold text-[18px] text-[#000000] mb-1">
            Mrs. &amp; Mr. Bharat Yadav
          </h4>
          <h5 className="text-[#96722C] text-[16px] mb-1">
            140 Shivaji Park
          </h5>
          <p className="text-[#444444] text-[15px]">
            Dadar, Mumbai
          </p>
        </div>
      </div>
    </div>
  );
}
