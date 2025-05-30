"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/moving-border";
import CallToAction from "@/components/call-to-action";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://gql.hashnode.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              {
                publication(host: "next-wave.hashnode.dev") {
                  posts(first: 10) {
                    edges {
                      node {
                        title
                        brief
                        slug
                        coverImage {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `,
          }),
        });

        const data = await res.json();
        const posts = data?.data?.publication?.posts?.edges || [];

        const formattedPosts = posts.map(({ node }, index) => ({
          id: index + 1,
          title: node.title,
          description: node.brief,
          image: node.coverImage?.url || "/assets/default-blog.jpg",
          link: `https://next-wave.hashnode.dev/${node.slug}`,
        }));

        setBlogs(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="pt-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <SectionHeading title="Blogs" highlighter="gs" />
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tutorials, and stories from my journey in web development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(({ id, image, title, description, link }) => (
            <div
              key={id}
              className="rounded-[22px] sm:p-10 dark:bg-zinc-900 bg-gray-100"
            >
              <Image
                src={image}
                alt="blog img"
                width={400}
                height={400}
                className="object-contain rounded-lg hover:scale-110 transition-all duration-75 ease-in-out"
              />
              <p className="font-semibold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-2xl">
                {title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {description}
              </p>
              <Button
                borderRadius="1.75rem"
                className="cursor-pointer text-primary font-medium"
                onClick={() => window.open(link, "_blank")}
              >
                Click to Read
              </Button>
            </div>
          ))}
        </div>
      </section>

      <CallToAction
        title="Built Together. Made to Perform."
        highlighter="Built Together"
        description="Great products are built in collaboration. Let's team up to bring your next big idea to life — pixel-perfect and production-ready."
        buttonText="Let's Collaborate"
        className="max-w-xl"
        href="/contact"
      />
    </div>
  );
};

export default Blogs;
