import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Users, Award, Target, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-software-development.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and scale with your growth."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications using agile development methodology and user-centric design."
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      quote: "TechSoft Pro delivered exceptional software solutions that transformed our business operations. Their expertise and professionalism are unmatched.",
      author: "Sarah Johnson",
      company: "Global Enterprises",
      role: "CTO"
    },
    {
      quote: "The mobile app they developed exceeded our expectations. The user experience is fantastic and our customers love it.",
      author: "Michael Chen",
      company: "StartupTech",
      role: "Founder"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-accent py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="heading-hero text-primary-foreground">
                  We offer expert solutions for your business
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Expert software consultants and talented programmers delivering innovative technology solutions 
                  that drive your business forward. We build lasting partnerships through exceptional service.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero">
                  <NavLink to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <NavLink to="/services">
                    Learn More
                  </NavLink>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional software development team"
                className="rounded-2xl shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Our Core Services</h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive technology solutions tailored to your business needs, 
              from custom software development to strategic IT consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-professional p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-professional">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-hero">
              <NavLink to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-section">Why Choose TechSoft Pro?</h2>
              <p className="text-professional text-lg">
                With years of experience in software development and IT consulting, we've built a reputation 
                for delivering exceptional solutions that drive business growth and operational efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Team</h4>
                    <p className="text-professional">Skilled developers and consultants with proven track records</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Client-Focused</h4>
                    <p className="text-professional">Long-term partnerships built on trust and exceptional service</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Agile Approach</h4>
                    <p className="text-professional">Fast, iterative development with continuous client collaboration</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="btn-secondary">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-professional p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-professional">Client Satisfaction</p>
                </CardContent>
              </Card>
              <Card className="card-professional p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">On-Time</div>
                  <p className="text-sm text-professional">Project Delivery</p>
                </CardContent>
              </Card>
              <Card className="card-professional p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-professional">Support Available</p>
                </CardContent>
              </Card>
              <Card className="card-professional p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Secure</div>
                  <p className="text-sm text-professional">Code & Data</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">What Our Clients Say</h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-professional p-8">
                <CardContent className="p-0">
                  <blockquote className="text-professional text-lg mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-professional">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your technology goals. 
            Get in touch with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <NavLink to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <NavLink to="/services">
                View Services
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;