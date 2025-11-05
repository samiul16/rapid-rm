"use client";

import React, { useEffect } from "react";
import {
  Plane,
  Store,
  Building2,
  Shield,
  Zap,
  Utensils,
  Heart,
  Truck,
  Fuel,
  Car,
  Headphones,
  Settings,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const WeServe = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const sectors = [
    {
      icon: Plane,
      title: "Aviation",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Store,
      title: "Retail",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Building2,
      title: "Banking & Finance",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Shield,
      title: "Government",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Zap,
      title: "Energy",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Utensils,
      title: "Hospitality",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Heart,
      title: "Healthcare",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Truck,
      title: "Logistics",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Fuel,
      title: "Oil and Gas",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Car,
      title: "Automotive",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Headphones,
      title: "Customer Care",
      gradient: "from-blue-400 to-sky-400",
    },
    {
      icon: Settings,
      title: "Manufacturing",
      gradient: "from-blue-400 to-sky-400",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <h2 className="text-sky-500 text-4xl md:text-5xl text-shadow-md font-bold font-anek mb-4">
            Industries We Serve
          </h2>
          <div
            className="w-11 h-1 bg-cyan-600 rounded-[30px] mx-auto mb-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
          <p
            className="text-cyan-900 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Specialized expertise across key sectors in the UAE and GCC markets
            with deep industry knowledge.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                data-aos-duration="800"
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center cursor-pointer"
              >
                <div className="mb-6 flex justify-center">
                  <div
                    className={`w-48 h-24 bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}
                  >
                    <IconComponent
                      className="w-16 h-16 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <h3 className="text-sky-500 text-xl font-semibold font-anek group-hover:text-sky-600 text-shadow-sm transition-colors">
                  {sector.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeServe;
