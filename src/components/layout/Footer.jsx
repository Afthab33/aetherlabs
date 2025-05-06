import React from 'react';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Aether<span className="text-primary">Labs</span></div>
          <div className="text-sm text-muted-foreground">© 2025 AetherLabs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}