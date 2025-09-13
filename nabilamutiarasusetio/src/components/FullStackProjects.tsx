import ProjectCard from './ProjectCard';

const FullStackProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      impact: "Increased online sales by 40% and reduced cart abandonment by 25%",
      keywords: ["React", "Node.js", "PostgreSQL", "Stripe API", "REST API", "Authentication"],
      githubUrl: "https://github.com/nabila/ecommerce",
      demoUrl: "https://ecommerce-demo.com",
      documentUrl: "https://docs.ecommerce-project.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      impact: "Improved team productivity by 30% with real-time collaboration features",
      keywords: ["React", "Socket.io", "MongoDB", "Express.js", "Real-time", "Team Collaboration"],
      githubUrl: "https://github.com/nabila/taskmanager",
      demoUrl: "https://taskmanager-demo.com"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather patterns and analytics",
      impact: "Processed 1M+ data points with 99.9% accuracy in weather predictions",
      keywords: ["React", "D3.js", "Python", "FastAPI", "Data Visualization", "Analytics"],
      githubUrl: "https://github.com/nabila/weather-dashboard",
      demoUrl: "https://weather-analytics.com"
    },
    {
      title: "Social Media Scheduler",
      description: "Multi-platform social media management and scheduling tool",
      impact: "Saved 15+ hours weekly for content creators and increased engagement by 50%",
      keywords: ["React", "Node.js", "MongoDB", "Social APIs", "Cron Jobs", "Content Management"],
      githubUrl: "https://github.com/nabila/social-scheduler",
      documentUrl: "https://docs.social-scheduler.com"
    }
  ];

  return (
    <section id="fullstack-projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Full Stack Web Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end web applications built with modern technologies, 
            focusing on scalability, performance, and user experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              type="fullstack"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullStackProjects;