"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    },
    {
      title: "Mechanical Engineering",
      description:
        "Our mechanical workforce includes certified welders, fabricators, fitters, and riggers who bring hands-on expertise to every industrial project. We also conduct welder tests and interviews to ensure only top-quality talent joins your team.",
    },
    {
      title: "Electrical Engineering",
      description:
        "We supply qualified electricians, technicians, and maintenance professionals for commercial, industrial, and infrastructure projects. Every candidate is thoroughly tested and trained for safe and efficient electrical operations.",
    },
    {
      title: "Constructions",
      description:
        "From general labor to specialized tradesmen, our construction staffing solutions cover every need — including fabricators, riggers, painters, and welders. We focus on delivering reliable manpower that keeps your projects on schedule.",
    },
    {
      title: "Oil & Gas",
      description:
        "Our oil and gas division offers experienced field technicians, welders, fabricators, and safety officers who meet the strictest industry standards. We conduct practical tests and technical assessments to ensure top performance in every operation.",
    },
    {
      title: "Transportation",
      description:
        "We supply skilled drivers, logistics handlers, and heavy vehicle operators for smooth and safe transportation management. Our manpower is trained to handle all kinds of transport and logistics operations efficiently.",
    },
    {
      title: "Manufacturing",
      description:
        "RM Orient provides trained factory workers, machine operators, welders, and assembly line specialists who maintain productivity and quality across your manufacturing processes. We ensure each candidate is evaluated for skill and discipline.",
    },
    {
      title: "Hospitality",
      description:
        "From housekeeping and kitchen staff to receptionists and service crews, we deliver professional manpower that reflects your brand’s excellence. Our team ensures every recruit upholds the highest standards of hospitality and guest service.",
    },
    {
      title: "Executive Selection",
      description:
        "We help companies find exceptional leaders — from mid-level managers to top executives. Our recruitment process ensures the right blend of experience, skill, and leadership to drive your organization’s long-term success.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header Section */}
        <div
          className="flex flex-col items-center mb-10"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <div className="pb-5">
            <h2 className="text-center text-sky-500  text-4xl font-bold font-anek leading-10">
              Our Services
            </h2>
          </div>
          <div className="w-11 h-1 bg-cyan-600 rounded-[30px]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="group"
            >
              <div className="h-full 2xl:h-[300px] bg-white rounded-[15px] shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-200 pt-10">
                <div className="h-full p-6 lg:p-8 flex flex-col text-center">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-sky-500 text-xl lg:text-2xl font-bold font-anek leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex-grow">
                    <p className="text-gray-600 text-sm lg:text-base font-normal font-anek leading-relaxed text-start">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
