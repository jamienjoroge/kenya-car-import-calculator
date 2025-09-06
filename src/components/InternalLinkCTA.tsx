import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InternalLinkCTAProps {
  type: 'calculator' | 'blog' | 'guide';
  title: string;
  description: string;
  link: string;
  className?: string;
}

const InternalLinkCTA: React.FC<InternalLinkCTAProps> = ({ 
  type, 
  title, 
  description, 
  link, 
  className = "" 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'calculator':
        return <Calculator className="h-5 w-5" />;
      case 'blog':
      case 'guide':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <ArrowRight className="h-5 w-5" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'calculator':
        return 'bg-blue-50 border-blue-200 hover:bg-blue-100';
      case 'blog':
        return 'bg-green-50 border-green-200 hover:bg-green-100';
      case 'guide':
        return 'bg-purple-50 border-purple-200 hover:bg-purple-100';
      default:
        return 'bg-gray-50 border-gray-200 hover:bg-gray-100';
    }
  };

  return (
    <Card className={`${getColor()} transition-colors ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
              {getIcon()}
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {description}
            </p>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link to={link}>
            Try Now
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default InternalLinkCTA;