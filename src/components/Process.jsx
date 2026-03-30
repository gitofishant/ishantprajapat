import React from 'react';
import ScrollReveal from './ScrollReveal';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      desc: "An intensive 30-minute session dissecting your current infrastructure and identifying critical bottlenecks."
    },
    {
      num: "02",
      title: "Strategic Blueprint",
      desc: "We engineer a bespoke, data-driven roadmap customized specifically for your market positioning."
    },
    {
      num: "03",
      title: "Deployment & Scale",
      desc: "Flawless execution of platforms and campaigns followed by obsessive optimization."
    }
  ];

  return (
    <section id="process" className="py-32 bg-dark-bg border-y border-glass-border relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <ScrollReveal className="max-w-3xl mx-auto mb-24">
          <span className="text-primary font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary"></span>
            The Methodology
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mt-4">Predictable Growth in <br/> Three Phases.</h2>
        </ScrollReveal>

        <div className="relative">
          {/* Dashed Connecting Line indicating process flow */}
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-slate-800 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.2} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-dark-card border border-glass-border rounded-full flex items-center justify-center mb-8 shadow-xl relative group">
                  <div className="absolute inset-0 border border-primary/0 rounded-full group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500"></div>
                  <span className="text-3xl font-black text-white">{step.num}</span>
                  {/* Glowing dot indicator */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#B5FF00]"></div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 max-w-xs mx-auto leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
