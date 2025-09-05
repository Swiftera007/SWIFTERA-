import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Users, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Settings
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create powerful, user-friendly mobile applications for iOS and Android platforms using the latest technologies and best practices.",
      features: [
        "Native iOS & Android Development",
        "Cross-platform Solutions (React Native, Flutter)",
        "User Experience (UX) Design",
        "App Store Optimization",
        "Maintenance & Support",
        "Performance Optimization"
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin"],
      process: [
        "Requirements Analysis",
        "UI/UX Design",
        "Agile Development",
        "Quality Assurance",
        "App Store Deployment",
        "Ongoing Support"
      ]
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build tailored software solutions that perfectly fit your business needs and scale with your growth.",
      features: [
        "Web Application Development",
        "Desktop Application Development",
        "API Development & Integration",
        "Database Design & Optimization",
        "Legacy System Modernization",
        "Cloud Migration Services"
      ],
      technologies: ["React", "Node.js", "Python", ".NET", "Java", "PostgreSQL"],
      process: [
        "Business Analysis",
        "Architecture Design",
        "Development & Testing",
        "Deployment",
        "Training & Documentation",
        "Maintenance"
      ]
    },
    {
      icon: Users,
      title: "IT Consulting & Strategy",
      description: "Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.",
      features: [
        "Technology Strategy Planning",
        "Digital Transformation",
        "System Architecture Review",
        "Security Assessment",
        "Performance Optimization",
        "Cost Reduction Analysis"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      process: [
        "Current State Analysis",
        "Gap Assessment",
        "Strategy Development",
        "Implementation Planning",
        "Execution Support",
        "Performance Monitoring"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Database design, optimization, and management services"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, infrastructure, and optimization"
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Cybersecurity assessment and implementation"
    }
  ];

  const methodology = [
    {
      icon: Target,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and constraints to create a comprehensive project plan."
    },
    {
      icon: Settings,
      title: "Agile Development",
      description: "Using agile methodology, we deliver working software incrementally with regular feedback cycles."
    },
    {
      icon: Zap,
      title: "Quality Assurance",
      description: "Rigorous testing processes ensure reliable, secure, and high-performing solutions."
    },
    {
      icon: CheckCircle,
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing support and maintenance to ensure long-term success."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-hover to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward. 
            From mobile apps to enterprise software, we deliver excellence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="heading-section">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-professional leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-professional">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="btn-hero">
                    <NavLink to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </NavLink>
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="card-professional p-8">
                    <CardHeader className="p-0 pb-6">
                      <CardTitle className="text-lg font-semibold">Our Process</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-semibold text-primary">
                                {stepIndex + 1}
                              </span>
                            </div>
                            <span className="text-sm text-professional">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Additional Services</h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Comprehensive technology solutions to support every aspect of your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-professional p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-professional">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Our Methodology</h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We follow proven methodologies to ensure successful project delivery and exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-professional text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <NavLink to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <NavLink to="/products">
                View Products
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;