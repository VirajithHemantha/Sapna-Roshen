import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

export const CeremonyDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-sakura/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-sakura-deep uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                The Sacred Union
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-sakura-deep/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
              A Celebration of <br />
              <span className="italic font-light text-brand-sakura-deep">Tradition & Love</span>
            </h2>

            <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
              We are honored to invite you and your family to witness our union as we exchange vows in a traditional Poruwa ceremony, surrounded by the beauty of nature and the warmth of our loved ones.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-sakura/30 pl-10 sm:pl-12 py-4">

              {/* Calendar */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <Calendar className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>Sunday, July 26</span>
                  </h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">2026</p>
                </div>
              </div>

              {/* Clock */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>08:00 AM Onwards</span>
                  </h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Poruwa Ceremony at 8.15 AM</p>
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <MapPin className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>Villa Crystal Malabe</span>
                  </h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

