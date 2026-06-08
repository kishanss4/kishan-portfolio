import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// ✅ EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_2ypb15e';
const EMAILJS_TEMPLATE_ID = 'template_0vcadm8';
const EMAILJS_PUBLIC_KEY = 'JghaQ89QB3zBrRkg2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref: headerRef, isInView: headerInView } = useScrollReveal({ threshold: 0.2 });
  const { ref: contentRef, isInView: contentInView } = useScrollReveal({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: <MapPin className="text-primary" size={22} />,
      title: "Location",
      content: "Bangalore, India",
      subtext: "Available for remote work"
    },
    {
      icon: <Mail className="text-accent" size={22} />,
      title: "Email",
      content: "kishanss1804@gmail.com",
      subtext: "Best way to reach me"
    },
    {
      icon: <Phone className="text-primary-glow" size={22} />,
      title: "Phone",
      content: "+91 8553874421",
      subtext: "Available during work hours"
    },
    {
      icon: <Clock className="text-green-400" size={22} />,
      title: "Response Time",
      content: "Within 24 hours",
      subtext: "Usually much faster"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kishanss1804",
      icon: <Linkedin size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/kishanss4",
      icon: <Github size={20} />,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Match your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kishan S S',
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you within 24 hours!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or email me directly at kishanss1804@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I'm always excited to discuss new opportunities, innovative projects, or just chat 
                about technology and AI. Whether you're looking for a collaborator, have a question 
                about my work, or want to explore potential partnerships, don't hesitate to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="neon-border bg-card/50 backdrop-blur-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="p-2 rounded-lg bg-secondary/50 flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {info.icon}
                        </motion.div>
                        <div className="space-y-0.5 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm">{info.title}</h4>
                          <p className="text-xs md:text-sm text-primary font-medium truncate">{info.content}</p>
                          <p className="text-[11px] text-muted-foreground">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h4 className="font-semibold text-foreground mb-3 text-sm">Follow Me</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary/50 transition-all duration-300 hover:shadow-glow hover:bg-secondary"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Card className="neon-border glass border-border/30">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 bg-green-400 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            '0 0 0 0 rgb(74 222 128 / 0.4)',
                            '0 0 0 8px rgb(74 222 128 / 0)',
                            '0 0 0 0 rgb(74 222 128 / 0)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-green-400 font-medium text-sm">Available for Work</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Currently open to new opportunities and exciting projects
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm gradient-border">
              <CardContent className="p-6 md:p-8 relative">
                <h3 className="text-xl md:text-2xl font-bold gradient-text mb-6">Send Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-secondary/50 border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-secondary/50 border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject *</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary focus:ring-1 focus:ring-primary/50 resize-none transition-all"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <MessageCircle size={20} />
                          </motion.div>
                          <span className="ml-2">Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* Info Section */}
                <div className="mt-6 space-y-3">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                      <div className="text-xs">
                        <p className="text-primary font-medium">Quick Response Guaranteed</p>
                        <p className="text-muted-foreground">
                          I typically respond within 24 hours. For urgent matters, feel free to call!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-start gap-2.5">
                      <Mail className="text-accent mt-0.5 flex-shrink-0" size={15} />
                      <div className="text-xs">
                        <p className="text-accent font-medium">Direct Email Delivery</p>
                        <p className="text-muted-foreground">
                          Your message will be delivered directly to my inbox via secure email service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
