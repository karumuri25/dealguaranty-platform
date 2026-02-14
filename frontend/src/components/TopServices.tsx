import { useEffect, useState } from "react";
import { getServices } from "../services/servicesService";

export default function TopServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices()
      .then(data => setServices(data))
      .catch(err => console.error("Error loading services:", err));
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-4">Top Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service: any) => (
          <div
            key={service.id}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-gray-600 mt-2">${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

