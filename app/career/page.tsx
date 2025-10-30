"use client";

import React from "react";
import { Bookmark, Check } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import { motion, Variants } from "framer-motion";
import DownloadOurApp from "@/components/DownloadOurApp";

const CareerPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Head Civil Engineer",
      description:
        "We are seeking a head civil engineer with exceptional leadership abilities and a knack for team management. The role involves directing daily engineering operations, ensuring top-notch project quality, and adhering to safety standards.",
      jobType: "Full Time",
      location: "On-site",
      experience: "10+ Years",
      deadline: "30 November 2025",
      featured: true,
    },
    {
      id: 2,
      title: "Accounts Manager",
      description:
        "The ideal candidate should have strong leadership skills, the ability to manage a team, and a creative approach to menu development. Responsibilities will include overseeing daily kitchen operations, maintaining high standards of food quality and hygiene....",
      jobType: "Full Time",
      location: "On-site",
      experience: "7-9 Years",
      deadline: "20 November 2025",
      featured: false,
    },
    {
      id: 3,
      title: "Assistant Manager",
      description:
        "The ideal candidate should have strong leadership skills, the ability to manage a team, and a creative approach to menu development. Responsibilities will include overseeing daily kitchen operations, maintaining high standards of food quality and hygiene....",
      jobType: "Full Time",
      location: "On-site",
      experience: "3-6 Years",
      deadline: "25 November 2025",
      featured: false,
    },
    {
      id: 4,
      title: "Junior Architect",
      description:
        "We are looking for a junior architect who is eager to learn and grow. The ideal candidate will have a passion for design, teamwork, and innovative solutions. Responsibilities include assisting in project development, collaborating with senior architects, and ensuring design quality ..",
      jobType: "Full Time",
      location: "On-site",
      experience: "1-3 Years",
      deadline: "28 November 2025",
      featured: false,
    },
  ];

  const whyJoinReasons = [
    "Passion for Hospitality",
    "Respect & Teamwork",
    "Excellence in Service",
    "Continuous Learning",
    "Diversity & Inclusion",
  ];

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const jobCardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Header />
      <div className="w-full bg-white">
        {/* Why Join Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left Content */}
              <motion.div
                className="w-full lg:w-[510px] flex flex-col gap-8 lg:gap-11"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-cyan-900 leading-10"
                  variants={itemVariants}
                >
                  Why Join With RM
                </motion.h2>

                <div className="flex flex-col gap-6">
                  {whyJoinReasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-5"
                      variants={itemVariants}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-medium text-cyan-800 leading-normal">
                        {reason}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Images */}
              <motion.div
                className="w-full lg:w-auto flex-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex gap-4 sm:gap-6 h-[280px] sm:h-[320px] lg:h-80">
                  <motion.div
                    className="relative w-[45%] sm:w-52 h-full rounded-[32px] overflow-hidden"
                    variants={imageVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <Image
                      src="/career/career-1.jpg"
                      alt="Team member"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="relative flex-1 lg:w-96 h-full rounded-[32px] overflow-hidden"
                    variants={imageVariants}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <Image
                      src="/career/career-2.jpg"
                      alt="Team collaboration"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
            {/* Header */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-900 mb-8 md:mb-10 leading-[48px]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Current Open Position
            </motion.h1>

            {/* Job Listings */}
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center transition-shadow"
                  variants={jobCardVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.12)",
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Avatar */}
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-sky-500 rounded-full flex-shrink-0 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/career-3.svg"
                      alt="Career icon"
                      width={32}
                      height={32}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </motion.div>

                  {/* Bookmark Icon */}
                  <motion.button
                    className="lg:ml-0 self-end lg:self-auto"
                    aria-label="Save job"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bookmark className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500" />
                  </motion.button>

                  {/* Job Details */}
                  <div className="flex-1 w-full lg:w-auto flex flex-col gap-4 sm:gap-6">
                    {/* Title and Description */}
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                      <h3 className="text-lg sm:text-xl font-bold text-sky-500 leading-relaxed">
                        {job.title}
                      </h3>
                      <p className="text-sm sm:text-base text-black leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                    >
                      {[
                        `Job Type : ${job.jobType}`,
                        `Location : ${job.location}`,
                        `Experience : ${job.experience}`,
                        `Deadline : ${job.deadline}`,
                      ].map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full outline outline-1 outline-offset-[-1px] outline-black flex items-center justify-center"
                          variants={tagVariants}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(14, 165, 233, 0.1)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          <span className="text-xs sm:text-sm text-black whitespace-nowrap leading-none">
                            {tag}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Apply Button */}
                  <motion.button
                    className={`w-full lg:w-40 h-10 sm:h-12 px-6 rounded-[84px] flex items-center justify-center transition-all flex-shrink-0 ${
                      job.featured
                        ? "bg-sky-500 text-white"
                        : "bg-indigo-50 text-sky-500"
                    }`}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: job.featured ? "#0284c7" : "#dbeafe",
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-base sm:text-lg font-semibold whitespace-nowrap">
                      Apply Now
                    </span>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <DownloadOurApp />
    </>
  );
};

export default CareerPage;
