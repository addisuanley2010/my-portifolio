import { useSelector } from "react-redux";
import { RootState } from "../../store";
// import React from "react";

const Services = () => {
    const services = useSelector((state: RootState) => state.service);

  

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center" id="services">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Services</h1>
        <div className="grid gap-6">
          {services.serviceData?.map((service) => (
            <div key={service._id} className="bg-gray-800 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{service.service_name}</h2>
              <p className="text-sm text-gray-300">{service.service_description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;