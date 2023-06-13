import React from "react";
import TestimonialsSection from "./TestimonialsSection";

const ParentComponent = () => {
  const testimonials = [
    "Great service! Highly recommended.",
    "Excellent product quality. Will buy again.",
    "Amazing customer support. Very responsive.",
    // Add more testimonials as needed
  ];

  const testimonialsPerPage = 1;

  return (
    <div>
      {/* Other components */}
      <TestimonialsSection
        testimonials={testimonials}
        testimonialsPerPage={testimonialsPerPage}
      />
      {/* Other components */}
    </div>
  );
};

export default ParentComponent;
