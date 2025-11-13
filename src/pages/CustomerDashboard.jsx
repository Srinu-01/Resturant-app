import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Deals from "../components/Deals";
import Categories from "../components/categories";
import RestaurantsSection from "../components/Restuarnt";
import AppDownloadSection from "../components/Appdownloadsection";
import PartnerSection from "../components/Partnersection";
import FAQSection from "../components/FAQ";
import StatsSection from "../components/stats";
import Footer from "../components/Footer";

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section with Search */}
      <Hero />

      {/* Hot Deals Section */}
      <Deals />
      {/* Categories Section */}
      <Categories />
      <RestaurantsSection />
      <AppDownloadSection />
      <PartnerSection />
      <FAQSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default CustomerDashboard;
