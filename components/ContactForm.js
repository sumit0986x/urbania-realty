"use client";

import Image from "next/image";
import Button from "./ui/Button";

Button;

export default function ContactForm() {
  return (
    <div className="py-12 bg-[#FEFBF5]">
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">

            <div className="w-full md:w-[60%]">
              <h5 className="text-[#96722C]">Urbina Realty</h5>
              <h3 className="mb-4">Creating Home, Enhancing Lives </h3>
              <p className="text-[#3C3C3C] leading-relaxed text-lg pb-5">
                Step into a space where elegance, comfort, and class come
                together. Share your details, and let’s begin your journey
                toward premium living.
              </p>
            </div>
            <div className="flex items-center gap-4">
            <Image
              src="/icon/Isolation.svg"
              alt=""
              width={40}
              height={40}
            />
            <hr className="border-[#96722C] w-full"/>
            </div>
          </div>




          <div className="">
            <h4>Get In Touch</h4>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input type="text" placeholder="Enter Full Name" />
              <input type="text" placeholder="Enter Email ID" />
              <input type="text" placeholder="Enter Phone Number" />
              <input type="text" placeholder="Location" />
              <div className="md:col-span-2 flex gap-5">
                <textarea
                  placeholder="Type Message Here"
                  className="w-[70%]"
                ></textarea>
                <div className="w-[30%] flex items-end">
                  <Button text="SEND MESSAGE" url="/awards" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
