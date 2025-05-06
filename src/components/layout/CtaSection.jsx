import React from 'react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <div className="bg-[#8A5CF6] text-black py-16 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to collaborate?</h2>
        <p className="text-lg mb-8">Join us in our mission to make technology accessible for everyone.</p>
        <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100 text-[#8A5CF6] font-semibold">
          Get in touch
        </Button>
      </div>
    </div>
  );
}