"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Feature() {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="flex flex-col lgx:flex-row py-10">
                    <div className="w-full lgx:w-5/12">
                        <div className="relative w-full h-full min-h-[450px]">
                            <Image
                                src="/image/image.jpg"
                                alt="Project Image"
                                fill
                                priority
                                className="object-cover rounded-sm"
                            />
                        </div>
                    </div>

                    <div className="w-full lgx:w-7/12 px-5 lgx:px-0 py-0 lgx:py-5">
                        <div className="border border-[#96722C80]  border-t-0 lgx:border-t lgx:border-l-0 rounded-bl-[60px] lgx:rounded-bl-none lgx:rounded-br-[60px] h-full relative">
                            <Image
                                src="/icon/Isolation.svg"
                                alt="Decoration Icon"
                                width={100}
                                height={100}
                                className="absolute w-12 p-2 -bottom-6 lgx:-top-6 -right-6 bg-[#fffcf5]"
                            />
                            <div className="py-5 px-10 sm:py-10 sm:px-20">
                                <h3>A Tower That Rises Above All Else</h3>
                                <p className="text-[#96722C] text-4xl">3, 5 & 6 BHK</p>


                                <p className="py-5 text-gray-700">
                                    140 Shivaji Park is a multi-layered, faceted project that puts its
                                    inhabitants at the center of the experience process influenced by
                                    art, aesthetics, engineering, lifestyle, interiors, sustainability,
                                    and more.
                                </p>

                                <div className="py-5">
                                    <Button text="Download Brochure" url="/projects/completed/test-project" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-10/12 mx-auto text-center">
                    <h3>Iconic Residences With Spectacular and Expansive Views</h3>
                    <p className="text-light">Your apartment has a heritage address in South Mumbai that
                        needs no introduction. As the tallest tower in Shivaji Park precinct, each apartment
                        boasts of unobstructed views encompassing the Bandra-Worli Sea Link along with the open
                        green pastures of Shivaji Park. Not to mention the old worldly charm of a locale dotted
                        by quiet and leafy by lanes.</p>
                    <div className="relative w-full h-[300px] sm:h-[500px] md:h-[80vh]">
                        <Image
                            src="/image/Rectangle 1569.png"
                            alt="Project Banner"
                            fill
                            priority
                            className="object-cover rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
