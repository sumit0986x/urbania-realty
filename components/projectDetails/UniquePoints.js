"use client";

import Image from "next/image";

export default function UniquePoints() {
    return (
        <>
            <section className="bg-gold">
                <div className="container mx-auto py-20">
                    <h3 className="text-center text-white py-10">What Makes 140 Shivaji Park Unique?</h3>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
                        <div className="text-center text-white h-full">
                            <Image src="/project/plot.svg" alt="" width={100} height={100} className="mx-auto h-20 w-20 pb-5" />
                            <h5 className="text-white">Biggest Plot</h5>
                            <p>Amalgamation of 4 plots as single development</p>
                        </div>

                        <div className="text-center text-white">
                            <Image src="/project/tower.svg" alt="" width={100} height={100} className="mx-auto h-20 w-20 pb-5" />
                            <h5 className="text-white">Tallest Tower</h5>
                            <p>Amalgamation of 4 plots as single development</p>
                        </div>

                        <div className="text-center text-white">
                            <Image src="/project/view.svg" alt="" width={100} height={100} className="mx-auto h-20 w-20 pb-5" />
                            <h5 className="text-white">Unrestricted View</h5>
                            <p>Amalgamation of 4 plots as single development</p>
                        </div>

                        <div className="text-center text-white">
                            <Image src="/project/parking.svg" alt="" width={100} height={100} className="mx-auto h-20 w-20 pb-5" />
                            <h5 className="text-white">Ramp Parking</h5>
                            <p>Amalgamation of 4 plots as single development</p>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
