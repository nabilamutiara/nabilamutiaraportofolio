import ProjectCard from './ProjectCard';
import mobileBankingImage from '@/assets/mobile-banking-app.jpg';
import saasDashboardImage from '@/assets/saas-dashboard.jpg';
import elearningImage from '@/assets/elearning-platform.jpg';
import healthcareImage from '@/assets/healthcare-analytics.jpg';

const ProductManagement = () => {
  const projects = [
    {
      title: "B2C Mobile Banking App",
      description: "Led product strategy and development for next-generation mobile banking platform",
      impact: "Increased user engagement by 60% and reduced customer support tickets by 40%",
      keywords: ["B2C", "Mobile App", "User Research", "Agile", "Product Strategy", "FinTech"],
      documentUrl: "https://docs.google.com/presentation/banking-case-study",
      imageUrl: mobileBankingImage
    },
    {
      title: "SaaS Dashboard Redesign",
      description: "Product-led growth initiative to improve user onboarding and feature adoption",
      impact: "Improved user onboarding completion by 45% and feature adoption by 35%",
      keywords: ["SaaS", "Product-Led Growth", "User Onboarding", "A/B Testing", "Analytics"],
      documentUrl: "https://docs.google.com/presentation/saas-redesign",
      imageUrl: saasDashboardImage
    },
    {
      title: "E-learning Platform MVP",
      description: "0-to-1 product development for online education marketplace",
      impact: "Launched MVP with 1000+ early users and achieved product-market fit in 6 months",
      keywords: ["0-to-1 Product", "MVP", "EdTech", "Marketplace", "Product-Market Fit"],
      documentUrl: "https://docs.google.com/presentation/elearning-mvp",
      imageUrl: elearningImage
    },
    {
      title: "Healthcare Analytics Tool",
      description: "B2B product for healthcare providers to analyze patient data and outcomes",
      impact: "Reduced data analysis time by 70% and improved patient outcome predictions by 25%",
      keywords: ["B2B", "Healthcare", "Analytics", "Data Visualization", "Compliance"],
      documentUrl: "https://docs.google.com/presentation/healthcare-analytics",
      imageUrl: healthcareImage
    }
  ];

  return (
    <section id="product-management" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Product Management Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic product initiatives from concept to launch, focusing on user needs, 
            business goals, and data-driven decision making.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              type="product"
            />
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Product Management Artifacts
            </h3>
            <p className="text-muted-foreground">
              Detailed documentation and case studies available for review
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-lg card-shadow">
              <h4 className="font-semibold mb-2">PRDs & Specs</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive product requirements and technical specifications
              </p>
              <a 
                href="#" 
                className="text-primary hover:underline text-sm font-medium"
              >
                View Documents →
              </a>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg card-shadow">
              <h4 className="font-semibold mb-2">User Research</h4>
              <p className="text-sm text-muted-foreground mb-4">
                User interviews, surveys, and usability testing reports
              </p>
              <a 
                href="#" 
                className="text-primary hover:underline text-sm font-medium"
              >
                View Research →
              </a>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg card-shadow">
              <h4 className="font-semibold mb-2">Design Artifacts</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Wireframes, prototypes, and design system documentation
              </p>
              <a 
                href="#" 
                className="text-primary hover:underline text-sm font-medium"
              >
                View Designs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;