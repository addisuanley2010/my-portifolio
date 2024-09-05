const Skills = () => {
  const skills = [
    { name: "React", percentage: 80 },
    { name: "JavaScript", percentage: 70 },
    { name: "Node.js", percentage: 70 },
    { name: "Express", percentage: 70 },
    { name: "Flutter", percentage: 50 },
    { name: "MongoDB", percentage: 60 },
    { name: "MySQL", percentage: 60 }
    // Add more skills as needed
  ];

  return (
    <div className="min-h-screen bg-slate-900 px-20 py-20 text-white" id="skills">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-semibold">{skill.name}</h2>
              <div className="bg-gray-300 h-4 rounded-lg w-full relative">
                <div
                  className="h-full bg-blue-500 rounded-lg"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
                <span className="absolute right-0 text-white mr-2">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;