
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, image }) => {
  return (
    <Card className="bg-transparent border-none overflow-hidden group">
      <CardContent className="p-0 relative">
        <div className="aspect-[16/10] overflow-hidden rounded-lg">
          <div 
            className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <span className="text-xs text-vatech-purple">{category}</span>
            <h3 className="text-lg font-medium mt-1">{title}</h3>
          </div>
          
          <ArrowUpRight className="ml-auto text-vatech-blue" size={20} />
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: 'TechFusion E-commerce Platform',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1964&auto=format&fit=crop'
    },
    {
      title: 'Horizon Financial Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Bloom Wellness Mobile App',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Stellar Marketing Agency Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop'
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-white/60 max-w-xl mt-4">
              Explore our latest work and discover how we've helped clients achieve their digital goals.
            </p>
          </div>
          
          <a href="#" className="mt-6 md:mt-0 text-sm font-medium text-vatech-blue hover:text-vatech-purple transition-colors">
            View All Projects →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
