import { useSelector } from "react-redux";
import { RootState } from "../../store";
// import React from "react";

const Projects = () => {


  const projects = useSelector((state: RootState) => state.project);


  

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20" id="projects">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
        <div className="grid gap-6">
          {projects.projectData.map((project:any) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{project.project_name}</h2>
              <p className="text-sm text-gray-300 mb-2">{project.project_desc}</p>
              <ul className="flex flex-wrap">
                {project.tags.map((tag:any, index:any) => (
                  <li key={index} className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-md mr-2 mb-2">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;