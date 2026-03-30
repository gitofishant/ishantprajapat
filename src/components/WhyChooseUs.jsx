import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Target, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    { icon: <Target className="text-primary" size={24} />, title: "Result-Driven Approach", text: "We don't just build things; we build things that convert." },
    { icon: <Users className="text-secondary" size={24} />, title: "Expert Team", text: "Senior developers and battle-tested digital marketers." },
    { icon: <TrendingUp className="text-primary" size={24} />, title: "ROI-Focused Strategies", text: "Every dollar spent is engineered to generate a return." },
    { icon: <ShieldCheck className="text-secondary" size={24} />, title: "End-to-End Support", text: "We manage the entire pipeline from design to launch." }
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <ScrollReveal>
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Numbers That<br/>Speak Volumes</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            We don't rely on guesswork. Our methodologies are backed by data and years of testing across multiple industries. Choosing us means choosing predictable growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  {pt.icon}
                </div>
                <h4 className="text-lg font-bold text-white mt-2">{pt.title}</h4>
                <p className="text-sm text-slate-400">{pt.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 rounded-3xl border border-primary/30 text-center">
                <h3 className="text-5xl font-black text-white mb-2">250+</h3>
                <p className="text-primary font-medium">Projects Completed</p>
              </div>
              <div className="bg-dark-card p-8 rounded-3xl border border-white/5 text-center shadow-xl">
                <h3 className="text-4xl font-black text-white mb-2">45</h3>
                <p className="text-slate-400 font-medium">Active Clients</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-dark-card p-8 rounded-3xl border border-white/5 text-center shadow-xl">
                <h3 className="text-4xl font-black text-white mb-2">99%</h3>
                <p className="text-slate-400 font-medium">Client Retention</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-transparent p-8 rounded-3xl border border-secondary/30 text-center">
                <h3 className="text-5xl font-black text-white mb-2">300%</h3>
                <p className="text-secondary font-medium">Avg ROI Increase</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default WhyChooseUs;
