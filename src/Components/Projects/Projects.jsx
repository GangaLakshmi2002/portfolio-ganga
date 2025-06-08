import chat from "../../assets/chat.png";
import ecommerce from "../../assets/ecommerce.png";
import inmed from "../../assets/inmed.png";

import chatbot from "../../assets/chatbot.png";
import rp from "../../assets/rp.png";

import lms from "../../assets/lms.png";
import ProjectCard from "./ProjectCard";

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
        <ProjectCard
          title="Resource Planner"
          main="It was a company project, Contributed to backend development by designing and enhancing modules for customer management,
          skills, resources, departments, designations, activity tracking, and billing systems. Implemented features in the resources module for bill revision,
          resource history management, and retrieval of resource profiles, as well as managing reporting manager assignments."
           projectUrl="https://workforce.roxiler.com/"
           img={rp}
        />
        <ProjectCard
          title="Inmed"
          main="It was a company project, Worked as part of the backend team on various InMed products. Implemented user registration features,
          including email verification, onboarding emails, and dual verification using AWS SES.Added features such as subscription trial expiration notifications, utilizing cron jobs for 24/7 monitoring.
          Developed product templates incorporating file download functionality and zip uploads to enhance user experience."
           projectUrl="https://volumetry.studio.inmed.ai/"
           img={inmed}
        />
        <ProjectCard
          title="VAPT-GenAI Chatbot"
          main="It was a company project, Developed FastAPI-based APIs with integrated WebSocket communication to invoke security
          tools—nmap, ferox,owaspzap, and sqlmap—triggered by an LLM based on detected vulnerable endpoints and utilized Mongodb
           for database management."
           projectUrl=""
           img={chatbot}
        />
      </div>
    </div>
  );
};

export default Projects;
