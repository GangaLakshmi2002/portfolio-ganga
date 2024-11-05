

import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import resume from "../../assets/resume-ganga.pdf";
import girlImage from "../../assets/girlcoding.jpg";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between items-center p-6 md:p-10 lg:p-20">
      <div className="md:w-2/4 md:pt-10 space-y-4">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg tracking-tight">
          I am a skilled and self-taught software engineer with a focus on building scalable backend solutions using Node.js, MongoDB, NestJS, MySQL, and experience in designing and developing intuitive, user-friendly interfaces using ReactJS. Proficient in deploying production applications using PM2, AWS, and Docker, ensuring high performance and reliability. I stay current with industry trends to continuously improve platform architecture and development processes.
        </p>
        <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-3">
  <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Contact Me
  </button>
  <a 
    href={resume}
    download
    className="mt-5 md:mt-5 text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-green-500"
  >
    Download Resume
  </a>
</div>

      </div>
      <div className="mt-6 md:mt-0 md:ml-10">
        <img 
          className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover" 
          src={girlImage} 
          alt="A girl coding"
        />
      </div>
    </div>
  );
};

export default Home;
