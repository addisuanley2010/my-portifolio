import React, { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "Mobile App Development",
      description: "Designing and building mobile applications for iOS and Android platforms.",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Creating interactive and user-friendly interfaces using modern frontend technologies like React and Vue.",
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Building robust and scalable backend systems using technologies such as Node.js, Express, and MongoDB.",
    },
  ]);

  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    title: '',
    description: '',
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewService(prev => ({ ...prev, [name]: value }));
  };

  const addService = () => {
    if (newService.title && newService.description) {
      setServices(prev => [...prev, { ...newService, id: Date.now() }]);
      setNewService({ title: '', description: '' });
    }
  };

  const startEditing = (service: Service) => {
    setEditingId(service.id);
    setNewService(service);
  };

  const updateService = () => {
    if (editingId !== null) {
      setServices(prev => prev.map(s => s.id === editingId ? { ...newService, id: s.id } : s));
      setEditingId(null);
      setNewService({ title: '', description: '' });
    }
  };

  const deleteService = (id: number) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col justify-center items-center" id="services">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Services</h1>

        <div className="mb-8 bg-gray-700 p-6 rounded-md">
          <input
            type="text"
            name="title"
            value={newService.title}
            onChange={handleInputChange}
            placeholder="Service Title"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <textarea
            name="description"
            value={newService.description}
            onChange={handleInputChange}
            placeholder="Service Description"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <button
            onClick={editingId !== null ? updateService : addService}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            {editingId !== null ? 'Update Service' : 'Add Service'}
          </button>
        </div>

        <div className="grid gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-700 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{service.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{service.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => startEditing(service)}
                  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteService(service.id)}
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

export default Services;
