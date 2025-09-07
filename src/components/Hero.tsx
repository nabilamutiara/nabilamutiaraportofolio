import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Linkedin, Mail, ExternalLink } from 'lucide-react';
import phase1 from '@/assets/97892219-39bf-4034-8046-08b5341fbe22.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Foto profil */}
         {/* Foto profil */}
          <div className="mb-10 flex justify-center">
            <img
              src={phase1}
              alt="Nabila Mutiara Susetio"
              className="w-56 h-56 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>


          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="block text-primary mt-2">Nabila Mutiara Susetio</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Product Manager passionate about designing user-centered digital solutions that deliver business impact and elevate user experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/dummy" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href="mailto:dummy@email.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4">
            <Card className="p-4 sm:p-6 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-4 sm:p-6 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
            </Card>
            <Card className="p-4 sm:p-6 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Awards Won</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
