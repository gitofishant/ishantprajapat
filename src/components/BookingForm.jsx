import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Mail, MapPin } from 'lucide-react';

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Custom booking fields requested by user integrated into Lumara design
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', businessType: '', date: '', time: ''
  });

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '03:00 PM', '04:30 PM'];
  const today = new Date().toISOString().split('T')[0];

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after success
      setTimeout(() => setIsSuccess(false), 4000);
      setFormData({name: '', email: '', phone: '', businessType: '', date: '', time: ''});
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-dark-bg border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Info Content */}
        <ScrollReveal className="lg:col-span-5 space-y-10">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4 block">
              Strategy Session
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Let's start the <br/>
              <span className="text-lumara-blue">Productive</span> <br/>
              <span className="text-lumara-gradient">Growth.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              We exclusively work with committed action-takers. Fill out the form to schedule your deep-dive audit.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-6 bg-dark-card border border-glass-border p-6 rounded-2xl hover:border-lumara-blue/50 transition-colors">
              <div className="w-14 h-14 bg-dark-bg rounded-xl flex items-center justify-center border border-glass-border shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Say Hello</h4>
                <a href="mailto:hello@ishantprajapat.com" className="text-slate-400 hover:text-lumara-blue transition-colors text-lg">
                  hello@ishantprajapat.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-dark-card border border-glass-border p-6 rounded-2xl hover:border-lumara-blue/50 transition-colors">
              <div className="w-14 h-14 bg-dark-bg rounded-xl flex items-center justify-center border border-glass-border shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Location</h4>
                <p className="text-slate-400 text-lg">
                  New York, United States
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT COLUMN: Contact Form exactly matching Lumara Theme */}
        <ScrollReveal delay={0.2} className="lg:col-span-7">
          <div className="bg-dark-card border border-glass-border rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            
            {/* Success Overlay taking over the form container */}
            {isSuccess && (
              <div className="absolute inset-0 z-20 bg-dark-card/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 transition-all">
                <h3 className="text-3xl font-black text-white mb-2">Request Secured.</h3>
                <p className="text-lumara-blue text-lg">Check your email for the meeting invite.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name*" 
                    required 
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    className="w-full bg-[#1B232D] border border-glass-border rounded-[10px] py-4 px-5 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-lumara-blue/60 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email*" 
                    required 
                    value={formData.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    className="w-full bg-[#1B232D] border border-glass-border rounded-[10px] py-4 px-5 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-lumara-blue/60 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number*" 
                    required 
                    value={formData.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                    className="w-full bg-[#1B232D] border border-glass-border rounded-[10px] py-4 px-5 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-lumara-blue/60 transition-all"
                  />
                </div>
                <div>
                  <select 
                    required 
                    value={formData.businessType}
                    onChange={(e) => updateForm('businessType', e.target.value)}
                    className="w-full bg-[#1B232D] border border-glass-border rounded-[10px] py-4 px-5 text-sm font-medium text-slate-500 appearance-none focus:outline-none focus:border-lumara-blue/60 transition-all custom-select"
                  >
                    <option value="" disabled>Business Type*</option>
                    <option value="startup" className="text-white">Tech Startup</option>
                    <option value="local" className="text-white">Local Business</option>
                    <option value="ecommerce" className="text-white">E-Commerce</option>
                    <option value="b2b" className="text-white">B2B Services</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-2 px-1">Meeting Date*</label>
                  <input 
                    type="date" 
                    min={today}
                    required 
                    value={formData.date}
                    onChange={(e) => updateForm('date', e.target.value)}
                    className="w-full bg-[#1B232D] border border-glass-border rounded-[10px] py-4 px-5 text-sm font-medium text-slate-300 focus:outline-none focus:border-lumara-blue/60 transition-all custom-date-picker"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-2 px-1">Time Slot*</label>
                  <select 
                    required 
                    value={formData.time}
                    onChange={(e) => updateForm('time', e.target.value)}
                    className="w-full bg-[#1B232D] border border-glass-border rounded-[10px] py-4 px-5 text-sm font-medium text-slate-300 appearance-none focus:outline-none focus:border-lumara-blue/60 transition-all custom-select"
                  >
                    <option value="" disabled>Select Time*</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time} className="text-white">{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-lumara-gradient text-white w-auto px-10 py-5 rounded-[6px] text-base font-bold shadow-lg hover:shadow-[0_0_20px_rgba(75,182,239,0.4)] transition-all hover:scale-[1.02] disabled:opacity-75 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Lock In Strategy Call"}
                </button>
              </div>
            </form>

            <style dangerouslySetInnerHTML={{__html: `
              .custom-date-picker::-webkit-calendar-picker-indicator {
                filter: invert(1);
                opacity: 0.5;
                cursor: pointer;
              }
              .custom-select {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.5)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 1.2rem center;
                background-size: 1.2em;
              }
            `}} />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default BookingForm;
