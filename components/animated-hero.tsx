"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <Image
          src="/images/avatar/lofi-girl-yt.webp"
          alt="Hero Image"
          width={500}
          height={300}
          className="mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold text-white mb-4">
            Start building with Next.js
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          This is a hero section with some animation.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;