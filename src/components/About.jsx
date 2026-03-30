import React from 'react';
import { User, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-card border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Abstract Image Placeholder */}
        <ScrollReveal delay={0.1} className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-dark-bg border border-white/5 shadow-2xl relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
             <User size={120} className="text-white/10" strokeWidth={1} />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-[0_10px_40px_rgba(59,130,246,0.3)] border border-white/20">
            <h3 className="text-4xl font-extrabold text-white">10+</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mt-1">Years<br/>Experience</p>
          </div>
        </ScrollReveal>

        {/* Text Content */}
        <ScrollReveal delay={0.2} className="space-y-6 lg:pl-8 mt-12 md:mt-0">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">Your Partner in <br />Digital Growth</h2>
          </div>
          
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              Hi, I'm <span className="text-white font-semibold">Ishant Prajapat</span>. Throughout my career, I've had one single focus: helping small businesses, startups, and local enterprises transform their online presence and multiply their revenue.
            </p>
            <p>
              I don't just provide advice. I work hands-on alongside a hand-picked, elite team of developers and digital marketers. From high-converting websites to complex mobile applications and precision-targeted ad campaigns—we execute the vision so you can focus on running your business.
            </p>
          </div>

          <ul className="space-y-4 mt-8 pt-6 border-t border-white/10">
            {[
              "Proven Scaling Strategies",
              "ROI-Obsessed Campaigns",
              "Custom Tech Solutions"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-primary" size={24} />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
