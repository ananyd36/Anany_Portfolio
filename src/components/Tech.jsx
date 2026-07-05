import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6'>
      {technologies.map((technology) => (
        <div
          className='flex flex-col items-center gap-3 w-24'
          key={technology.name}
        >
          <div className='w-16 h-16 flex items-center justify-center bg-nb-bg border-2 border-nb-border shadow-nb-sm rounded-none transition-all duration-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-nb-md'>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-8 h-8 object-contain'
            />
          </div>
          <p className='font-sans text-[12px] font-semibold text-nb-heading text-center'>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "", "bg-nb-bg");
