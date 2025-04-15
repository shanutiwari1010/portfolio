import { Metadata } from "next";
import { MapPin, Mail, Phone, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shanu Tiwari for collaboration or inquiries",
};

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <SectionHeading title="Get in Touch" highlighter="Touch" />
            <p className="mt-4 text-xl text-muted-foreground">
              Have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </div>

          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Send Me a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form className="mt-8 space-y-6">
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
                      name="name"
                      placeholder="John Doe"
                      required
                    />
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
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
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
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                    />
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
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project or inquiry..."
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </p>

                <dl className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </dt>
                    <dd>
                      <p className="font-medium">Email</p>
                      <p className="mt-1">
                        <a
                          href="mailto:hello@shanutiwari.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@shanutiwari.com
                        </a>
                      </p>
                    </dd>
                  </div>

                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </dt>
                    <dd>
                      <p className="font-medium">Phone</p>
                      <p className="mt-1">
                        <a
                          href="tel:+11234567890"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (123) 456-7890
                        </a>
                      </p>
                    </dd>
                  </div>

                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </dt>
                    <dd>
                      <p className="font-medium">Location</p>
                      <p className="mt-1 text-muted-foreground">
                        San Francisco, California
                        <br />
                        United States
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 rounded-2xl border bg-muted/20 p-8">
                <h3 className="text-xl font-semibold">Let's Work Together</h3>
                <p className="mt-2 text-muted-foreground">
                  I'm currently available for freelance work and open to
                  discussing new opportunities. If you have a project that needs
                  some attention, feel free to contact me.
                </p>
                <Button asChild className="mt-6">
                  <a href="mailto:hello@shanutiwari.com">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
