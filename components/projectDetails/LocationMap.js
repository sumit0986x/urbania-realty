"use client";

import Image from "next/image";
import Button from "../ui/Button";

export default function LocationMap() {
    return (
        <section className="bg-[#fff3db]">
            <div className="flex flex-col-reverse lgx:flex-row relative">
                <div className="w-full lgx:w-6/12">
                    <div className="container mx-auto pb-10 lgx:pr-0 lgx:py-10">
                        <div className="border border-gold border-t-0 lgx:border-t border-r lgx:border-r-0 h-full rounded-br-[60px] lgx:rounded-br-none lgx:rounded-bl-[60px] relative">
                            <Image
                                src="/icon/Isolation.svg"
                                alt="Decoration Icon"
                                width={100}
                                height={100}
                                className="absolute w-12 p-2 bg-[#fff3db] -bottom-6 lgx:-top-6 -left-6 rounded-full"
                            />

                            <div className="p-10">
                                <h3>An Address Without Parallel in South Mumbai</h3>
                                <ul className="list-disc list-outside ml-6">
                                    <li>An art deco precinct with immense history</li>
                                    <li>Great connectivity to the western and central parts of the city including the airports, Bandra-Worli sealink and more</li>
                                    <li>Close to major commercial districts like Lower Parel, BKC and more</li>
                                    <li>Metro development at a walking distance from the project</li>
                                    <li>Surrounded by leisure and entertainment hubs</li>
                                    <li>Easy access to top schools, colleges, hospitals and other important needs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lgx:w-6/12 relative">
                    <div className="h-full w-full lgx:absolute top-0 right-0">
                        <Image
                            src="/image/Rectangle 1560.png"
                            alt="Map"
                            width={1000}
                            height={1000}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <Button text="Google Location" url="" bgColor="#fff3db" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
