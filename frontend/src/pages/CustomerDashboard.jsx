import React from "react";
import { Calendar, Clock, MapPin, CheckCircle, XCircle, ArrowRight } from "lucide-react";

export default function CustomerDashboard() {
  const upcoming = [
    {
      id: 1,
      service: "Home Deep Cleaning",
      date: "Feb 12, 2026",
      time: "10:00 AM",
      address: "123 Main St, Coppell, TX",
      status: "Confirmed",
    },
    {
      id: 2,
      service: "Carpet Shampoo",
      date: "Feb 18, 2026",
      time: "1:00 PM",
      address: "45 Lakeview Dr, Irving, TX",
      status: "Pending",
    },
  ];

  const past = [
    {
      id: 3,
      service: "Home Deep Cleaning",
      date: "Jan 28, 2026",
      time: "3:00 PM",
      address: "78 Sunset Blvd, Dallas, TX",
      status: "Completed",
    },
    {
      id: 4,
      service: "Sofa Cleaning",
      date: "Jan 15, 2026",
      time: "11:00 AM",
      address: "22 Hillcrest Ln, Plano, TX",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">My Dashboard</h1>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-2">Upcoming Bookings</h2>
            <p className="text-3xl font-bold text-blue-600">{upcoming.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-2">Completed</h2>
            <p className="text-3xl font-bold text-green-600">{past.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-2">Total Services</h2>
            <p className="text-3xl font-bold text-indigo-600">
              {upcoming.length + past.length}
            </p>
          </div>
        </div>

        {/* Upcoming */}
        <div className="bg-white p-6 rounded-xl shadow-lg border mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="text-blue-600" />
            Upcoming Bookings
          </h2>

          <div className="space-y-4">
            {upcoming.map((b) => (
              <div
                key={b.id}
                className="p-4 border rounded-lg bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="space-y-1">
                  <p className="text-gray-800 font-semibold">{b.service}</p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <Calendar size={18} className="text-blue-600" />
                    {b.date}
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-indigo-600" />
                    {b.time}
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin size={18} className="text-red-500" />
                    {b.address}
                  </p>
                </div>

                <div className="mt-3 md:mt-0">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      b.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="text-gray-700" />
            Past Bookings
          </h2>

          <div className="space-y-4">
            {past.map((b) => (
              <div
                key={b.id}
                className="p-4 border rounded-lg bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="space-y-1">
                  <p className="text-gray-800 font-semibold">{b.service}</p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <Calendar size={18} className="text-blue-600" />
                    {b.date}
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-indigo-600" />
                    {b.time}
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin size={18} className="text-red-500" />
                    {b.address}
                  </p>
                </div>

                <CheckCircle className="text-green-600 mt-3 md:mt-0" size={26} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

