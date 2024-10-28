import {  useSelector } from "react-redux";
import { RootState } from "../../store";
// import React from "react";

const Skills = () => {

  const skills = useSelector((state: RootState) => state.skill);
  return (
    <div
      className="min-h-screen bg-slate-900 px-20 py-20 text-white"
      id="skills"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <div className="grid grid-cols-2 gap-4">
          {skills?.skillData.length > 0 ? (
            skills?.skillData.map((skill: any, index: any) => (
              <div key={index} className="mb-4">
                <h2 className="text-lg font-semibold">{skill.skill_name}</h2>
                <div className="bg-gray-300 h-4 rounded-lg w-full relative">
                  <div
                    className="h-full bg-blue-500 rounded-lg"
                    style={{ width: `${skill.skill_percent}%` }}
                  ></div>
                  <span className="absolute right-0 text-white mr-2">
                    {skill.skill_percent}%
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h2>No Skill Found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
