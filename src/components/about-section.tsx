import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const storeImages = [
    "/assets/store1.jpg",
    "/assets/store2.jpg",
    "/assets/store3.jpg",
    "/assets/store4.jpg"
  ];

  // Auto-rotate images every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % storeImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [storeImages.length]);

  const features = [
    {
      icon: "lucide:fish",
      title: "Diverse Selection",
      description: "Wide variety of freshwater and saltwater fish species from around the world."
    },
    {
      icon: "lucide:leaf",
      title: "Aquatic Plants",
      description: "Healthy live plants to create natural habitats and improve water quality."
    },
    {
      icon: "lucide:package",
      title: "Quality Supplies",
      description: "Everything you need from tanks and filters to food and water treatments."
    },
    {
      icon: "lucide:help-circle",
      title: "Expert Advice",
      description: "Knowledgeable staff to help with setup, maintenance, and troubleshooting."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-sky-50 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Archdale Fish & Plants</h2>
          <Divider className="my-4 max-w-md mx-auto" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are a locally owned tropical fish store in Archdale, North Carolina, dedicated to providing healthy aquatic life and exceptional customer service since 2015.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <Icon icon={feature.icon} className="text-3xl text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            {/* Carousel Container */}
            <div className="w-full md:w-1/3 relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={storeImages[currentImageIndex]}
                    alt={`Store view ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {storeImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? "bg-primary-500 w-8" 
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Manual Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
                <button
                  onClick={() => goToImage((currentImageIndex - 1 + storeImages.length) % storeImages.length)}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <Icon icon="lucide:chevron-left" className="text-slate-700" />
                </button>
                <button
                  onClick={() => goToImage((currentImageIndex + 1) % storeImages.length)}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <Icon icon="lucide:chevron-right" className="text-slate-700" />
                </button>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Story</h3>
              <p className="text-slate-600 mb-4">
                Archdale Fish & Plants began with a passion for aquatic life and a desire to share that passion with the community. Our owner has over 15 years of experience in aquarium keeping and fish breeding.
              </p>
              <p className="text-slate-600 mb-4">
                What started as a small shop has grown into a trusted source for quality aquatic life and supplies in the Archdale area. We pride ourselves on maintaining healthy environments for our fish and plants, ensuring you take home thriving specimens for your aquarium.
              </p>
              <p className="text-slate-600">
                We believe in education and community, which is why we're always happy to provide advice and support to both beginners and experienced aquarists alike.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};