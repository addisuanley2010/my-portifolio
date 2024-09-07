import React from "react";
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: faLinkedin, url: "https://www.linkedin.com/yourprofile" },
    { icon: faTwitter, url: "https://www.twitter.com/yourhandle" },
    { icon: faGithub, url: "https://www.github.com/yourusername" },
  ];

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <div>&copy; {new Date().getFullYear()} Addisu Anley</div>
          <div>Phone: +251921881486</div>
          <div>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white mx-2"
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-4 underline ">
          <NavLink
            to={"#"}
            className={`hover:text-emerald-500 ${
              !location.hash ? "text-emerald-500 font-bold underline" : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to={"#about"}
            className={`hover:text-emerald-500 ${
              !location.hash ? "text-emerald-500 font-bold underline" : ""
            }`}
          >
            about
          </NavLink>{" "}
          <NavLink
            to={"#skills"}
            className={`hover:text-emerald-500 ${
              !location.hash ? "text-emerald-500 font-bold underline" : ""
            }`}
          >
            skills
          </NavLink>
          <NavLink
            to={"#contact"}
            className={`hover:text-emerald-500 ${
              !location.hash ? "text-emerald-500 font-bold underline" : ""
            }`}
          >
            contact
          </NavLink>{" "}
          <NavLink
            to={"#education"}
            className={`hover:text-emerald-500 ${
              !location.hash ? "text-emerald-500 font-bold underline" : ""
            }`}
          >
            education
          </NavLink>
          <NavLink
            to={"#services"}
            className={`hover:text-emerald-500 ${
              !location.hash ? "text-emerald-500 font-bold underline" : ""
            }`}
          >
            services
          </NavLink>
          <NavLink
            to={"#projects"}
            className={`hover:text-emerald-500 ${
              !location.hash ? "text-emerald-500 font-bold underline" : ""
            }`}
          >
            projects
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
