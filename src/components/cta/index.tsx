import React from "react";

const CallToActionButton = () => {
  return (
    <div className="py-16 pt-12 lg:py-25 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-20 ">
          <div
            className="absolute inset-0 opacity-5 -z-10 "
            style={{
              backgroundImage: "url(/_next/static/media/grain.52591b0c.jpg)",
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center ">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how can I help you achieve your goals.
              </p>
            </div>
            <div className="cursor-pointer">
              <a href="mailto:neelmishra9125@gmail.com">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:animate-bounce ">
                  <span className="font-semibold">Contact Me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="size-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17 17 7M7 7h10v10"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionButton;
