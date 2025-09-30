"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
  { name: "Ongoing projects", href: "/projects/ongoing" },
  { name: "Upcoming projects", href: "/projects/upcoming" },
  { name: "Completed projects", href: "/projects/completed" },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
        <div className="flex border border-[#96722C]  rounded-full mx-auto w-max items-center justify-center">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={clsx(
            "font-medium transition-colors py-1 px-7 rounded-full",
            pathname === tab.href
              ? " bg-[#96722C] text-white"
              : "text-black hover:text-[#96722C]"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}



    // <div className="flex gap-6 border-b border-gray-200 mb-6">
    //   {tabs.map((tab) => (
    //     <Link
    //       key={tab.name}
    //       href={tab.href}
    //       className={clsx(
    //         "pb-2 text-sm font-medium transition-colors",
    //         pathname === tab.href
    //           ? "border-b-2 border-blue-500 text-blue-600"
    //           : "text-gray-500 hover:text-gray-800"
    //       )}
    //     >
    //       {tab.name}
    //     </Link>
    //   ))}
    // </div>