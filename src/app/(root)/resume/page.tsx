import React from "react";

const Resume = () => {
  return (
    <section className="resume-wrapper">
      <div className="h-screen">
        <iframe
          src="https://www.shanutiwari.in/resume/resume.pdf"
          width="100%"
          height="100%"
          title="Resume PDF"
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Resume;
