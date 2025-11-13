import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import BrandsCarousel from "@/components/BrandsCarousel";
import {
  ArrowRight,
  Zap,
  Globe,
  Brain,
  ShoppingCart,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Star,
  BarChart,
  Heart,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { useReachOutModal } from "@/components/ReachOutModal";

export default function Index() {
  const { openModal } = useReachOutModal();
  return (
    <div className="min-h-screen bg-disrupting-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-disrupting-dark">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-wine/5 via-burgundy/10 to-wine/5 animate-gradient-shift" style={{'backgroundSize': '400% 400%'}}>
          {/* Floating Geometric Shapes with enhanced animations */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-wine/20 to-burgundy/20 rounded-full blur-xl animate-float-1 animate-glow-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-wine/15 to-pink-500/15 rounded-full blur-2xl animate-float-2 animate-glow-pulse" style={{'animationDelay': '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-burgundy/25 to-wine/25 rounded-full blur-lg animate-float-3" style={{'animationDelay': '0.5s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-br from-pink-500/20 to-burgundy/20 rounded-full blur-xl animate-float-1" style={{'animationDelay': '2s'}}></div>

          {/* Additional floating orbs */}
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-wine/10 to-transparent rounded-full blur-3xl animate-float-2 opacity-50" style={{'animationDelay': '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-pink-500/15 to-wine/15 rounded-full blur-2xl animate-float-3" style={{'animationDelay': '1.5s'}}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          {/* Animated radial gradient overlay */}
          <div className="absolute inset-0 opacity-30 animate-pulse-slow" style={{'background': 'radial-gradient(circle at 50% 50%, hsl(var(--wine) / 0.1) 0%, transparent 70%)'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-wine/20 backdrop-blur-sm border border-wine/40 rounded-full text-sm font-medium text-pink-300 mb-8 shadow-lg animate-text-reveal hover:shadow-lg hover:shadow-wine/50 transition-all duration-300" style={{'animationDelay': '0.1s'}}>
              <div className="w-2 h-2 bg-wine rounded-full animate-pulse"></div>
              Disruptive Innovation • Measurable Results
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              <span className="block animate-text-reveal" style={{'animationDelay': '0.2s'}}>Transform With</span>
              <span className="block bg-gradient-to-r from-wine via-pink-400 to-burgundy bg-clip-text text-transparent animate-shimmer drop-shadow-lg animate-glow-pulse" style={{'animationDelay': '0.3s'}}>
                Disrupting Labs
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl lg:text-4xl text-pink-200 mb-6 leading-relaxed max-w-4xl mx-auto font-light animate-text-reveal" style={{'animationDelay': '0.4s'}}>
              Revolutionary solutions for forward-thinking teams
            </p>
            <p className="text-lg sm:text-xl text-white/70 mb-12 leading-relaxed max-w-4xl mx-auto animate-text-reveal" style={{'animationDelay': '0.5s'}}>
              We leverage cutting-edge AI and bold design to transform your digital presence
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-text-reveal" style={{'animationDelay': '0.6s'}}>
              <Button onClick={openModal} size="lg" className="group relative bg-gradient-to-r from-wine to-burgundy hover:from-wine/85 hover:to-burgundy/85 text-white px-12 py-8 text-xl sm:text-2xl font-bold rounded-2xl shadow-2xl shadow-wine/40 transform transition-all duration-300 hover:scale-105 hover:shadow-wine/70 overflow-hidden hover:animate-glow-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-wine to-burgundy opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"></div>
                <span className="relative z-10 flex items-center">
                  Start Disrupting
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>

              <Button size="lg" variant="outline" className="group border-2 border-wine/40 text-white hover:bg-wine/15 px-12 py-8 text-xl sm:text-2xl font-bold rounded-2xl backdrop-blur-sm bg-white/5 shadow-xl transform transition-all duration-300 hover:scale-105 hover:border-wine/70 hover:shadow-wine/40 hover:animate-glow-pulse">
                <Globe className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 animate-text-reveal" style={{'animationDelay': '0.7s'}}>
              <div className="flex items-center gap-3 px-6 py-3 bg-wine/20 backdrop-blur-md border border-wine/40 rounded-full shadow-lg hover:shadow-wine/40 transition-all duration-300 hover:scale-105 hover:border-wine/70 hover:bg-wine/30">
                <Award className="w-5 h-5 text-pink-300" />
                <span className="text-sm sm:text-base font-semibold text-white">Industry Leaders</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-wine/15 backdrop-blur-md border border-burgundy/40 rounded-full shadow-lg hover:shadow-burgundy/40 transition-all duration-300 hover:scale-105 hover:border-burgundy/70 hover:bg-burgundy/25">
                <Target className="w-5 h-5 text-pink-200" />
                <span className="text-sm sm:text-base font-semibold text-white">Proven Results</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-burgundy/20 backdrop-blur-md border border-burgundy/40 rounded-full shadow-lg hover:shadow-burgundy/40 transition-all duration-300 hover:scale-105 hover:border-burgundy/70 hover:bg-burgundy/30">
                <Star className="w-5 h-5 text-red-300" />
                <span className="text-sm sm:text-base font-semibold text-white">Award Winners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer">
          <div className="w-6 h-10 border-2 border-wine/40 rounded-full flex justify-center hover:border-wine/80 transition-all duration-300 group-hover:border-wine/100 group-hover:shadow-lg group-hover:shadow-wine/40">
            <div className="w-1 h-3 bg-gradient-to-b from-wine to-burgundy rounded-full mt-2 animate-pulse group-hover:h-4 transition-all duration-300"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 overflow-hidden bg-disrupting-dark">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-dark via-disrupting-dark to-disrupting-purple/5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-disrupting-blue/10 to-disrupting-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-disrupting-purple/10 to-disrupting-pink/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block">Our</span>
              <span className="bg-gradient-to-r from-disrupting-purple via-disrupting-cyan to-disrupting-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-disrupting-cyan max-w-4xl mx-auto leading-relaxed">
              Beautifully crafted solutions that make your vision come alive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group relative border-0 bg-wine/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden hover:shadow-wine/30">
              <div className="absolute inset-0 bg-gradient-to-br from-wine/25 to-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-wine via-burgundy to-wine rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-wine/50">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-wine group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Ecommerce
                </h3>
                <p className="text-xl sm:text-2xl text-disrupting-cyan mb-8 leading-relaxed">
                  Enchanting shopping experiences powered by AI
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-purple to-disrupting-blue rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Personalization</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-blue to-disrupting-cyan rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Scalable</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-cyan to-disrupting-accent rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Fast & Reliable</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-burgundy/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden hover:shadow-burgundy/30">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/25 to-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy via-wine to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-burgundy/50">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-burgundy group-hover:to-wine group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  AI Flows
                </h3>
                <p className="text-xl sm:text-2xl text-disrupting-cyan mb-8 leading-relaxed">
                  Intelligent insights that guide your journey
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-blue to-disrupting-cyan rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Analytics</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-cyan to-disrupting-purple rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Automation</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-purple to-disrupting-pink rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">AI-Powered</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-wine/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden hover:shadow-wine/30">
              <div className="absolute inset-0 bg-gradient-to-br from-wine/25 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-wine via-pink-500 to-burgundy rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-wine/50">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-wine group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Growth
                </h3>
                <p className="text-xl sm:text-2xl text-disrupting-cyan mb-8 leading-relaxed">
                  Marketing that amplifies your reach
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-accent to-disrupting-pink rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Analytics</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-pink to-disrupting-purple rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Campaigns</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-purple to-disrupting-blue rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">ROI Focused</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-burgundy/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden hover:shadow-burgundy/30">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/25 to-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy via-wine to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-burgundy/50">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-burgundy group-hover:to-wine group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Scale
                </h3>
                <p className="text-xl sm:text-2xl text-disrupting-cyan mb-8 leading-relaxed">
                  Infrastructure that grows with you
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-cyan to-disrupting-blue rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Cloud Native</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-blue to-disrupting-purple rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Microservices</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-purple to-disrupting-accent rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Auto-Scale</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-wine/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden hover:shadow-wine/30">
              <div className="absolute inset-0 bg-gradient-to-br from-wine/25 to-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-wine via-burgundy to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-wine/50">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-wine group-hover:to-burgundy group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Global
                </h3>
                <p className="text-xl sm:text-2xl text-disrupting-cyan mb-8 leading-relaxed">
                  Seamlessly beautiful worldwide
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-purple to-disrupting-accent rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Localized</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-accent to-disrupting-pink rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Compliant</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-pink to-disrupting-purple rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Multi-Region</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-burgundy/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden hover:shadow-burgundy/30">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/25 to-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy via-wine to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-burgundy/50">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-burgundy group-hover:to-wine group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  CRM
                </h3>
                <p className="text-xl sm:text-2xl text-disrupting-cyan mb-8 leading-relaxed">
                  Deepen relationships with every interaction
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-pink to-disrupting-cyan rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Customer Data</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-cyan to-disrupting-blue rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Engagement</span>
                  </div>
                  <div className="flex items-center text-disrupting-cyan group-hover:text-white transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-disrupting-blue to-disrupting-purple rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-lg">Retention</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Innovation Hub */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-disrupting-dark">
          <div className="absolute top-10 left-10 w-72 h-72 bg-disrupting-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-disrupting-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-disrupting-cyan/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block">Innovation</span>
              <span className="text-disrupting-cyan">
                Labs
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Cutting-edge technology built for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* AI & Machine Learning */}
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="w-16 h-16 bg-disrupting-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 text-center">AI</h3>
                <p className="text-xl text-white/80 mb-6 leading-relaxed text-center">
                  Smart intelligence
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-white/70">
                    <span>Deep Learning</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[95%] h-full bg-disrupting-purple rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>NLP Processing</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-disrupting-blue rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>Computer Vision</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[88%] h-full bg-disrupting-cyan rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cloud & Infrastructure */}
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="w-16 h-16 bg-disrupting-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 text-center">Infrastructure</h3>
                <p className="text-xl text-white/80 mb-6 leading-relaxed text-center">
                  Cloud infrastructure
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-white/70">
                    <span>Auto-Scaling</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-disrupting-cyan rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>Load Balancing</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[96%] h-full bg-disrupting-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>Security</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[99%] h-full bg-disrupting-pink rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emerging Tech */}
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="w-16 h-16 bg-disrupting-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 text-center">Future</h3>
                <p className="text-xl text-white/80 mb-6 leading-relaxed text-center">
                  Next-gen tech
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-white/70">
                    <span>Blockchain</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-disrupting-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>IoT Networks</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-disrupting-pink rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>Quantum Ready</span>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[75%] h-full bg-disrupting-purple rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <Zap className="w-5 h-5 text-disrupting-purple" />
              <span className="text-sm font-semibold text-white/90">Always-on innovation squads</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <Brain className="w-5 h-5 text-disrupting-cyan" />
              <span className="text-sm font-semibold text-white/90">Full-spectrum AI expertise</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <Globe className="w-5 h-5 text-disrupting-blue" />
              <span className="text-sm font-semibold text-white/90">Global-scale architecture</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <Target className="w-5 h-5 text-disrupting-accent" />
              <span className="text-sm font-semibold text-white/90">Impact-driven delivery</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="group bg-white text-disrupting-dark hover:bg-white/90 px-10 py-6 text-lg font-bold rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105" asChild>
              <Link to="/services">
                <span className="flex items-center">
                  Explore Our Tech Stack
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Disrupting Labs */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-purple/5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-disrupting-blue/10 to-disrupting-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-disrupting-accent/10 to-disrupting-pink/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-disrupting-dark mb-8 leading-tight">
              <span className="block">Why</span>
              <span className="bg-gradient-to-r from-wine via-pink-400 to-burgundy bg-clip-text text-transparent">
                Disrupting Labs
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-disrupting-gray max-w-4xl mx-auto leading-relaxed">
              Proven results that drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-disrupting-blue/5 to-disrupting-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-disrupting-blue via-disrupting-cyan to-disrupting-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-disrupting-dark mb-6 group-hover:bg-gradient-to-r group-hover:from-disrupting-blue group-hover:to-disrupting-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Results
                </h3>
                <p className="text-xl text-disrupting-gray leading-relaxed mb-8">
                  ROI-focused solutions that deliver measurable outcomes
                </p>
                <div className="px-6 py-4 bg-gradient-to-r from-disrupting-blue/10 to-disrupting-cyan/10 rounded-xl">
                  <p className="text-base font-semibold text-disrupting-dark">Real impact on your metrics</p>
                </div>
              </div>
            </Card>

            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-disrupting-cyan/5 to-disrupting-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-disrupting-cyan via-disrupting-accent to-disrupting-pink rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-disrupting-dark mb-6 group-hover:bg-gradient-to-r group-hover:from-disrupting-cyan group-hover:to-disrupting-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Partnership
                </h3>
                <p className="text-xl text-disrupting-gray leading-relaxed mb-8">
                  We become part of your team
                </p>
                <div className="px-6 py-4 bg-gradient-to-r from-disrupting-cyan/10 to-disrupting-accent/10 rounded-xl">
                  <p className="text-base font-semibold text-disrupting-dark">Built on trust and loyalty</p>
                </div>
              </div>
            </Card>

            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-disrupting-accent/5 to-disrupting-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-disrupting-accent via-disrupting-pink to-disrupting-purple rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-disrupting-dark mb-6 group-hover:bg-gradient-to-r group-hover:from-disrupting-accent group-hover:to-disrupting-pink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Innovation
                </h3>
                <p className="text-xl text-disrupting-gray leading-relaxed mb-8">
                  We set trends, not follow them
                </p>
                <div className="px-6 py-4 bg-gradient-to-r from-disrupting-accent/10 to-disrupting-pink/10 rounded-xl">
                  <p className="text-base font-semibold text-disrupting-dark">Built for future challenges</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <BrandsCarousel className="bg-disrupting-dark" />

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-disrupting-purple to-disrupting-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            Let's Build Together
          </h2>
          <p className="text-2xl sm:text-3xl text-white/90 mb-12 leading-relaxed">
            Transform your business today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={openModal} size="lg" className="bg-white text-disrupting-purple hover:bg-white/90 px-10 py-8 text-2xl font-bold rounded-xl">
              Get Started
            </Button>
            <Button onClick={openModal} size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-disrupting-purple px-10 py-8 text-2xl font-bold rounded-xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-disrupting-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-wine via-disrupting-purple to-burgundy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-wine via-pink-400 to-burgundy bg-clip-text text-transparent">Disrupting Labs</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Revolutionary digital solutions that disrupt industries
            </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-base">
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Ecommerce</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI Flows</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">CRM</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Growth</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Links</h4>
              <ul className="space-y-2 text-base">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-base">
              © 2024 Disrupting Labs. All rights reserved.
            </p>
            <Button onClick={openModal} className="bg-gradient-to-r from-wine to-burgundy hover:from-wine/90 hover:to-burgundy/90 text-white mt-6 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-wine/40 transition-all duration-300 hover:scale-105">
              Start Your Project
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
