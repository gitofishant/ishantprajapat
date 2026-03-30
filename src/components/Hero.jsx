import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mesh min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-glass-bg border border-glass-border rounded-full px-5 py-2 mb-10 shadow-lg backdrop-blur-md"
        >
          <span className="flex w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#B5FF00]"></span>
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
            Online Business Growth Consultant <Sparkles size={14} className="text-primary"/>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.1]"
        >
          Scale Your Business <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-300% animate-gradient">
            To New Heights
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed tracking-tight"
        >
          We architect battle-tested digital strategies. High-converting websites, powerful mobile applications, and precision marketing engineered for <strong className="text-white font-medium">exponential revenue growth.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
        >
          <Link
            to="booking"
            smooth={true}
            offset={-80}
            className="w-full sm:w-auto cursor-pointer group flex items-center justify-center gap-3 bg-white text-black hover:bg-primary px-8 py-4.5 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(181,255,0,0.3)] hover:-translate-y-1"
          >
            Start Your Transformation
            <div className="w-8 h-8 rounded-full bg-black text-white group-hover:bg-black group-hover:text-primary flex items-center justify-center transition-colors">
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={-80}
            className="w-full sm:w-auto cursor-pointer text-slate-300 hover:text-white border-b-2 border-transparent hover:border-primary pb-1 text-lg font-medium transition-all duration-300"
          >
            Explore Capabilities
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
