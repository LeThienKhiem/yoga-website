'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          {/* Quote */}
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide">
            "Healthy is Wealth
            <br />
            Peace of Mind is Happiness.
            <br />
            Yoga shows the way"
          </h1>

          {/* Author */}
          <motion.p
            className="font-inter text-lg md:text-xl text-white/90 italic mb-12 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            — Swami Vishnudevananda
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="px-10 py-4 bg-[#FF7043] text-white font-inter font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
