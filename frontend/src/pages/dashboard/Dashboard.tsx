import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTelegram,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface SocialLink {
  icon: any;
  url: string;
}

const Dashboard: React.FC = () => {
  const [name, setName] = useState("Addisu Anley");
  const [about, setAbout] = useState(
    "I am Addisu Anley, a passionate Software Engineer with a Bachelor's Degree in Software Engineering from Bahir Dar University. I have a strong interest in web development, AI, and open-source projects.My skills include JavaScript, React, Node.js, and more. I love building innovative solutions and contributing to the tech community."
  );
  const [title, setTitle] = useState("Software Engineer");
  const [education, setEducation] = useState(
    "Bachelor's Degree in Software Engineering at Bahir Dar University"
  );
  const [graduationDate, setGraduationDate] = useState("Sep 2019 – July 2023");
  const [cgpa, setCgpa] = useState("3.82");
  const [profileImage, setProfileImage] = useState("/profile.png");
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { icon: faLinkedin, url: "https://www.linkedin.com/" },
    { icon: faGithub, url: "https://github.com/" },
    { icon: faTelegram, url: "https://telegram.org/" },
    { icon: faInstagram, url: "https://www.instagram.com/" },
    { icon: faFacebook, url: "https://www.facebook.com/" },
    { icon: faTwitter, url: "https://twitter.com/" },
  ]);

  const handleSocialLinkChange = (index: number, newUrl: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index].url = newUrl;
    setSocialLinks(updatedLinks);
  };

  return (
    <div className="bg-gray-800 min-h-screen p-8 text-white">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>

      <div className="bg-gray-700 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded bg-gray-600"
            />
          </div>
          <div>
            <label className="block mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded bg-gray-600"
            />
          </div>
          <div>
            <label className="block mb-2">Education:</label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-2 border rounded bg-gray-600"
            />
          </div>
          <div>
            <label className="block mb-2">Graduation Date:</label>
            <input
              type="text"
              value={graduationDate}
              onChange={(e) => setGraduationDate(e.target.value)}
              className="w-full p-2 border rounded bg-gray-600"
            />
          </div>
          <div>
            <label className="block mb-2">CGPA:</label>
            <input
              type="text"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              className="w-full p-2 border rounded bg-gray-600"
            />
          </div>
          <div>
            <label className="block mb-2">Profile Image URL:</label>
            <input
              type="text"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
              className="w-full p-2 border rounded bg-gray-600"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">About me:</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full p-2 border rounded bg-gray-600"
            rows={3}
            placeholder="Type here about you..."
          ></textarea>
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Social Links</h2>
        {socialLinks.map((link, index) => (
          <div key={index} className="flex items-center mb-4">
            <FontAwesomeIcon icon={link.icon} size="2x" className="mr-4" />
            <input
              type="text"
              value={link.url}
              onChange={(e) => handleSocialLinkChange(index, e.target.value)}
              className="flex-grow p-2 border rounded bg-gray-600"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
