"use client";

import React from "react";
import SkillDataProvider from "./SkillDataProvider";

const Experience = () => {
  return (
    <div>
      <section className="text-gray-400 bg-[#030014] body-font overflow-hidden">
        <h1 className="text-[50px] text-white font-bold mt-[10px] text-center mb-5">
          Educational History
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            {/* EDUCATION */}
            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Fidélitas University
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  January 2023 - Present
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Engineer Systems Degree
                </h2>
                <p className="leading-relaxed">
                I am currently pursuing a degree in Systems Engineering at Universidad Fidélitas, where I am 
                developing specialized skills in the design, development, and maintenance of computer systems. 
                I have participated in practical projects that have provided me with hands-on experience and 
                opportunities to apply my knowledge in real-world environments.
                </p>
                <a
                  className="text-purple-400 inline-flex items-center mt-4"
                  href="https://www.linkedin.com/school/ufidelitas/"
                  target="_blank"
                >
                  University
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <h1 className="text-[50px] text-white font-bold mt-[3rem] text-center mb-5">
              Work Experience
            </h1>
            {/* WORKS */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Rolosa HyJ S.A
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  May 2024 - October 2024
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Full Stack Web Developer
                </h2>
                <p className="leading-relaxed">
                - Specialist in Website Maintenance and Optimization, Ensuring User Experience across Multiple Devices and Browsers. <br />
                - I am responsible for identifying, investigating, and fixing bugs in the code and in the operation of the company's applications and systems. <br />
                </p>
                <div className="text-purple-400 inline-flex items-center mt-10">
                  Tools
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <div className="mx-10 flex gap-5">
                    <SkillDataProvider
                      src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/html5/html5-original.svg"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/css3/css3-original.svg"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/js.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/php/php-original.svg"
                      width={40}
                      height={40}
                      index={0}
                    />
                    <SkillDataProvider
                      src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/drupal/drupal-original.svg"
                      width={33}
                      height={33}
                      index={0}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Only Dust
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  September 2024 - Present
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Full Stack Web Developer
                </h2>
                <p className="leading-relaxed">
                - I lead the resolution of assigned issues related to the development of applications using React and Next.js.<br />
                - I implement Web3 functionalities, integrating  decentralized features that enhance the functionality of applications.</p>
              <div className="text-purple-400 inline-flex items-center mt-10">
                  Tools
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <div className="mx-10 flex gap-5">
                    <SkillDataProvider
                      src="/react.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/next-js.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/tailwind.png"
                      width={35}
                      height={35}
                      index={0}
                    />
              
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
