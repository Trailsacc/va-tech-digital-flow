
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Digital Solutions",
    "Web Development",
    "UI/UX Design",
    "E-commerce Solutions"
  ];
  
  useEffect(() => {
    const text = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && displayText === text) {
      // Wait before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayText(isDeleting 
        ? text.substring(0, displayText.length - 1)
        : text.substring(0, displayText.length + 1)
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting, texts]);

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Transforming Ideas into
            <span className="block text-gradient mt-2">{displayText}<span className="animate-pulse">|</span></span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            We build cutting-edge web solutions that elevate your digital presence and drive business growth.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-gradient-tech text-white hover:opacity-90 transition-opacity px-8 py-6">
              Our Services
              <ArrowRight size={16} className="ml-2" />
            </Button>
            
            <Button variant="outline" className="border-white/20 hover:bg-white/5 transition-colors px-8 py-6">
              View Portfolio
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '12+', label: 'Years Experience' },
            { number: '50+', label: 'Happy Clients' },
            { number: '99%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-gradient">{stat.number}</h3>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-vatech-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
