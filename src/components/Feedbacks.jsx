import {motion} from 'framer-motion';
import {styles} from '../styles';
import {SectionWrapper } from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';
import {testimonials} from '../constants';

const FeedbacksCard = ({index, testimonial, name, designation, company}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className='bg-nb-bg border-2 border-nb-border shadow-nb-md rounded-none p-8 xs:w-[320px] w-full'
  >
    <p className='font-head text-nb-heading text-[40px] leading-none'>&ldquo;</p>

    <div className='mt-1'>
      <p className='font-sans text-nb-body text-[16px] leading-[1.6]'>{testimonial}</p>
      <div className='mt-6 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='font-sans font-semibold text-nb-heading text-[16px]'>
            {name}
          </p>
          <p className='mt-1 font-sans text-nb-body text-[12px]'>
            {designation} &mdash; {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What others say</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Testimonials</h2>
      </motion.div>

      <div className='mt-16 flex flex-wrap justify-center gap-7'>
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Feedbacks, "", "bg-nb-bg");
