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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Product Management Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Strategic product initiatives from concept to launch, focusing on user needs, 
            business goals, and data-driven decision making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              type="product"
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Product Management Artifacts
            </h3>
            <p className="text-muted-foreground px-4">
              Detailed documentation and case studies available for review
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-card rounded-lg card-shadow">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">PRDs & Specs</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Comprehensive product requirements and technical specifications
              </p>
              <a 
                href="#" 
                className="text-primary hover:underline text-xs sm:text-sm font-medium"
              >
                View Documents →
              </a>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-card rounded-lg card-shadow">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">User Research</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                User interviews, surveys, and usability testing reports
              </p>
              <a 
                href="#" 
                className="text-primary hover:underline text-xs sm:text-sm font-medium"
              >
                View Research →
              </a>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-card rounded-lg card-shadow sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Design Artifacts</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Wireframes, prototypes, and design system documentation
              </p>
              <a 
                href="#" 
                className="text-primary hover:underline text-xs sm:text-sm font-medium"
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