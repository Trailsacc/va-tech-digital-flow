
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-vatech-midnight border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold text-gradient block mb-4">VA Technologies</a>
            <p className="text-sm text-white/60 mb-4">
              Creating cutting-edge digital solutions for forward-thinking businesses since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-vatech-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-vatech-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-vatech-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-vatech-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-vatech-blue transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">CMS Integration</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Mobile Responsiveness</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} VA Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
