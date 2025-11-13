import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  ArrowRight, 
  Building, 
  Heart, 
  GraduationCap, 
  ShoppingBag, 
  Banknote, 
  Factory,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  BarChart3,
  Target,
  Zap,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-blue/5 via-disrupting-purple/10 to-disrupting-cyan/5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-disrupting-blue/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-disrupting-purple/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-disrupting-cyan/30 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-disrupting-accent/25 rounded-full blur-xl animate-pulse delay-2000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-blue/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
              <div className="w-2 h-2 bg-disrupting-blue rounded-full animate-pulse"></div>
              Industry-Specific Digital Transformation
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-disrupting-dark mb-8 leading-[0.9] tracking-tight">
              <span className="block">Industry</span>
              <span className="block text-disrupting-blue animate-pulse">
                Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-disrupting-gray mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Tailored digital solutions designed for
              <span className="font-semibold text-disrupting-dark"> specific industries</span>,
              delivering measurable outcomes that
              <span className="font-semibold text-disrupting-blue"> transform businesses</span>
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-md border border-white/60 rounded-full shadow-lg">
                <Award className="w-5 h-5 text-disrupting-blue" />
                <span className="text-sm sm:text-base font-semibold text-disrupting-dark">Cross-industry expertise</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-md border border-white/60 rounded-full shadow-lg">
                <TrendingUp className="w-5 h-5 text-disrupting-purple" />
                <span className="text-sm sm:text-base font-semibold text-disrupting-dark">Revenue-focused outcomes</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-md border border-white/60 rounded-full shadow-lg">
                <Users className="w-5 h-5 text-disrupting-cyan" />
                <span className="text-sm sm:text-base font-semibold text-disrupting-dark">Millions of delighted users</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-md border border-white/60 rounded-full shadow-lg">
                <Target className="w-5 h-5 text-disrupting-accent" />
                <span className="text-sm sm:text-base font-semibold text-disrupting-dark">Outcome-obsessed delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-disrupting-blue/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-disrupting-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-blue/5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-disrupting-purple/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-disrupting-cyan/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-blue/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
              <Target className="w-4 h-4 text-disrupting-blue" />
              Specialized Industry Expertise
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-disrupting-dark mb-8 leading-tight">
              <span className="block">Proven</span>
              <span className="text-disrupting-blue">
                Results
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-disrupting-gray max-w-4xl mx-auto leading-relaxed">
              Real transformations across industries with
              <span className="font-semibold text-disrupting-dark"> measurable outcomes </span>
              and lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Retail & Ecommerce */}
            <Card className="group relative border-0 bg-white/60 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-12">
                <div className="w-16 h-16 bg-disrupting-purple rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-disrupting-dark mb-6 group-hover:text-disrupting-purple transition-all duration-300">Retail & Ecommerce</h3>
                <p className="text-lg text-disrupting-gray mb-8 leading-relaxed">
                  Complete digital commerce ecosystems that drive sales, enhance customer experience, and scale with market demands.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-disrupting-gray">Omnichannel commerce platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-disrupting-gray">AI-powered personalization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-disrupting-gray">Advanced analytics & reporting</span>
                  </div>
                </div>

                <div className="bg-disrupting-light-gray p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-disrupting-dark mb-2">Case Study</h4>
                  <p className="text-disrupting-gray">Global fashion retailer unlocked dramatic growth and dramatically reduced cart abandonment with our AI-powered personalization platform.</p>
                </div>
                
                <Button className="bg-disrupting-purple hover:bg-disrupting-purple/90 text-white px-6 py-3 rounded-xl font-semibold">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Healthcare */}
            <Card className="group relative border-0 bg-white/60 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-12">
                <div className="w-16 h-16 bg-disrupting-blue rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-disrupting-dark mb-6 group-hover:text-disrupting-blue transition-all duration-300">Healthcare</h3>
                <p className="text-lg text-disrupting-gray mb-8 leading-relaxed">
                  HIPAA-compliant platforms that improve patient outcomes, streamline operations, and advance medical research.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-disrupting-gray">Electronic health records (EHR)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-disrupting-gray">Telemedicine platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-disrupting-gray">Medical imaging AI</span>
                  </div>
                </div>

                <div className="bg-disrupting-light-gray p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-disrupting-dark mb-2">Case Study</h4>
                  <p className="text-disrupting-gray">Hospital network now delivers faster triage and markedly higher diagnostic confidence through our AI-powered care system.</p>
                </div>
                
                <Button className="bg-disrupting-blue hover:bg-disrupting-blue/90 text-white px-6 py-3 rounded-xl font-semibold">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Industries */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-disrupting-dark">
          <div className="absolute top-20 left-20 w-64 h-64 bg-disrupting-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-disrupting-purple/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mb-8 shadow-lg">
              <Globe className="w-4 h-4 text-disrupting-cyan" />
              Global Industry Coverage
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">More Industries We Serve</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our expertise spans across multiple sectors, delivering specialized solutions for unique industry challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8">
                <div className="w-12 h-12 bg-disrupting-cyan rounded-lg flex items-center justify-center mb-6">
                  <Banknote className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Financial Services</h3>
                <p className="text-white/80 mb-4">Secure, compliant fintech solutions that enhance customer experience.</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Digital banking platforms</li>
                  <li>• Payment processing systems</li>
                  <li>• Fraud detection AI</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8">
                <div className="w-12 h-12 bg-disrupting-accent rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                <p className="text-white/80 mb-4">Digital learning platforms that engage students and support educators.</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Learning management systems</li>
                  <li>• Adaptive learning algorithms</li>
                  <li>• Student performance analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8">
                <div className="w-12 h-12 bg-disrupting-pink rounded-lg flex items-center justify-center mb-6">
                  <Factory className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
                <p className="text-white/80 mb-4">IoT-enabled smart factories and supply chain optimization.</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Industrial IoT platforms</li>
                  <li>• Predictive maintenance</li>
                  <li>• Quality control systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-cyan/5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-disrupting-purple/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-disrupting-blue/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-disrupting-dark mb-6">Our Solution Approach</h2>
            <p className="text-xl text-disrupting-gray max-w-3xl mx-auto">
              Every industry solution follows our proven methodology for delivering measurable business outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-disrupting-purple to-disrupting-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Discovery</h3>
              <p className="text-disrupting-gray">Deep industry analysis and stakeholder interviews to understand unique challenges.</p>
            </Card>
            
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-disrupting-blue to-disrupting-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Strategy</h3>
              <p className="text-disrupting-gray">Custom solution architecture designed for your industry's specific requirements.</p>
            </Card>
            
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-disrupting-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Execution</h3>
              <p className="text-disrupting-gray">Agile development with continuous feedback and industry best practices.</p>
            </Card>
            
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-disrupting-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Optimization</h3>
              <p className="text-disrupting-gray">Continuous monitoring and data-driven improvements for sustained growth.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-disrupting-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Transform Your Industry
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join industry leaders who trust Disrupting Labs to deliver innovative solutions that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-disrupting-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl">
                Discuss Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-disrupting-blue px-8 py-4 text-lg font-semibold rounded-xl">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
