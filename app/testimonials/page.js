import Banner from "@/components/ui/Banner";
import TestimonialsCard from "@/components/TestimonialsCard";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Mrs. & Mr. Bharat Yadav",
      address: "140 Shivaji Park",
      location: "Dadar, Mumbai",
      text: "“Urbina Realty turned what we thought would be a stressful process into an enjoyable journey. Their guidance, constant updates, and genuine care made finding our dream home a truly memorable experience.”",
    },
    {
      name: "Mr. & Mrs. Singh",
      address: "302 Skyline Apartments",
      location: "Bandra, Mumbai",
      text: "“Professional, friendly, and incredibly responsive! Urbina Realty made our first home-buying experience seamless.”",
    },
    {
      name: "Mrs. & Mr. Mehta",
      address: "24 Marine Drive",
      location: "Churchgate, Mumbai",
      text: "“Their dedication and attention to detail stood out. We couldn’t be happier with our new home.”",
    },
    {
      name: "Mrs. & Mr. Iyer",
      address: "88 Cuffe Parade",
      location: "Colaba, Mumbai",
      text: "“Thanks to Urbina Realty, we found our forever home. Their professionalism and support made all the difference.”",
    },
    {
      name: "Mr. & Mrs. Rane",
      address: "19 Carter Road",
      location: "Bandra West, Mumbai",
      text: "“Excellent communication and great service throughout. Highly recommended!”",
    },
    {
      name: "Mr. & Mrs. Desai",
      address: "401 Palm Grove",
      location: "Juhu, Mumbai",
      text: "“Smooth process and a great team. We love our new place!”",
    },
    {
      name: "Mr. & Mrs. Shah",
      address: "103 Green Acres",
      location: "Kandivali, Mumbai",
      text: "“We never thought home buying could be this easy. Great job by Urbina Realty!”",
    },
    {
      name: "Mrs. & Mr. Fernandes",
      address: "16 Hill Road",
      location: "Bandra, Mumbai",
      text: "“Highly professional and very responsive team. Thanks for all the help.”",
    },
    {
      name: "Mrs. & Mr. Rao",
      address: "203 Sunrise Towers",
      location: "Andheri, Mumbai",
      text: "“Very knowledgeable and trustworthy team. Highly recommend.”",
    },
  ];

  return (
    <>
      <Banner
        title="Testimonials"
        description="Where ideas meet innovation. Committed to excellence in all we do."
        backgroundImage="/banner/testimonials.png"
      />

      <div className="container mx-auto py-12 pb-20">
        <h3 className="text-center mb-16">
          Real stories. Real families. Real happiness.
        </h3>

        <TestimonialsCard testimonials={testimonials} />
      </div>
    </>
  );
}
