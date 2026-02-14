import React from "react";
import { Calendar, Clock, DollarSign, CheckCircle, User, MapPin } from "lucide-react";

export default function ProviderDashboard() {
  const todayBookings = [
    {
      id: 1,
      customer: "John Doe",
      time: "10:00 AM",
      address: "123 Main St, Coppell, TX",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Sarah Miller",
      time: "2:00 PM",
      address: "45 Lakeview Dr, Irving, TX",
      status: "Pending",
    },
  ];

  const upcomingBookings = [
    {
      id: 3,
      date: "Feb 12, 2026",
      customer: "Michael Brown",
      time: "11:00 AM",
      address: "78 Sunset Blvd, Dallas, TX",
    },
    {
      id: 4,
      date: "Feb 14, 2026",
      customer: "Emily Johnson",
      time: "3:00 PM",
      address: "22 Hillcrest Ln, Plano, TX",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">Provider Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-2">Today's Bookings</h2>
            <p className="text-3xl font-bold text-blue-600">{todayBookings.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-2">Upcoming</h2>
            <p className="text-3xl font-bold text-indigo-600">{upcomingBookings.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-2">Earnings (This Month)</h2>
            <p className="text-3xl font-bold text-green-600">$1,240</p>
          </div>
        </div>

        {/* Today's Bookings */}
        <div className="bg-white p-6 rounded-xl shadow-lg border mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="text-blue-600" />
            Today's Bookings
          </h2>

          <div className="space-y-4">
            {todayBookings.map((b) => (
              <div
                key={b.id}
                className="p-4 border rounded-lg bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-gray-800">
                    <User size={18} className="text-gray-600" />
                    <strong>{b.customer}</strong>
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-blue-600" />
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

        {/* Upcoming Bookings */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="text-indigo-600" />
            Upcoming Bookings
          </h2>

          <div className="space-y-4">
            {upcomingBookings.map((b) => (
              <div
                key={b.id}
                className="p-4 border rounded-lg bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="space-y-1">
                  <p className="text-gray-800 font-semibold">{b.date}</p>

                  <p className="flex items-center gap-2 text-gray-800">
                    <User size={18} className="text-gray-600" />
                    {b.customer}
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-blue-600" />
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

