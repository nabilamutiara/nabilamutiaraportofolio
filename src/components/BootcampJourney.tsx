import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const BootcampJourney = () => {
  const milestones = [
    {
      phase: "Phase 1: Foundations",
      duration: "Weeks 1-4",
      title: "HTML, CSS & JavaScript Fundamentals",
      description: "Built solid foundation in web technologies and programming concepts",
      skills: ["HTML5", "CSS3", "JavaScript ES6", "DOM Manipulation", "Responsive Design"],
      outcome: "Created 5 static websites with responsive design and interactive features",
      status: "completed"
    },
    {
      phase: "Phase 2: Frontend Frameworks",
      duration: "Weeks 5-8",
      title: "React Development",
      description: "Mastered component-based architecture and state management",
      skills: ["React", "JSX", "Hooks", "State Management", "Component Design"],
      outcome: "Built 3 dynamic web applications with complex state management",
      status: "completed"
    },
    {
      phase: "Phase 3: Backend Development",
      duration: "Weeks 9-12",
      title: "Server-Side Programming",
      description: "Learned backend development with Node.js and database management",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
      outcome: "Developed full-stack applications with secure user authentication",
      status: "completed"
    },
    {
      phase: "Phase 4: Advanced Topics",
      duration: "Weeks 13-16",
      title: "DevOps & Deployment",
      description: "Focused on deployment, testing, and production-ready applications",
      skills: ["Git/GitHub", "CI/CD", "Testing", "Docker", "Cloud Deployment"],
      outcome: "Deployed 3 applications to production with automated testing pipelines",
      status: "completed"
    },
    {
      phase: "Capstone Project",
      duration: "Weeks 17-20",
      title: "Final Portfolio Project",
      description: "Comprehensive full-stack application showcasing all learned skills",
      skills: ["Full-Stack", "Project Management", "UI/UX Design", "Code Review"],
      outcome: "Delivered production-ready e-commerce platform with 95% test coverage",
      status: "completed"
    }
  ];

  return (
    <section id="bootcamp-journey" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Bootcamp Project Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured 20-week intensive program that transformed me from 
            a beginner to a full-stack developer with hands-on project experience.
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="card-shadow hover:card-hover-shadow transition-all duration-300">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {milestone.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {milestone.phase}: {milestone.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {milestone.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {milestone.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Outcome:</h4>
                  <p className="text-sm text-muted-foreground">{milestone.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 hero-gradient text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Bootcamp Impact</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Completion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-90">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">Top 5%</div>
                <div className="text-sm opacity-90">Class Ranking</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BootcampJourney;