import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  ArrowRight, 
  Lightbulb, 
  Rocket, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  Target,
  Zap,
  Brain,
  TrendingUp,
  Heart,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-purple/5 via-disrupting-accent/10 to-disrupting-pink/5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-disrupting-purple/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-disrupting-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-disrupting-pink/30 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-disrupting-cyan/25 rounded-full blur-xl animate-pulse delay-2000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-purple/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
              <div className="w-2 h-2 bg-disrupting-purple rounded-full animate-pulse"></div>
              Disruptive Innovation • Measurable Transformation
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-disrupting-dark mb-8 leading-[0.9] tracking-tight">
              <span className="block">About</span>
              <span className="block text-disrupting-purple animate-pulse">
                Disrupting Labs
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-disrupting-gray mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              We are
              <span className="font-semibold text-disrupting-dark"> disruptive innovators </span>
              who challenge the status quo and build technology that
              <span className="font-semibold text-disrupting-purple"> transforms industries</span>
            </p>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-disrupting-purple/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-disrupting-purple mb-2">
                  500+
                </div>
                <div className="text-disrupting-gray font-medium">Projects Delivered</div>
                <div className="w-full h-1 bg-disrupting-purple rounded-full mt-3 opacity-60"></div>
              </div>
              
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-disrupting-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-disrupting-blue mb-2">
                  50+
                </div>
                <div className="text-disrupting-gray font-medium">Countries Served</div>
                <div className="w-full h-1 bg-disrupting-blue rounded-full mt-3 opacity-60"></div>
              </div>
              
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-disrupting-cyan/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-disrupting-cyan mb-2">
                  250%
                </div>
                <div className="text-disrupting-gray font-medium">Average ROI Boost</div>
                <div className="w-full h-1 bg-disrupting-cyan rounded-full mt-3 opacity-60"></div>
              </div>
              
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-disrupting-accent/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-disrupting-accent mb-2">
                  24/7
                </div>
                <div className="text-disrupting-gray font-medium">Innovation Mode</div>
                <div className="w-full h-1 bg-disrupting-accent rounded-full mt-3 opacity-60"></div>
              </div>
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

      {/* Our Story */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-purple/5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-disrupting-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-disrupting-purple/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-disrupting-purple/20 rounded-full text-sm font-medium text-disrupting-dark mb-8 shadow-lg">
                <Rocket className="w-4 h-4 text-disrupting-purple" />
                Our Foundation Story
              </div>
              <h2 className="text-5xl font-black text-disrupting-dark mb-6 leading-tight">
                <span className="block">Disrupting</span>
                <span className="text-disrupting-purple">The Norm</span>
              </h2>
              <p className="text-lg text-disrupting-gray mb-6 leading-relaxed">
                Founded on the belief that technology should empower human potential, Disrupting Labs emerged from a simple yet revolutionary idea: what if software could not just automate processes, but completely reimagine how businesses operate?
              </p>
              <p className="text-lg text-disrupting-gray mb-6 leading-relaxed">
                Since our inception, we've partnered with forward-thinking companies across 50+ countries, transforming ordinary business operations into extraordinary digital experiences. We don't just build software—we architect the future.
              </p>
              <p className="text-lg text-disrupting-gray leading-relaxed">
                Today, we stand at the forefront of digital innovation, continuously pushing boundaries in AI, ecommerce, IoT, and platform development to create solutions that drive measurable, transformative results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="group relative border-0 bg-disrupting-purple text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/90">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold mb-2 text-disrupting-dark">50+</div>
                  <div className="text-disrupting-gray">Countries Served</div>
                </CardContent>
              </Card>
              <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold mb-2 text-disrupting-dark">98%</div>
                  <div className="text-disrupting-gray">Client Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="group relative border-0 bg-disrupting-blue text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold mb-2">250%</div>
                  <div className="text-white/90">Average ROI</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Disruptive Mindset */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-disrupting-dark">
          <div className="absolute top-20 left-20 w-64 h-64 bg-disrupting-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-disrupting-cyan/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mb-8 shadow-lg">
              <Lightbulb className="w-4 h-4 text-disrupting-accent" />
              Revolutionary Thinking
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              <span className="block">Disruptive</span>
              <span className="text-disrupting-cyan">
                Innovation
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We don't just follow trends—we create them. Our disruptive approach challenges conventional thinking and delivers
              <span className="font-semibold text-white"> breakthrough solutions</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-disrupting-purple rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6">Think Differently</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  We question everything. While others accept "that's how it's always been done," we ask "what if we could do it completely differently?"
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Challenge conventional wisdom</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Embrace experimental approaches</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Pursue breakthrough innovations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-disrupting-cyan rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6">Move Fast</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  In a rapidly evolving digital landscape, speed is survival. We embrace rapid prototyping, agile methodologies, and quick iterations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Rapid prototyping cycles</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Continuous delivery pipeline</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-pink rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Agile decision making</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
              <CardContent className="relative z-10 p-10">
                <div className="w-16 h-16 bg-disrupting-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6">Focus on Impact</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Every line of code we write is focused on one thing: delivering measurable business impact that transforms organizations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Measurable outcomes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-pink rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">Business transformation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-disrupting-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">ROI-driven development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-disrupting-light-gray via-white to-disrupting-cyan/5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-disrupting-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-disrupting-purple/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-disrupting-dark mb-6">Our Core Values</h2>
            <p className="text-xl text-disrupting-gray max-w-3xl mx-auto">
              These principles guide everything we do and define how we approach every challenge and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-disrupting-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Innovation First</h3>
              <p className="text-disrupting-gray leading-relaxed">
                We prioritize breakthrough thinking over safe, incremental improvements.
              </p>
            </Card>
            
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-disrupting-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Partnership</h3>
              <p className="text-disrupting-gray leading-relaxed">
                We work as true partners, understanding your business deeply to create aligned solutions.
              </p>
            </Card>
            
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-disrupting-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Excellence</h3>
              <p className="text-disrupting-gray leading-relaxed">
                We demand the highest standards and deliver solutions that exceed industry benchmarks.
              </p>
            </Card>
            
            <Card className="group relative border-0 bg-white/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-disrupting-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-disrupting-dark mb-4">Growth Mindset</h3>
              <p className="text-disrupting-gray leading-relaxed">
                We continuously evolve and adapt to stay at the forefront of technological advancement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-disrupting-dark">
          <div className="absolute top-20 left-20 w-64 h-64 bg-disrupting-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-disrupting-purple/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mb-8 shadow-lg">
              <Globe className="w-4 h-4 text-disrupting-cyan" />
              Worldwide Transformation
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Global Impact</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our disruptive innovations create ripple effects that transform entire industries worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="text-4xl font-bold text-disrupting-purple mb-4">$2.5B+</div>
              <div className="text-xl font-semibold text-white mb-2">Revenue Generated</div>
              <p className="text-white/80">Our solutions have directly contributed to over $2.5 billion in additional revenue for clients worldwide.</p>
            </Card>
            
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="text-4xl font-bold text-disrupting-cyan mb-4">50M+</div>
              <div className="text-xl font-semibold text-white mb-2">Users Impacted</div>
              <p className="text-white/80">Over 50 million end-users experience improved digital interactions through our platforms.</p>
            </Card>
            
            <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden text-center p-8">
              <div className="text-4xl font-bold text-disrupting-accent mb-4">15</div>
              <div className="text-xl font-semibold text-white mb-2">Industries Disrupted</div>
              <p className="text-white/80">We've introduced breakthrough innovations across 15 different industries.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-disrupting-purple">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Disrupt Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join forward-thinking companies who trust Disrupting Labs to challenge the status quo and create breakthrough solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-disrupting-purple hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl">
                Start Your Transformation
              </Button>
            </Link>
            <Link to="/solutions">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-disrupting-purple px-8 py-4 text-lg font-semibold rounded-xl">
                See Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
