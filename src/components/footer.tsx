import React from "react";
import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  // Add smooth scrolling function for footer links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:fish" className="text-primary-400 text-2xl" />
              <span className="font-semibold text-xl text-white">Archdale Fish & Plants</span>
            </div>
            <p className="text-slate-300 mb-4">
              Your local source for quality tropical fish, aquatic plants, and supplies in Archdale, North Carolina.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-primary-400 transition-colors">
                <Icon icon="lucide:facebook" className="text-xl" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary-400 transition-colors">
                <Icon icon="lucide:instagram" className="text-xl" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary-400 transition-colors">
                <Icon icon="lucide:youtube" className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => scrollToSection(e, "#home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => scrollToSection(e, "#products")}
                >
                  Fish & Products
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => scrollToSection(e, "#about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#info" 
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => scrollToSection(e, "#info")}
                >
                  Hours & Location
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => scrollToSection(e, "#reviews")}
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon icon="lucide:map-pin" className="text-primary-400 mr-2 mt-1" />
                <span className="text-slate-300">311 Trindale Rd, Archdale, NC 27263</span>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:phone" className="text-primary-400 mr-2" />
                <a href="tel:+17436001363" className="text-slate-300 hover:text-primary-400 transition-colors">
                  (743) 600-1363
                </a>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:mail" className="text-primary-400 mr-2" />
                <a href="mailto:info@archdalefish.com" className="text-slate-300 hover:text-primary-400 transition-colors">
                  info@archdalefish.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span className="text-slate-400">Monday:</span>
                <span className="text-slate-300">Closed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Tuesday:</span>
                <span className="text-slate-300">Closed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Wednesday:</span>
                <span className="text-slate-300">12:00 PM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Thursday:</span>
                <span className="text-slate-300">12:00 PM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Friday:</span>
                <span className="text-slate-300">12:00 PM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Saturday:</span>
                <span className="text-slate-300">12:00 PM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Sunday:</span>
                <span className="text-slate-300">12:00 PM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="bg-slate-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Archdale Fish & Plants. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 text-sm hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-sm hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};