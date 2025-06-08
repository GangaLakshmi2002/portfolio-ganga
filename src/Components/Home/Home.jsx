

import resume from "../../assets/GangaLakshmi_Fullstack.pdf";
import girlImage from "../../assets/girlcoding.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between items-center p-6 md:p-10 lg:p-20">
      <div className="md:w-2/4 md:pt-10 space-y-4">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg tracking-tight">
          Dynamic and results-oriented Software Engineer with over 2 years of experience designing and building scalable,
high-performance applications. Proficient in backend development using Node.js, Express.js, and NestJS, combined
with deep expertise in database management with PostgreSQL and MongoDB. Adept at creating, engaging
frontend experiences with React.js and implementing modern DevOps practices using Docker and AWS. Passionate
about innovative problem-solving and continuously enhancing system performance and architecture to drive
business success.
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
