import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options = {{
          max:45,
          scale:1,
          speed:450
        }}
        // className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  )

}

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className = {styles.sectionSubText}>Introduction</p>
        <h2 className = {styles.sectionHeadText}>Overview</h2>
      </motion.div>


      <motion.p variants = {fadeIn("","",0.1,1)} className = "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
        <p>
        I am Anany Sharma, an innovative AI/ML Engineer with a strong foundation in deep learning, computer vision, and NLP. Currently pursuing a Master’s in Artificial Intelligence Systems at the University of Florida, with a solid academic background in Computer Science from SRM Institute of Science and Technology.
        </p><br/>
        <p>
        3+ years of industry experience at United Health Group (Optum), where I led AI-driven initiatives to optimize enterprise data workflows, reduce operational costs, and enhance automation. I specialize in developing multi-modal Retrieval-Augmented Generation (RAG) systems, OCR/NLP models, and ETL pipelines processing 10M+ claims monthly. Recognized with five Bravo! awards for outstanding performance.
        </p><br/>
        <p>
          Some of my work are as follows:<br/><br/>
          ✔ CROWDSAFE : Published a patent on crowd detection during the COVID era leveraging Deep Learning/Machine Learning capabilities.<br/>
          ✔ SMIRE : An intelligent Medical Agent system handling your everyday medical shores. Be it booking appointments, on the go consultations, latest medical news, talking through your past reports, etc.<br/>
          ✔ CORAS : An advanced GenAI-based knowledge retrieval system handling text and audio data.<br/>
          ✔ RESILITREE : A tree fall risk prediction model using CNNs and IBM Granite-13B chatbot integration.<br/>
          ✔ SCRADIT : A full-stack scrap management mobile app on Flutter & Azure.<br/><br/><br/>

        Proficient in Python, Flask, FastAPI, Flutter, Angular, OpenAI, Azure AI Studio, SQL/NoSQL, Docker, and DevOps. Passionate about building scalable AI solutions that bridge technology and business needs.
        </p><br/>
        <p>
        I continuously seek new technological challenges to learn and grow in this dynamic field.
        </p><br/>
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={services.title} index = {index}{...service}/>))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about")