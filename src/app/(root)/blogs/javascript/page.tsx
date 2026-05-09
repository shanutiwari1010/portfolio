import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/moving-border";
import { getHashnodePosts } from "@/lib/hashnode";
import { ArrowRight } from "lucide-react";

const HOST = "javascript-fundamentals-2025.hashnode.dev";

export const metadata: Metadata = {
  title: "Javascript Blogs",
  description:
    "Insights, tutorials, and stories from my journey through JavaScript fundamentals and modern web development.",
};

const Blogs = async () => {
  const posts = await getHashnodePosts(HOST);

  return (
    <div className="pt-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <SectionHeading title="Javascript Blogs" highlighter="Blogs" />
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tutorials, and stories from my journey in web development
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts available right now. Please check back later.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ slug, title, brief, url, coverImage }) => (
              <article
                key={slug}
                className="rounded-[22px] sm:p-10 dark:bg-zinc-900 bg-gray-100"
              >
                <Image
                  src={coverImage?.url ?? "/assets/default-blog.jpg"}
                  alt={title}
                  width={400}
                  height={400}
                  className="object-contain rounded-lg hover:scale-110 transition-all duration-75 ease-in-out"
                />
                <h2 className="font-semibold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-2xl">
                  {title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {brief}
                </p>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Button className="group cursor-pointer text-primary font-medium">
                    Click to Read
                    <ArrowRight className="pl-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
