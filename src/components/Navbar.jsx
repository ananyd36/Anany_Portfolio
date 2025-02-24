import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";

import sdeResume from '../resume/Anany_Resume.pdf';
import uxResume from '../resume/Cover_Letter_Anany_Sharma.pdf';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
      if (!event.target.closest('.menu-toggle') && !event.target.closest('.mobile-menu')) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResumeDownload = (resumeType) => {
    let resumeUrl = '';
    let filename = '';
    if (resumeType === 'ai') {
      resumeUrl = sdeResume;
      filename = 'Anany_Resume.pdf';  // Proper filename
    } else if (resumeType === 'cv') {
      resumeUrl = uxResume;
      filename = 'Cover_Letter_Anany_Sharma.pdf';  // Proper filename
    }
  
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute('download', filename);  // Use the proper filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };
  

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Anany Sharma &nbsp;
            <span className='sm:block hidden'> | Portfolio </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`${active === "Resume" ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setShowModal(true)}
          >
            Resume
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className='sm:hidden flex items-center menu-toggle'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu Dropdown */}
        {toggle && (
          <div
            className='black-gradient absolute top-full right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl p-6 flex flex-col gap-4 items-start mobile-menu'
            style={{ position: 'absolute' }}
          >
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`text-[16px] ${active === nav.title ? "text-white" : "text-secondary"} font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                {nav.title}
              </a>
            ))}
            <span
              className={`text-[16px] ${active === "Resume" ? "text-white" : "text-secondary"} font-medium cursor-pointer`}
              onClick={() => {
                setToggle(false);
                setShowModal(true);
              }}
            >
              Resume
            </span>
          </div>
        )}

        {/* Modal for selecting resume type to download */}
        {showModal && (
          <div ref={modalRef} style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.85)',
            padding: '20px',
            borderRadius: '10px',
            zIndex: 1000
          }}>
            <button onClick={() => handleResumeDownload('ai')} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}>Download Resume</button>
            <button onClick={() => handleResumeDownload('cv')} style={{ display: 'block', width: '100%', padding: '10px', cursor: 'pointer' }}>Download Cover Letter</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
