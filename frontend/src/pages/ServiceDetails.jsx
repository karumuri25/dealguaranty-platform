import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Clock, MapPin, Star, ArrowRight } from "lucide-react";

export default function ServiceDetails() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 px-6 shadow-lg">
        <h1 className="text-4xl font-bold">Home Deep Cleaning</h1>
        <p className="mt-2 text-lg opacity-90">
          Trusted professionals. Transparent pricing. Guaranteed service.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div className="md:col-span-2 space-y-8">
          
          {/* About Service */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About This Service</h2>
            <p className="text-gray-700 leading-relaxed">
              Our professional deep cleaning ensures every corner of your home is spotless.
              We use eco-friendly products, trained staff, and a structured cleaning checklist
              to deliver a premium experience.
            </p>
          </section>

          {/* What’s Included */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
            <ul className="space-y-3">
              {[
                "Full home deep cleaning",
                "Kitchen & bathroom sanitization",
                "Dusting, mopping & vacuuming",
                "Window & glass cleaning",
                "Balcony & outdoor sweep",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Location */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Service Location</h2>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={22} className="text-red-500" />
              <span>Coppell, Texas</span>
            </div>
          </section>
        </div>

        {/* Right Section — Pricing Card */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>

            <div className="text-4xl font-extrabold text-blue-600">$149</div>
            <p className="text-gray-600 mt-1">Flat rate • No hidden fees</p>

            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <Star size={20} />
              <span className="font-medium text-gray-800">4.8 (320 reviews)</span>
            </div>

            <button
              onClick={handleBookNow}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              Book Now <ArrowRight size={18} />
            </button>
          </div>

          {/* Duration */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Duration</h3>
            <div className="flex items-center gap-3 text-gray-700">
              <Clock size={20} className="text-indigo-600" />
              <span>3–4 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

