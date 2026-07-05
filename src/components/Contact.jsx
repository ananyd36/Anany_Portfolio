import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const inputClass =
  "bg-nb-bg py-2.5 px-3 placeholder:text-nb-body text-nb-heading border-2 border-nb-border shadow-nb-xs outline-none rounded-none font-sans text-[14px] transition-all duration-150 focus:shadow-nb-sm";

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
      className={`xl:mt-16 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] bg-nb-bg border-2 border-nb-border shadow-nb-md rounded-none p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-6'
        >
          <label className='flex flex-col' htmlFor='contact-name'>
            <span className='font-sans font-semibold text-nb-heading text-[14px] mb-2'>Your Name</span>
            <input
              id='contact-name'
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={inputClass}
            />
          </label>
          <label className='flex flex-col' htmlFor='contact-email'>
            <span className='font-sans font-semibold text-nb-heading text-[14px] mb-2'>Your email</span>
            <input
              id='contact-email'
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={inputClass}
            />
          </label>
          <label className='flex flex-col' htmlFor='contact-message'>
            <span className='font-sans font-semibold text-nb-heading text-[14px] mb-2'>Your Message</span>
            <textarea
              id='contact-message'
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={inputClass}
            />
          </label>

          <button
            type="submit"
            className="font-sans font-semibold text-[14px] text-nb-heading bg-nb-brand border-2 border-nb-border shadow-nb-sm px-6 py-2.5 w-fit rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          </form>
      </motion.div>

    </div>

    <div className='mt-10 flex justify-center items-center gap-8'>
        <a
          href='https://www.linkedin.com/in/ananyd36/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-sans font-semibold text-nb-heading text-[14px] hover:underline underline-offset-4 decoration-2 decoration-nb-brand-strong'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/ananyd36'
          target='_blank'
          rel='noopener noreferrer'
          className='font-sans font-semibold text-nb-heading text-[14px] hover:underline underline-offset-4 decoration-2 decoration-nb-brand-strong'
        >
          GitHub
        </a>
        <a
          href='https://www.instagram.com/anany__36/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-sans font-semibold text-nb-heading text-[14px] hover:underline underline-offset-4 decoration-2 decoration-nb-brand-strong'
        >
          Instagram
        </a>
      </div>


    </>
  )


}

export default SectionWrapper(Contact, "contact", "bg-nb-bg-alt");
