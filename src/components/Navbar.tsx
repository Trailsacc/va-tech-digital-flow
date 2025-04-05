
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-vatech-dark/90 backdrop-blur-md border-b border-white/5" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center text-2xl font-bold group">
          <div className="mr-2 relative">
            <div className="bg-gradient-tech p-2 rounded-md shadow-lg shadow-vatech-blue/20 group-hover:shadow-vatech-blue/30 transition-all duration-300 flex items-center justify-center">
              <Code size={24} className="text-white mr-1" />
              <Zap size={20} className="text-white animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-vatech-teal rounded-full animate-ping opacity-70"></div>
          </div>
          <span className="text-gradient group-hover:opacity-90 transition-opacity">VA Technologies</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm text-white/80 hover:text-white hover:text-gradient transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-gradient-tech hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-vatech-midnight border-y border-white/5 backdrop-blur-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm text-white/80 hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gradient-tech hover:opacity-90 transition-opacity w-full">
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
