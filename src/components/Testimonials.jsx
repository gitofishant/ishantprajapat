import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Founder, TechNova Solutions",
      text: "Ishant and his team completely overhauled our digital presence. Within 3 months of launching our new site and ad campaign, our organic leads doubled.",
    },
    {
      name: "David Chen",
      role: "CEO, Local Eats Delivery",
      text: "If you want genuine business scaling, Ishant is the man. The app they built for us has become central to our operations and customer retention.",
    },
    {
      name: "Elena Rodriguez",
      role: "Owner, Elevate Fitness",
      text: "We were struggling to get bookings online. The new funnel strategy and website they implemented increased our conversions by over 150% in the first quarter.",
    }
  ];

  return (
    <section className="py-24 bg-dark-card border-t border-white/5 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Client Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Don't Just Take Our Word For It</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-dark-bg p-8 rounded-2xl border border-white/5 h-full relative">
                <Quote className="absolute top-6 right-6 text-white/5" size={64} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 italic text-lg leading-relaxed relative z-10">"{review.text}"</p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-primary text-sm font-medium">{review.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
