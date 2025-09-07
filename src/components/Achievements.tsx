import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      category: "Awards & Recognition",
      title: "Product Innovation Award 2023",
      description: "Recognized for leading the development of an innovative mobile banking feature that increased user engagement by 60%",
      metrics: "60% user engagement increase",
      year: "2023"
    },
    {
      icon: Target,
      category: "Product Impact",
      title: "Successfully Launched 5 MVPs",
      description: "Led cross-functional teams to deliver 5 minimum viable products across fintech, edtech, and healthcare sectors",
      metrics: "100% on-time delivery",
      year: "2022-2023"
    },
    {
      icon: Users,
      category: "User Growth",
      title: "Scaled User Base to 100K+",
      description: "Implemented product-led growth strategies that resulted in 300% user base growth within 18 months",
      metrics: "300% user growth",
      year: "2022"
    },
    {
      icon: Zap,
      category: "Technical Excellence",
      title: "Full-Stack Development Certification",
      description: "Completed intensive 20-week bootcamp with top 5% ranking and built 15+ production-ready applications",
      metrics: "Top 5% ranking",
      year: "2021"
    }
  ];

  const metrics = [
    { value: "5+", label: "Years Experience", description: "Product Management & Development" },
    { value: "15+", label: "Projects Delivered", description: "Full-stack & Product initiatives" },
    { value: "100K+", label: "Users Impacted", description: "Across various platforms" },
    { value: "300%", label: "Growth Achieved", description: "Average user base increase" },
    { value: "95%", label: "Success Rate", description: "Project completion on time" },
    { value: "3", label: "Awards Won", description: "Product innovation recognition" }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable impact through product innovation, technical excellence, 
            and strategic leadership across multiple industries.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center p-4 card-shadow hover:card-hover-shadow transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="card-shadow hover:card-hover-shadow transition-all duration-300">
                <CardHeader className="flex flex-row items-start space-y-0 pb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-primary" />
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
            <h3 className="text-2xl font-bold mb-4">Ready to Create Impact Together?</h3>
            <p className="mb-6 opacity-90">
              Let's discuss how my product management and technical expertise 
              can drive growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View CV
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;