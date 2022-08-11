import React from "react";
import { Slide } from "react-awesome-reveal";

const HeaderWork = ({ children, isRed }) => {
  return (
    <section className="pt-16">
      <div className="w-full mx-auto max-w-7xl relative px-4">
        <Slide direction='up' triggerOnce>
          <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] lg:h-[780px] text-3xl sm:text-6xl lg:text-[80px]">
            <div className="custom__font1 relative">
              <span
                className={`relative mr-2 text-transparent stroke__font
                              before:absolute before:w-[16px] 
                              before:h-[16px] before:top-1 before:-left-2 sm:before:top-0 sm:before:-left-7
                              lg:before:-left-6 lg:before:top-3 sm:before:w-[42px] sm:before:h-[42px] before:bg-[${
                                isRed ? "#D4304B" : "#787777"
                              }]
                              before:z-[-1]`}
              >
                Our
              </span>
              <span>Project</span>
            </div>
            <div className="w-10 mt-1 mb-4 bg-black h-1"></div>
            <div>
              <p className="custom__font2 text-xl">
                Some of the projects we've done
              </p>
            </div>
          </div>
        </Slide>
        {children}
      </div>
    </section>
  );
};

export default HeaderWork;
