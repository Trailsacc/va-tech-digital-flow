
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Normally we would use a backend API here
      // For demonstration, we'll simulate sending an email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Email content that would be sent
      const emailContent = {
        to: "info@vatechnologies.com",
        from: formData.email,
        subject: formData.subject || "New Contact Form Submission",
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          
          Message:
          ${formData.message}
        `
      };
      
      console.log("Email would be sent with:", emailContent);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Card className="bg-vatech-midnight/50 border border-white/5 hover:border-vatech-blue/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-white/5 mr-4">
                      <Mail className="h-5 w-5 text-vatech-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm text-white/60">info@vatechnologies.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Card className="bg-vatech-midnight/50 border border-white/5 hover:border-vatech-purple/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-white/5 mr-4">
                      <Phone className="h-5 w-5 text-vatech-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-sm text-white/60">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Card className="bg-vatech-midnight/50 border border-white/5 hover:border-vatech-teal/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-white/5 mr-4">
                      <MapPin className="h-5 w-5 text-vatech-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-sm text-white/60">123 Tech Lane, Digital City, 90210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <Card className="lg:col-span-3 bg-vatech-midnight/50 border border-white/5 hover:shadow-lg hover:shadow-vatech-blue/10 transition-all duration-300">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-white/70">Name *</label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 focus:border-vatech-blue transition-colors"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-white/70">Email *</label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-white/5 border-white/10 focus:border-vatech-blue transition-colors"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="subject" className="block text-sm text-white/70">Subject</label>
                  <Input 
                    id="subject"
                    placeholder="Project inquiry"
                    className="bg-white/5 border-white/10 focus:border-vatech-blue transition-colors"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="block text-sm text-white/70">Message *</label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-white/5 border-white/10 focus:border-vatech-blue transition-colors"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-tech hover:opacity-90 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
