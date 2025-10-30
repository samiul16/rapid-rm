"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { div, section } from "framer-motion/client";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    description: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        description: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+966 50 517 6100",
      link: "tel:+966505176100",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rmeng.com",
      link: "mailto:info@rmeng.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content:
        "Abdul wahed Al Malqa, Batha Quraish Dist, Makkah, Kingdom of Saudi Arabia, P.O. Box: 24353",
      link: "https://maps.google.com/?q=Abdul+wahed+Al+Malqa+Makkah+Saudi+Arabia",
    },
  ];

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
                }}
                className="bg-white rounded-[20px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 lg:p-8 flex-1 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-sky-500 font-['Anek_Malayalam']">
                    {info.title}
                  </h3>
                </div>
                <a
                  href={info.link}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={
                    info.title === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-lg lg:text-xl font-bold text-black/60 hover:text-sky-500 transition-colors leading-relaxed block"
                >
                  {info.content}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.16)] p-6 lg:p-12 flex flex-col h-full"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-sky-500 mb-8 font-['Anek_Malayalam']">
              Get In Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 flex-1 flex flex-col"
            >
              <div className="flex-1 space-y-5">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full p-3.5 bg-white rounded-[10px] border-b-2 border-cyan-900 text-cyan-900 placeholder:text-cyan-900/70 text-base font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full p-3.5 bg-white rounded-[10px] border-b-2 border-cyan-900 text-cyan-900 placeholder:text-cyan-900/70 text-base font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-3.5 bg-white rounded-[10px] border-b-2 border-cyan-900 text-cyan-900 placeholder:text-cyan-900/70 text-base font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Description Input */}
                <div>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    className="w-full p-3.5 bg-white rounded-[10px] border-b-2 border-cyan-900 text-cyan-900 placeholder:text-cyan-900/70 text-base font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="w-full h-full min-h-[112px] p-3.5 bg-white rounded-[10px] border-b-2 border-cyan-900 text-cyan-900 placeholder:text-cyan-900/70 text-base font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 rounded-[30px] text-white text-xl font-bold font-['Anek_Malayalam'] uppercase tracking-wide transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    SUBMIT
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
