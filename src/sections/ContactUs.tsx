"use client";
import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <SectionHeader eyebrow="Contact Us" title="Let&apos;s Connect" />
        <div className="mt-20 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative py-16 px-6 rounded-2xl flex flex-col mx-auto text-white mt-10">
          <div className="absolute"></div>
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email} 
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:from-emerald-400 hover:to-sky-500 hover:brightness-110 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
