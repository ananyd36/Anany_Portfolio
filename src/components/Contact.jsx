import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//kD1mzkMap1TWnAguA
//template_pzobgue
//service_zwki09q

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_zwki09q',
    'template_pzobgue',
    {
      from_name: form.name,
      to_name: 'Anany',
      from_email: form.email,
      to_email:'ananyd36.ms@gmail.com',
      message: form.message,
    }
    ,'kD1mzkMap1TWnAguA'
  )
    .then(()=>{
      setLoading(false);
      alert('Thankyou for your message. I will get back to you soon!');

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }

    , (error) => {
      setLoading(false) 

      console.log(error.text);

      alert('Something went wrong. Please try again later!');
    }
  
  )

  }



  return (
    <>
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}

          </button>

          </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    
    <br/>

    {/* At the end */}
    <div className='text-center text-white font-medium'>
        <a
          href='https://www.linkedin.com/in/ananyd36/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:underline mx-4'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/ananyd36'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:underline mx-4'
        >
          GitHub
        </a>
        <a
          href='https://www.instagram.com/anany__36/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:underline mx-4'
        >
          Instagram
        </a>
      </div>

    
    </>
  )
  
  
}

export default SectionWrapper(Contact, "contact");