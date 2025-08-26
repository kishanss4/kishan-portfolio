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
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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

  const contactInfo = [
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      content: "Bangalore, India",
      subtext: "Available for remote work"
    },
    {
      icon: <Mail className="text-accent" size={24} />,
      title: "Email",
      content: "kishanss1804@gmail.com",
      subtext: "Best way to reach me"
    },
    {
      icon: <Phone className="text-primary-glow" size={24} />,
      title: "Phone",
      content: "+91 8553874421",
      subtext: "Available during work hours"
    },
    {
      icon: <Clock className="text-green-400" size={24} />,
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
      color: "hover:bg-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/kishanss4",
      icon: <Github size={20} />,
      color: "hover:bg-gray-700"
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or just chat 
                about technology and AI. Whether you're looking for a collaborator, have a question 
                about my work, or want to explore potential partnerships, don't hesitate to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover neon-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-secondary/50">{info.icon}</div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-sm text-primary font-medium">{info.content}</p>
                        <p className="text-xs text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="neon-border bg-gradient-secondary border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Available for Work</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Currently open to new opportunities and exciting projects
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Send Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="bg-secondary/50 border-border focus:border-primary"
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
                        className="bg-secondary/50 border-border focus:border-primary"
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
                      className="bg-secondary/50 border-border focus:border-primary"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <MessageCircle className="mr-2 animate-spin" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Info Section */}
                <div className="mt-6 space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-0.5" size={16} />
                      <div className="text-sm">
                        <p className="text-primary font-medium">Quick Response Guaranteed</p>
                        <p className="text-muted-foreground">
                          I typically respond within 24 hours. For urgent matters, feel free to call!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-start space-x-3">
                      <Mail className="text-accent mt-0.5" size={16} />
                      <div className="text-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
