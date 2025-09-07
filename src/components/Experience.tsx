import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      organization: "Tech Student Association",
      role: "Product Lead",
      period: "2022 - 2023",
      type: "Student Organization",
      description: "Led a team of 15 students to develop digital solutions for campus problems. Managed product roadmap and coordinated with university administration.",
      impact: "Launched 3 student-focused applications used by 2000+ students daily",
      skills: ["Product Strategy", "Team Leadership", "Stakeholder Management", "Agile", "Cross-functional Collaboration"]
    },
    {
      organization: "Startup Incubator Program",
      role: "Product Manager Intern",
      period: "2022",
      type: "Professional Experience",
      description: "Worked with early-stage startups to define product strategy, conduct user research, and validate product-market fit.",
      impact: "Helped 5 startups refine their MVP and secure seed funding totaling $2M",
      skills: ["Product Discovery", "User Research", "MVP Development", "Market Analysis", "Pitch Preparation"]
    },
    {
      organization: "University Developer Club",
      role: "Technical Lead",
      period: "2021 - 2022",
      type: "Student Organization",
      description: "Mentored 30+ students in full-stack development and organized technical workshops and hackathons.",
      impact: "Increased club membership by 200% and organized 5 successful hackathons",
      skills: ["Technical Mentorship", "Workshop Planning", "Community Building", "Full-Stack Development"]
    },
    {
      organization: "Local NGO - Digital Initiative",
      role: "Volunteer Product Coordinator",
      period: "2021",
      type: "Volunteer Work",
      description: "Coordinated digital transformation efforts for local non-profit, including website redesign and donor management system.",
      impact: "Improved donor engagement by 40% and streamlined volunteer coordination",
      skills: ["Non-profit Technology", "Stakeholder Communication", "Digital Transformation", "Volunteer Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Organization Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leadership roles and collaborative experiences that shaped my product management 
            and technical skills while creating meaningful impact.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow hover:card-hover-shadow transition-all duration-300">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl mb-1">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.organization}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Key Impact:
                  </h4>
                  <p className="text-sm text-muted-foreground">{exp.impact}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Skills Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Summary */}
        <div className="mt-16">
          <Card className="p-8 card-shadow">
            <h3 className="text-2xl font-bold text-center mb-8">Leadership Impact Summary</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members Led</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Organizations Involved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">People Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Events Organized</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;