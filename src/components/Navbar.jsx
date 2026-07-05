import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

import sdeResume from '../resume/Anany_Resume.pdf';
import uxResume from '../resume/Cover_Letter_Anany_Sharma.pdf';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
      if (!event.target.closest('.menu-toggle') && !event.target.closest('.mobile-menu')) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
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
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-nb-bg border-b-2 border-nb-border`}
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
          <p className='font-head text-nb-heading text-[16px] sm:text-[18px] cursor-pointer flex items-center'>
            Anany Sharma
            <span className='sm:block hidden font-sans font-normal text-nb-body text-[16px] ml-2'>| Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row items-center gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-sans font-semibold text-[16px] text-nb-heading cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-nb-brand-strong`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setShowModal(true)}
              className='font-sans font-semibold text-[14px] text-nb-heading bg-nb-brand border-2 border-nb-border shadow-nb-sm px-4 py-2 rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs'
            >
              Resume
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          aria-label={toggle ? 'Close menu' : 'Open menu'}
          className='sm:hidden flex items-center justify-center w-10 h-10 border-2 border-nb-border bg-nb-bg shadow-nb-xs rounded-none menu-toggle'
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L17 17M17 1L1 17" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H20M0 7H20M0 13H20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {toggle && (
          <div
            className='bg-nb-bg border-2 border-nb-border shadow-nb-lg absolute top-full right-0 mx-4 my-2 min-w-[160px] z-10 p-6 flex flex-col gap-4 items-start mobile-menu rounded-none'
          >
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`font-sans text-[16px] font-semibold text-nb-heading cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-nb-brand-strong`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                {nav.title}
              </a>
            ))}
            <span
              className={`font-sans text-[16px] font-semibold text-nb-heading cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-nb-brand-strong`}
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
          <div
            ref={modalRef}
            className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nb-bg border-2 border-nb-border shadow-nb-xl p-6 z-[1000] rounded-none flex flex-col gap-3 min-w-[260px]'
          >
            <button
              onClick={() => handleResumeDownload('ai')}
              className='w-full font-sans font-semibold text-[14px] text-nb-heading bg-nb-brand border-2 border-nb-border shadow-nb-sm px-4 py-2.5 rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs'
            >
              Download Resume
            </button>
            <button
              onClick={() => handleResumeDownload('cv')}
              className='w-full font-sans font-semibold text-[14px] text-nb-heading bg-nb-bg border-2 border-nb-border shadow-nb-sm px-4 py-2.5 rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-2xs'
            >
              Download Cover Letter
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
