import React from 'react';
import { Eye, BarChart2, Code, Smartphone } from 'lucide-react';

export function CategoryTabs({ activeCategory, setActiveCategory, setActiveSubcategory, categories }) {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'A11Y': return <Eye className="h-5 w-5" />;
      case 'AI/ML': return <BarChart2 className="h-5 w-5" />;
      case 'Web Application': return <Code className="h-5 w-5" />;
      case 'Mobile Application': return <Smartphone className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-wrap mb-8 border-b border-border">
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          className={`flex items-center px-6 py-3 font-medium transition-colors ${
            activeCategory === category 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-black hover:text-primary'
          }`}
          onClick={() => {
            setActiveCategory(category);
            setActiveSubcategory(categories[category][0]);
          }}
        >
          {getCategoryIcon(category)}
          <span className="ml-2">{category}</span>
        </button>
      ))}
    </div>
  );
}