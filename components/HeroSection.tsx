"use client";

import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = React.useRef<HTMLDivElement>(null);
  const totalSlides = 3;

  // Array of slide data
  const slides = [
    {
      image: "/hero/2.jpg",
      heading: "Connecting Dreams Beyond Borders",
      paragraph:
        "We help individuals achieve their overseas career goals with trusted visa processing and global employment solutions.",
      position: "top",
    },
    {
      image: "/hero/1.jpeg",
      heading: "Your Gateway to Global Opportunities",
      paragraph:
        "Visa to placement — we make your global journey simple and secure.",
      position: "top",
    },
    {
      image: "/hero/3.jpeg",
      heading: "Building Careers, Bridging Nations",
      paragraph:
        "Empowering global careers with smooth processing and trusted support.",
      position: "bottom",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }, []);

  // Scroll-based visibility detection
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-slide functionality - Continuous loop
  useEffect(() => {
    if (isTransitioning) return;

    const autoSlideInterval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 6000); // 3.5 seconds for smooth continuous loop

    return () => clearInterval(autoSlideInterval);
  }, [isTransitioning, totalSlides]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    // No pause - continues looping immediately after transition
  };

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 900); // Slightly longer than CSS animation
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[663px] md:h-screen overflow-hidden"
    >
      {/* Background Images with Advanced Animations */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-[#333] bg-cover bg-center transition-all duration-[800ms] ease-in-out transform ${
            index === currentSlide
              ? "opacity-100 scale-100 rotate-0"
              : index === (currentSlide - 1 + totalSlides) % totalSlides
              ? "opacity-0 scale-110 -rotate-1 translate-x-[-100px]"
              : index === (currentSlide + 1) % totalSlides
              ? "opacity-0 scale-110 rotate-1 translate-x-[100px]"
              : "opacity-0 scale-95 translate-y-[50px]"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter:
              index === currentSlide
                ? "brightness(0.7) contrast(1.05)"
                : "brightness(0.7) blur(2px)",
            transition:
              "all 800ms cubic-bezier(0.4, 0, 0.2, 1), filter 600ms ease-out",
          }}
        >
          {/* Darker Overlay for Better Text Contrast */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? "opacity-40" : "opacity-60"
            }`}
            style={{
              background:
                index === currentSlide
                  ? "linear-gradient(45deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)"
                  : "linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          ></div>

          {/* Animated Particles Effect */}
          {index === currentSlide && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "3s",
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Slide Transition Overlay */}
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 pointer-events-none ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Hero Content with Animations */}
      <div className="relative z-10 flex flex-col h-full px-4">
        {/* Dynamic Content - Heading and Paragraph */}
        <div
          className={`max-w-7xl mx-auto flex flex-col items-center space-y-5 transition-all duration-700 ${
            slides[currentSlide]?.position === "bottom"
              ? "mt-auto mb-20 md:mb-24 lg:mb-[15%]"
              : "pt-54 md:pt-20 lg:pt-54"
          } ${
            isTransitioning
              ? "opacity-80 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h1
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight tracking-[-0.4px] font-anek"
            style={{
              textShadow:
                "3px 3px 6px rgba(0,0,0,0.5), 1px 1px 3px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.2)",
              filter: "brightness(1.15) contrast(1.1)",
            }}
          >
            {slides[currentSlide]?.heading}
          </h1>

          <p
            className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-anek font-medium"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)",
              filter: "brightness(1.2) contrast(1.1)",
            }}
          >
            {slides[currentSlide]?.paragraph}
          </p>
        </div>

        {/* Spacer - only when content is at top */}
        {slides[currentSlide]?.position !== "bottom" && (
          <div className="flex-1"></div>
        )}

        {/* Enhanced Slider Dots */}
        <div className="absolute bottom-[200px] md:bottom-[60px] left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-500 cursor-pointer transform hover:scale-125 active:scale-90 ${
                currentSlide === index
                  ? "bg-sky-500 w-8 shadow-lg"
                  : "bg-indigo-50 hover:bg-indigo-100 w-3"
              }`}
              style={{
                boxShadow:
                  currentSlide === index
                    ? "0 2px 8px rgba(14, 165, 233, 0.4), 0 0 0 2px rgba(255,255,255,0.2)"
                    : "0 1px 3px rgba(0,0,0,0.2)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
