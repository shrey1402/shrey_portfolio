"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import memojiImage from "@/assets/images/main_logo.png";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleScroll = () => {
    const sections = ["home", "projects", "about", "contact"];
    const scrollPosition = window.scrollY;

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // If the section is in view, set it as active
        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      }
    });

    // Show menu only after scrolling down
    setShowMenu(scrollPosition > 50);
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div id="home" className="absolute md:left-20 top-2 left-1/2 -translate-x-1/2 z-50">
        <Image src={memojiImage} alt="Logo" className="size-18 w-44" />
      </div> */}

      <div className="flex justify-center items-center relative top-3 z-10 sticky transition-opacity duration-300">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a
            href="#home"
            className={`nav-item ${activeSection === "home" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-grey-900" : ""
              }`}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-grey-900" : ""
              }`}
          >
            Projects
          </a>
          <a
            href="#about"
            className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-grey-900" : ""
              }`}
          >
            About
          </a>
          <a
            href="#contact"
            className={`nav-item ${activeSection === "contact" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-grey-900" : ""
              }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};
