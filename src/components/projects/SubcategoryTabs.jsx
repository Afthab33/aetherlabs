import React from 'react';
import { Eye, BookOpen, Layout, Beaker, BarChart2, Lightbulb, Server, Layers, Smartphone, Repeat } from 'lucide-react';

export function SubcategoryTabs({ activeCategory, categories, activeSubcategory, setActiveSubcategory }) {
  const getSubcategoryIcon = (subcategory) => {
    switch(subcategory) {
      case 'Accessibility Tools': return <Eye className="h-4 w-4" />;
      case 'Screen Readers': return <BookOpen className="h-4 w-4" />;
      case 'WCAG Standards': return <Layout className="h-4 w-4" />;
      case 'Neural Networks': return <Beaker className="h-4 w-4" />;
      case 'Data Analysis': return <BarChart2 className="h-4 w-4" />;
      case 'Predictive Models': return <Lightbulb className="h-4 w-4" />;
      case 'Frontend': return <Layout className="h-4 w-4" />;
      case 'Backend': return <Server className="h-4 w-4" />;
      case 'Full Stack': return <Layers className="h-4 w-4" />;
      case 'Android': return <Smartphone className="h-4 w-4" />;
      case 'iOS': return <Smartphone className="h-4 w-4" />;
      case 'Cross-platform': return <Repeat className="h-4 w-4" />;
      default: return <Lightbulb className="h-4 w-4" />;
    }
  };

  return (
    <div className="mb-8 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
      <div className="flex flex-nowrap md:flex-wrap min-w-max md:min-w-0">
        {categories[activeCategory].map((subcategory) => (
          <button
            key={subcategory}
            className={`flex items-center px-4 py-2 mr-2 md:mr-4 mb-4 rounded-full transition-colors whitespace-nowrap ${
              activeSubcategory === subcategory
                ? 'bg-primary text-white border border-primary/20 font-medium'
                : 'bg-background text-foreground border border-border hover:bg-muted'
            }`}
            onClick={() => setActiveSubcategory(subcategory)}
          >
            <span className="mr-2">{getSubcategoryIcon(subcategory)}</span>
            {subcategory}
          </button>
        ))}
      </div>
    </div>
  );
}