import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, RotateCcw, FileText, Clock, Mail } from "lucide-react";

// Delivery Policy Page
export const DeliveryPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Truck className="w-4 h-4 mr-2" />
              Delivery Policy
            </Badge>
            <h1 className="heading-hero mb-6">
              Our <span className="text-primary">Delivery</span> Commitment
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are committed to delivering high-quality software solutions on time and within budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Project Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We provide realistic project timelines based on the scope and complexity of your requirements. 
                  Our delivery schedules are communicated clearly at the project inception and are adhered to strictly.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile Apps: 8-16 weeks depending on complexity</li>
                  <li>• Web Applications: 6-12 weeks depending on features</li>
                  <li>• Custom Software: Timeline discussed based on requirements</li>
                  <li>• Updates and Maintenance: 24-48 hours for minor updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Delivery Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our structured delivery process ensures quality and transparency at every stage:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">1.</span>
                    <div>
                      <h4 className="font-semibold">Requirements Analysis</h4>
                      <p className="text-sm text-muted-foreground">Detailed analysis and project planning</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">2.</span>
                    <div>
                      <h4 className="font-semibold">Development Sprints</h4>
                      <p className="text-sm text-muted-foreground">Agile development with regular updates</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">3.</span>
                    <div>
                      <h4 className="font-semibold">Testing & Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive testing before delivery</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">4.</span>
                    <div>
                      <h4 className="font-semibold">Deployment & Handover</h4>
                      <p className="text-sm text-muted-foreground">Complete deployment and documentation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Post-Delivery Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our commitment doesn't end with delivery. We provide comprehensive support to ensure 
                  your software continues to perform optimally.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Warranty period as specified in the contract</li>
                  <li>• Bug fixes and critical updates</li>
                  <li>• Technical support during business hours</li>
                  <li>• Training and documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Privacy Policy Page
export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="heading-hero mb-6">
              Your <span className="text-primary">Privacy</span> Matters
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us, such as when you:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Contact us through our website or email</li>
                  <li>• Request a quote or consultation</li>
                  <li>• Subscribe to our newsletter</li>
                  <li>• Engage with our services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide and improve our services</li>
                  <li>• Respond to your inquiries and requests</li>
                  <li>• Send you updates about our services (with your consent)</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. We regularly 
                  review and update our security practices to ensure the highest level of protection.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@mobifish.in</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Refund Policy Page
export const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <RotateCcw className="w-4 h-4 mr-2" />
              Refund Policy
            </Badge>
            <h1 className="heading-hero mb-6">
              Fair <span className="text-primary">Refund</span> Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We strive for complete customer satisfaction and offer fair refund terms for our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Refund Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Refunds may be considered in the following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Project cancellation within 7 days of contract signing</li>
                  <li>• Failure to deliver as per agreed specifications</li>
                  <li>• Mutual agreement to terminate the project</li>
                  <li>• Technical impossibility to complete the project</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Refund Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our refund process is designed to be fair and transparent:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">1.</span>
                    <div>
                      <h4 className="font-semibold">Request Submission</h4>
                      <p className="text-sm text-muted-foreground">Submit refund request with valid reasons</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">2.</span>
                    <div>
                      <h4 className="font-semibold">Review Process</h4>
                      <p className="text-sm text-muted-foreground">Internal review within 5-7 business days</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">3.</span>
                    <div>
                      <h4 className="font-semibold">Decision Communication</h4>
                      <p className="text-sm text-muted-foreground">Written communication of the decision</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary">4.</span>
                    <div>
                      <h4 className="font-semibold">Refund Processing</h4>
                      <p className="text-sm text-muted-foreground">Processing within 10-15 business days if approved</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Non-Refundable Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The following are generally non-refundable:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Work completed and delivered as per specifications</li>
                  <li>• Third-party licenses and subscriptions</li>
                  <li>• Custom development work after approval</li>
                  <li>• Consultation and planning services already rendered</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Terms of Service Page
export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </Badge>
            <h1 className="heading-hero mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Service Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By engaging our services, you agree to these terms and conditions. Our services include 
                  software development, consulting, maintenance, and support as specified in individual 
                  project agreements.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">As our client, you agree to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide accurate and complete project requirements</li>
                  <li>• Respond to communications in a timely manner</li>
                  <li>• Provide necessary access and resources</li>
                  <li>• Make payments according to agreed terms</li>
                  <li>• Respect intellectual property rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Our Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">We commit to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deliver services as specified in the project agreement</li>
                  <li>• Maintain confidentiality of your information</li>
                  <li>• Provide support during agreed warranty periods</li>
                  <li>• Communicate project progress regularly</li>
                  <li>• Adhere to industry best practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upon full payment, you will own the custom software developed specifically for your 
                  project. However, we retain rights to our general methodologies, techniques, and 
                  any pre-existing intellectual property used in the development process.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our liability is limited to the amount paid for our services. We are not liable for 
                  indirect, incidental, or consequential damages. This limitation applies to the fullest 
                  extent permitted by law.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};