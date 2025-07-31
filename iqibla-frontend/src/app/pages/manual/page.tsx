'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS
import './manual.css';

export default function ManualPage() {
  // Use translation hook
  const { t } = useTranslation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="header-section">
        <h1>{t('pages.manual.title')}</h1>
      </div>

      <div className="content-section">
        <h1 className="manual-title">{t('pages.manual.title')}</h1>
        
        <h3><strong>{t('pages.manual.getStarted.title')}</strong></h3>
        <p>{t('pages.manual.getStarted.description')}</p>
        
        <h3><strong>{t('pages.manual.setupSteps.title')}</strong></h3>
        <ul className="setup-steps">
          <li>{t('pages.manual.setupSteps.step1')}</li>
          <li>{t('pages.manual.setupSteps.step2')}</li>
          <li>{t('pages.manual.setupSteps.step3')}</li>
          <li>{t('pages.manual.setupSteps.step4')}</li>
        </ul>
        
        <h3><strong>{t('pages.manual.needHelp.title')}</strong></h3>
        <p>{t('pages.manual.needHelp.description')} <a href="https://qiblatest.myshopify.com/blogs/blog">{t('pages.manual.needHelp.blog')}</a>.</p>
      </div>
    </main>
  );
}