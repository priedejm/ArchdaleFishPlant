import React from "react";
import { Card, CardBody, Badge, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  source: string;
  avatarId: number;
}

export const ReviewsSection = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Skylar Vanderbroek",
      rating: 5,
      text: "Lots of variety, cheap prices, and knowledgeable owner. I've been coming here for all my aquarium needs for over a year now and have never been disappointed.",
      source: "Google",
      avatarId: 11
    },
    {
      id: 2,
      name: "Nerd Creations Studio",
      rating: 5,
      text: "Amazing customer service with a pet friendly co worker! The staff took time to answer all my questions and help me set up my first aquarium.",
      source: "Google",
      avatarId: 12
    },
    {
      id: 3,
      name: "Meg",
      rating: 5,
      text: "The selection of fish and aquarium products is ever growing and expanding. I love that they're constantly bringing in new species and products.",
      source: "Google",
      avatarId: 13
    },
    {
      id: 4,
      name: "James Wilson",
      rating: 4,
      text: "Great little shop with healthy fish and reasonable prices. The owner is very helpful and knowledgeable about all things aquarium related.",
      source: "Facebook",
      avatarId: 14
    },
    {
      id: 5,
      name: "Sarah Thompson",
      rating: 5,
      text: "I drive over an hour to shop here because the quality and service is worth it. Their plants are always healthy and their fish selection is amazing.",
      source: "Google",
      avatarId: 15
    },
    {
      id: 6,
      name: "Michael Rodriguez",
      rating: 5,
      text: "Found some rare species here that I couldn't find anywhere else. The staff is passionate about fish keeping and it shows in how they maintain their tanks.",
      source: "Facebook",
      avatarId: 16
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Icon 
        key={index} 
        icon="lucide:star" 
        className={`${index < rating ? 'text-warning-500' : 'text-slate-300'}`} 
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-white to-sky-50 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Customer Reviews</h2>
          <Divider className="my-4 max-w-md mx-auto" />
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-slate-900">4.9/5</span>
            <span className="text-slate-600">based on 98 reviews</span>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={itemVariants}>
              <Card className="h-full">
                <CardBody className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img 
                          src={`https://img.heroui.chat/image/avatar?w=100&h=100&u=${review.avatarId}`}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900">{review.name}</h3>
                        <div className="flex items-center text-xs">
                          <div className="flex mr-1">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-slate-500">• {review.source}</span>
                        </div>
                      </div>
                    </div>
                    {review.source === "Google" ? (
                      <Icon icon="logos:google-icon" className="text-xl" />
                    ) : (
                      <Icon icon="logos:facebook" className="text-xl" />
                    )}
                  </div>
                  <p className="text-slate-600 italic">"{review.text}"</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Love your experience?</h3>
          <p className="text-slate-600 mb-6">
            We appreciate your feedback! Leave us a review on Google or Facebook to help others discover our store.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://g.page/r/archdalefishandplants/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <Icon icon="logos:google-icon" className="mr-2" />
              Review on Google
            </a>
            <a 
              href="https://www.facebook.com/archdalefishandplants/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#1877F2] rounded-lg text-white hover:bg-[#0c63d4] transition-colors"
            >
              <Icon icon="logos:facebook" className="mr-2" />
              Review on Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};