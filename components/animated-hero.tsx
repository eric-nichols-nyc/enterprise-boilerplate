"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-74px)] bg-gray-900">
     <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center"
      >
       <motion.div variants={itemVariants}>
          <Image
            src="/images/avatar/lofi-girl-yt.webp"
            alt="Hero Image"
            width={500}
            height={300}
            className="mx-auto mb-8"
          />
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-5xl font-bold text-white mb-4">
          Start building your next project today.
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8">
          This is a hero section with some animation.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;