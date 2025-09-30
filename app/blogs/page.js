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


// import BlogCard from "@/components/BlogCard";
// import Banner from "@/components/ui/Banner";
// import { fetchAPI } from "@/lib/api"; // import helper

// export default async function Blogs() {
//   const blogs = await fetchAPI("blogs?populate=*"); // fetch blogs dynamically

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

//               // Extract first paragraph text
//               let description = "";
//               if (
//                 blog_content &&
//                 blog_content.length > 0 &&
//                 blog_content[0].children &&
//                 blog_content[0].children.length > 0
//               ) {
//                 description = blog_content[0].children[0].text || "";
//               }

//               // Image URL
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
