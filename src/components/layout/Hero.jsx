import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#7842F5] to-[#9B6DFF] py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-white transform -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Order is reversed on mobile: Text first, then video */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white leading-tight drop-shadow-sm">
              Welcome to <span className="underline decoration-4 decoration-white/80">AetherLabs</span>
            </h1>
            <div className="space-y-4 pr-0 md:pr-2">
              <p className="text-white/95 font-medium text-lg md:text-xl leading-relaxed drop-shadow-sm">
                Our mission is to make the world more accessible by delivering accurate, high-quality data on public place accessibility.
              </p>
              <div className="flex pt-6 md:pt-8">
                <Button 
                  onClick={scrollToProjects}
                  className="bg-white text-black hover:bg-white/90 font-semibold px-6 sm:px-8 py-5 sm:py-7 text-base sm:text-lg rounded-lg flex items-center shadow-lg transition-all duration-300 hover:shadow-xl w-full sm:w-auto justify-center"
                >
                  Our Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Video section */}
          <div className="bg-black/5 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 border-2 border-white/30 order-1 md:order-2 mb-6 md:mb-0">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/-ao_Kc_8rpE?si=sa8kNY7fpx3T-vsZ" 
                title="AetherLabs Introduction" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}