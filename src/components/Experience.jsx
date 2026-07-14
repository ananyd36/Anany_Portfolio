import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import { experiences } from "../constants";
import {SectionWrapper} from '../hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#FFFFFF",
      border: "2px solid #000000",
      borderRadius: 0,
      boxShadow: "4px 4px 0 0 #000000",
    }}
    contentArrowStyle={{ borderRight: "7px solid #000000" }}
    date={experience.date}
    dateClassName="font-sans font-semibold text-nb-heading"
    iconStyle={{
      background: experience.iconBg,
      border: "2px solid #000000",
      borderRadius: 0,
      boxShadow: "none",
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className="font-head text-nb-heading text-[20px]">{experience.title}</h3>
      <p className="font-sans text-nb-body text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='font-sans text-nb-body text-[14px] pl-1 tracking-wide'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#000000" animate={false}>
          {experiences.map((experience, index) => (
           <ExperienceCard key = {index} experience= {experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience", "bg-nb-bg-alt")
