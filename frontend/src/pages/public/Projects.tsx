const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "Developed a fully functional e-commerce website with payment gateway integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Built a task management application for organizing daily tasks and schedules.",
      tags: ["Vue", "Firebase", "Bootstrap"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Designed and implemented a personal portfolio website to showcase projects and skills.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20" id="projects">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{project.title}</h2>
              <p className="text-sm text-gray-300 mb-2">{project.description}</p>
              <ul className="flex flex-wrap">
                {project.tags.map((tag, index) => (
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