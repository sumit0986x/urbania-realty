import BlogCard from "@/components/BlogCard";
import Banner from "@/components/ui/Banner";

export default function Blogs() {
  const blogs = [
    {
      image: "/image/Rectangle 1569.jpg",
      date: "05 July 2024",
      title:
        "Elevating Sustainability at Commerz-II from LEED Gold to LEED Platinum",
      text: "We focus on creating design-led homes for people, not just projects. While our approach is market-driven, every project is backed by thoughtful design and strong execution, defining us as a premium developer in Mumbai.",
      href: "/"
    },
    {
      image: "/image/Rectangle 1570.jpg",
      date: "15 August 2024",
      title: "Innovating Real Estate with a Human-Centered Design Philosophy",
      text: "At our core, we believe that great architecture should serve people first. Our developments reflect empathy, sustainability, and an understanding of how people truly live and work.",
      href: "/"
    },
  ];
  return (
    <>
      <Banner
        title="Blogs"
        description="Explore ideas and inspirations driving premium living experiences."
        backgroundImage="/banner/blogs.png"
      />
      <div className="container mx-auto py-20">
        <h2 className="text-center mb-10">Stay informed. Stay inspired.</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>

    </>
  )
}



// "use client";

// import BlogCard from "@/components/BlogCard";
// import Banner from "@/components/ui/Banner";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// export default function Blogs() {
//   const blogs = [
//     // 🔁 Your existing blogs (add more to test pagination)
//     {
//       image: "/image/Rectangle 1569.jpg",
//       date: "05 July 2024",
//       title:
//         "Elevating Sustainability at Commerz-II from LEED Gold to LEED Platinum",
//       text: "We focus on creating design-led homes...",
//       href: "/"
//     },
//     {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/"
//     },
//         {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/contact"
//     },
//         {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/awards"
//     },
//         {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/"
//     },
//         {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/"
//     },
//         {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/"
//     },
//         {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/"
//     },
//         {
//       image: "/image/Rectangle 1570.jpg",
//       date: "15 August 2024",
//       title: "Innovating Real Estate with a Human-Centered Design Philosophy",
//       text: "At our core, we believe that great architecture...",
//       href: "/"
//     },
    
//   ];

//   // 🚀 Split blogs into chunks of 6
//   const chunkSize = 6;
//   const chunkedBlogs = [];
//   for (let i = 0; i < blogs.length; i += chunkSize) {
//     chunkedBlogs.push(blogs.slice(i, i + chunkSize));
//   }

//   return (
//     <>
//       <Banner
//         title="Blogs"
//         description="Explore ideas and inspirations driving premium living experiences."
//         backgroundImage="/banner/blogs.png"
//       />

//       <div className="container mx-auto py-20">
//         <h2 className="text-center mb-10">Stay informed. Stay inspired.</h2>

// <Swiper
//   modules={[Pagination]}
//   pagination={{
//     el: ".custom-pagination", 
//     clickable: true,
//     renderBullet: (index, className) => {
//       const num = (index + 1).toString().padStart(2, "0"); // 👉 01, 02, etc.
//       return `<span class="${className}">${num}</span>`;
//     },
//   }}
//   spaceBetween={30}
//   autoHeight={true}
// >


//           {chunkedBlogs.map((chunk, index) => (
//             <SwiperSlide key={index}>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {chunk.map((blog, blogIndex) => (
//                   <BlogCard key={blogIndex} {...blog} />
//                 ))}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="custom-pagination flex justify-center gap-4 mt-10"></div>

//       </div>

      
//     </>
//   );
// }









// --------------------------------------------------------------------------------





// import BlogCard from "@/components/BlogCard";
// import Banner from "@/components/ui/Banner";
// import { fetchAPI } from "@/lib/api"; 

// export default async function Blogs() {
//   const blogs = await fetchAPI("blogs?populate=*"); 

//   return (
//     <>
//       <Banner
//         title="Blogs"
//         description="Explore ideas and inspirations driving premium living experiences."
//         backgroundImage="/banner/blogs.png"
//       />

//       <div className="container mx-auto py-20">
//         <h2 className="text-center mb-10">Stay informed. Stay inspired.</h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {blogs.length > 0 ? (
//             blogs.map((blog) => {
//               const { blog_heading, Publish_date, blog_content, Banner } = blog;

//               let description = "";
//               if (
//                 blog_content &&
//                 blog_content.length > 0 &&
//                 blog_content[0].children &&
//                 blog_content[0].children.length > 0
//               ) {
//                 description = blog_content[0].children[0].text || "";
//               }

//               const imageUrl =
//                 Banner?.url
//                   ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${Banner.url}`
//                   : Banner?.formats?.medium?.url
//                   ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${Banner.formats.medium.url}`
//                   : "/image/placeholder.jpg";

//               return (
//                 <BlogCard
//                   key={blog.id}
//                   image={imageUrl}
//                   date={Publish_date || ""}
//                   title={blog_heading || ""}
//                   text={description}
//                   href="/"
//                 />
//               );
//             })
//           ) : (
//             <p className="text-center text-gray-500">No blogs found.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
