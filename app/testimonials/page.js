import TestimonialsCard from "@/components/TestimonialsCard";
import Banner from "@/components/ui/Banner";

export default function Testimonials() {
  return (
<>
      <Banner
        title="Testimonials"
        description="Where ideas meet innovation. Committed to excellence in all we do."
        backgroundImage="/banner/testimonials.png"
      />
      <TestimonialsCard/>
</>
  );
}
