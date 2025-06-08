
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    // <div
    //   id="Footer"
    //   className="flex flex-col md:flex-row justify-between bg-[#465697] text-white p-6 md:p-10 items-center"
    // >
    //   <div className="mb-6 md:mb-0">
    //     <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
    //     <h3 className="text-sm md:text-lg font-normal">
    //       Feel free to reach out!
    //     </h3>
    //   </div>

    //   <ul className="text-sm md:text-lg space-y-2 md:space-y-0 md:flex md:gap-4">
    //     <li className="flex gap-2 items-center">
    //       <MdOutlineEmail size={20} />
    //       gangalakshmi.mudda2002@gmail.com
    //     </li>
    //     <li className="flex gap-2 items-center">
    //       <CiLinkedin size={20} />
    //       <a
    //         href="https://www.linkedin.com/in/ganga-lakshmi-mudda-450b08197"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="hover:underline"
    //       >
    //         www.linkedin.com/in/ganga-lakshmi-mudda-450b08197
    //       </a>
    //     </li>
    //     <li className="flex gap-2 items-center">
    //       <FaGithub size={20} />
    //       <a
    //         href="https://github.com/GangaLakshmi2002/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="hover:underline"
    //       >
    //         https://github.com/GangaLakshmi2002/
    //       </a>
    //     </li>
    //     <li className="flex gap-2 items-center">
    //       <MdOutlineEmail size={20} />
    //       alternate.email@example.com
    //     </li>
    //     <li className="flex gap-2 items-center">
    //       <FaPhoneAlt size={18} />
    //       +91 98765 43210
    //     </li>
    //     <li className="flex gap-2 items-center">
    //       <FaWhatsapp size={20} />
    //       <a
    //         href="https://wa.me/919876543210"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="hover:underline"
    //       >
    //         Chat on WhatsApp
    //       </a>
    //     </li>
    //   </ul>

    // </div>

     <div
      id="Footer"
      className="bg-[#465697] text-white p-6 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Contact Title */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-lg font-normal mt-2">
            Feel free to reach out!
          </h3>
        </div>

        {/* Emails and Phone */}
        <ul className="text-sm md:text-lg space-y-3">
          <li className="flex gap-2 items-center">
            <MdOutlineEmail size={20} />
            gangalakshmi.mudda2002@gmail.com
          </li>
          <li className="flex gap-2 items-center">
            <MdOutlineEmail size={20} />
            gangajyothi333@gmail.com
          </li>
          <li className="flex gap-2 items-center">
            <FaPhoneAlt size={18} />
            +91 6301272770
          </li>
        </ul>

        {/* Social Links */}
        <ul className="text-sm md:text-lg space-y-3">
          <li className="flex gap-2 items-center">
            <FaWhatsapp size={20} />
            <a
              href="https://wa.me/6301272770"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Chat on WhatsApp
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <CiLinkedin size={20} />
            <a
              href="https://www.linkedin.com/in/ganga-lakshmi-mudda-450b08197"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
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
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
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
