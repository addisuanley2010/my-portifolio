import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTelegram,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import React from "react";

const Home = () => {
  const socialLinks = [
    { icon: faLinkedin, url: "https://www.linkedin.com/in/addisu-anley/" },
    { icon: faGithub, url: "https://github.com/addisuanley2010/" },
    { icon: faTelegram, url: "https://t.me/Addis_Anley" },
    { icon: faInstagram, url: "https://www.instagram.com/adda_2025/" },
    { icon: faFacebook, url: "https://web.facebook.com/addisu.anley.739" },
    { icon: faTwitter, url: "https://twitter.com/" },
  ];

  return (
    <div className="flex min-h-screen justify-between px-20 py-20 bg-gray-900">
      <div className="text-white">
        <h1 className="text-2xl font-bold">Hello, I am Addisu Anley</h1>
        <p>Software Engineer</p>
        <p>
          Bachelor's Degree in Software Engineering at Bahir Dar University
          <br />
          Sep 2019 – July 2023
          <br />
          CGPA: 3.82
        </p>
        <a
          href="https://drive.google.com/file/d/1tuUtx3eyTulrXJ7mn5svo0kY95Y6I_bn/view?usp=sharing"
          download
          className="block mt-4 text-blue-600 hover:underline"
        >
          Download CV
        </a>
        <div className="mt-4 flex">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FontAwesomeIcon
                icon={social.icon}
                size="2x"
                className={
                  index % 2 === 0 ? "text-blue-500" : "text-gray-500"
                }
              />
            </a>
          )
          
          )}
        </div>
      </div>
      <div className="p-4">
        <img
          src="/profile.png"
          alt="My Photo"
          className="rounded-full w-80 h-180"
        />
      </div>
    </div>
  );
};

export default Home;