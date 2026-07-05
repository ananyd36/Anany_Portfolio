import {motion} from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


const SectionWrapper = (Component, idName, bgClass = "bg-nb-bg") =>
function HOC(){
    return (
      <div className={`${bgClass} border-b-2 border-nb-border relative z-0`}>
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto`}
      >
      <span className='hash-span' id={idName}>
            &nbsp;
          </span>

          <Component/>

      </motion.section>
      </div>
  )}


export default SectionWrapper
