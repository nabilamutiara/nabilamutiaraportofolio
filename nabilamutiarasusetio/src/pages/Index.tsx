import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FullStackProjects from '@/components/FullStackProjects';
import BootcampJourney from '@/components/BootcampJourney';
import ProductManagement from '@/components/ProductManagement';
import Achievements from '@/components/Achievements';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="background-flow">
          
        </div>
        <Hero />
        <BootcampJourney />
        <Achievements />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
