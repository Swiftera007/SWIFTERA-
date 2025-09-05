import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Shield, Smartphone, Globe, Database, Zap } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero mb-6">
              Innovative Software <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our cutting-edge software solutions designed to transform your business operations and drive digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product - SupremeChit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Featured Product
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                SupremeChit
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A comprehensive chit fund management solution developed with regulatory compliance in mind. 
                Our software features transparent and automated accounting systems specifically designed for 
                modern chit fund operations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Regulatory Compliance</h4>
                    <p className="text-muted-foreground">Built to meet all regulatory requirements and standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Automated Accounting</h4>
                    <p className="text-muted-foreground">Transparent and automated financial management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">User-Friendly Interface</h4>
                    <p className="text-muted-foreground">Intuitive design for easy chit fund management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Real-time Reporting</h4>
                    <p className="text-muted-foreground">Comprehensive analytics and reporting features</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-hero">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-8 shadow-hero">
                  <div className="h-full w-full bg-white/10 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Users className="w-24 h-24 mx-auto mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold mb-2">SupremeChit</h3>
                      <p className="text-white/80">Chit Fund Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of software solutions across different categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-professional group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Financial Software</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive financial management and accounting solutions for businesses of all sizes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-professional group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Mobile Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Native and cross-platform mobile apps designed for optimal user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-professional group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Web Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Modern web applications and progressive web apps for enhanced accessibility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-professional group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Tailored software solutions designed specifically for your business needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">More Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover additional software solutions to meet your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Business Suite</CardTitle>
                    <Badge variant="secondary">Enterprise</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Complete business management solution with CRM, inventory, and project management capabilities.
                </CardDescription>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Customer Relationship Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Inventory Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Project Tracking</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">E-Commerce Platform</CardTitle>
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Full-featured e-commerce solution with payment integration and analytics.
                </CardDescription>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Payment Gateway Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Inventory Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Analytics Dashboard</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Mobile App Suite</CardTitle>
                    <Badge variant="secondary">New</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Cross-platform mobile applications with offline capabilities and real-time sync.
                </CardDescription>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">iOS & Android Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Offline Mode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Real-time Synchronization</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with our innovative software solutions and take your business to the next level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;