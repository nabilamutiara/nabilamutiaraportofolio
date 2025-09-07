import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Nabila Mutiara
              <span className="block text-primary">Susetio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Product Manager & Full-stack Developer passionate about creating user-centered digital solutions 
              that drive business impact and enhance user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="hero-gradient hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </Card>
            <Card className="p-6 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;