"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";

const WhoWeAre = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "To deliver comprehensive manpower and HR solutions that empower businesses to achieve operational excellence through efficiency, compliance, and trusted partnerships",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To be the leading workforce and HR service provider in the region — recognized for reliability, innovation, and excellence in connecting people, processes, and performance.",
    },
    {
      id: "values",
      title: "Our Values",
      content:
        "At RM Orient, our values define who we are and how we serve:\n\nIntegrity: We uphold honesty and transparency in every partnership.\n\nReliability: Always ready to deliver, no matter how urgent or complex the task.\n\nExcellence: We strive for quality and perfection in every service we provide.\n\nCustomer Focus: Your goals are our priority — we grow by helping you grow.\n\nInnovation: We continuously improve to meet the evolving needs of modern business.",
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 xl:gap-[107px]">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[690px] flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* About RM Section */}
            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-800 leading-10 tracking-widest">
                About RM
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed text-justify">
                Founded with a vision to empower businesses through reliable
                workforce solutions, RM Orient has become a trusted name in
                manpower and staffing excellence. We specialize in connecting
                companies with the right talent — from on-demand labor to
                executive professionals — ensuring every project runs smoothly,
                efficiently, and successfully. <br />
                Our team is dedicated to providing end-to-end HR, recruitment,
                and compliance solutions that help clients save time, reduce
                risk, and focus on what truly matters — growing their business.{" "}
                <br />
                With integrity, precision, and professionalism at the heart of
                everything we do, RM Orient stands as a symbol of trust,
                commitment, and quality in workforce management.
              </p>
            </motion.div>

            {/* Expandable Sections */}
            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  className="flex flex-col overflow-hidden"
                  variants={itemVariants}
                >
                  <motion.button
                    className="h-14 px-6 bg-sky-500 rounded-[50px] flex justify-between items-center cursor-pointer group hover:bg-sky-600 transition-colors mx-3"
                    onClick={() => toggleSection(section.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg sm:text-2xl font-medium text-white leading-normal tracking-wider">
                      {section.title}
                    </span>
                    <motion.div
                      animate={{
                        rotate: expandedSection === section.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.button>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === section.id ? "auto" : 0,
                      opacity: expandedSection === section.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 px-4 pl-5">
                      {section.id === "values" ? (
                        <div className="space-y-3">
                          <p className="text-base text-zinc-700 leading-relaxed mb-4">
                            At RM Orient, our values define who we are and how
                            we serve:
                          </p>
                          <ul className="space-y-3 text-zinc-600">
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-cyan-800">
                                  Integrity:
                                </strong>{" "}
                                We uphold honesty and transparency in every
                                partnership.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-cyan-800">
                                  Reliability:
                                </strong>{" "}
                                Always ready to deliver, no matter how urgent or
                                complex the task.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-cyan-800">
                                  Excellence:
                                </strong>{" "}
                                We strive for quality and perfection in every
                                service we provide.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-cyan-800">
                                  Customer Focus:
                                </strong>{" "}
                                Your goals are our priority — we grow by helping
                                you grow.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-cyan-800">
                                  Innovation:
                                </strong>{" "}
                                We continuously improve to meet the evolving
                                needs of modern business.
                              </span>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <p className="text-base text-zinc-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Section - Certified Company & Download Button */}
            <motion.div
              className="flex flex-col gap-4 mt-6"
              variants={itemVariants}
            >
              {/* Certified Company Badge */}
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Award className="w-9 h-9 text-sky-800" />
                <span className="text-base text-neutral-900 leading-loose">
                  Certified Company
                </span>
              </motion.div>

              {/* Download Profile Button */}
              {/* <motion.button
                className="px-8 py-4 bg-sky-500 rounded-[30px] flex items-center justify-center gap-4 hover:bg-sky-600 transition-colors w-full sm:w-auto cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl font-bold text-white uppercase leading-none tracking-wide">
                  Download Profile
                </span>
                <Download className="w-6 h-6 text-white" />
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="w-full lg:w-[483px] flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Top Large Image */}
            <motion.div
              className="relative w-full h-52 sm:h-64 rounded-3xl overflow-hidden"
              variants={imageVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Image
                src="/about/about-arco-1.jpg"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom Two Images */}
            <div className="flex gap-6">
              <motion.div
                className="relative flex-1 h-48 sm:h-56 rounded-3xl overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/about/about-arco-2.jpg"
                  alt="Food presentation"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative w-32 sm:w-44 h-48 sm:h-56 rounded-3xl overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/about/about-arco-3.jpg"
                  alt="Dining experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
