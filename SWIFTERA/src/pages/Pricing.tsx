import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, HelpCircle, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹50,000",
      period: "/month",
      description: "Perfect for small businesses getting started",
      badge: null,
      features: [
        "Single mobile app development",
        "Basic UI/UX design",
        "3 months support",
        "Basic analytics integration",
        "Source code delivery",
        "Email support",
        "Basic documentation"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "₹1,50,000",
      period: "/month",
      description: "Most popular choice for growing businesses",
      badge: "Most Popular",
      features: [
        "Web + Mobile app development",
        "Advanced UI/UX design",
        "6 months support",
        "Advanced analytics & reporting",
        "Cloud integration",
        "API development",
        "Source code + documentation",
        "Priority email support",
        "Custom integrations"
      ],
      cta: "Choose Plan",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹3,00,000",
      period: "/month",
      description: "Complete solution for large organizations",
      badge: "Best Value",
      features: [
        "Custom software solution",
        "Complete digital transformation",
        "12 months support",
        "Dedicated project manager",
        "Advanced security features",
        "Third-party integrations",
        "Training and documentation",
        "Priority support (24/7)",
        "On-site consultation",
        "Custom deployment options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What's included in each plan?",
      answer: "Each plan includes different levels of development services, support duration, and features. The Basic plan covers essential mobile app development, Professional adds web development and advanced features, while Enterprise provides complete custom solutions."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes will take effect at your next billing cycle."
    },
    {
      question: "Are there any setup fees?",
      answer: "No, we don't charge any setup fees. The pricing shown is all-inclusive for the development and support services mentioned in each plan."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and online payment methods. For Enterprise clients, we also offer flexible payment terms and invoicing options."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied with our services within the first 30 days, we'll provide a full refund."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, for unique requirements or large-scale projects, we offer custom pricing. Contact our sales team to discuss your specific needs and get a tailored quote."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero mb-6">
              Choose the Perfect <span className="text-primary">Plan</span> for Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transparent pricing with no hidden fees. Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`card-professional relative ${plan.popular ? 'border-primary shadow-hero scale-105' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-hero' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section mb-6">Need Something Different?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business is unique. If our standard plans don't quite fit your needs, 
              we're happy to create a custom solution just for you.
            </p>
            
            <Card className="card-professional max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Custom Solutions</CardTitle>
                <CardDescription>
                  Tailored pricing and features for your specific requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Custom development scope</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Flexible payment terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Dedicated project team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Priority support</span>
                  </div>
                </div>
                <Button size="lg" className="w-full btn-hero">
                  Contact for Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every plan includes our commitment to quality and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Money-back Guarantee</h3>
              <p className="text-muted-foreground text-sm">30-day money-back guarantee on all plans</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-muted-foreground text-sm">Transparent pricing with no surprise charges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Payments</h3>
              <p className="text-muted-foreground text-sm">Multiple payment options and flexible terms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-muted-foreground text-sm">Complimentary consultation included with every plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We have answers.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose your plan today and start building amazing software solutions for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;