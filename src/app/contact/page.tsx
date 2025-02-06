"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Contact() {
  const [, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleNameInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleEmailInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleSubjectInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      subject: e.target.value,
    }));
  };
  const handleMessageInpute = (e) => {
    setFormData((prev) => ({
      ...prev,
      subject: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error.name) {
      setError((prev) => ({
        ...prev,
        name: "Name is required",
      }));
    }
    if (error.email) {
      setError((prev) => ({
        ...prev,
        email: "Email is required",
      }));
    }
    if (error.subject) {
      setError((prev) => ({
        ...prev,
        subject: "Subject is required",
      }));
    }
    if (error.message) {
      setError((prev) => ({
        ...prev,
        message: "Message is required",
      }));
    }
  };

  return (
    <div className="">
      <Header />
      <div className="flex bg-gray-900 py-36 px-20 justify-between">
        <div className="bg-white flex flex-col justify-center p-8">
          <h1 className="text-4xl font-semibold p-2">Get in touch</h1>
          <p className="p-2">
            Contact me at{" "}
            <span className=" text-orange-600">shanutiwari.work@gmail.com</span>
          </p>
          <h2 className="p-2 font-semibold">OR</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-2">
            <div className="flex gap-16">
              <div className="flex flex-col gap-2 ">
                <label class="form-label">Your name</label>
                <input
                  name="Name"
                  id="name"
                  placeholder=" Name *"
                  className="border-2 border-gray-500 px-10 py-2"
                  type="text"
                  onChange={handleNameInput}
                />
                {error.name && <p>{error.name}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="form-label">Your Email</label>
                <input
                  name="Email"
                  id="email"
                  placeholder="Email *"
                  className="border-2 border-gray-500 px-10 py-2"
                  type="email"
                  onChange={handleEmailInput}
                />
                {error.email && <p>{error.email}</p>}
              </div>
            </div>

            <label className="form-label">Subject</label>
            <input
              name="Subject"
              id="subject"
              placeholder="Subject *"
              className="border-2 border-gray-500 p-2"
              type="text"
              onChange={handleSubjectInput}
            />
            {error.subject && <p>{error.subject}</p>}

            <label className="form-label">Your message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message *"
              rows="4"
              className="border-2 border-gray-500 p-2"
              data-gramm="false"
              wt-ignore-input="true"
              onChange={handleMessageInpute}
            ></textarea>
            {error.message && <p>{error.message}</p>}

            <Button>Send Message</Button>
          </form>
        </div>
        <div className="flex flex-col  w-full text-white items-center">
          <div className="px-10">
            <h1 className="uppercase text-gray-400 text-xl font-medium">
              mail
            </h1>
            <p>shanutiwari.work@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
