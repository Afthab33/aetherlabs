import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#8A5CF6] to-[#9B6DFF] text-black py-20 px-6 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* YouTube Video Embed */}
          <div className="bg-black/10 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 border-2 border-white/20">
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
          
          {/* Mission statement on the right */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black leading-tight">
              Welcome to <span className="underline decoration-4 decoration-black/70">AetherLabs</span>
            </h1>
            <div className="space-y-4 max-h-96 pr-2">
              <p className="text-black font-medium text-xl leading-relaxed">
                Our mission is to make the world more accessible by delivering accurate, high-quality data on public place accessibility.
              </p>
              <div className="flex gap-4 pt-6">
                <Button className="bg-black text-white hover:bg-black/80 font-medium px-6 py-6 text-lg rounded-lg flex items-center">
                  Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="bg-white/90 text-[#8A5CF6] hover:bg-white border-2 border-black/10 font-medium px-6 py-6 text-lg rounded-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}