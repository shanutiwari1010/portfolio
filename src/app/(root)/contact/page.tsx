"use client";

import { Metadata } from "next";
import { MapPin, Mail, Phone, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/section-heading";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";
import CallToAction from "@/components/call-to-action";

// export const metadata: Metadata = {
//   title: "Contact",
//   description: "Get in touch with Shanu Tiwari for collaboration or inquiries",
// };

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicApiKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!formRef.current) return;

    try {
      setIsSending(true);

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicApiKey
      );

      if (response.status === 200) {
        console.log("Thanks for reaching out, your message has been sent.");
        reset(); // Clear the form
      }
    } catch (error) {
      console.error("EmailJS error 10000:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <SectionHeading title="Get in Touch" highlighter="Touch" />
          <p className="mt-4 text-xl text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <div className="mx-auto max-w-xl grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-1">
          <div className="rounded-2xl border bg-card p-8 shadow-xs">
            <h2 className="text-2xl font-bold">Send Me a Message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    placeholder="Tell me about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSending}
                onClick={() => {
                  toast.success("", {
                    description: "Your message has been sent.",
                    position: "top-center",
                    richColors: true,
                  });
                }}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
      <CallToAction
        title="Ready to level up your product with AI?"
        highlighter="AI"
        description="Let's create intelligent, scalable and delightful user experiences together."
        buttonText="Let's Talk"
        href="/contact"
      />
    </div>
  );
}
