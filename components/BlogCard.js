import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ image, date, title, text, href }) {
  return (
    <Link href={href} >
      <div className="relative w-full h-64 min-h-60 md:min-h-80">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="w-full rounded-sm object-cover"
        />
      </div>

      <div className="border-l border-[#96722C80] py-4 px-8 my-4">
        <p className="small-text text-[#96722C]">{date}</p>
        <h5 className="font-semibold mb-2">{title}</h5>

        <p className="text-gray-700 leading-relaxed line-clamp-3">
          {/* {text.length > 200 ? text.slice(0, 200) + "..." : text} */}
          {text}
        </p>
      </div>
    </Link>
  );
}
