"use client";
import { ChevronDown, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ExpandableSearchBar from "@/components/Common/ExpandableSearchBar";
import SearchBar from "@/components/Common/SearchBar";
import UserMenu from "@/components/Common/UserMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search functionality
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Add your search logic here
    // For example: router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  // Handle user menu functionality
  const handleUserMenuOpen = () => {
    setIsUserMenuOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleUserMenuClose = () => {
    setIsUserMenuOpen(false);
  };

  const handleLogin = () => {
    console.log("Login clicked");
    // Add your login logic here
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here
  };

  // Handle escape key and outside click
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (event.key === "Escape" && isLangDropdownOpen) {
        setIsLangDropdownOpen(false);
      }
      if (event.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
      if (event.key === "Escape" && isUserMenuOpen) {
        setIsUserMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        isLangDropdownOpen &&
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
      if (
        isUserMenuOpen &&
        userRef.current &&
        !userRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (isLangDropdownOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    if (isUserMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    if (isSearchOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isLangDropdownOpen, isSearchOpen, isUserMenuOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Determine navbar background and text colors - same for all pages
  const getNavbarStyles = () => {
    return {
      navBg: isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent",
      textColor: "text-white",
      hoverColor: "hover:text-sky-500",
      activeColor: "text-sky-500 font-semibold",
    };
  };

  const styles = getNavbarStyles();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 py-1 ${styles.navBg} hover:bg-white border-b border-white/10 shadow group`}
      style={{ zIndex: 9998 }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 pt-2">
        <div className="flex items-center justify-between h-16 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/rm-logo.png"
                alt="Company Logo"
                width={160}
                height={40}
                className="h-16 w-auto -pt-2"
              />
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:block flex-1">
            <div className="flex gap-6 lg:gap-10 justify-center">
              <Link
                href="/services"
                className={`${
                  pathname === "/services"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-semibold transition-colors text-lg font-anek uppercase`}
              >
                Services
              </Link>
              <Link
                href="/sectors"
                className={`${
                  pathname === "/sectors"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-semibold transition-colors text-lg font-anek uppercase`}
              >
                Sectors
              </Link>
              <Link
                href="/projects"
                className={`${
                  pathname === "/projects"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-semibold transition-colors text-lg font-anek uppercase`}
              >
                Projects
              </Link>
              <Link
                href="/career"
                className={`${
                  pathname === "/career" ? styles.activeColor : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-semibold transition-colors text-lg font-anek uppercase`}
              >
                Career
              </Link>
              <Link
                href="/about-us"
                className={`${
                  pathname === "/about-us"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-semibold transition-colors text-lg font-anek uppercase`}
              >
                About
              </Link>
              <Link
                href="/contact-us"
                className={`${
                  pathname === "/contact-us"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-semibold transition-colors text-lg font-anek uppercase`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Expandable Search */}
            <ExpandableSearchBar
              onSearch={handleSearch}
              placeholder="Search..."
              iconColor={styles.textColor}
              hoverIconColor={styles.hoverColor}
              suggestions={[
                "Services",
                "Projects",
                "About Us",
                "Career Opportunities",
                "Contact Information",
              ]}
            />

            {/* CTA Button */}
            <Link
              href="/book-meeting"
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-full inline-flex justify-center items-center gap-2.5 transition-colors shadow-md text-white text-base font-semibold"
            >
              Book A Meeting
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsSearchOpen(false);
              }}
              className={`relative w-11 h-11 ${styles.textColor} group-hover:text-sky-500 hover:opacity-50 transition-colors flex items-center justify-center cursor-pointer`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            zIndex: 2147483646,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-black/65 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          zIndex: 2147483647,
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          isolation: "isolate",
        }}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 text-white hover:text-sky-500 transition-colors flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6">
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/services" ? "text-sky-500" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Services
            </Link>
            <Link
              href="/sectors"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/sectors" ? "text-sky-500" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Sectors
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/projects" ? "text-sky-500" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Projects
            </Link>
            <Link
              href="/career"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/career" ? "text-sky-500" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Career
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/about-us" ? "text-sky-500" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/contact-us" ? "text-sky-500" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Search Bar */}
          <div className="mt-8 mb-6">
            <ExpandableSearchBar
              onSearch={handleSearch}
              placeholder="Search..."
              iconColor="text-white/80"
              hoverIconColor="hover:text-sky-500"
              className="w-full"
              suggestions={[
                "Services",
                "Projects",
                "About Us",
                "Career Opportunities",
                "Contact Information",
              ]}
            />
          </div>

          {/* Mobile Action Icons */}
          <div className="mt-4 flex items-center justify-around mb-6">
            <button
              onClick={handleUserMenuOpen}
              className="text-white/80 hover:text-sky-400 p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="User Account"
            >
              <User className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Book Meeting Button */}
          <div>
            <Link
              href="/book-meeting"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-full inline-flex justify-center items-center gap-2.5 transition-colors shadow-md text-white text-base font-semibold"
            >
              Book A Meeting
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar Component */}
      <SearchBar
        isOpen={isSearchOpen}
        onClose={handleSearchClose}
        onSearch={handleSearch}
        placeholder="Search services, projects, information..."
        suggestions={[
          "Services",
          "Projects",
          "About Us",
          "Career Opportunities",
          "Contact Information",
          "Sectors We Serve",
        ]}
      />

      {/* Mobile User Menu Component */}
      <div className="md:hidden">
        <UserMenu
          isOpen={isUserMenuOpen}
          onClose={handleUserMenuClose}
          isLoggedIn={false}
          userName="John Doe"
          userEmail="john@example.com"
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </div>
    </nav>
  );
};

export default Navbar;
