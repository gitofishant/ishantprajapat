import React from 'react';
import { Link } from 'react-scroll';
import { Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div className="md:col-span-2 space-y-4">
          <Link to="home" smooth={true} className="cursor-pointer text-2xl font-bold tracking-tight inline-block mb-2">
            Ishant<span className="text-primary">Prajapat</span>
          </Link>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Premium Digital Growth Consultant helping businesses scale online using proven strategies and cutting-edge technology.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Process'].map((link) => (
              <li key={link}>
                <Link to={link.toLowerCase()} smooth={true} offset={-80} className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
          <a href="mailto:hello@ishantprajapat.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <Mail size={18} />
            hello@ishantprajapat.com
          </a>
          
          <div className="pt-4 flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center flex flex-col items-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Ishant Prajapat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
