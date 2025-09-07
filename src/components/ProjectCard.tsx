import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  keywords: string[];
  githubUrl?: string;
  demoUrl?: string;
  documentUrl?: string;
  type: 'fullstack' | 'product';
  imageUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  impact, 
  keywords, 
  githubUrl, 
  demoUrl, 
  documentUrl, 
  type,
  imageUrl 
}: ProjectCardProps) => {
  return (
    <Card className="h-full card-shadow hover:card-hover-shadow transition-all duration-300 group overflow-hidden">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div>
          <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Impact:</h4>
          <p className="text-xs sm:text-sm text-muted-foreground">{impact}</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies & Skills:</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {keywords.map((keyword, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Code
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Demo
              </a>
            </Button>
          )}
          {documentUrl && (
            <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm">
              <a href={documentUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {type === 'product' ? 'Case Study' : 'Documentation'}
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;