import React, { useState, useEffect } from 'react';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


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
      {/* <p className="typewriter-text mt-2" style={{ color: 'white', fontSize: '1.25rem' }}> */}
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
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-center bg-no-repeat h-screen w-full">
    {/* </section><section className="bg-hero-pattern bg-cover bg-center bg-no-repeat h-screen w-full"> */}
    {/* </section><section className="relative w-full h-screen mx-auto bg-hero-pattern"> */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] "/>
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>  */}

        

        <div>
          {/* <h1 className = {`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Anany</span></h1> */}
          <h1 className = {`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#dba039]">Anany</span></h1>
          {/* <p className = {`${styles.heroSubText} mt-2 text-white-100`}>I am a Software developer <br className = "sm:block hidden"/>and a Graphic designer</p> */}
          <TypewriterText texts={textOptions} />
      
        </div>

      </div>

      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"> 
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
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