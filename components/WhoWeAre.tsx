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
        "To provide ethical, transparent, and reliable recruitment solutions that connect skilled professionals with secure global opportunities.",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To be a trusted global leader in manpower and visa services, known for quality, integrity, and long-term partnerships.",
    },
    {
      id: "values",
      title: "Our Values",
      content:
        "At RM Orient, our values define who we are and how we serve:\n\nIntegrity & Transparency: We uphold honesty and transparency in every partnership.\n\nExcellence in Service: We strive for quality and perfection in every service we provide.\n\nRespect & Commitment: Your goals are our priority — we grow by helping you grow.\n\nTeamwork & Collaboration: We work together to achieve the best outcomes for our clients.\n\nContinuous Improvement: We continuously improve to meet the evolving needs of modern business.",
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
              <h2 className="text-3xl sm:text-4xl font-semibold text-sky-500 leading-10 tracking-widest">
                About RM Orient
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed text-justify">
                RM Orient is a trusted global manpower and visa solutions
                provider, connecting skilled workers with reputable companies
                across the Middle East, Europe, and Asia. Since our
                establishment, we have been committed to delivering ethical
                recruitment, accurate documentation, and reliable overseas
                employment support. <br />
                With a strong network, experienced team, and a transparent
                process, we ensure both clients and candidates receive the
                highest level of service. At RM Orient, we believe in
                professionalism, integrity, and long-term success — helping
                people build better careers and companies build stronger teams.
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
                                <strong className="text-sky-500">
                                  Integrity & Transparency
                                </strong>{" "}
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-sky-500">
                                  Excellence in Service
                                </strong>{" "}
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-sky-500">
                                  Respect & Commitment
                                </strong>{" "}
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-sky-500">
                                  Teamwork & Collaboration
                                </strong>{" "}
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-sky-500 font-bold mt-1">
                                •
                              </span>
                              <span>
                                <strong className="text-sky-500">
                                  Continuous Improvement
                                </strong>{" "}
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
                <Award className="w-9 h-9 text-sky-500" />
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
                src="/about-img/1.png"
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
                  src="/about-img/2.png"
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
                  src="/about-img/3.png"
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
