import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faRocket,
  faCamera,
  faBullhorn,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesSection() {
  const services = [
    { icon: faPeopleGroup, title: "Branding & Creative Design" },
    { icon: faRocket, title: "Digital Media & Marketing" },
    { icon: faCamera, title: "Photography & Videography" },
    { icon: faBullhorn, title: "Event & Media Support" },
    { icon: faPalette, title: "Art & Installation" },
  ];

  return (
    <section>
      {/* Header Section */}
      <div className="bg-blue-700 text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Explore{" "}
          <span className="text-orange-500">Our</span>{" "}
          Service
        </h1>
        <p className="text-white mt-2 text-sm md:text-base">
          Kami menghadirkan solusi inovatif untuk kebutuhan digital Anda.
        </p>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-6xl mb-4 text-orange-500"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <button className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
                See more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
