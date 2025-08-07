import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[];
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs if none provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      let label = segment
        .replace(/-/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      // Special cases for better UX
      const labelMap: { [key: string]: string } = {
        'blog': 'Blog',
        'afford': 'Budget Calculator',
        'compare': 'Compare Cars',
        'popular': 'Popular Cars',
        'vehicle-inspection': 'Vehicle Inspection',
        'maintenance-schedule': 'Maintenance Schedule',
        'fuel-calculator': 'Fuel Calculator'
      };
      
      if (labelMap[segment]) {
        label = labelMap[segment];
      }
      
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = items || generateBreadcrumbs();
  
  if (breadcrumbItems.length === 0) return null;
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-1">
                <Home className="h-3 w-3" />
                <span className="sr-only md:not-sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink asChild>
                    <Link to={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;