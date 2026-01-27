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
          backgroundImage: `url('https://cdn.pixabay.com/photo/2017/09/08/18/07/sun-2729576_1280.jpg')`,
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
