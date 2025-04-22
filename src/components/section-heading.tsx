"use client";

import { motion } from "framer-motion";
import AccentText from "./accent-text";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlighter?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlighter,
  className,
}) => {
  let segments: { text: string; highlighted: boolean }[] = [];
  if (highlighter) {
    const regex = new RegExp(`(${highlighter})`, "gi");
    const parts = title.split(regex);
    segments = parts.map((part) => ({
      text: part,
      highlighted: part.toLowerCase() === highlighter.toLowerCase(),
    }));
  } else {
    segments = [{ text: title, highlighted: false }];
  }

  let cumulativeLetterIndex = 0;

  return (
    <h1
      className={cn(
        "text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-center tracking-tighter",
        className
      )}
    >
      {segments.map((segment, segmentIndex) => (
        <span key={`segment-${segmentIndex}`} className="inline-block">
          {segment.text.split(" ").map((word, wordIndex, wordArray) => (
            <span
              key={`word-${segmentIndex}-${wordIndex}`}
              className={`inline-block ${
                wordIndex !== wordArray.length - 1 ? "mr-3" : ""
              }`}
            >
              {word.split("").map((letter, letterIndex) => {
                const currentDelay = cumulativeLetterIndex * 0.03;
                cumulativeLetterIndex++;

                if (segment.highlighted) {
                  return (
                    <motion.span
                      key={`letter-${segmentIndex}-${wordIndex}-${letterIndex}`}
                      className="mt-10 inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: currentDelay }}
                    >
                      <AccentText>{letter}</AccentText>
                    </motion.span>
                  );
                } else {
                  return (
                    <motion.span
                      key={`letter-${segmentIndex}-${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: currentDelay,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-transparent bg-clip-text 
                        bg-linear-to-r from-neutral-900 to-neutral-700/80 
                        dark:from-white dark:to-white/80"
                    >
                      {letter}
                    </motion.span>
                  );
                }
              })}
              {wordIndex !== wordArray.length - 1 && <span> </span>}
            </span>
          ))}
          {segmentIndex !== segments.length - 1 && <span> </span>}
        </span>
      ))}
    </h1>
  );
};

export default SectionHeading;
