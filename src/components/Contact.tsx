import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, MessageCircle, Download, ExternalLink, FileText, Video, Camera } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "nabila.mutiara@email.com",
      action: "Send Email",
      href: "mailto:nabilamutiara1240@email.com",
      primary: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect for professional networking",
      action: "View Profile",
      href: "https://www.linkedin.com/in/nabilamutiarasusetio",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick messages and calls",
      action: "Message Me",
      href: "https://wa.me/0815559938908",
      primary: true
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to discuss opportunities, collaborate on projects, or explore how 
            my product management and technical expertise can benefit your organization.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index} 
                className={`text-center card-shadow hover:card-hover-shadow transition-all duration-300 ${
                  method.primary ? 'ring-2 ring-primary ring-opacity-20' : ''
                }`}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="mx-auto p-2 sm:p-3 bg-primary/10 rounded-full w-fit mb-3 sm:mb-4">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <Button 
                    variant={method.primary ? "default" : "outline"} 
                    className={`w-full text-sm transition-all duration-200 ${
                      method.primary 
                        ? "hero-gradient hover:opacity-90 text-primary-foreground" 
                        : "border-primary/20 text-foreground hover:bg-primary/10"
                    }`}
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.action}
                      <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What People Say</h3>
          <Card className="p-8 card-shadow max-w-2xl mx-auto text-center">
            <p className="text-lg italic text-muted-foreground mb-4">
              "I feel incredibly fortunate to have worked with Nabila, an inspiring leader with an exceptional ability to make strategic decisions. Her skill in setting a clear vision and guiding the team toward short-, medium-, and long-term goals is truly remarkable. Nabila is a visionary who keenly identifies trends and opportunities, ensuring that each direction taken is both relevant and strategic. Every decision she makes is grounded in careful analysis, which instills a high level of trust within the team and lays a solid foundation for the company's success. Nabila’s leadership and vision have made a significant positive impact, a leader who is not only highly capable but also inspires everyone around her to give their best. - Abimanyu"
            </p>
            <Button 
              variant="outline" 
              className="border-primary/20 text-foreground hover:bg-primary/10 transition-colors"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/nabilamutiarasusetio" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                View LinkedIn Recommendations
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>

            </Button>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 hero-gradient text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you're looking for a Product Manager to drive strategic initiatives, 
              align cross-functional teams, and deliver impactful products, 
              I'm here to help turn ideas into successful outcomes.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 transition-colors font-medium"
                asChild
              >
                <a href="mailto:nabilamutiara1240@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 transition-colors font-medium"
                asChild
              >
                <a href="https://drive.google.com/file/d/1QRcwPSN6qWbI2tdjKD9jXafttQbzuMrv/view?usp=sharing">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;