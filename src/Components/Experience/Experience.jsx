import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-10 mx-0 md:mx-20">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNqB9Y9fBHxJKflwdjliy2tqb9sDURiEaRloqgz=s1360-w1360-h1020"
            alt="Roxiler Systems"
            className="w-25 h-24 object-cover md:w-22 md:h-20"
          />
          <span className="text-white text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold mb-1">
              Software Engineer, Roxiler Systems
            </h1>
            <p className="text-md leading-tight font-semibold">
              July 2023 - Present
            </p>
            <div className="flex items-start gap-4 mt-3">
              <div className="mt-2 mx-5 w-1 bg-gray-100 h-80 md:h-40"></div>
              <ul className="space-y-2 text-sm md:text-md leading-tight text-gray-200 list-disc list-outside">
                <li className="leading-relaxed">
                  Acquired hands-on experience with AWS, Docker, Kubernetes, and CI/CD pipelines.
                </li>
                <li className="leading-relaxed">
                  Configured Grafana for system monitoring, implemented Redmine for project management, and streamlined deployment through automation with Jenkins.
                </li>
                <li className="leading-relaxed">
                  Contributed to various products within a patient records project using the MERN stack, deploying seamlessly on AWS services including EC2, S3, SES, and ECR.
                </li>
                <li className="leading-relaxed">
                  Developed AWS Lambda scripts to identify and manage unused resources within AWS accounts.
                </li>
                <li className="leading-relaxed">
                  Engaged in data science tasks, including parsing .eml files to extract and analyze relevant information with the help of data models in Python.
                </li>
              </ul>
            </div>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNqB9Y9fBHxJKflwdjliy2tqb9sDURiEaRloqgz=s1360-w1360-h1020"
            alt="Roxiler Systems Trainee"
            className="w-25 h-24 object-cover md:w-22 md:h-20"
          />
          <span className="text-white text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold mb-1">
              Software Engineer Trainee, Roxiler Systems
            </h1>
            <p className="text-md leading-tight font-semibold">
              Dec 2022 - July 2023
            </p>
            <div className="flex items-start gap-4 mt-3">
              <div className="mt-2 mx-5 w-1 bg-gray-100 h-40 md:h-24"></div>
              <ul className="space-y-2 text-sm md:text-md leading-tight text-gray-200 list-disc list-outside">
                <li className="leading-relaxed">
                  Contributed to backend development by implementing key modules, including customers, resources, departments, and billing in an employee management project.
                </li>
                <li className="leading-relaxed">
                  Developed robust APIs using NestJS and PostgreSQL, implemented migrations for better optimization, and deployed the backend efficiently on AWS EC2 using PM2 and NGINX.
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;



















// mobile responsive
// import React from "react";
// import { IoArrowForward } from "react-icons/io5";

// const Experience = () => {
//   return (
//     <div id="Experience" className="p-10 md:p-14 mx-0 md:mx-20">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
//  <div>
//  <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-6 rounded-lg p-4 items-center ">
   
//  <img src="https:lh3.googleusercontent.com/p/AF1QipNqB9Y9fBHxJKflwdjliy2tqb9sDURiEaRloqgz=s1360-w1360-h1020" className="mx-0 md:mx-20" height={120} width={120} />
//    <span className="text-white">
//      <h1 className="text-2xl font-bold mb-1">Software Engineer , Roxiler Systems</h1>
//      <p className="text-md leading-tight font-semibold">
//        July 2023 - Present
//      </p>
//      <div className="flex items-start gap-4 mt-3">
//       <div className="mt-5 mx-5 w-1 bg-gray-100 h-40"></div>
//       <ul className="space-y-2 text-sm md:text-md leading-tight text-gray-200 list-disc list-outside">
      
//         <li className="leading-relaxed">Acquired hands-on experience with AWS, Docker, Kubernetes, and CI/CD pipelines.</li>
//         <li className="leading-relaxed">Configured Grafana for system monitoring, implemented Redmine for project management, and streamlined deployment through automation with Jenkins.</li>
//         <li className="leading-relaxed">Contributed to various products within a patient records project using the MERN stack, deploying seamlessly on AWS services including EC2, S3, SES, and ECR.</li>
//         <li className="leading-relaxed">Developed AWS Lambda scripts to identify and manage unused resources within AWS accounts.</li>
//         <li className="leading-relaxed">Engaged in data science tasks, including parsing .eml files to extract and analyze relevant information with the help of data models in python.</li>
        
//       </ul>
//     </div>
//    </span>
//  </div>
//  <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
//    <img src="https:lh3.googleusercontent.com/p/AF1QipNqB9Y9fBHxJKflwdjliy2tqb9sDURiEaRloqgz=s1360-w1360-h1020" height={120} width={120} className="mx-0 md:mx-20" />
//    <span className="text-white">
//      <h1 className="text-2xl font-bold mb-1">Software Engineer Trainee , Roxiler Systems</h1>
//      <p className="text-md leading-tight font-semibold">
//        Dec 2022 - July 2023
//      </p>
//      <div className="flex items-start gap-4 mt-3">
//       <div className=" mt-2 mx-5 w-1 bg-gray-100 h-20"></div>
//       <ul className="space-y-2 text-sm md:text-md leading-tight text-gray-200 list-disc list-outside">
//         <li className="leading-relaxed">Contributed to backend development by implementing key modules, including customers, resources, departments, and billing in a employee management project.</li>
//         <li className="leading-relaxed">Developed robust APIs using NestJS and PostgreSQL , implemented migrations for better  optimization and deployed the backend efficiently on AWS EC2 using PM2 ,nginx .</li>
//       </ul>
//     </div>
//    </span>
//  </div>

//  </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Experience;
