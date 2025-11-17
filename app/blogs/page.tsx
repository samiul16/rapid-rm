"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import Header from "./Header";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const allBlogPosts = [
    {
      id: 1,
      date: "September 17th, 2025",
      author: "rmuser",
      title: "How to Choose the Right Visa Consultancy",
      excerpt:
        "Choosing the right visa consultancy is crucial for a successful application. Working with the wrong agency can waste both time and money. In this blog, we will guide you on how to identify a trustworthy and experienced consultancy. You will also get practical tips to make your visa process smooth and hassle-free.",
      image: "/blogs/blog-1.png",
      slug: "labour-law-compliance-uae",
    },
    {
      id: 2,
      date: "September 10th, 2025",
      author: "rmuser",
      title: "Top 5 Visa Application Mistakes to Avoid",
      excerpt:
        "Many people make common mistakes when applying for a visa, such as providing incorrect information, missing documents, or submitting applications late. In this blog, we highlight the top five mistakes applicants make. We will also share tips on how to avoid them and ensure a safe and successful application process.",
      image: "/blogs/blog-2.png",
      slug: "oil-gas-manpower-supplier-uae",
    },
    {
      id: 3,
      date: "September 2nd, 2025",
      author: "rmuser",
      title: "Step-by-Step Work Visa Application Guide",
      excerpt:
        "Applying for a work visa abroad can seem complicated for many. However, with a step-by-step plan, the process becomes much easier. In this blog, we explain each stage of the work visa application in detail. Following these steps will help you avoid mistakes and move closer to working in your dream country.",
      image: "/blogs/blog-3.png",
      slug: "skilled-labour-dubai-construction",
    },
    {
      id: 4,
      date: "July 24th, 2025",
      author: "rmuser",
      title: "Student Visa Tips for Studying Abroad",
      excerpt:
        "A valid visa is essential for studying abroad. Many students get confused about the application process. In this blog, we explain how to apply for a student visa in a simple and organized way. We also provide advice on required documents, deadlines, and preparation tips.",
      image: "/blogs/blog-4.png",
      slug: "manpower-supply-project-management",
    },
    {
      id: 5,
      date: "July 20th, 2025",
      author: "rmuser",
      title: "How to Avoid Visa Rejection",
      excerpt:
        "Visa rejection can be stressful, but proper preparation can prevent it. This blog discusses the main reasons why visa applications get rejected. We also provide strategies to strengthen your application. Following these tips can make your visa process smoother and increase your chances of approval.",
      image: "/blogs/blog-5.png",
      slug: "manpower-supply-trends-uae",
    },
    {
      id: 6,
      date: "July 12th, 2025",
      author: "rmuser",
      title: "Understanding Different Types of Visas",
      excerpt:
        "There are various types of visas, including tourist, student, work, and sponsorship visas. Each type has different rules, durations, and benefits. In this blog, we explain the different visa types in a simple and clear way. This will help readers understand which visa is the best option for them.",
      image: "/blogs/blog-6.png",
      slug: "skilled-labour-supply-importance",
    },
    // Additional posts for pagination demo
    {
      id: 7,
      date: "July 5th, 2025",
      author: "rmuser",
      title: "Business Visa Requirements and Process",
      excerpt:
        "Business visas allow entrepreneurs and professionals to explore opportunities abroad. The application process varies by country and purpose. In this blog, we explain the requirements for business visas, including documentation, financial proof, and interview preparation. This guide will help you navigate the business visa process successfully.",
      image: "/blogs/blog-1.png",
      slug: "business-visa-requirements",
    },
    {
      id: 8,
      date: "June 28th, 2025",
      author: "rmuser",
      title: "Family Visa Sponsorship Guide",
      excerpt:
        "Family reunification is important for many expatriates. Sponsoring family members requires proper documentation and meeting specific criteria. This blog covers the family visa sponsorship process, required documents, and common challenges. We also provide tips to ensure a smooth application process for your loved ones.",
      image: "/blogs/blog-2.png",
      slug: "family-visa-sponsorship",
    },
    {
      id: 9,
      date: "June 20th, 2025",
      author: "rmuser",
      title: "Medical Visa Application Process",
      excerpt:
        "Medical visas are essential for those seeking treatment abroad. The application process requires medical documentation and proof of treatment plans. In this blog, we explain the medical visa requirements, necessary documents, and application timeline. This guide will help patients and their families navigate the medical visa process.",
      image: "/blogs/blog-3.png",
      slug: "medical-visa-application",
    },
    {
      id: 10,
      date: "June 15th, 2025",
      author: "rmuser",
      title: "Transit Visa Requirements",
      excerpt:
        "Transit visas are required when passing through certain countries during travel. Many travelers are unaware of transit visa requirements, leading to complications. This blog explains when transit visas are needed, application procedures, and exemptions. Understanding these requirements will help you plan your journey without delays.",
      image: "/blogs/blog-4.png",
      slug: "transit-visa-requirements",
    },
    {
      id: 11,
      date: "June 8th, 2025",
      author: "rmuser",
      title: "Visa Interview Preparation Tips",
      excerpt:
        "Visa interviews can be nerve-wracking, but proper preparation increases success rates. Consular officers evaluate applicants based on various factors. This blog provides comprehensive interview preparation tips, common questions, and strategies to present yourself confidently. Following these guidelines will improve your chances of visa approval.",
      image: "/blogs/blog-5.png",
      slug: "visa-interview-preparation",
    },
    {
      id: 12,
      date: "June 1st, 2025",
      author: "rmuser",
      title: "Document Authentication and Attestation",
      excerpt:
        "Document authentication is crucial for visa applications and overseas employment. The attestation process varies by country and document type. This blog explains the authentication process, required steps, and common mistakes to avoid. Proper document preparation ensures smooth visa processing and legal compliance abroad.",
      image: "/blogs/blog-6.png",
      slug: "document-authentication",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allBlogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Header />
      <div className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          {/* Blog Grid */}
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.16)] p-4 sm:p-5 flex flex-col gap-2 hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)] transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Post Content */}
                <div className="flex flex-col gap-3">
                  {/* Date and Share Row */}
                  <div className="flex justify-between items-center flex-wrap gap-3">
                    {/* Date */}
                    <time className="text-sm text-sky-500 leading-relaxed">
                      {post.date}
                    </time>

                    {/* Share Section */}
                    <div className="flex items-center gap-2">
                      {/* Share Text & Icon */}
                      <div className="flex items-center gap-1">
                        <Share2 className="w-5 h-5 text-sky-500" />
                        <span className="text-base font-medium text-sky-500 leading-none">
                          Share
                        </span>
                      </div>

                      {/* Social Buttons */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          className="w-7 h-7 bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.16)] flex items-center justify-center group"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#0ea5e9",
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5 text-sky-500 group-hover:text-white transition-colors duration-200" />
                        </motion.button>

                        <motion.button
                          className="w-7 h-7 bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.16)] flex items-center justify-center group"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#0ea5e9",
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3.5 h-3.5 text-sky-500 group-hover:text-white transition-colors duration-200" />
                        </motion.button>

                        <motion.button
                          className="w-7 h-7 bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.16)] flex items-center justify-center group"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#0ea5e9",
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-sky-500 group-hover:text-white transition-colors duration-200" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <motion.h2
                    className="text-2xl sm:text-3xl text-zinc-800 leading-tight cursor-pointer"
                    whileHover={{
                      color: "#0ea5e9",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {post.title}
                  </motion.h2>

                  {/* Featured Image */}
                  <motion.div
                    className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Excerpt */}
                <div className="min-h-[80px] sm:min-h-[96px] py-2.5">
                  <p className="text-sm text-zinc-800 leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            className="flex justify-center items-center gap-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;

              return (
                <motion.button
                  key={pageNumber}
                  className={`px-4 py-2 rounded-lg font-medium cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-white"
                      : "border border-sky-500 text-sky-500"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: isActive ? "#0284c7" : "#0ea5e9",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
