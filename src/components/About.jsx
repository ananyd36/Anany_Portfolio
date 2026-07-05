import React from 'react';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2 * index, 0.75)}
      className="bg-nb-bg border-2 border-nb-border shadow-nb-md rounded-none p-6 w-full xs:w-[220px] flex flex-col items-center gap-4"
    >
      <div className="w-14 h-14 flex items-center justify-center bg-nb-brand-soft border-2 border-nb-border rounded-none">
        <img src={icon} alt={title} className="w-7 h-7 object-contain" />
      </div>
      <h3 className="font-sans font-semibold text-nb-heading text-[16px] text-center">{title}</h3>
    </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl flex flex-col gap-4 font-sans text-nb-body text-[16px] leading-[1.7]"
      >
        <p>
          I am Anany Sharma, an AI Engineer and Software Engineer currently pursuing a Master&rsquo;s in Artificial Intelligence Systems at the University of Florida. I build scalable AI systems across LLMs, multimodal AI, Edge AI, and distributed data platforms.
        </p>

        <p>
          I have 3+ years of industry experience across AI engineering, machine learning, and large scale data systems. Previously at United Health Group, I developed production RAG systems, ETL pipelines processing 10M+ monthly claims, and automated enterprise reporting workflows.
        </p>

        <p>
          My recent work focuses on Small Language Models and Edge AI deployment. I engineered a 96MB SLM on Jetson Orin using ONNX Runtime and TensorRT, achieving 70 tokens/sec with optimized inference pipelines using KV cache and Flash Attention.
        </p>

        <p>
          I enjoy building AI systems from research to production, including agentic workflows, multimodal learning, cloud deployment, and real time inference systems. My projects span healthcare AI, generative AI, forecasting systems, and computer vision applications.
        </p>

        <p>
          Tech Stack: Python, PyTorch, TensorFlow, LangChain, Spark, Docker, Kubernetes, AWS, Azure, SQL, Airflow, and FastAPI.
        </p>
      </motion.div>

      <div className='mt-16 flex flex-wrap gap-6'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about", "bg-nb-bg")
