import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, ShieldCheck, Download, ExternalLink, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { GAYBRIEL_IMAGES } from '../data';

interface CheckoutSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutSimulator({ isOpen, onClose }: CheckoutSimulatorProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      v = v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    setExpiry(v.substring(0, 5));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Payment Gateway delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Save locally to simulate purchase
      const sales = JSON.parse(localStorage.getItem('gaybriel_sales') || '[]');
      sales.push({ name, email, amount: 29.0, date: new Date().toISOString() });
      localStorage.setItem('gaybriel_sales', JSON.stringify(sales));
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      id="checkout-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-[32px] overflow-hidden max-w-4xl w-full shadow-lg border border-portuguese-yellow-200/20 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-checkout"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div key="checkout-form" className="w-full flex flex-col md:flex-row text-left">
              
              {/* Left Column: Form Details */}
              <form onSubmit={handleCheckoutSubmit} className="w-full md:w-7/12 p-8 sm:p-10 space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-portuguese-yellow-100 text-portuguese-yellow-800 text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-portuguese-yellow-600" />
                    <span>70% OFF SPECIAL</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Secure Checkout
                  </h3>
                  <p className="text-xs text-slate-500 font-light">
                    Complete your details below to start your authentic journey immediately.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">
                    1. Delivery Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="checkout-first-name" className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Full Name</label>
                      <input
                        id="checkout-first-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4.5 py-2.5 rounded-xl border border-portuguese-yellow-200/40 text-slate-800 text-sm font-medium outline-hidden focus:border-ocean-blue-500 focus:ring-1 focus:ring-ocean-blue-500 bg-white shadow-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-email" className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Email Address</label>
                      <input
                        id="checkout-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@example.com"
                        className="w-full px-4.5 py-2.5 rounded-xl border border-portuguese-yellow-200/40 text-slate-800 text-sm font-medium outline-hidden focus:border-ocean-blue-500 focus:ring-1 focus:ring-ocean-blue-500 bg-white shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">
                    2. Payment Details
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="checkout-card-num" className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Card Number</label>
                      <div className="relative">
                        <input
                          id="checkout-card-num"
                          type="text"
                          required
                          value={cardNumber}
                          onChange={handleCardChange}
                          placeholder="4111 2222 3333 4444"
                          maxLength={19}
                          className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-portuguese-yellow-200/40 text-slate-800 text-sm font-medium outline-hidden focus:border-ocean-blue-500 focus:ring-1 focus:ring-ocean-blue-500 bg-white shadow-xs"
                        />
                        <CreditCard className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="checkout-expiry" className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Expiry Date</label>
                        <input
                          id="checkout-expiry"
                          type="text"
                          required
                          value={expiry}
                          onChange={handleExpiryChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-2.5 rounded-xl border border-portuguese-yellow-200/40 text-slate-800 text-sm font-medium outline-hidden focus:border-ocean-blue-500 focus:ring-1 focus:ring-ocean-blue-500 bg-white shadow-xs text-center"
                        />
                      </div>
                      <div>
                        <label htmlFor="checkout-cvv" className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">CVV / Security</label>
                        <input
                          id="checkout-cvv"
                          type="password"
                          required
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/gi, '').substring(0, 3))}
                          placeholder="•••"
                          maxLength={3}
                          className="w-full px-4 py-2.5 rounded-xl border border-portuguese-yellow-200/40 text-slate-800 text-sm font-medium outline-hidden focus:border-ocean-blue-500 focus:ring-1 focus:ring-ocean-blue-500 bg-white shadow-xs text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  id="btn-secure-submit-payment"
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-950 disabled:bg-slate-400 text-white font-bold text-base transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                >
                  {isProcessing ? (
                    <span>Securing Connection...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 text-portuguese-yellow-400" />
                      <span>Securely Pay $29.00 USD</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-400 text-center font-light leading-normal flex items-center justify-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>256-Bit SSL Encrypted & Discreet Billing Guaranteed.</span>
                </p>
              </form>

              {/* Right Column: Order Summary */}
              <div className="w-full md:w-5/12 bg-sand-100 p-8 sm:p-10 border-t md:border-t-0 md:border-l border-portuguese-yellow-200/20 flex flex-col justify-between text-left">
                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pb-1 border-b border-portuguese-yellow-200/20">
                    Order Summary
                  </h4>

                  {/* Product block */}
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-portuguese-yellow-200/20 bg-white flex-shrink-0">
                      <img
                        src={GAYBRIEL_IMAGES.guideCover}
                        alt="Ebook cover thumbnail"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="leading-tight space-y-1">
                      <p className="text-sm font-bold text-slate-800">The Authentic You</p>
                      <p className="text-xs text-slate-400">Digital Guidebook + Mentorship</p>
                      <p className="text-xs text-portuguese-yellow-600 font-bold uppercase tracking-wider">Includes 3 Bonuses</p>
                    </div>
                  </div>

                  {/* Calculations */}
                  <div className="space-y-2.5 pt-4 border-t border-portuguese-yellow-200/20 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Regular Value:</span>
                      <span className="line-through">$99.00</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Interactive Workbook:</span>
                      <span className="text-emerald-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Private Community:</span>
                      <span className="text-emerald-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>3 Exclusive Bonuses:</span>
                      <span className="text-emerald-600">FREE</span>
                    </div>
                    
                    <div className="flex justify-between text-base font-black text-slate-900 border-t border-portuguese-yellow-200/20 pt-3">
                      <span>TOTAL PRICE:</span>
                      <span className="text-ocean-blue-600">$29.00</span>
                    </div>
                  </div>
                </div>

                {/* Social reassurance */}
                <div className="p-4 rounded-xl bg-white border border-portuguese-yellow-200/10 text-[11px] text-slate-500 leading-relaxed font-light mt-8 italic">
                  "This guidebook saved my life. I hope it becomes the same sanctuary of accepting warmth for you." — Miguel, Porto
                </div>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="checkout-success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-12 text-center w-full space-y-8"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-200 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                  <span>PAYMENT SUCCESSFUL</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Welcome to Your New Chapter, {name}!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light max-w-lg mx-auto leading-relaxed">
                  Your purchase was completed successfully. A copy of the guide, your private workbook, and your exclusive bonuses has been sent to <span className="font-semibold text-slate-800">{email}</span>. You can also download them immediately below!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <a
                  id="btn-download-guide"
                  href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" // Warm digital wallpaper as fallback placeholder for PDF download
                  download="The_Authentic_You_Guide.pdf"
                  className="flex-1 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-xs hover:scale-[1.01] transition-all"
                >
                  <Download className="w-4 h-4 text-portuguese-yellow-400" />
                  <span>Download PDF Guide</span>
                </a>

                <a
                  id="btn-join-discord"
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-xs hover:scale-[1.01] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Join Private Circle</span>
                </a>
              </div>

              {/* Personal Closing Note from Gaybriel */}
              <div className="p-6 rounded-2xl bg-portuguese-yellow-50/50 border border-portuguese-yellow-200/30 flex items-start space-x-3 text-left max-w-xl mx-auto">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500/20 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-left">
                  <p className="text-xs font-bold text-slate-800">A Personal Note from Gaybriel:</p>
                  <p className="text-xs text-slate-600 leading-normal font-light italic">
                    "Obrigado for placing your trust in me. Today, you took a courageous, beautiful step. You stopped hiding your light. Download your guide, check your email, and let’s walk this path of acceptance and deep pride together."
                  </p>
                </div>
              </div>

              <div>
                <button
                  id="btn-success-explore"
                  onClick={onClose}
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 hover:underline cursor-pointer"
                >
                  Return to Website
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
