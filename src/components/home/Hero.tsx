import { motion } from 'motion/react';
import { ChevronRight, Users, Star, Map as MapIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
      {/* Background Polish */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-tactical-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tactical-green rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tactical-accent/10 border border-tactical-accent/20 text-tactical-accent text-xs font-mono mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-tactical-accent animate-pulse" />
                Live Training Session Available
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                Go from <span className="text-tactical-accent italic">Noob</span> to <br />
                Ranked in 30 Days
              </h1>
              <p className="text-lg text-tactical-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The only CS2 platform built specifically for beginners. Stop guessing. Start learning the utility, mechanics, and game sense that actually wins rounds.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-tactical-accent text-white font-bold rounded-sm border-b-4 border-black/20 hover:translate-y-[-2px] transition-all tactical-glow flex items-center justify-center gap-2 group whitespace-nowrap">
                  START LEARNING FREE
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-tactical-card text-white font-bold rounded-sm border border-tactical-border hover:bg-tactical-border tracking-wide transition-all whitespace-nowrap">
                  SEE CURRICULUM
                </button>
              </div>
            </motion.div>

            {/* Social Proof Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 py-6 border-y border-tactical-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tactical-card border border-tactical-border flex items-center justify-center">
                  <Users className="w-5 h-5 text-tactical-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono">12,400+</div>
                  <div className="text-xs text-tactical-muted uppercase tracking-wider">Active Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tactical-card border border-tactical-border flex items-center justify-center">
                  <Star className="w-5 h-5 text-tactical-green" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono">4.9/5</div>
                  <div className="text-xs text-tactical-muted uppercase tracking-wider">Course Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tactical-card border border-tactical-border flex items-center justify-center">
                  <MapIcon className="w-5 h-5 text-tactical-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono">Dust 2</div>
                  <div className="text-xs text-tactical-muted uppercase tracking-wider">Top Map Covered</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Demo Video Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 w-full max-w-2xl"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden border-4 border-tactical-card tactical-glow group">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200"
                alt="CS2 Gameplay"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  REC-0014: SMOKE EXECUTE
                </div>
                <div>0:12 / 0:15</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
