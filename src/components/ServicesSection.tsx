
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  Layers, 
  ShoppingCart, 
  FileCode, 
  Smartphone, 
  Search, 
  Settings, 
  Server, 
  Shield, 
  Database, 
  Code, 
  BarChart3 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-vatech-midnight/50 border border-white/5 hover:border-vatech-blue/30 transition-all duration-300 overflow-hidden group">
      <CardContent className="p-6 relative">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-tech/5 rounded-full blur-3xl group-hover:bg-gradient-tech/10 transition-all duration-500"></div>
        
        <div className="flex flex-col h-full">
          <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">
            {icon}
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-white/60 text-sm">
            {description}
          </p>
          
          <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="#contact" className="text-xs text-vatech-blue hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6 text-vatech-blue" />,
      title: 'Website Design & Development',
      description: 'Custom-designed responsive websites that reflect your brand and meet your business goals.'
    },
    {
      icon: <Layers className="h-6 w-6 text-vatech-purple" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and increase conversions.'
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-vatech-teal" />,
      title: 'E-commerce Development',
      description: 'Robust online stores with secure payment gateways and intuitive shopping experiences.'
    },
    {
      icon: <FileCode className="h-6 w-6 text-vatech-blue" />,
      title: 'CMS Integration',
      description: 'Custom WordPress and other CMS solutions for easy content management.'
    },
    {
      icon: <Code className="h-6 w-6 text-vatech-purple" />,
      title: 'Web App Development',
      description: 'Interactive web applications with advanced functionality for your business needs.'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-vatech-teal" />,
      title: 'Mobile Responsiveness',
      description: 'Websites that work flawlessly across all devices and screen sizes.'
    },
    {
      icon: <Search className="h-6 w-6 text-vatech-blue" />,
      title: 'SEO Optimization',
      description: 'Strategic optimization to improve search rankings and drive organic traffic.'
    },
    {
      icon: <Settings className="h-6 w-6 text-vatech-purple" />,
      title: 'Website Maintenance',
      description: 'Regular updates and support to keep your website secure and performing optimally.'
    },
    {
      icon: <Shield className="h-6 w-6 text-vatech-teal" />,
      title: 'Performance & Security',
      description: 'Speed optimization and security enhancements for fast, secure web experiences.'
    },
    {
      icon: <Server className="h-6 w-6 text-vatech-blue" />,
      title: 'Hosting & Domain Setup',
      description: 'Reliable hosting solutions and domain configuration for maximum uptime.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-vatech-purple" />,
      title: 'API Integration',
      description: 'Connect your website with third-party services and applications for extended functionality.'
    },
    {
      icon: <Database className="h-6 w-6 text-vatech-teal" />,
      title: 'Custom Backend Development',
      description: 'Scalable backend solutions with databases and server-side functionality.'
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vatech-dark via-vatech-dark/95 to-vatech-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital <span className="text-gradient">Services</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We provide end-to-end digital solutions to help businesses thrive in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
