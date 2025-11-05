"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Plane,
  ShoppingBag,
  Building2,
  Landmark,
  Zap,
  Hotel,
  Heart,
  Truck,
  Droplet,
  Car,
  Headphones,
  Factory,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Sector {
  id: number;
  name: string;
  icon: LucideIcon;
}

const SectorsWeServe = () => {
  const sectors: Sector[] = [
    { id: 1, name: "Aviation", icon: Plane },
    { id: 2, name: "Retail", icon: ShoppingBag },
    { id: 3, name: "Banking & Finance", icon: Building2 },
    { id: 4, name: "Government", icon: Landmark },
    { id: 5, name: "Energy", icon: Zap },
    { id: 6, name: "Hospitality", icon: Hotel },
    { id: 7, name: "Healthcare", icon: Heart },
    { id: 8, name: "Logistics", icon: Truck },
    { id: 9, name: "Oil and Gas", icon: Droplet },
    { id: 10, name: "Automotive", icon: Car },
    { id: 11, name: "Customer Care", icon: Headphones },
    { id: 12, name: "Manufacturing", icon: Factory },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-2 mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-5xl font-extrabold text-sky-500 text-shadow-md text-center leading-[48px]">
            Sectors We Serve
          </h2>
          <p className="text-base text-cyan-900 text-center max-w-3xl leading-normal">
            Specialized expertise across key sectors in the UAE and GCC markets
            with deep industry knowledge.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.id}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="h-36 2xl:h-[240px] p-5 bg-white rounded-[16px] shadow-xl flex flex-col justify-center items-center gap-4 transition-shadow duration-300 group-hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]">
                  {/* Icon Container */}
                  <motion.div
                    className="w-48 h-24 bg-gradient-to-br from-sky-600 to-sky-400 rounded-[20px] border-[1px] border-sky-600 flex justify-center items-center group-hover:bg-sky-200 transition-colors duration-300 shadow-md"
                    variants={iconVariants}
                  >
                    <Icon className="w-16 h-16 text-white transition-colors duration-300" />
                  </motion.div>

                  {/* Sector Name */}
                  <h3 className="text-base font-bold text-sky-500 text-[20px] text-center leading-tight">
                    {sector.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SectorsWeServe;
