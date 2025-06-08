
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">About</h2>
        <div className="flex flex-col md:flex-row justify-between bg-opacity-60 text-gray-200 p-6 md:p-8 md:p-16 rounded-lg space-y-8 md:space-y-0">

          {/* Left Column */}
          <div className="md:w-1/2 space-y-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 md:p-6">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-500">About Me</h2>

            <div>
              <div className="flex items-center mb-2">
                <IoArrowForward size={20} className="text-blue-400 mr-2" />
                <h2 className="text-lg font-bold text-white">Languages & Frameworks</h2>
              </div>
              <p className="text-base">
                Node.js, NestJS, PostgreSQL, MongoDB, React.js, Express.js, FastAPI, Ubuntu, Tailwind
                CSS, RESTful APIs, React Native, MERN Stack, Redis, Websocket, Microservices, HTML/CSS, JavaScript, SQL, Python, TypeScript

</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <IoArrowForward size={20} className="text-blue-400 mr-2" />
                <h2 className="text-lg font-bold text-white">Tools</h2>
              </div>
              <p className="text-base">MySQL, GitHub/GitLab, MS Office, PostgreSQL, MongoDB, Postman, Thunderclient, Android Studio</p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <IoArrowForward size={20} className="text-blue-400 mr-2" />
                <h2 className="text-lg font-bold text-white">Cloud, CI/CD & DevOps</h2>
              </div>
              <p className="text-base">AWS (EC2, S3, SES, ECR), Docker, Kubernetes, Server side scripting, Jenkins, GitHub Actions, CI/CD Pipelines, PM2, Nginx, Grafana, Prometheus</p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <IoArrowForward size={20} className="text-blue-400 mr-2" />
                <h2 className="text-lg font-bold text-white">Editor Journey</h2>
              </div>
              <p className="text-base">Sublime, VS Code, Vim, Miniconda, Python IDLE</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <IoArrowForward size={20} className="text-blue-400 mr-2" />
                <h2 className="text-lg font-bold text-white">Operating System</h2>
              </div>
              <p className="text-base">Ubuntu, Windows</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <IoArrowForward size={20} className="text-blue-400 mr-2" />
                <h2 className="text-lg font-bold text-white">Experience</h2>
              </div>
              <p className="text-base">
                Total Exp. - 2+ Years<br />
                Current Employer - Software Engineer, Backend Developer, Pune, India
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="mx-0 md:mx-10 md:w-1/2 space-y-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 md:p-6 mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-500">Education</h2>
            <div>
              <p className="text-medium">
                <strong>B.Tech CSE (Computer Science And Engineering)</strong><br />
                RGUKT (IIIT), Srikakulam (2019-2023)
              </p>
              <p className="text-medium mt-4">
                <strong>PUC (Pre University Course)</strong><br />
                RGUKT (IIIT), Srikakulam (2017-2019)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

