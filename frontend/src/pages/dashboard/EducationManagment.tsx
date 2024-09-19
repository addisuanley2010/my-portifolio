import React, { useState } from 'react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
  location: string;
  description: string;
}

const Educations: React.FC = () => {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: 1,
      institution: "Bahir Dar University",
      degree: "Bachelor of Degree in Software Engineering",
      year: "2019 - 2023",
      location: "Bahir Dar",
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
  ]);

  const [newEducation, setNewEducation] = useState<Omit<Education, 'id'>>({
    institution: '',
    degree: '',
    year: '',
    location: '',
    description: '',
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEducation(prev => ({ ...prev, [name]: value }));
  };

  const addEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setEducations(prev => [...prev, { ...newEducation, id: Date.now() }]);
      setNewEducation({ institution: '', degree: '', year: '', location: '', description: '' });
    }
  };

  const startEditing = (education: Education) => {
    setEditingId(education.id);
    setNewEducation(education);
  };

  const updateEducation = () => {
    if (editingId !== null) {
      setEducations(prev => prev.map(e => e.id === editingId ? { ...newEducation, id: e.id } : e));
      setEditingId(null);
      setNewEducation({ institution: '', degree: '', year: '', location: '', description: '' });
    }
  };

  const deleteEducation = (id: number) => {
    setEducations(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-800 px-6 py-20" id="educations">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Education</h1>

        <div className="mb-8 bg-gray-700 p-6 rounded-md">
          <input
            type="text"
            name="institution"
            value={newEducation.institution}
            onChange={handleInputChange}
            placeholder="Institution"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <input
            type="text"
            name="degree"
            value={newEducation.degree}
            onChange={handleInputChange}
            placeholder="Degree"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <input
            type="text"
            name="year"
            value={newEducation.year}
            onChange={handleInputChange}
            placeholder="Year"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <input
            type="text"
            name="location"
            value={newEducation.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <textarea
            name="description"
            value={newEducation.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <button
            onClick={editingId !== null ? updateEducation : addEducation}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            {editingId !== null ? 'Update Education' : 'Add Education'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((education) => (
            <div key={education.id} className="bg-gray-800 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{education.institution}</h2>
              <p className="text-lg text-white mb-1">{education.degree}</p>
              <p className="text-gray-400 mb-2">{education.year} - {education.location}</p>
              <p className="text-sm text-gray-300 mb-4">{education.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => startEditing(education)}
                  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEducation(education.id)}
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

export default Educations;

