import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import HotSales from '../components/HotSales';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

export default function HomePage(){
  return (
    <div className="font-poppins">
      <Navbar />
      <main className="container mx-auto px-6">
        <HeroBanner />
        <HotSales />
        <CategorySection />
      </main>
      <Footer />
    </div>
  )
}
