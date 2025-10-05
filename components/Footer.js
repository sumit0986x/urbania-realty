"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function Footer() {
    return (
        // <div className="pt-20 bg-[#fffcf5]">
        <div className="bg-[#96722C]">
            <div className="container mx-auto">
                <div className="relative p-4">
                    <Image src="/icon/footer-round.svg" alt="" width={100} height={100}
                        className="absolute left-1/2 -translate-x-1/2 -bottom-[4px] w-64 h-20" />

                    <Image src="/icon/Isolation-white.svg"
                        alt=""
                        width={60}
                        height={60}
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 rotate-infinite"
                    />
                </div>
                <div className="flex items-center pt-4">
                    <hr className="w-full border-[#FFFFFF36]" />
                    <Image
                        src="/icon/urbania-name.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="mx-12"
                    />
                    <hr className="w-full border-[#FFFFFF36]" />
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 py-12">
                    {/* Talk to Us */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-4 pb-3">
                        <h3 className="text-white">Talk to Us</h3>
                        <h5 className="text-white">Were Just a Message Away</h5>
                        <p className="text-[#FFFFFF99] small-text mb-5">Feel free to reach out anytime.</p>
                        <Link href="/contact-us">
                            <button className="relative px-[30px] py-[5px] rounded-[25px] border border-white text-white bg-transparent font-normal text-[14px] tracking-[1px]">
                                Contact Us
                                <span className="absolute top-1/2 right-[-25px] w-[40px] h-[40px] bg-[#96722c] border border-white rounded-full bg-center bg-no-repeat bg-[length:60%] transform -translate-y-1/2 transition-transform duration-600 ease-in-out"
                                    style={{ backgroundImage: "url('/icon/arrow.svg')" }}
                                />
                            </button>
                        </Link>
                    </div>

                    {/* About Us */}
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="font-semibold text-white mb-2">About Us</p>
                        <ul className="space-y-1 text-[#FFFFFF99] small-text">
                            <li><a href="#" className="hover:text-white small-text">About the company</a></li>
                            <li><a href="#" className="hover:text-white small-text">Vision & Mission</a></li>
                            <li><a href="#" className="hover:text-white small-text">Leadership Team</a></li>
                            <li><a href="#" className="hover:text-white small-text">Life at Urbania</a></li>
                            <li><a href="#" className="hover:text-white small-text">Job Openings</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="font-semibold text-white mb-2">Useful Links</p>
                        <ul className="space-y-1 text-[#FFFFFF99] small-text">
                            <li><a href="#" className="hover:text-white small-text">Testimonials</a></li>
                            <li><a href="#" className="hover:text-white small-text">Awards</a></li>
                            <li><a href="#" className="hover:text-white small-text">Blogs</a></li>
                            <li><a href="#" className="hover:text-white small-text">Life at Urbania</a></li>
                            <li><a href="#" className="hover:text-white small-text">Newsroom</a></li>
                        </ul>
                    </div>

                    {/* Projects */}
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="font-semibold text-white mb-2">Projects</p>
                        <ul className="space-y-1 text-[#FFFFFF99] small-text">
                            <li><a href="#" className="hover:text-white small-text">Ongoing</a></li>
                            <li><a href="#" className="hover:text-white small-text">Upcoming</a></li>
                            <li><a href="#" className="hover:text-white small-text">Completed</a></li>
                        </ul>
                    </div>

                    {/* Redevelopment */}
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="font-semibold text-white mb-2">Redevelopment</p>
                        <ul className="space-y-1 text-[#FFFFFF99] small-text">
                            <li><a href="#" className="hover:text-white small-text">Process</a></li>
                            <li><a href="#" className="hover:text-white small-text">Benefits</a></li>
                            <li><a href="#" className="hover:text-white small-text">Partner with Us</a></li>
                        </ul>
                    </div>
                </div>


                <hr className="w-full border-[#FFFFFF36]" />

                <div className="flex flex-col md:flex-row items-center gap-3 py-4 w-full text-white font-light">
                    <p className="w-full md:w-1/3 text-center md:text-left small-text">
                        © 2025 URBANIA REALTY. All rights reserved.
                    </p>
                    <div className="w-full md:w-1/3 text-center cursor-pointer mb-[15px]">
                        <Image
                            src="/icon/arrow.svg"
                            alt="up Arrow"
                            width={20}
                            height={20}
                            className="inline-block rotate-[-90deg]" />
                        <p className="leading-[0px] small-text">Back to Top</p>
                    </div>
                    <Link href="#" className="w-full md:w-1/3 flex flex-col-reverse md:flex-row items-center justify-center md:justify-end text-center md:text-right gap-2">
                        <p className="small-text">Follow us on Instagram</p>
                        <Image src="/icon/instagram.svg" alt="Instagram"
                            width={40}
                            height={40} className="inline-block" />
                    </Link>
                </div>

                <hr className="w-full border-[#FFFFFF36]" />

                <div className="disclaimer py-10">
                    <span className="text-[#FFFFFF99] small-text">
                        <strong>NOTE:</strong> This website/micro-site is the sole property of Urbania Realty. The contents of this
                        website/micro-site, including but not limited to text, graphics, logos, software, trademarks, plans, drawings,
                        amenities, specifications, and
                        other information, are the exclusive property of Urbania Realty and are protected under applicable laws. All
                        content including text, images, and photography is the intellectual property of Urbania Realty and may not be
                        copied,
                        reproduced, published, republished, posted, transmitted, or distributed in any form without prior written
                        consent from Urbania Realty. <Link href="/" className="underline  small-text"> Privacy Policy</Link> | <Link href="/" className="underline small-text"> Disclaimer</Link>
                    </span>
                </div>

            </div>
        </div>
        // </div>
    )
}
