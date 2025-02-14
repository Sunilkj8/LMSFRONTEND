import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 flex justify-center flex-col items-center gap-10 min-h-screen"> {/* Added background, padding, and min-height */}
      <div className="text-4xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8"> {/* Added font-bold, text color, and margin */}
        About Us
      </div>
      <div className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] w-full text-lg text-gray-700 leading-relaxed"> {/* Adjusted max-width, text size, color, and line height */}
        At bookVault, we're passionate about simplifying and enhancing the learning experience for everyone. We understand that managing learning materials, tracking progress, and fostering engagement can be complex, whether you're an educational institution, a corporate training department, or an individual learner. That's why we created bookVault LMS – a comprehensive and intuitive Learning Management System designed to streamline all aspects of online learning. Our mission is to empower educators and learners with the tools they need to succeed. We believe that technology should be a facilitator, not a barrier, to effective learning. We strive to provide a user-friendly platform that is accessible, affordable, and adaptable to diverse learning styles and needs.
      </div>
    </div>
  );
};

export default AboutUs;
