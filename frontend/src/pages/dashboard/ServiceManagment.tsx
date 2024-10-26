import React, { useState } from "react";
import {  IService } from "../../types/user.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const Services: React.FC = () => {

  const services = useSelector((state: RootState) => state.service);
  const [newService, setnewService] = useState<Omit<IService, "_id">>({
    service_name: "",
    service_description: "",
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const dispatch = useDispatch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setnewService((prev) => ({ ...prev, [name]: value }));
  };


  const addService = () => {
    if (newService.service_name && newService.service_description) { 
       dispatch({ type: "ADD_SERVICE", payload: newService });

    }
  };

  const startEditing = (service: IService) => {
    setEditingId(service._id);
    setnewService(service);
  };

  const updateService = () => {
    if (editingId !== null) {
      dispatch({type:'UPDATE_SERVICE',payload:newService})
      setEditingId(null);
      setnewService({ service_name: "", service_description: "" });
    }
  };

  const deleteService = (id: number) => {
dispatch({type:'DELETE_SERVICE',payload:id})  };

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col justify-center items-center" id="services">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Services</h1>

        <div className="mb-8 bg-gray-700 p-6 rounded-md">
          <input
            type="text"
            name="service_name"
            value={newService.service_name}
            onChange={handleInputChange}
            placeholder="Service Title"
            className="w-full mb-2 p-2 bg-gray-600 text-white rounded"
          />
          <textarea
            name="service_description"
            value={newService.service_description}
            onChange={handleInputChange}
            placeholder="Service service_description"
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
          { services.serviceData.map((service) => (
            <div key={service._id} className="bg-gray-700 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-indigo-400 mb-2">{service.service_name}</h2>
              <p className="text-sm text-gray-300 mb-4">{service.service_description}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => startEditing(service)}
                  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteService(service._id)}
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
