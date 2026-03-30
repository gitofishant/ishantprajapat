import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Globe, Smartphone, TrendingUp, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} className="text-primary" />,
      title: "Digital Platforms",
      description: "High-performance websites engineered with modern frameworks to maximize speed, SEO, and user conversion rates.",
      outcome: "Increases conversions and leads.",
    },
    {
      icon: <Smartphone size={40} className="text-primary" />,
      title: "Mobile Architecture",
      description: "Native and cross-platform mobile applications designed to build unparalleled user loyalty and operational efficiency.",
      outcome: "Boosts retention and user engagement.",
    },
    {
      icon: <TrendingUp size={40} className="text-primary" />,
      title: "Growth Marketing",
      description: "Data-obsessed paid media and organic strategies positioning your brand directly in front of high-intent buyers.",
      outcome: "Massively scales your online revenue.",
    }
  ];

  return (
    <section id="services" className="py-32 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-primary"></span>
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white mb-6">Expert Solutions <br/> Engineered For <span className="text-slate-500">Scale.</span></h2>
          </div>
          <p className="text-slate-400 text-lg md:max-w-md pb-2">We build digital infrastructure designed specifically to capture attention, generate leads, and close sales.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="group glass-panel p-10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500"></div>
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-dark-card border border-glass-border flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <ArrowUpRight size={24} className="text-slate-600 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-10 flex-grow relative z-10">{service.description}</p>
                
                <div className="pt-6 border-t border-glass-border mt-auto relative z-10">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Expected Outcome</span>
                  <p className="text-white font-medium">{service.outcome}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
