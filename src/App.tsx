import React from "react";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ProductsSection } from "./components/products-section";
import { BusinessInfoSection } from "./components/business-info-section";
import { ReviewsSection } from "./components/reviews-section";
import { Footer } from "./components/footer";
import { BubbleBackground } from "./components/bubble-background";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BubbleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <BusinessInfoSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}