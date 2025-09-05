import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award, Globe, TrendingUp, Shield, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "We prioritize our clients' success and build long-term relationships based on trust and transparency."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative solutions to solve complex business challenges."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every project we deliver."
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "We think globally while acting locally, bringing world-class solutions to businesses everywhere."
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Completed"
    },
    {
      number: "25+",
      label: "Happy Clients"
    },
    {
      number: "5+",
      label: "Years Experience"
    },
    {
      number: "10+",
      label: "Team Members"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Mobifish
            </Badge>
            <h1 className="heading-hero mb-6">
              Transforming Ideas into <span className="text-primary">Digital Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a team of passionate software consultants and talented programmers dedicated to delivering 
              innovative solutions that drive business success and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to bridge the gap between technology and business needs, 
                  Mobifish Private Limited has been at the forefront of digital transformation since our establishment.
                </p>
                <p>
                  Located in the vibrant tech hub of Coimbatore, we have grown from a small team of 
                  passionate developers to a comprehensive software development company serving clients 
                  across various industries.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and a relentless 
                  pursuit of excellence in everything we do.
                </p>
              </div>
              <div className="mt-8">
                <Button className="btn-hero">
                  Learn More About Our Services
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="card-professional text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be a trusted advisor and technology partner for businesses of all sizes, 
                  providing innovative software solutions that solve real-world challenges and 
                  drive sustainable growth. We focus on building long-term relationships with 
                  our clients based on transparency, quality, and mutual success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To become a globally recognized software development company that empowers 
                  businesses through cutting-edge technology solutions. We envision a future 
                  where our innovative software products and services contribute to creating 
                  a more efficient, connected, and prosperous society.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-professional text-center group hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who make our success possible
            </p>
          </div>
          
          <Card className="card-professional max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Expert Software Consultants</h3>
                  <p className="text-muted-foreground mb-6">
                    Our team consists of experienced software consultants, talented programmers, 
                    UI/UX designers, and project managers who are passionate about technology 
                    and committed to delivering exceptional results.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Certified professionals with industry expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Innovative thinkers and problem solvers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Dedicated to client success and satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Why Choose Mobifish?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what sets us apart in the competitive software development landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl">Agile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We follow agile methodologies to ensure rapid development, continuous feedback, 
                  and flexible adaptation to changing requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rigorous testing and quality assurance processes ensure that every solution 
                  we deliver meets the highest standards of performance and reliability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our commitment doesn't end at delivery. We provide comprehensive support 
                  and maintenance to ensure your software continues to perform optimally.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your business goals 
            with innovative software solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;