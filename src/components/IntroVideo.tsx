import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false);
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="/Lotus_bud_blooming_in_temple_202605230346.mp4"
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-4xl sm:text-6xl font-display text-white mb-8 drop-shadow-2xl"
            >
              Sapna <span className="text-brand-sakura font-light mx-2">&</span> Roshen
            </motion.h1>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={handleEnter}
              className="px-8 py-3 border border-white/50 rounded-full text-white tracking-[0.2em] uppercase text-sm hover:bg-white/20 transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              View Invitation
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
