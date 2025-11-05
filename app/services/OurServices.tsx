"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Construction,
  Cog,
  Zap,
  Building2,
  Fuel,
  Truck,
  Factory,
  Hotel,
  Users,
} from "lucide-react";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: "Civil Engineering",
      description:
        "We provide highly skilled professionals and technical teams for all types of civil projects. From site engineers and supervisors to welders, fabricators, painters, and riggers — we ensure your construction goals are achieved with precision and safety.",
      icon: Construction,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mechanical Engineering",
      description:
        "Our mechanical workforce includes certified welders, fabricators, fitters, and riggers who bring hands-on expertise to every industrial project. We also conduct welder tests and interviews to ensure only top-quality talent joins your team.",
      icon: Cog,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Electrical Engineering",
      description:
        "We supply qualified electricians, technicians, and maintenance professionals for commercial, industrial, and infrastructure projects. Every candidate is thoroughly tested and trained for safe and efficient electrical operations.",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Constructions",
      description:
        "From general labor to specialized tradesmen, our construction staffing solutions cover every need — including fabricators, riggers, painters, and welders. We focus on delivering reliable manpower that keeps your projects on schedule.",
      icon: Building2,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Oil & Gas",
      description:
        "Our oil and gas division offers experienced field technicians, welders, fabricators, and safety officers who meet the strictest industry standards. We conduct practical tests and technical assessments to ensure top performance in every operation.",
      icon: Fuel,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Transportation",
      description:
        "We supply skilled drivers, logistics handlers, and heavy vehicle operators for smooth and safe transportation management. Our manpower is trained to handle all kinds of transport and logistics operations efficiently.",
      icon: Truck,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Manufacturing",
      description:
        "ARCO provides trained factory workers, machine operators, welders, and assembly line specialists who maintain productivity and quality across your manufacturing processes. We ensure each candidate is evaluated for skill and discipline.",
      icon: Factory,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Hospitality",
      description:
        "From housekeeping and kitchen staff to receptionists and service crews, we deliver professional manpower that reflects your brand's excellence. Our team ensures every recruit upholds the highest standards of hospitality and guest service.",
      icon: Hotel,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Executive Selection",
      description:
        "We help companies find exceptional leaders — from mid-level managers to top executives. Our recruitment process ensures the right blend of experience, skill, and leadership to drive your organization's long-term success.",
      icon: Users,
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header Section */}
        <div
          className="flex flex-col items-center mb-10"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <div className="pb-5">
            <h2 className="text-center text-sky-500 text-5xl font-bold font-anek leading-10">
              Our Services
            </h2>
          </div>
          <div className="w-11 h-1 bg-cyan-600 rounded-[30px]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="group"
              >
                <div className="h-full 2xl:h-[340px] bg-white rounded-[20px] shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200">
                  <div className="h-full p-6 lg:p-8 flex flex-col">
                    {/* Icon with Gradient Background */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                      >
                        <IconComponent
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4 text-center">
                      <h3 className="text-sky-500 text-2xl lg:text-3xl font-bold font-anek leading-tight group-hover:text-sky-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="flex-grow">
                      <p className="text-gray-600 text-sm lg:text-base font-normal font-anek leading-relaxed text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
