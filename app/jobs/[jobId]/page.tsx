"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Upload,
  X,
  FileText,
  Send,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";
import Header from "../../career/Header";
import DownloadOurApp from "@/components/DownloadOurApp";

interface Job {
  id: number;
  title: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  jobType: string;
  location: string;
  experience: string;
  deadline: string;
  salary?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter: string;
  cv: File | null;
}

const JobApplicationPage = () => {
  const router = useRouter();
  const params = useParams();
  const jobId = params.jobId as string;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    cv: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Job data - In production, fetch this from API/database
  const jobs: Job[] = [
    {
      id: 1,
      title: "Head Civil Engineer",
      fullDescription:
        "We are seeking an experienced Head Civil Engineer to lead our civil engineering team. This role requires exceptional leadership abilities, strong technical expertise, and a proven track record in managing large-scale construction projects. You will be responsible for overseeing all civil engineering operations, ensuring projects are completed on time, within budget, and to the highest quality standards.",
      responsibilities: [
        "Lead and manage the civil engineering team",
        "Oversee daily engineering operations and project execution",
        "Ensure compliance with safety standards and regulations",
        "Review and approve technical designs and drawings",
        "Coordinate with clients, contractors, and stakeholders",
        "Manage project budgets and timelines",
        "Mentor junior engineers and provide technical guidance",
        "Conduct site inspections and quality assessments",
      ],
      requirements: [
        "Bachelor's degree in Civil Engineering or related field",
        "10+ years of experience in civil engineering",
        "5+ years in a leadership/management role",
        "Professional Engineer (PE) license preferred",
        "Strong knowledge of construction codes and regulations",
        "Excellent project management skills",
        "Proficiency in AutoCAD, Civil 3D, and other engineering software",
        "Outstanding communication and leadership abilities",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "10+ Years",
      deadline: "30 November 2025",
      salary: "Competitive salary based on experience",
    },
    {
      id: 2,
      title: "Accounts Manager",
      fullDescription:
        "We are looking for an experienced Accounts Manager to join our finance team. The successful candidate will be responsible for managing all accounting operations, financial reporting, and ensuring compliance with financial regulations.",
      responsibilities: [
        "Manage day-to-day accounting operations",
        "Prepare monthly, quarterly, and annual financial statements",
        "Oversee accounts payable and receivable",
        "Manage payroll processing and tax compliance",
        "Conduct financial analysis and forecasting",
        "Ensure compliance with accounting standards",
        "Supervise and mentor accounting staff",
        "Liaise with external auditors and tax consultants",
      ],
      requirements: [
        "Bachelor's degree in Accounting or Finance",
        "7-9 years of accounting experience",
        "CPA or equivalent certification preferred",
        "Strong knowledge of accounting software (QuickBooks, SAP, etc.)",
        "Excellent analytical and problem-solving skills",
        "Strong attention to detail and accuracy",
        "Leadership and team management experience",
        "Excellent communication skills",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "7-9 Years",
      deadline: "20 November 2025",
      salary: "Negotiable based on qualifications",
    },
    {
      id: 3,
      title: "Assistant Manager",
      fullDescription:
        "We are seeking a dynamic Assistant Manager to support our operations team. This role requires excellent organizational skills, leadership abilities, and a hands-on approach to daily management tasks.",
      responsibilities: [
        "Assist in daily operations management",
        "Support team coordination and scheduling",
        "Monitor performance metrics and KPIs",
        "Handle customer inquiries and complaints",
        "Ensure quality standards are maintained",
        "Assist in training and development of staff",
        "Prepare operational reports",
        "Support budget management and cost control",
      ],
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "3-6 years of relevant experience",
        "Proven leadership and team management skills",
        "Strong organizational and multitasking abilities",
        "Excellent communication and interpersonal skills",
        "Problem-solving mindset",
        "Proficiency in MS Office suite",
        "Ability to work in a fast-paced environment",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "3-6 Years",
      deadline: "25 November 2025",
    },
    {
      id: 4,
      title: "Junior Architect",
      fullDescription:
        "Join our creative architecture team as a Junior Architect. This is an excellent opportunity for a motivated individual to work on diverse projects while learning from experienced professionals. You'll be involved in all stages of design and project development.",
      responsibilities: [
        "Assist in developing architectural designs and drawings",
        "Create 3D models and renderings",
        "Prepare construction documents",
        "Collaborate with senior architects and design team",
        "Conduct site visits and surveys",
        "Research materials and building systems",
        "Coordinate with engineers and consultants",
        "Assist in client presentations",
      ],
      requirements: [
        "Bachelor's degree in Architecture",
        "1-3 years of experience in an architecture firm",
        "Proficiency in AutoCAD, Revit, SketchUp",
        "Knowledge of 3D rendering software (V-Ray, Lumion, etc.)",
        "Strong design and visualization skills",
        "Good understanding of building codes and regulations",
        "Excellent attention to detail",
        "Creative thinking and problem-solving abilities",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "1-3 Years",
      deadline: "28 November 2025",
    },
  ];

  const job = jobs.find((j) => j.id === parseInt(jobId));

  if (!job) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Job Not Found
            </h1>
            <button
              onClick={() => router.push("/career")}
              className="text-sky-500 hover:text-sky-600"
            >
              Back to Careers
            </button>
          </div>
        </div>
      </>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload a PDF or Word document");
        return;
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should not exceed 5MB");
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
      toast.success("File uploaded successfully!");
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, cv: null }));
    toast.success("File removed");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Submitting your application...");

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("experience", formData.experience);
      submitData.append("coverLetter", formData.coverLetter);
      submitData.append("jobTitle", job.title);
      submitData.append("jobId", jobId);
      if (formData.cv) {
        submitData.append("cv", formData.cv);
      }

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.ok) {
        toast.success(
          "Thank you for your application! We have received your CV and will review it shortly.",
          {
            duration: 6000,
          }
        );

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          coverLetter: "",
          cv: null,
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error(
          data.error || "Failed to submit application. Please try again.",
          {
            duration: 4000,
          }
        );
      }
    } catch (error) {
      console.error("Error submitting application:", error);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      toast.error("An error occurred. Please try again later.", {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-gray-50 min-h-screen py-8 md:py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            onClick={() => router.push("/career")}
            className="flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6 group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Careers</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Side - Job Details */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Job Header */}
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-sky-500 mb-6">
                  {job.title}
                </h1>

                {/* Job Meta Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Job Type</p>
                      <p className="font-semibold text-sky-500">
                        {job.jobType}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-sky-500">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-semibold text-sky-500">
                        {job.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Deadline</p>
                      <p className="font-semibold text-sky-500">
                        {job.deadline}
                      </p>
                    </div>
                  </div>
                </div>

                {job.salary && (
                  <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-sky-600" />
                    <p className="text-sky-900 font-medium">{job.salary}</p>
                  </div>
                )}
              </div>

              {/* Job Description */}
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold text-sky-500 mb-4">
                  Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {job.fullDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold text-sky-500 mb-4">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold text-sky-500 mb-4">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Application Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-sky-500 mb-6">
                  Apply for this Position
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name - Floating Label */}
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />
                    <label
                      className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                        formData.fullName || focusedField === "fullName"
                          ? "-translate-y-1/2 text-xs text-sky-500"
                          : "translate-y-3 text-base text-gray-500"
                      }`}
                    >
                      Full Name *
                    </label>
                  </div>

                  {/* Email - Floating Label */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />
                    <label
                      className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                        formData.email || focusedField === "email"
                          ? "-translate-y-1/2 text-xs text-sky-500"
                          : "translate-y-3 text-base text-gray-500"
                      }`}
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Phone - Floating Label */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />
                    <label
                      className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                        formData.phone || focusedField === "phone"
                          ? "-translate-y-1/2 text-xs text-sky-500"
                          : "translate-y-3 text-base text-gray-500"
                      }`}
                    >
                      Phone Number *
                    </label>
                  </div>

                  {/* Years of Experience - Floating Label */}
                  <div className="relative">
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("experience")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />
                    <label
                      className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                        formData.experience || focusedField === "experience"
                          ? "-translate-y-1/2 text-xs text-sky-500"
                          : "translate-y-3 text-base text-gray-500"
                      }`}
                    >
                      Years of Experience *
                    </label>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload CV/Resume *
                    </label>
                    {!formData.cv ? (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-sky-500 transition-colors bg-gray-50 hover:bg-sky-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF or Word (Max 5MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          disabled={isSubmitting}
                          required
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-sky-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {formData.cv.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(formData.cv.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          disabled={isSubmitting}
                          className="p-1 hover:bg-red-100 rounded-full transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          <X className="w-5 h-5 text-red-500" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Cover Letter - Floating Label */}
                  <div className="relative">
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("coverLetter")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base focus:outline-none focus:border-sky-500 transition-all resize-none peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />
                    <label
                      className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                        formData.coverLetter || focusedField === "coverLetter"
                          ? "-translate-y-1/2 text-xs text-sky-500"
                          : "translate-y-3 text-base text-gray-500"
                      }`}
                    >
                      Cover Letter (Optional)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold rounded-full transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <DownloadOurApp />
    </>
  );
};

export default JobApplicationPage;
