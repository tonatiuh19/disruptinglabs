import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  Brain, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Code,
  Cloud,
  Database,
  Smartphone,
  Monitor,
  Settings,
  Shield,
  BarChart
} from "lucide-react";
import { Link } from "react-router-dom";
import { useReachOutModal } from "@/components/ReachOutModal";

export default function Services() {
  const { openModal } = useReachOutModal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-purple/5 via-disrupting-blue/10 to-disrupting-cyan/5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-disrupting-purple/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-disrupting-blue/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-disrupting-accent/30 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-disrupting-cyan/25 rounded-full blur-xl animate-pulse delay-2000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-purple/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
              <div className="w-2 h-2 bg-disrupting-purple rounded-full animate-pulse"></div>
              Comprehensive Technology Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-disrupting-dark mb-8 leading-[0.9] tracking-tight">
              <span className="block">Our</span>
              <span className="block text-disrupting-purple animate-pulse">
                Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl lg:text-4xl text-disrupting-gray mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Complete technology solutions for your business
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button onClick={openModal} size="lg" className="group relative bg-disrupting-purple hover:bg-disrupting-purple/90 text-white px-12 py-8 text-xl sm:text-2xl font-bold rounded-2xl shadow-2xl shadow-disrupting-purple/25 transform transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button size="lg" variant="outline" className="group border-2 border-disrupting-purple/30 text-disrupting-dark hover:bg-disrupting-purple/5 px-12 py-8 text-xl sm:text-2xl font-bold rounded-2xl backdrop-blur-sm bg-white/50 shadow-xl transform transition-all duration-300 hover:scale-105 hover:border-disrupting-purple">
                <BarChart className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Explore
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-disrupting-purple/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-disrupting-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-purple/5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-disrupting-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-disrupting-purple/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-disrupting-dark mb-8 leading-tight">
              <span className="block">Core</span>
              <span className="text-disrupting-purple">
                Services
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-disrupting-gray max-w-4xl mx-auto leading-relaxed">
              Powerful solutions built to scale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Ecommerce Solutions */}
            <Card className="group relative border-0 bg-white/60 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-12">
                <div className="w-16 h-16 bg-disrupting-purple rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-black text-disrupting-dark mb-4 group-hover:text-disrupting-purple transition-all duration-300">Ecommerce</h3>
                <p className="text-xl text-disrupting-gray mb-8 leading-relaxed">
                  AI-powered shopping platforms that scale
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">Custom Stores</h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">AI Personalization</h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">Global Scaling</h4>
                    </div>
                  </div>
                </div>

                <Button onClick={openModal} className="bg-disrupting-purple hover:bg-disrupting-purple/90 text-white px-8 py-4 rounded-xl font-bold text-lg">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* AI Flows */}
            <Card className="group relative border-0 bg-white/60 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-12">
                <div className="w-16 h-16 bg-disrupting-blue rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-black text-disrupting-dark mb-4 group-hover:text-disrupting-blue transition-all duration-300">AI Flows</h3>
                <p className="text-xl text-disrupting-gray mb-8 leading-relaxed">
                  Intelligent automation and insights
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">Analytics</h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">Automation</h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">AI-Powered</h4>
                    </div>
                  </div>
                </div>

                <Button onClick={openModal} className="bg-disrupting-blue hover:bg-disrupting-blue/90 text-white px-8 py-4 rounded-xl font-bold text-lg">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* CRM */}
            <Card className="group relative border-0 bg-white/60 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-disrupting-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-12">
                <div className="w-16 h-16 bg-disrupting-cyan rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-black text-disrupting-dark mb-4 group-hover:text-disrupting-cyan transition-all duration-300">CRM</h3>
                <p className="text-xl text-disrupting-gray mb-8 leading-relaxed">
                  Manage customers and relationships at scale
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">Customer Data</h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">Engagement Tools</h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-disrupting-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-disrupting-dark text-lg">Retention</h4>
                    </div>
                  </div>
                </div>

                <Button onClick={openModal} className="bg-disrupting-cyan hover:bg-disrupting-cyan/90 text-white px-8 py-4 rounded-xl font-bold text-lg">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-disrupting-dark">
          <div className="absolute top-20 left-20 w-64 h-64 bg-disrupting-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-disrupting-cyan/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block">More</span>
              <span className="text-disrupting-cyan">
                Services
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Beyond the core offerings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8 text-center">
                <div className="w-14 h-14 bg-disrupting-cyan rounded-lg flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Growth</h3>
                <p className="text-lg text-white/80">Marketing that drives results</p>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8 text-center">
                <div className="w-14 h-14 bg-disrupting-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Global</h3>
                <p className="text-lg text-white/80">Multi-region platforms</p>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8 text-center">
                <div className="w-14 h-14 bg-disrupting-pink rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Mobile</h3>
                <p className="text-lg text-white/80">Apps for all platforms</p>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-8 text-center">
                <div className="w-14 h-14 bg-disrupting-purple rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">IoT</h3>
                <p className="text-lg text-white/80">Smart connected systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-blue/5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-disrupting-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-disrupting-purple/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-disrupting-dark mb-6">Tech Stack</h2>
            <p className="text-2xl text-disrupting-gray max-w-3xl mx-auto">
              Cutting-edge technologies for modern solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden p-8">
              <div className="w-14 h-14 bg-disrupting-purple rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-disrupting-dark mb-4">Frontend</h3>
              <div className="space-y-2 text-lg text-disrupting-gray">
                <p>React • Vue • Angular</p>
                <p>TypeScript • Next.js</p>
                <p>Tailwind CSS • PWA</p>
              </div>
            </Card>

            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden p-8">
              <div className="w-14 h-14 bg-disrupting-blue rounded-lg flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-disrupting-dark mb-4">Backend</h3>
              <div className="space-y-2 text-lg text-disrupting-gray">
                <p>Node.js • Python • Go</p>
                <p>GraphQL • REST APIs</p>
                <p>PostgreSQL • MongoDB</p>
              </div>
            </Card>

            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden p-8">
              <div className="w-14 h-14 bg-disrupting-cyan rounded-lg flex items-center justify-center mb-6">
                <Cloud className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-disrupting-dark mb-4">Cloud</h3>
              <div className="space-y-2 text-lg text-disrupting-gray">
                <p>AWS • Google Cloud • Azure</p>
                <p>Docker • Kubernetes</p>
                <p>CI/CD • Infrastructure</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-disrupting-purple">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            Ready to Begin?
          </h2>
          <p className="text-2xl sm:text-3xl text-white/90 mb-12 leading-relaxed">
            Let's build something great together
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={openModal} size="lg" className="bg-white text-disrupting-purple hover:bg-white/90 px-10 py-8 text-2xl font-bold rounded-xl">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-disrupting-purple px-10 py-8 text-2xl font-bold rounded-xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
