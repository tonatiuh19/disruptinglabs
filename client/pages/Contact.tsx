import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useReachOutModal } from "@/components/ReachOutModal";

export default function Contact() {
  const { openModal } = useReachOutModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-cyan/5 via-disrupting-blue/10 to-disrupting-purple/5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-disrupting-cyan/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-disrupting-blue/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-disrupting-purple/30 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-disrupting-accent/25 rounded-full blur-xl animate-pulse delay-2000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-cyan/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
              <div className="w-2 h-2 bg-disrupting-cyan rounded-full animate-pulse"></div>
              Let's Build Something Extraordinary Together
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-disrupting-dark mb-8 leading-[0.9] tracking-tight">
              <span className="block">Let's Build</span>
              <span className="block text-disrupting-cyan animate-pulse">
                Extraordinary
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl lg:text-4xl text-disrupting-gray mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Let's create something amazing
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-disrupting-cyan/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-disrupting-cyan mb-2">
                  24hrs
                </div>
                <div className="text-disrupting-gray font-medium">Response Time</div>
                <div className="w-full h-1 bg-disrupting-cyan rounded-full mt-3 opacity-60"></div>
              </div>
              
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-disrupting-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-disrupting-blue mb-2">
                  98%
                </div>
                <div className="text-disrupting-gray font-medium">Client Satisfaction</div>
                <div className="w-full h-1 bg-disrupting-blue rounded-full mt-3 opacity-60"></div>
              </div>
              
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-disrupting-purple/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-disrupting-purple mb-2">
                  6mo
                </div>
                <div className="text-disrupting-gray font-medium">Avg Implementation</div>
                <div className="w-full h-1 bg-disrupting-purple rounded-full mt-3 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-disrupting-cyan/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-disrupting-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-cyan/5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-disrupting-purple/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-disrupting-blue/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-cyan/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
                <Send className="w-4 h-4 text-disrupting-cyan" />
                Start Your Project Journey
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-disrupting-dark mb-6 leading-tight">
                <span className="block">Tell Us</span>
                <span className="text-disrupting-cyan">Your Ideas</span>
              </h2>
              <p className="text-xl text-disrupting-gray mb-8">
                Share your project and we'll respond within 24 hours
              </p>
              
              <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-disrupting-dark font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border-disrupting-cyan/20 focus:border-disrupting-cyan"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-disrupting-dark font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border-disrupting-cyan/20 focus:border-disrupting-cyan"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-disrupting-dark font-semibold">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-disrupting-cyan/20 focus:border-disrupting-cyan"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-disrupting-dark font-semibold">Project Type *</Label>
                        <Select onValueChange={(value) => handleSelectChange(value, 'projectType')}>
                          <SelectTrigger className="rounded-xl border-disrupting-cyan/20">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ecommerce">Ecommerce Platform</SelectItem>
                            <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                            <SelectItem value="platform">High-Scale Platform</SelectItem>
                            <SelectItem value="mobile">Mobile Application</SelectItem>
                            <SelectItem value="iot">IoT Solution</SelectItem>
                            <SelectItem value="marketing">Digital Marketing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-disrupting-dark font-semibold">Project Budget</Label>
                        <Select onValueChange={(value) => handleSelectChange(value, 'budget')}>
                          <SelectTrigger className="rounded-xl border-disrupting-cyan/20">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                            <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                            <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                            <SelectItem value="250k-500k">$250k - $500k</SelectItem>
                            <SelectItem value="500k+">$500k+</SelectItem>
                            <SelectItem value="discuss">Let's discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-disrupting-dark font-semibold">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full rounded-xl border-disrupting-cyan/20 focus:border-disrupting-cyan"
                        placeholder="Tell us about your project goals, challenges, and what you'd like to achieve..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-disrupting-cyan hover:bg-disrupting-cyan/90 text-white px-8 py-5 text-xl font-bold rounded-xl">
                      Send <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-blue/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
                  <Globe className="w-4 h-4 text-disrupting-blue" />
                  Get In Touch
                </div>
                <h3 className="text-5xl sm:text-6xl font-black text-disrupting-dark mb-6 leading-tight">
                  <span className="block">Ways To</span>
                  <span className="text-disrupting-blue">Connect</span>
                </h3>
                <div className="space-y-6">
                  <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-disrupting-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-disrupting-dark mb-1">Email</h4>
                          <p className="text-disrupting-gray">hello@garbrix.com</p>
                          <p className="text-sm text-disrupting-gray">We respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-disrupting-blue rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-disrupting-dark mb-1">Phone</h4>
                          <p className="text-disrupting-gray">+1 (555) 123-4567</p>
                          <p className="text-sm text-disrupting-gray">Business hours support</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-disrupting-purple rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-disrupting-dark mb-1">Headquarters</h4>
                          <p className="text-disrupting-gray">San Francisco, CA</p>
                          <p className="text-sm text-disrupting-gray">Serving clients globally</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-disrupting-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-disrupting-dark mb-1">Business Hours</h4>
                          <p className="text-disrupting-gray">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                          <p className="text-sm text-disrupting-gray">24/7 support for active projects</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Quick Actions */}
              <Card className="group relative border-0 bg-disrupting-cyan/5 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-disrupting-dark mb-4">Quick Actions</h4>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start rounded-xl border-disrupting-cyan/30 hover:bg-disrupting-cyan/10" asChild>
                      <Link to="/services">
                        <MessageSquare className="mr-3 h-4 w-4" />
                        View Our Services
                      </Link>
                    </Button>
                    <Button onClick={openModal} variant="outline" className="w-full justify-start rounded-xl border-disrupting-blue/30 hover:bg-disrupting-blue/10">
                      <Calendar className="mr-3 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl border-disrupting-purple/30 hover:bg-disrupting-purple/10" asChild>
                      <Link to="/solutions">
                        <Globe className="mr-3 h-4 w-4" />
                        Explore Solutions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-disrupting-dark">
          <div className="absolute top-20 left-20 w-64 h-64 bg-disrupting-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-disrupting-purple/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mb-8 shadow-lg">
              <Award className="w-4 h-4 text-disrupting-cyan" />
              The Disrupting Labs Advantage
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Disrupting Labs?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're not just another development agency. We're innovation partners committed to your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8 text-center">
                <div className="w-16 h-16 bg-disrupting-cyan rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Delivery</h3>
                <p className="text-white/80 mb-6">
                  We deliver enterprise-grade solutions in 6 months while maintaining the highest quality standards.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-disrupting-cyan rounded-full flex items-center justify-center">
                      <CheckCircle className="h-2 w-2 text-white" />
                    </div>
                    <span className="text-sm text-white/80">Agile methodology</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-disrupting-blue rounded-full flex items-center justify-center">
                      <CheckCircle className="h-2 w-2 text-white" />
                    </div>
                    <span className="text-sm text-white/80">Weekly progress updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8 text-center">
                <div className="w-16 h-16 bg-disrupting-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-white/80 mb-6">
                  Work directly with senior developers, architects, and strategists—no junior staff or outsourcing.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-disrupting-blue rounded-full flex items-center justify-center">
                      <CheckCircle className="h-2 w-2 text-white" />
                    </div>
                    <span className="text-sm text-white/80">Senior-level expertise</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-disrupting-purple rounded-full flex items-center justify-center">
                      <CheckCircle className="h-2 w-2 text-white" />
                    </div>
                    <span className="text-sm text-white/80">Direct communication</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8 text-center">
                <div className="w-16 h-16 bg-disrupting-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-white/80 mb-6">
                  98% client satisfaction rate with 250% average ROI improvement across all projects.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-disrupting-purple rounded-full flex items-center justify-center">
                      <CheckCircle className="h-2 w-2 text-white" />
                    </div>
                    <span className="text-sm text-white/80">Measurable outcomes</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-disrupting-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="h-2 w-2 text-white" />
                    </div>
                    <span className="text-sm text-white/80">Ongoing support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-disrupting-cyan">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            Ready to Begin?
          </h2>
          <p className="text-2xl sm:text-3xl text-white/90 mb-12 leading-relaxed">
            Let's build something great
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={openModal} size="lg" className="bg-white text-disrupting-cyan hover:bg-white/90 px-10 py-8 text-2xl font-bold rounded-xl">
              Get Started
            </Button>
            <Button onClick={openModal} size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-disrupting-cyan px-10 py-8 text-2xl font-bold rounded-xl">
              Learn More
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
