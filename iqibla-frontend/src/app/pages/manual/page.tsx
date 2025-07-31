'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS
import './manual.css';

export default function ManualPage() {
  // We'll use translation in future updates
  const { } = useTranslation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="header-section">
        <h1>Manuals & Tutorials</h1>
      </div>

      <div className="content-section">
        <h1 className="manual-title">Manuals & Tutorials</h1>
        
        <h3><strong>Get Started with iQibla</strong></h3>
        <p>Looking for extra help setting up your iQibla Watch? Follow the steps below and make setup a breeze.</p>
        
        <h3><strong>Now get set up in 4 easy steps:</strong></h3>
        <ul className="setup-steps">
          <li>Download and log in to the iQibla App</li>
          <li>Wake your iQibla Watch up</li>
          <li>Start setup</li>
          <li>Get going on your goals</li>
        </ul>
        
        <h3><strong>Need more help?</strong></h3>
        <p>Check out our complete troubleshooting information on our <a href="https://qiblatest.myshopify.com/blogs/blog">BLOG</a>.</p>
      </div>
    </main>
  );
}