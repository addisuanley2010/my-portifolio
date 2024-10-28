// import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen bg-slate-800 px-20 py-20 text-white flex "
      id="about"
    >
      <div className="p-4 text-center">
        <img
          src="/profile.png"
          alt="My Photo"
          className="rounded-full w-80 h-180 mx-auto"
        />
      </div>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I am Addisu Anley, a passionate Software Engineer with a Bachelor's
          Degree in Software Engineering from Bahir Dar University. I have a
          strong interest in web development, AI, and open-source projects.
        </p>
        <p className="mb-4">
          My skills include JavaScript, React, Node.js, and more. I love
          building innovative solutions and contributing to the tech community.
        </p>
      </div>
    </div>
  );
};

export default About;
