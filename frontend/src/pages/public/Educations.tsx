const Educations = () => {
  const educations = [
    {
      id: 1,
      institution: "Bahir Dar University",
      degree: "Bachelor of Degree in Software Engineering",
      year: "2019 - 2023",
      location: "Bahir Dar ",
      description: "Studied various aspects of Software Engineering including algorithms, data structures, and software development.",
    },
    {
      id: 2,
      institution: "Denbecha Secondary and Preparatory School",
      degree: "Grade 11 and 12",
      year: "2017 - 2018",
      location: "Denbecha",
      description: "Focused on business administration topics such as accounting, marketing, and management.",
    },
    {
      id: 3,
      institution: "Teame Secondary School",
      degree: "Grade 9 and 10",
      year: "2015 - 2016",
      location: "Dega Damot",
      description: "Gained valuable life lessons through hands-on experiences and challenges in the real world.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-800 px-6 py-20" id="educations">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((education) => (
            <div key={education.id} className="bg-gray-800 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{education.institution}</h2>
              <p className="text-lg text-white mb-1">{education.degree}</p>
              <p className="text-gray-400 mb-2">{education.year} - {education.location}</p>
              <p className="text-sm text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo itaque, esse dicta dolores, hic doloremque fugiat quisquam natus et ipsum facilis exercitationem ducimus expedita perspiciatis beatae ipsa repudiandae, excepturi odio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptatem consequuntur fugit deleniti nulla dolore mollitia delectus eum harum ratione hic ea ab inventore eveniet aperiam omnis, quo, rerum voluptate?</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;