'use client';
import Image from "next/image"

export default function Overview() {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-full md:w-6/12">
                        <div className="relative w-full h-64 md:h-[400px]">
                            <Image
                                src="/image/Rectangle 1560.png"
                                alt="Overview Image"
                                className="object-cover rounded-sm"
                                fill
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-6/12">
                        <h5 className="text-[#96722C]">Who We Are</h5>
                        <h3 className="leading-snug">Building with vision, integrity, and purpose.</h3>
                        <p className="text-gray-700 ">Not many real estate developers in Mumbai possess
                            expertise that encompasses all aspects of real estate redevelopment such as
                            development strategy, design development & management, branding & marketing,
                            as well as financial structuring. We believe, as a real estate company in Mumbai,
                            in the business of making design-led homes for people rather than projects. And
                            therefore, while our development strategies emerge from market-led dynamics, all
                            our projects have strong underpinnings of great functional design coupled with a
                            strong execution base and defines our position as a premium property developer in
                            Mumbai.</p>
                    </div>
                </div>
                <div className="w-full md:w-9/12 mx-auto pt-5">
                    <p className="text-center ">
                        We also believe that we will institutionalize the real estate development
                        business with the core values of ethical compliance, transparency, and commitment
                        to our stakeholders, and a partnership not merely on paper but in spirit. Which
                        are ideals that all top real estate developers in Mumbai should look up to.
                    </p>

                </div>
            </div>

        </section>
    )
}
