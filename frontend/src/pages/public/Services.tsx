const Services = () => {
  const services = [
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
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center" id="services">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Services</h1>
        <div className="grid gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{service.title}</h2>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;