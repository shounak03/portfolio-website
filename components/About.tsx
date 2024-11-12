import React from 'react';

import { FaUserGraduate, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import {BackgroundGradient} from './ui/background-gradient';


const AboutSection = () => {
  return (
    <BackgroundGradient
      className="py-20 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaUserGraduate className="text-4xl mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p>
              I hold a Bachelor's degree in Computer Science from a top-ranked
              university, where I honed my technical skills and gained a deep
              understanding of computer systems and software development.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaLaptopCode className="text-4xl mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
            <p>
              With several years of experience in the industry, I have developed
              expertise in a wide range of technologies, including JavaScript,
              React, Node.js, and more. I'm constantly learning and staying
              up-to-date with the latest advancements in the field.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaChartLine className="text-4xl mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p>
              I have a proven track record of delivering successful projects for
              a diverse range of clients. My experience spans various industries,
              allowing me to bring a unique perspective to every challenge.
            </p>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default AboutSection;