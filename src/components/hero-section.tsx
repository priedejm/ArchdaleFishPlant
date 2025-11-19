import React from "react";
import { Button, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Preload video metadata
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section id="home" className="relative pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge color="primary" variant="flat" className="mb-4">
              <Icon icon="lucide:star" className="mr-1" />
              4.9/5 - 98 Google Reviews
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Discover the <span className="text-primary-500">Perfect Aquatic</span> Companions
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Archdale Fish & Plants offers a large variety of tropical fish, aquatic plants, and supplies at competitive prices. Our knowledgeable staff is here to help you create your dream aquarium.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                color="primary" 
                size="lg"
                as="a" 
                href="#products"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Explore Our Fish
              </Button>
              <Button 
                variant="bordered" 
                color="primary" 
                size="lg"
                as="a" 
                href="#info"
                startContent={<Icon icon="lucide:map-pin" />}
              >
                Visit Our Store
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-200">
              {/* Poster image for immediate display */}
              {!videoLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 animate-pulse" />
              )}
              
              {/* Video element with optimizations */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%230ea5e9' width='800' height='600'/%3E%3C/svg%3E"
                onLoadedData={() => setVideoLoaded(true)}
                onError={(e) => {
                  console.error("Video failed to load:", e);
                  setVideoLoaded(true); // Show overlay even if video fails
                }}
              >
                <source src="/assets/fishVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Gradient overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xl font-semibold mb-1">Create Your Dream Aquarium</p>
                  <p className="text-sm opacity-90">Expert advice & quality products</p>
                </div>
              </div>
            </div>
            
            {/* Store hours card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="lucide:clock" className="text-primary-500" />
                <span className="font-medium text-slate-900">Open Today</span>
              </div>
              <p className="text-sm text-slate-600">12:00 PM - 7:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};