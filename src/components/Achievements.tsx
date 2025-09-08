import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Users, Zap, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      category: "National Competition",
      title: "Top 20 Winner of Early Stage Startup Competition, Pertamuda 2024",
      description: "Ranked in the top 20 out of 3,245 startup teams nationwide (~top 0.6%) in a national competition organized by PT Pertamina",
      metrics: "Top 0.6% nationally",
      year: "Nov 2024"
    },
    {
      icon: Award,
      category: "University Competition",
      title: "2nd Place Winner of TDC for Startup, TDC Summit Fest 2024",
      description: "Achieved 2nd place out of 15 teams (~top 13%) in a university-level startup competition organized by TDC ITS",
      metrics: "Top 13% placement",
      year: "Oct 2024"
    },
    {
      icon: Star,
      category: "Innovation Recognition",
      title: "Best Team in Technopreneur Scientist, FSAD ITS",
      description: "Recognized as the best team out of 12 participants (~top 8%) in a university-level innovation competition",
      metrics: "Top 8% recognition",
      year: "Oct 2024"
    },
    {
      icon: Zap,
      category: "National Technology Competition",
      title: "4th Place Winner of GEMASTIK XVII (Smart Devices, Embedded Systems, and IoT)",
      description: "Ranked 4th out of 3,385 national teams (~top 0.12%) in Indonesia's premier technology competition organized by Pusat Prestasi Nasional",
      metrics: "Top 0.12% nationally",
      year: "Sep 2024"
    },
    {
      icon: Target,
      category: "Business Competition",
      title: "2nd Place Winner of FTIRS Business Competition 2024",
      description: "Secured 2nd place in a business competition among student teams from the Faculty of Industrial Technology and Systems Engineering",
      metrics: "Top 10% placement",
      year: "Sep 2024"
    },
    {
      icon: Users,
      category: "Scholarship",
      title: "Awardee of Djarum Beasiswa Plus Batch 40",
      description: "Selected as one of 500+ awardees out of 18,000+ applicants (~top 2.7%) to receive a full-year national scholarship from Djarum Foundation",
      metrics: "Top 2.7% selection rate",
      year: "Aug 2024"
    }
  ];

  const metrics = [
    { value: "6", label: "Awards Won", description: "Competitions & scholarships" },
    { value: "0.12%", label: "Best Ranking", description: "National competition" },
    { value: "3,385", label: "Teams Competed", description: "In national events" },
    { value: "18K+", label: "Applicants", description: "Scholarship pool size" },
    { value: "2.7%", label: "Selection Rate", description: "Competitive scholarship" },
    { value: "2024", label: "Year of Achievements", description: "Recent accomplishments" }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Awards & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for excellence in startup competitions, innovation challenges, 
            and academic achievements at national and university levels.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center p-3 sm:p-4 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="card-shadow hover:card-hover-shadow transition-all duration-300 h-full">
                <CardHeader className="flex flex-row items-start space-y-0 pb-4 p-4 sm:p-6">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 sm:mr-4">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {achievement.year}
                      </span>
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {achievement.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-base">
                    {achievement.description}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs font-semibold">
                      {achievement.metrics}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 hero-gradient text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Driven by Excellence and Innovation</h3>
            <p className="mb-6 opacity-90">
              My competition experience demonstrates problem-solving skills, resilience, 
              and the ability to excel in high-pressure environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;