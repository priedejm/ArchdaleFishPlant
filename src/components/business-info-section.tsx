import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const BusinessInfoSection = () => {
  const businessHours = [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "Closed" },
    { day: "Wednesday", hours: "12:00 PM - 7:00 PM" },
    { day: "Thursday", hours: "12:00 PM - 7:00 PM" },
    { day: "Friday", hours: "12:00 PM - 7:00 PM" },
    { day: "Saturday", hours: "12:00 PM - 7:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 7:00 PM" }
  ];

  const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
  const adjustedToday = today === 0 ? 6 : today - 1; // Adjust to match our array (0 is Monday)

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="info" className="py-24 bg-gradient-to-b from-sky-50 to-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hours & Location</h2>
          <Divider className="my-4 max-w-md mx-auto" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visit our store to see our full selection of fish, plants, and supplies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardBody className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Icon icon="lucide:clock" className="mr-2 text-primary-500" />
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((item, index) => (
                    <div 
                      key={item.day} 
                      className={`flex justify-between items-center py-2 border-b border-slate-100 ${index === adjustedToday ? 'bg-primary-50 -mx-2 px-2 rounded-md' : ''}`}
                    >
                      <div className="flex items-center">
                        <span className="font-medium text-slate-900">{item.day}</span>
                        {index === adjustedToday && (
                          <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">Today</span>
                        )}
                      </div>
                      <span className={`${item.hours === "Closed" ? "text-danger-500" : "text-slate-600"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-sm text-slate-500">
                  <Icon icon="lucide:info" className="mr-2" />
                  <span>Hours may vary on holidays. Please call ahead to confirm.</span>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardBody className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Icon icon="lucide:map-pin" className="mr-2 text-primary-500" />
                  Location & Contact
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Address:</h4>
                    <p className="text-slate-600">311 Trindale Rd, Archdale, NC 27263</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Phone:</h4>
                    <p className="text-slate-600">
                      <a href="tel:+17436001363" className="text-primary-600 hover:underline">
                        (743) 600-1363
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Email:</h4>
                    <p className="text-slate-600">
                      <a href="mailto:info@archdalefish.com" className="text-primary-600 hover:underline">
                        info@archdalefish.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-slate-50 rounded-lg p-4">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.1103702766384!2d-79.9641!3d35.9083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853c5b5a57937e5%3A0x8e8c0a5edb4c5214!2s311%20Trindale%20Rd%2C%20Archdale%2C%20NC%2027263!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Archdale Fish & Plants location"
                    ></iframe>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-500">Click map for directions</span>
                    <a 
                      href="https://goo.gl/maps/8ZjKZ8Z8Z8Z8Z8Z8A" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 hover:underline flex items-center"
                    >
                      Get Directions
                      <Icon icon="lucide:external-link" className="ml-1" />
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};