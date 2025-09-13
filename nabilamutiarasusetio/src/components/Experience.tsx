import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Calendar, Target, Code, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      organization: "Aibeecara Indonesia",
      role: "Founder & CPO",
      period: "Jul 2024 – Present",
      type: "Startup",
      description: "Leading end-to-end development of an educational technology application, managing cross-functional teams and company operations.",
      impact: "Conducted user research with 200+ participants achieving 70-80% SUS satisfaction, organized recruitment attracting 200+ applicants",
      skills: ["Product Strategy", "Team Leadership", "User Research", "Go-to-Market", "Fundraising", "Product Development"]
    },
    {
      organization: "PT. Winnicode Garuda Indonesia",
      role: "Full Stack Developer Intern",
      period: "Jan 2025 – Jun 2025",
      type: "Professional Experience",
      description: "Developed fully integrated web portals and admin panels using modern technologies including MERN stack and Next.js.",
      impact: "Built 20+ pages with 12+ features including data analytics, hoax detector, sentiment analysis, and automated news builder",
      skills: ["Full-Stack Development", "MongoDB", "Express.js", "React.js", "Next.js", "API Development"]
    },
    {
      organization: "BEM ITS",
      role: "Vice Minister of Creative Economy",
      period: "Mar 2025 – Present",
      type: "Student Organization",
      description: "Leading and overseeing a team of 18 staff members in the creative economy ministry of student government.",
      impact: "Coordinated HR mapping and development, represented ministry in meetings and programs",
      skills: ["Team Leadership", "HR Management", "Strategic Planning", "Stakeholder Representation"]
    },
    {
      organization: "HIMATEKKOM ITS",
      role: "Expert Staff (Website Product Manager)",
      period: "Mar 2025 – Present",
      type: "Student Association",
      description: "Managing website development as Product Manager, coordinating between developers and UI/UX teams.",
      impact: "Led weekly project meetings, created PRDs, managed cross-functional team of 4 members using Trello and Kanban",
      skills: ["Product Management", "Agile Methodology", "Cross-functional Coordination", "PRD Development"]
    },
    {
      organization: "TDC ITS",
      role: "Manager of Business Production",
      period: "Jan 2024 – Dec 2024",
      type: "Student Organization",
      description: "Managed business production operations and workflow across teams in a student business unit.",
      impact: "Achieved 92% KPI target, delegated work program tasks to 13-member team, oversaw production activities",
      skills: ["Operations Management", "Team Management", "KPI Tracking", "Workflow Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional & Organizational Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leadership roles and professional experiences that have shaped my product management, 
            technical, and organizational skills while creating meaningful impact.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow hover:card-hover-shadow transition-all duration-300">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-4">
                  {exp.type === "Startup" ? <Target className="h-6 w-6 text-primary" /> : 
                   exp.type === "Professional Experience" ? <Code className="h-6 w-6 text-primary" /> : 
                   <Building className="h-6 w-6 text-primary" />}
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
            <h3 className="text-2xl font-bold text-center mb-8">Experience Impact Summary</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members Led</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Research Participants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <div className="text-sm text-muted-foreground">KPI Achievement</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;