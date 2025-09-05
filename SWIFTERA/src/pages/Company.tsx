import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Users, Award, Target } from "lucide-react";

const Company = () => {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Mobifish Private Limited was established with a vision to provide innovative software solutions."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise-level software solution, marking our entry into the market."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Expanded our team to include specialized developers, designers, and project managers."
    },
    {
      year: "2022",
      title: "Product Launch",
      description: "Launched SupremeChit, our flagship chit fund management software solution."
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Received recognition for excellence in software development and client satisfaction."
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Expanding our services and reaching new markets with innovative solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Company Information
            </Badge>
            <h1 className="heading-hero mb-6">
              About <span className="text-primary">Mobifish Private Limited</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Learn more about our company, our journey, and the people who make our success possible.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="heading-section mb-6">Company Overview</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mobifish Private Limited is a dynamic software development company based in Coimbatore, 
                  Tamil Nadu. Since our establishment, we have been committed to delivering high-quality 
                  software solutions that help businesses transform their operations and achieve their goals.
                </p>
                <p>
                  Our expertise spans across mobile app development, web development, custom software solutions, 
                  and IT consulting services. We pride ourselves on our ability to understand client needs 
                  and deliver solutions that exceed expectations.
                </p>
                <p>
                  With a focus on innovation, quality, and customer satisfaction, we have built a reputation 
                  as a trusted technology partner for businesses across various industries.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Private Limited Company</h3>
                  <p className="text-sm text-muted-foreground">Registered entity in India</p>
                </CardContent>
              </Card>
              
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Established</h3>
                  <p className="text-sm text-muted-foreground">2019</p>
                </CardContent>
              </Card>
              
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Headquarters</h3>
                  <p className="text-sm text-muted-foreground">Coimbatore, Tamil Nadu</p>
                </CardContent>
              </Card>
              
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Team Size</h3>
                  <p className="text-sm text-muted-foreground">10+ Professionals</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-center mb-12">Company Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Legal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Company Name</h4>
                    <p className="text-muted-foreground">Mobifish Private Limited</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Registration Status</h4>
                    <p className="text-muted-foreground">Active Private Limited Company</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Industry</h4>
                    <p className="text-muted-foreground">Software Development & IT Services</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Registered Address</h4>
                    <p className="text-muted-foreground">
                      SF No: 544/1A1B<br />
                      Pollachi Main Road<br />
                      Coimbatore – 641021<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our company's growth and success
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="card-professional">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{milestone.year}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-center mb-12">Company Culture</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Innovation Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We encourage creative thinking and embrace new technologies to deliver cutting-edge solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our collaborative environment fosters knowledge sharing and collective problem-solving.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Excellence Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We maintain high standards in everything we do and continuously strive for excellence.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;