import React, { useState, useEffect } from 'react';

import { motion } from "framer-motion";

import { styles } from "../styles";
import resumePdf from "../resume/Anany_Resume.pdf";


const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText(prevText => currentText.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText('');
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000); // Delay before next typing cycle
        }
      }
    }, 100); // Typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, isTyping, texts, displayText]);

  return (
    <div className="typewriter-container">
      <p className={`${styles.heroSubText} mt-3`}>
        I am {displayText}
        {isTyping && <span className="typewriter-cursor">|</span>}
      </p>
    </div>
  );
};


const badgePills = [
  "AI Engineer",
  "MS AI Systems @ UF",
  "3+ Years Experience",
  "Production RAG",
  "Azure",
  "AWS",
];

const Hero = () => {
  const textOptions = [
    'an AI Engineer',
    'a Software Developer',
    'a Problem Solver',
  ];


  return (
    <section className="relative w-full min-h-screen bg-nb-hero-bg border-b-2 border-nb-border flex items-center pt-24 pb-20">
      <div className={`max-w-7xl mx-auto w-full ${styles.paddingX}`}>
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {badgePills.map((pill) => (
              <span
                key={pill}
                className="font-sans font-semibold text-[12px] uppercase tracking-wide bg-nb-heading text-white border-2 border-nb-border px-3 py-1 rounded-none"
              >
                {pill}
              </span>
            ))}
          </div>

          <h1 className={styles.heroHeadText}>Hi, I&apos;m Anany</h1>
          <TypewriterText texts={textOptions} />

          <p className="mt-5 max-w-xl font-sans text-nb-heading text-[16px] sm:text-[18px] leading-[1.6]">
            I build agentic AI, RAG, fine-tuned LLMs, and Edge AI systems &mdash; MS in Artificial
            Intelligence Systems @ University of Florida.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={resumePdf}
              download="Anany_Sharma_Resume.pdf"
              className="font-sans font-semibold text-[14px] text-white bg-nb-heading border-2 border-nb-border shadow-nb-sm px-5 py-2.5 rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/ananyd36/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold text-[14px] text-nb-heading bg-nb-bg border-2 border-nb-border shadow-nb-sm px-5 py-2.5 rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ananyd36"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold text-[14px] text-nb-heading bg-nb-bg border-2 border-nb-border shadow-nb-sm px-5 py-2.5 rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs"
            >
              GitHub
            </a>
            <a
              href="mailto:anany.sharma.ufl@gmail.com"
              className="font-sans font-semibold text-[14px] text-nb-heading bg-nb-bg border-2 border-nb-border shadow-nb-sm px-5 py-2.5 rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-11 h-11 flex items-center justify-center bg-nb-bg border-2 border-nb-border shadow-nb-sm rounded-none">
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop' }}
            >
              <path d="M2 5L8 11L14 5" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
