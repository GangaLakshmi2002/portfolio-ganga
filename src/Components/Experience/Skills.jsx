import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3, FaGitSquare, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { SiDjango, SiDocker, SiExpress, SiKubernetes, SiMongodb, SiNestjs, SiPython, SiTailwindcss } from "react-icons/si";

const languages = [
  { name: "English", level: 5 },
  { name: "Hindi", level: 4 },
  { name: "Telugu", level: 5 },
];

const Skills = () => {
  const getWidth = (level) => `${(level / 5) * 100}%`;
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">HTML</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">CSS</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">React</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Java Script
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiMongodb color="#47A248" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              MongoDB
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiExpress color="#FF4438" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">Expressjs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <BiLogoPostgresql color="#1572B6" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Postgresql
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiNestjs color="red" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Nest Js
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiDjango color="#61DAFB" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Django
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiKubernetes color="blue" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Kubernetes
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiPython color="yellow" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Python
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiTailwindcss color="#61DAFB" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Tailwind Css
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <SiDocker color="blue" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">
              Docker
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <FaAws color="orange" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <FaNode color="#61DAFB" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">Nodejs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-1">
              <FaGitSquare color="gray" size={50} />
            </span>
            <span className="text-md text-white font-semibold mb-2">Git</span>
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold text-2xl mb-6">Languages</h1>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
            <div className="w-72 p-6  bg-opacity-45 rounded-lg shadow-lg">
              {languages.map((language) => (
                <div key={language.name} className="mb-4">
                  <h4 className=" font-semibold mb-2 text-white">
                    {language.name}
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: getWidth(language.level) }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
