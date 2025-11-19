import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add smooth scrolling function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Hours & Location", href: "#info" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Icon icon="lucide:fish" className="text-primary-500 text-2xl" />
          <span className="font-semibold text-lg text-primary-700">Archdale Fish & Plants</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.name}
            </a>
          ))}
          <Button 
            color="primary" 
            variant="solid" 
            as="a" 
            href="tel:+17436001363"
            startContent={<Icon icon="lucide:phone" />}
          >
            Call Us
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          isIconOnly 
          variant="light" 
          className="md:hidden" 
          onPress={toggleMenu}
          aria-label="Toggle menu"
        >
          <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} className="text-xl" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-slate-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors py-2"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              color="primary" 
              variant="solid" 
              as="a" 
              href="tel:+17436001363"
              startContent={<Icon icon="lucide:phone" />}
              className="mt-2"
            >
              Call Us
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};