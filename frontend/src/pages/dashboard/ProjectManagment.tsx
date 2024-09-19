import React, { useState } from "react";
import { IProject } from "../../types/user.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const ProjectManagment: React.FC = () => {

  const projects = useSelector((state: RootState) => state.project);
  const [newProject, setNewProject] = useState<Omit<IProject, "_id">>({
    project_name: "",
    project_desc: "",
    tags: [],
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const dispatch = useDispatch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setNewProject((prev) => ({ ...prev, tags }));
  };

  const addProject = () => {
    if (newProject.project_name && newProject.project_desc) { 
       dispatch({ type: "ADD_PROJECT", payload: newProject });
           setNewProject({ project_name: "", project_desc: "", tags: [] });

    }
  };

  const startEditing = (project: IProject) => {
    setEditingId(project._id);
    setNewProject(project);
  };

  const updateProject = () => {
    if (editingId !== null) {
      dispatch({type:'UPDATE_PROJECT',payload:newProject})
      setEditingId(null);
      setNewProject({ project_name: "", project_desc: "", tags: [] });
    }
  };

  const deleteProject = (id: number) => {
dispatch({type:'DELETE_PROJECT',payload:id})  };

  return (
    <div className="min-h-screen bg-slate-800 px-6 py-20" id="projects">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold text-white mb-8">Projects</h1>

        <div className="mb-8 bg-gray-700 p-6 rounded-md">
          <input
            type="text"
            name="project_name"
            value={newProject.project_name}
            onChange={handleInputChange}
            placeholder="Project project_name"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <textarea
            name="project_desc"
            value={newProject.project_desc}
            onChange={handleInputChange}
            placeholder="Project project_desc"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <input
            type="text"
            name="tags"
            value={newProject.tags.join(", ")}
            onChange={handleTagsChange}
            placeholder="Tags (comma-separated)"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <button
            onClick={editingId !== null ? updateProject : addProject}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            {editingId !== null ? "Update Project" : "Add Project"}
          </button>
        </div>

        <div className="grid gap-6">
          {projects.projectData.map((project) => (
            <div
              key={project._id}
              className="bg-gray-700 p-6 rounded-md shadow-md"
            >
              <h2 className="text-xl font-bold text-indigo-400 mb-2">
                {project.project_name}
              </h2>
              <p className="text-sm text-gray-300 mb-2">
                {project.project_desc}
              </p>
              <ul className="flex flex-wrap mb-4">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-md mr-2 mb-2"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end">
                <button
                  onClick={() => startEditing(project)}
                  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProject(project._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagment;
