"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
  { name: "Ongoing", href: "/projects/ongoing" },
  { name: "Upcoming", href: "/projects/upcoming" },
  { name: "Completed", href: "/projects/completed" },
];

export default function ProjectTabs({ title, description }) {
  const pathname = usePathname();

  return (
    <div className="bg-[#fffcf5] py-10">
      <div className="container mx-auto text-center space-y-4">
        <h3 className="">{title}</h3>
        <p className="text-gray-700 pb-5">{description}</p>

        <div className="flex border border-[#96722C] rounded-full mx-auto w-max items-center justify-center">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={clsx(
                "uppercase transition-colors py-2 px-10 rounded-full small-text",
                pathname === tab.href
                  ? "bg-[#96722C] text-white"
                  : "text-[#96722C] hover:text-[#96722C]"
              )}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
