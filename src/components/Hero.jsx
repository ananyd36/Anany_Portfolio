import React, { useState, useEffect } from 'react';

import { motion } from "framer-motion";

import { styles } from "../styles";
import lapseVideo from "../assets/videos/lapse_video.mp4";
import heroPoster from "../assets/herobg-poster.jpg";
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
      <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
        I am {displayText}
        {isTyping && <span className="typewriter-cursor">|</span>}
      </p>
    </div>
  );
};


const Hero = () => {
  const textOptions = [
    'an AI Engineer',
    'a Software Developer',
    'a Problem Solver',
  ];


  return (
    <section className="relative w-full h-screen mx-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        preload="auto"
      >
        <source src={lapseVideo} type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div>
          <h1 className = {`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#dba039]">Anany</span></h1>
          <TypewriterText texts={textOptions} />

          <p className="mt-4 max-w-xl text-white-100 text-[15px] sm:text-[17px] leading-[26px]">
            I build production LLM, RAG, and Edge AI systems &mdash; MS in Artificial
            Intelligence Systems @ University of Florida.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={resumePdf}
              download="Anany_Sharma_Resume.pdf"
              className="px-5 py-2.5 rounded-full bg-[#dba039] text-black font-semibold text-[14px] hover:opacity-90 transition"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/ananyd36/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-100 hover:text-[#dba039] text-[14px] font-medium underline underline-offset-4 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ananyd36"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-100 hover:text-[#dba039] text-[14px] font-medium underline underline-offset-4 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:ananyd36.ms@gmail.com"
              className="text-white-100 hover:text-[#dba039] text-[14px] font-medium underline underline-offset-4 transition"
            >
              Email
            </a>
          </div>
        </div>

      </div>


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10"> 
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate = {{
                y: [0, 24, 0]
              }}
              transition = {{
                duration:1.5,
                repeat:Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero