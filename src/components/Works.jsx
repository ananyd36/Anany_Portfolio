import {motion} from 'framer-motion';

import { styles } from '../styles';
import {github} from '../assets';
import { SectionWrapper } from '../hoc';
import { projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="bg-nb-bg border-2 border-nb-border shadow-nb-md rounded-none p-5 sm:w-[360px] w-full transition-all duration-100 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-nb-lg"
    >
      <div className='relative w-full h-[230px] border-2 border-nb-border'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex justify-end m-3'>
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            aria-label={`View source for ${name}`}
            className='bg-nb-bg w-10 h-10 border-2 border-nb-border shadow-nb-xs rounded-none flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt=''
              className='w-1/2 h-1/2 object-contain'
            />
          </button>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='font-head text-nb-heading text-[20px]'>{name}</h3>
        <p className='mt-2 font-sans text-nb-body text-[14px] leading-[1.6]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className='font-sans text-[12px] font-medium text-nb-heading bg-nb-bg-muted border-2 border-nb-border px-2 py-0.5 rounded-none'
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex justify-center items-center'>
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 max-w-3xl font-sans text-nb-body text-[16px] leading-[1.7] text-center"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className= "mt-20 flex flex-wrap gap-7" style={{ overflow: "visible" }}>
      {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work", "bg-nb-bg-alt");
