"use client";

import React, { useEffect } from "react";
import { Download, Award } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ManpowerSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Left Side - Images with Overlap */}
          <div className="relative h-[500px] sm:h-[600px]">
            {/* Large Image - Background */}
            <div
              className="absolute top-0 left-0 w-full sm:w-4/5 h-[400px] sm:h-[500px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <Image
                src="/about/1.jpg"
                height={500}
                width={600}
                alt="Workers in safety gear"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                quality={95}
                priority
              />
            </div>

            {/* Small Video Thumbnail - Overlapping Bottom Right */}
            <div
              className="absolute top-40 right-0 w-3/5 sm:w-1/2 h-[280px] sm:h-[320px]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="relative w-full h-auto group">
                <Image
                  src="/about/2.jpg"
                  height={320}
                  width={400}
                  alt="Workers in safety gear"
                  className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105 outline-8 outline-gray-50"
                  quality={95}
                />
                {/* Play Button Overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 sm:w-20 sm:h-20 bg-sky-500/20 bg-opacity-90 rounded-full flex items-center justify-center shadow-xl hover:bg-opacity-100 transition-all hover:scale-110 border border-sky-300 cursor-pointer animate-pulse hover:animate-none">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-cyan-500 border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-sky-500 text-3xl font-semibold font-anek uppercase tracking-wide mb-3">
                Trusted Manpower Suppliers
              </h3>
            </div>

            <div
              className="space-y-4 text-slate-700 leading-relaxed font-anek"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="transition-all duration-300 hover:text-slate-900 text-base">
                RM Engineering was established in 2005 and has maintained an
                excellent track record in the field of contracting and manpower
                services in several different sectors ranging from blue collar
                to white collar workers. We have a wide, diverse and dedicated
                workforce that hail from different parts of the world – Sri
                Lanka, India, Pakistan, Ghana and Nigeria
              </p>

              <p className="transition-all duration-300 hover:text-slate-900 text-base">
                In the 17 years that our company has been active, we have been
                dedicated to providing the best manpower solutions through our
                tireless commitment to our clients and and willingness to keep
                striving to do better. Our reputation preceds us and is built on
                sheer quality, strict adherence to time schedules and deadlines.
              </p>

              <p className="transition-all duration-300 hover:text-slate-900 text-base">
                We have been dedicated to providing the best manpower solutions
                through our tireless commitment to our clients and and
                willingness to keep striving to do better. Our reputation
                precedes us and is built on sheer quality, strict adherence to
                time schedules and deadlines.
              </p>
            </div>

            {/* Certified Badge */}
            {/* <div
              className="flex items-center space-x-3 py-4 group"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-sky-600">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-800 font-semibold text-lg font-anek group-hover:text-sky-600 transition-colors">
                Certified Company
              </span>
            </div> */}

            {/* Download Button */}
            {/* <div className="pt-4" data-aos="fade-up" data-aos-delay="500">
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full flex items-center space-x-3 transition-all shadow-lg hover:shadow-xl cursor-pointer font-anek transform hover:scale-105 active:scale-95 group">
                <span className="uppercase tracking-wide">
                  Download Profile
                </span>
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
