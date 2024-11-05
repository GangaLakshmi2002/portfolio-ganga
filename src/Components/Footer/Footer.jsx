
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between bg-[#465697] text-white p-6 md:p-10 items-center"
    >
      <div className="mb-6 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-lg font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-2 md:space-y-0 md:flex md:gap-4">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          gangalakshmi.mudda2002@gmail.com
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/ganga-lakshmi-mudda-450b08197"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            www.linkedin.com/in/ganga-lakshmi-mudda-450b08197
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/GangaLakshmi2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://github.com/GangaLakshmi2002/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;























// not responsive
// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
//     >
//       <div>
//         <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
//         <h3 className="text-sm md:text-2xl font-normal">
//           Feel Free To reach out!
//         </h3>
//       </div>

//       <ul className="text-sm md:text-xl">
//         <li className="flex gap-1 items-center">
//           <MdOutlineEmail size={20} />
//           gangalakshmi.mudda2002@gmail.com
//         </li>
//         <li className="flex gap-1 items-center">
//           <CiLinkedin />
//           <a href="www.linkedin.com/in/ganga-lakshmi-mudda-450b08197" target="_blank" 
//     rel="noopener noreferrer" >www.linkedin.com/in/ganga-lakshmi-mudda-450b08197</a>
          
//         </li>
//         <li className="flex gap-1 items-center">
//           <FaGithub />
//           <a href="https://github.com/GangaLakshmi2002/" target="_blank" 
//     rel="noopener noreferrer">https://github.com/GangaLakshmi2002/</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;
