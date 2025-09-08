import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink } from 'lucide-react';
import phase1 from '@/assets/Screenshot 2025-09-07 131810.png';
import phase2 from '@/assets/Screenshot 2025-09-07 132955.png';
import phase3 from '@/assets/Screenshot 2025-09-08 054427.png';
import phase4 from '@/assets/Screenshot 2025-09-07 135838.png';
import phase5 from '@/assets/Screenshot 2025-09-07 142157.png';
import phase6 from '@/assets/Screenshot 2025-09-08 054905.png';
import phase7 from '@/assets/Screenshot 2025-09-08 061651.png';
import phase8 from '@/assets/Screenshot 2025-09-07 144649.png';
import phase9 from '@/assets/Screenshot 2025-09-07 145133.png';
import phase10 from '@/assets/Screenshot 2025-09-08 062654.png';
import phase11 from '@/assets/Screenshot 2025-09-07 160905.png';
import phase12 from '@/assets/Screenshot 2025-09-07 174008.png';
import phase13 from '@/assets/Screenshot 2025-09-07 180353.png';
import phase14 from '@/assets/Screenshot 2025-09-07 182023.png';
import phase15 from '@/assets/Screenshot 2025-09-07 182712.png';
const BootcampJourney = () => {
 const milestones = [
  {
    phase: "OKR and KPI for Shopee Indonesia",
    description: "This document outlines a comprehensive OKR (Objectives and Key Results) framework for Shopee Indonesia, focusing on reducing new user churn, boosting engagement through Shopee Video, ensuring product authenticity with the PASTI ORI program, and strengthening customer loyalty. The plan also covers strategies for market expansion outside Java, increasing transaction volume, improving platform speed and product variety, enhancing user-generated reviews, and optimizing seller efficiency. Each objective is supported by measurable key results and actionable implementation strategies, reflecting a holistic approach to driving sustainable growth, customer satisfaction, and competitive advantage in Indonesia's e-commerce landscape.",
    skills: ["OKR & KPI Development", "Strategic Planning", "Business Analysis", "Growth Strategy", "Performance Metrics"],
    image: phase1,
    projectLink: "https://drive.google.com/file/d/1EOV28U5d8-vqcYocbwjga7w4EFgTwvZk/view?usp=sharing"
  },
  {
    phase: "Market Analysis of Dibimbing.id",
    description: "This market analysis explores Dibimbing.id, a career and education platform in Indonesia that provides bootcamps, personalized mentoring, and career services such as resume reviews, interview preparation, and career coaching. The study highlights the target audience of university students, fresh graduates, and young professionals aged 18–30 in major Indonesian cities who face skill gaps and career uncertainties. Through segmentation, targeting, and positioning, Dibimbing.id is positioned as the go-to partner for transitioning into digital careers.",
    skills: ["Market Research", "Customer Segmentation", "Positioning Strategy", "Competitive Analysis", "Go-to-Market Strategy"],
    image: phase2,
    projectLink: "https://drive.google.com/file/d/13CjLVg860QJa-xxz2_O3nkm7cPuvN-NC/view?usp=sharing"
  },
  {
    phase: "Business Understanding of Vidio.com",
    description: "For this project, I developed a comprehensive business understanding and product strategy proposal for Vidio.com with the goal of increasing watch duration by addressing critical user pain points such as limited access to international content, piracy, poor content quality, lack of personalization, and pricing challenges. I conducted customer needs analysis, market segmentation (demographic, psychographic, geographic, and behavioral), and defined the company vision, product vision, and value propositions. The work also included crafting a product strategy with personalization and contextual recommendations, adaptive streaming, UI/UX optimization, and a roadmap from analytics foundations to engagement features, supported by a go-to-market strategy and Business Model Canvas. Finally, I translated these insights into OKRs that focus on accessibility, personalization, retention, and monetization, making the case for Vidio.com as a leading one-stop OTT entertainment hub in Indonesia.",
    skills: ["Product Strategy", "Customer Discovery", "Value Proposition Design", "Business Model Canvas", "Product Roadmapping", "Monetization Strategy"],
    image: phase3,
    projectLink: "https://drive.google.com/file/d/1ia0dGDQyXOMb6iIojpcjR7HyR6SQ4D_u/view?usp=sharing"
  },
  {
    phase: "Qualitative Research of Streamify",
    description: "This project involved designing a comprehensive user research plan for Streamify, aimed at uncovering key challenges and behaviors that impact user engagement and retention. The research objectives focused on understanding why users cancel subscriptions, fail to complete viewing sessions, or no longer use promotional vouchers. The study targeted three respondent groups: active users with low engagement, churned users who unsubscribed within the last three months, and users who previously utilized promotions but have since stopped. To guide the research, I developed structured interview scripts that included an introduction, optional identity questions, warm-up questions about user expectations and content discovery habits, as well as core questions exploring subscription satisfaction, content preferences, promotional relevance, payment experiences, and technical usability. The framework also included an optional closing script to ensure a positive user experience. Overall, this research plan demonstrates a user-centric approach to identifying pain points and generating actionable insights for improving product features, promotional strategies, and overall platform experience.",
    skills: ["Qualitative Research", "User Interview", "Research Methodology", "User Behavior Analysis", "Insight Synthesis", "Customer Journey Mapping"],
    image: phase4,
    projectLink: "https://docs.google.com/spreadsheets/d/15YB-KT_EDmUHNfFY7qRArLvHtiXZsuFmWS7uRo5ugBA/edit?usp=sharing"
  },
  {
    phase: "Synthesizing Research Findings for E-commerce Wishlist Feature",
    description: "In this project, I conducted a comprehensive product analysis on the low adoption of the wishlist feature in an e-commerce platform using the SCQA framework, issue tree, user insights, and the 5 Whys method. The study revealed that users had limited understanding of the feature's purpose and benefits, partly due to poor onboarding, low visibility, unintuitive icon design, and inaccessible placement within the app. Many users perceived the wishlist as a simple bookmark or preferred alternatives like screenshots and saved links, leading to low engagement and minimal impact on purchase conversions. From these findings, I proposed solutions such as improved onboarding through contextual pop-ups, more strategic feature placement, clearer visual cues, and the introduction of notifications for stock updates or price drops to enhance user awareness, accessibility, and overall feature adoption.",
    skills: ["Research Synthesis", "Problem Framing (SCQA)", "Root Cause Analysis (5 Whys)", "UX Research", "Feature Ideation", "Prioritization"],
    image: phase5,
    projectLink: "https://miro.com/app/board/uXjVIt-_waw=/?share_link_id=166462636890"
  },
  {
    phase: "Shopee Indonesia Ideation with Crazy 8 Method",
    description: "I collaborated on a case study focused on enhancing Shopee's Favorite feature to increase user engagement. Through the ideation process, including Crazy 8s and HMW (How Might We) framing, we identified that many users add items to their favorites but rarely revisit them due to limited visibility, lack of notifications, and low awareness of the feature. Our solutions explored timely and relevant notifications, gamification to make browsing more engaging, a dashboard for easier access, search functionality within favorites, and incentives such as flash sales and daily missions. This project highlighted our ability to combine user insights, creative ideation, and product thinking to design practical features that drive user retention and encourage timely purchases.",
    skills: ["Ideation", "Design Thinking", "How Might We (HMW)", "Feature Prioritization", "Gamification", "User Engagement Strategy"],
    image: phase6,
    projectLink: "https://drive.google.com/file/d/1C4v4p2DO-TYnE7xewLtJByq9Ati8Ic3H/view?usp=sharing"
  },
  {
    phase: "Quantitative and Qualitative Research of Vidio.com",
    description: "For this project, I conducted a comprehensive product management case study for Vidio.com focused on increasing watch duration across different subscription tiers. I began by performing quantitative data analysis, uncovering that Premium users had significantly higher average watch times than Standard and Basic tiers, with engagement also influenced by notification frequency and daily content consumption. I then developed qualitative insights through interview preparation, documentation, and thematic categorization, identifying key issues such as frustration over sudden paywall transitions, lack of personalized notifications, and limited content variety. By synthesizing both data types, I identified the root cause and reframed it into a structured problem statement supported by user pain points. Using tools like issue trees and affinity diagrams, I proposed actionable recommendations including clearer messaging for free-tier users, improved personalization of notifications, UI/UX enhancements, and strategies to encourage upgrades, forming a holistic analysis that bridges data insights with user-centric solutions.",
    skills: ["Mixed Methods Research", "Data Analysis", "User Research", "Data Synthesis", "Affinity Mapping", "Problem Definition"],
    image: phase7,
    projectLink: "https://drive.google.com/file/d/1MyeYSxEhPSWtYe6eKF4BKgSpSnKBtXUq/view?usp=sharing"
  },
  {
    phase: "Business Requirement Document (BRD) of Vidio.com",
    description: "This project focused on developing a Business Requirement Document (BRD) for Vidio.com with the goal of increasing user watch duration, particularly for Basic and Standard tier subscribers. Through data analysis, user interviews, and behavioral insights, the project identified key issues such as lower engagement compared to Premium users and frustration with unclear content access policies. The proposed solutions included personalized notifications, transparent communication regarding premium content, and a free Premium trial strategy, supported by UI/UX improvements and targeted promotions. By addressing these challenges, the project aimed to boost daily watch duration, enhance user satisfaction, reduce churn, and drive subscription upgrades, ultimately aligning user needs with business objectives in a structured, data-driven approach.",
    skills: ["Business Requirements Documentation", "Stakeholder Alignment", "Requirement Gathering", "Solution Design", "Data-Driven Decision Making", "Success Metrics"],
    image: phase8,
    projectLink: "https://drive.google.com/file/d/1w4l1CMCyAXcmgkWqeH7q73eTneAZ0Af4/view?usp=sharing"
  },
  {
    phase: "Product Requirement Document (PRD) for Digital Health Innovation to Combat Childhood and Community Obesity in Indonesia",
    description: "This project focuses on addressing the alarming rise of obesity in Indonesia (affecting one in three adults and one in five children) by developing an integrated mobile health application. The solution combines personalized health tracking (BMI, calories, and activity), curated healthy food recommendations connected to online delivery services, gamified physical activity challenges, parental monitoring tools for children, and a government dashboard for real-time public health insights. By bridging individuals, parents, food delivery partners, and policymakers, the product aims to foster healthier lifestyles, encourage better dietary choices, and support national efforts in reducing obesity prevalence, all while leveraging technology that aligns with modern digital habits.",
    skills: ["Product Requirements Documentation", "Stakeholder Management", "Feature Prioritization", "User Story Mapping", "Product-Led Growth", "Impact Measurement"],
    image: phase9,
    projectLink: "https://docs.google.com/document/d/13kKvtO25dQLpqeKL8UZMeH2-YbQw9EMf/edit?usp=sharing&ouid=100302282808460211417&rtpof=true&sd=true"
  },
  {
    phase: "Food Delivery App Usability Testing Prototype",
    description: "This project documents the process of conducting a usability test for a food delivery application, starting from participant introductions and warm-up questions to task simulations, post-test evaluations, and satisfaction scoring. The focus was on gathering insights from different types of users (extreme, semi-extreme, and non-extreme) in order to better understand their motivations, challenges, and expectations when using food delivery apps. Through this structured testing, the prototype revealed key usability issues such as confusing navigation, oversized images requiring excessive scrolling, lack of food variety, and unclear homepage content organization. The project highlights not only how participants interacted with the prototype but also the valuable feedback they provided, which serves as the foundation for refining the app's design to improve clarity, efficiency, and user satisfaction.",
    skills: ["Usability Testing", "User Feedback Analysis", "UX Research", "Prototyping", "Iterative Design", "User Acceptance Testing (UAT)"],
    image: phase10,
    projectLink: "https://docs.google.com/document/d/13kKvtO25dQLpqeKL8UZMeH2-YbQw9EMf/edit?usp=sharing&ouid=100302282808460211417&rtpof=true&sd=true"
  },
  {
    phase: "User Interview Study Case Simulation & PRD - Purchase in Tokopedia",
    description: "This case study explores the low conversion rate from Add-to-Cart to Purchase on Tokopedia, identifying key friction points such as sudden price changes, out-of-stock items, unexpected shipping costs, and a lengthy checkout process. Through data analysis, engineering insights, and user behavior mapping, I investigated the root causes and validated assumptions using clickstream data, API response checks, and segmentation by user type and device. Based on these findings, I proposed solutions including a 30-minute price lock, 2-hour stock lock with UI timer, earlier shipping fee estimation, and optimized checkout performance. The outcome was documented in a requirement specification titled Smart Checkout Stabilizer, designed to enhance user confidence, reduce drop-offs, and improve overall purchase conversion.",
    skills: ["Conversion Rate Optimization", "Funnel Analysis", "A/B Testing", "Technical Literacy", "Prioritization", "Product Discovery"],
    image: phase11,
    projectLink: "https://drive.google.com/file/d/1MCcDgq338hDqOXulpIeJ6XAwfMlIVq14/view?usp=sharing"
  },
  {
    phase: "Personalized Notification System to Increase Watch Duration (Vidio.com)",
    description: "I developed a comprehensive product documentation and design case study for Vidio.com, focusing on increasing engagement and watch duration among Basic and Standard users through a personalized notification system. The work covered end-to-end product management practices, including defining the epic and user stories, creating hypotheses supported by quantitative and qualitative evidence, mapping user flows, building wireframes, and designing information architecture. The solution emphasized delivering relevant notifications based on watch history, genre preferences, and active hours, while also incorporating upgrade incentives and a clear notification history page. Supported by competitive benchmarking and a detailed six-sprint roadmap, this initiative demonstrates my ability to connect user pain points with data-driven solutions, translate them into actionable features, and prototype a scalable engagement strategy for a leading streaming platform.",
    skills: ["Personalization Strategy", "User Story Mapping", "Wireframing", "Hypothesis-Driven Development", "Backlog Grooming", "Engagement Metrics"],
    image: phase12,
    projectLink: "https://drive.google.com/drive/folders/1vauTnwSgk_xV4JvTFnl_vzubaRcCMlKu?usp=sharing"
  },
  {
    phase: "Amazon Sales Report Analysis and Data Warehouse Implementation",
    description: "This project focuses on analyzing Amazon's sales data from January to December 2022 through a comprehensive process of data cleaning, normalization, and warehouse implementation to achieve structured and reliable datasets. Working collaboratively in a group, we applied Google Spreadsheet, Python, and Looker Studio to transform raw, inconsistent records into a well-organized schema following 3NF standards, significantly reducing redundancy and enhancing data integrity. The project produced an Entity Relationship Diagram (ERD), CSV files for multiple entities, and interactive dashboards that present insights on revenue, order volume, product performance, sales trends, shipping efficiency, and regional distribution. The analysis revealed both Amazon's strong operational performance and areas for improvement, providing a clear demonstration of applied data engineering and business intelligence skills.",
    skills: ["Data Analysis", "Data-Informed Decision Making", "Data Visualization (Looker Studio)", "Business Intelligence", "Metrics Interpretation"],
    image: phase13,
    projectLink: "https://drive.google.com/file/d/1wL8ay8bjcNJYLlyX4lpP_5ak8gOHiBBH/view?usp=sharing"
  },
  {
    phase: "Comprehensive IT Technical Specification for a Scalable Logistics and E-Commerce Application",
    description: "This portfolio piece is a detailed IT Technical Specification document for a proposed Logistics App, created to serve as the foundational blueprint for an innovative startup's e-commerce and delivery platform. It meticulously outlines the project's business objectives, scope, and risks, and provides a complete technical architecture, including system components, data flow, and precise server specifications (application, file, web, and database) with defined operating systems, memory, CPU, and transaction volumes. The document further details critical resource requirements, staff dependencies, projected costs, and potential challenges, demonstrating a thorough understanding of the end-to-end process required to design, develop, and deploy a robust, scalable, and secure cloud-based logistics solution.",
    skills: ["Technical Literacy", "Stakeholder Communication", "Scope Definition", "Risk Assessment", "Resource Planning"],
    image: phase14,
    projectLink: "https://docs.google.com/spreadsheets/d/1HhYHTxGz36gwnTy9v8nAmrvLsgFFd4P8oaL3_WL6250/edit?usp=sharing"
  },
  {
    phase: "Midtrans Payment Link API Documentation",
    description: "In this project, I focused on analyzing and documenting the Midtrans Payment Link API to provide a clear reference for developers and teams. The documentation covers API endpoints, request and response structures, payment flow, supported channels, webhook notifications, and best practices for security and reliability. This work ensures that integration with Midtrans can be understood and executed efficiently by anyone using the API.",
    skills: ["Technical Writing", "API Analysis", "Cross-Functional Collaboration (Dev)", "Process Documentation", "Systems Thinking"],
    image: phase15,
    projectLink: "https://drive.google.com/file/d/1IDojMnhWwwUl6bmhB0dgPNAbM8IHiJws/view?usp=sharing"
  }
];


  return (
    <section id="bootcamp-journey" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Product Management Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A structured journey that explores the end-to-end process of product management, from identifying user needs and conducting market research to defining requirements, designing user flows, and building interactive prototypes. This journey emphasizes strategic thinking, customer-centric design, and cross-functional collaboration to transform ideas into validated product concepts ready for development.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {milestones.map((milestone, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:card-hover-shadow transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Bagian teks */}
                <div className="flex-1">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                    
                      <span className="text-lg font-semibold">{milestone.phase}</span>
                    </div>
                    <CardDescription className="text-sm sm:text-base">
                      {milestone.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 p-4 sm:p-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {milestone.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <a 
                        href={milestone.projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        View Project <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </div>

                {/* Bagian gambar */}
                <div className="sm:w-1/3 h-48 sm:h-auto">
                  <img 
                    src={milestone.image} 
                    alt={milestone.phase} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Card className="p-6 sm:p-8 hero-gradient text-white max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Product Management Journey</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1">6</div>
                <div className="text-xs sm:text-sm opacity-90">Company Product Analysis</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1">15+</div>
                <div className="text-xs sm:text-sm opacity-90">Study Case</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1">30+</div>
                <div className="text-xs sm:text-sm opacity-90">Skills Developed</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BootcampJourney;
