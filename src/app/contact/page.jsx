import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
function Contact() {
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
          <form action="" className="flex flex-col gap-5 p-2">
            <div className="flex gap-16">
              <div className="flex flex-col gap-2 ">
                <label class="form-label">Your name</label>
                <input
                  name="Name"
                  id="name"
                  placeholder=" Name *"
                  className="border-2 border-gray-500 px-10 py-2"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label class="form-label">Your Email</label>
                <input
                  name="Email"
                  id="email"
                  placeholder="Email *"
                  className="border-2 border-gray-500 px-10 py-2"
                  type="email"
                ></input>
              </div>
            </div>

            <label class="form-label">Subject</label>
            <input
              name="Subject"
              id="subject"
              placeholder="Subject *"
              className="border-2 border-gray-500 p-2"
              type="text"
            ></input>

            <label class="form-label">Your message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message *"
              rows="4"
              className="border-2 border-gray-500 p-2"
              data-gramm="false"
              wt-ignore-input="true"
            ></textarea>

            <Button text="send message" path="" />
          </form>
        </div>
        <div className="flex flex-col justigy-center w-full text-white m-20 p-10">
          <Image
            src="/assets/myphoto.jpg"
            width={250}
            height={250}
            alt="myphoto"
          />

          <div>
            <h1>mail</h1>
            <p>shanutiwari.work@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
