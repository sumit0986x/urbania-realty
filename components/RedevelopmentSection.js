import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function RedevelopmentSection() {
  return (
    <section className="py-5 bg-[#FEF7EA]">
      <div className="text-center py-5">
        <h3 className="text-2xl font-semibold">Redevelopment Expertise</h3>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  py-4">
          <div className="lg:w-7/12 w-full">
            <Image
              src="/image/Rectangle 1560.png"
              alt="Redevelopment"
              width={800}
              height={500}
              className="w-full h-auto rounded"
            />
          </div>

          <div className="lg:w-5/12 w-full flex flex-col justify-between  py-3 lg:py-0 ">
            <div className="flex items-center gap-3 mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <Image
                src="/icon/Isolation.svg"
                width={24}
                height={24}
                alt="decor-icon"
              />
            </div>

            <div className="flex flex-col justify-center  gap-3 px-5">
              <h5 className="text-[#96722C] font-semibold">Innovating Redevelopment</h5>
              <h3 className="font-semibold">
                Redefining old spaces with smart, Redevelopment.
              </h3>
              <p>
                With strong expertise in real estate redevelopment, we transform aging structures into thoughtfully designed, future-ready spaces. From planning to execution, our process ensures minimal disruption and maximum value for both residents and stakeholders.
              </p>

              <div className="py-3">
                <Button text="Read Process" url="/contact"/>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <hr className="flex-grow border-t border-gray-300" />
              <Image
                src="/icon/Isolation.svg"
                width={24}
                height={24}
                alt="decor-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
