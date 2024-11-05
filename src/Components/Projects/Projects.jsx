import React from "react";
import ProjectCard from "./ProjectCard";
import lms from "../../assets/lms.png";
import chat from "../../assets/chat.png";
import ecommerce from "../../assets/ecommerce.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Chat-Application"
          main="The chat application was implemented using MERN stack technologies and implemented socket.io for sending messages between contacts."
          projectUrl="https://chat-app-frontend-1-ksl4.onrender.com"
          img={chat}
        />
        <ProjectCard
          title="LMS Application"
          main="The LMS application was implemented using MERN stack technologies which is similar to udemy where instructor can upload courses and students can enroll and watch thecourses. For transaction implemented paypal sandbox account."
          projectUrl="https://lms-frontend-kgpx.onrender.com"
          img={lms}
        />
        <ProjectCard
          title="Ecommerce App"
          main="The Ecommerce application was implemented using MERN stack and it has the feature of admin, student roles so admin will add the courses and students will buy and manage them."
           projectUrl="https://ecommerce-shop-frontend-ue10.onrender.com"
           img={ecommerce}
        />
      </div>
    </div>
  );
};

export default Projects;
