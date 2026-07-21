import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Story from './components/Story';
import AffirmationsTool from './components/AffirmationsTool';
import MythsTool from './components/MythsTool';
import Gallery from './components/Gallery';
import Product from './components/Product';
import SocialProof from './components/SocialProof';
import Bonus from './components/Bonus';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import CheckoutSimulator from './components/CheckoutSimulator';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleOpenNewsletter = () => {
    setIsNewsletterOpen(true);
  };

  const handleCloseNewsletter = () => {
    setIsNewsletterOpen(false);
  };

  return (
    <div id="gaybriel-applet" className="min-h-screen bg-white text-slate-800 antialiased selection:bg-portuguese-yellow-200 selection:text-slate-900 custom-scrollbar overflow-x-hidden">
      
      {/* 1. Sticky / Fixed Header */}
      <Header
        onOpenCheckout={handleOpenCheckout}
        onOpenNewsletter={handleOpenNewsletter}
      />

      {/* 2. Hero Section */}
      <Hero onOpenCheckout={handleOpenCheckout} />

      {/* 3. Problem Section */}
      <Problem />

      {/* 4. Story & Empowerment Section (Includes Affirmations Tool) */}
      <div className="relative">
        <Story />
        <div className="bg-portuguese-yellow-50/50 pb-24 px-4 sm:px-6 lg:px-8">
          <AffirmationsTool />
        </div>
      </div>

      {/* 5. Myths vs. Truths Section */}
      <MythsTool />

      {/* 6. Empowerment Gallery */}
      <Gallery />

      {/* 7. Product / Offer Section */}
      <Product onOpenCheckout={handleOpenCheckout} />

      {/* 8. Testimonials / Social Proof */}
      <SocialProof />

      {/* 9. Bonus & Urgency Section */}
      <Bonus onOpenCheckout={handleOpenCheckout} />

      {/* 10. Frequently Asked Questions */}
      <FAQ />

      {/* 11. Lead Capture Newsletter Block */}
      <Newsletter />

      {/* 12. Footer with Final CTA */}
      <Footer
        onOpenCheckout={handleOpenCheckout}
        onOpenNewsletter={handleOpenNewsletter}
      />

      {/* 13. Sticky Call-to-Action Bar */}
      <StickyCTA onOpenCheckout={handleOpenCheckout} />

      {/* 14. Modals / Interactive popups */}
      <CheckoutSimulator
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />

      <Newsletter
        isOpenModal={isNewsletterOpen}
        onCloseModal={handleCloseNewsletter}
      />

    </div>
  );
}
