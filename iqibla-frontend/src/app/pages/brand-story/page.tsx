'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS as module
import './brand-story.css';

// Define section ID type for type safety
type SectionId = 'journey' | 'innovation' | 'revelation' | 'global-impact';

export default function BrandStoryPage() {
  // Use translation for multilingual support
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<SectionId>('journey');
  
  // Wrap sections array in useMemo to prevent it from changing on every render
  const sections = useMemo<SectionId[]>(() => [
    'journey', 'innovation', 'revelation', 'global-impact'
  ], []);
  
  // Create refs outside of useMemo
  const journeyRef = useRef<HTMLElement>(null);
  const innovationRef = useRef<HTMLElement>(null);
  const revelationRef = useRef<HTMLElement>(null);
  const globalImpactRef = useRef<HTMLElement>(null);
  
  // Wrap sectionRefs in useMemo to prevent it from changing on every render
  const sectionRefs = useMemo(() => ({
    journey: journeyRef,
    innovation: innovationRef,
    revelation: revelationRef,
    'global-impact': globalImpactRef,
  }), [journeyRef, innovationRef, revelationRef, globalImpactRef]);

  // Handle timeline navigation
  const handleTimelineClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
    e.preventDefault();
    const targetElement = sectionRefs[sectionId]?.current;
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  }, [sectionRefs, setActiveSection]);

  // Handle prev/next navigation
  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    const currentIndex = sections.indexOf(activeSection);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
    } else {
      newIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
    }
    
    const newSection = sections[newIndex];
    sectionRefs[newSection]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(newSection);
  }, [activeSection, sections, sectionRefs, setActiveSection]);

  // Initialize intersection observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Validate that sectionId is a valid SectionId before setting it
          if (sections.includes(sectionId as SectionId)) {
            setActiveSection(sectionId as SectionId);
          }
        }
      });
    }, observerOptions);
    
    // Observe all section elements
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [sections, setActiveSection, sectionRefs]); // Added sectionRefs to dependency array

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handleNavigation('prev');
      } else if (event.key === 'ArrowRight') {
        handleNavigation('next');
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, handleNavigation]);

  return (
    <div className="brand-story-container">
      {/* Hero Section */}
      <section id="hero">
        <Image 
          src="/images/brand-story/hero-banner.png" 
          alt={t('pages.brandStory.hero.altText')}
          width={2880}
          height={1280}
          priority
          className="hero-image"
        />
      </section>

      {/* Main Content */}
      <main>
        {/* About iQIBLA */}
        <section id="about">
          <h1>{t('pages.brandStory.about.title')}</h1>
          <p className="subtitle">{t('pages.brandStory.about.subtitle')}</p>
        </section>

        {/* Section 1: Cultural Convergence */}
        <section id="journey" className="story-section" ref={sectionRefs.journey}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/cultural-convergence.png" 
              alt={t('pages.brandStory.journey.altText')}
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>{t('pages.brandStory.journey.title')}</h2>
              <p>{t('pages.brandStory.journey.paragraph1')}</p>
              <p>{t('pages.brandStory.journey.paragraph2')}</p>
            </div>
          </div>
        </section>

        {/* Section 2: Innovating the Future */}
        <section id="innovation" className="story-section" ref={sectionRefs.innovation}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/innovating-future.png" 
              alt={t('pages.brandStory.innovation.altText')}
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>{t('pages.brandStory.innovation.title')}</h2>
              <p>{t('pages.brandStory.innovation.paragraph1')}</p>
            </div>
          </div>
        </section>

        {/* Section 3: A Moment of Revelation */}
        <section id="revelation" className="story-section" ref={sectionRefs.revelation}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/moment-revelation.png" 
              alt={t('pages.brandStory.revelation.altText')}
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>{t('pages.brandStory.revelation.title')}</h2>
              <p>{t('pages.brandStory.revelation.paragraph1')}</p>
              <p>{t('pages.brandStory.revelation.paragraph2')}</p>
            </div>
          </div>
        </section>

        {/* Section 4: Leading the Future */}
        <section id="global-impact" className="story-section" ref={sectionRefs['global-impact']}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/leading-future.png" 
              alt={t('pages.brandStory.globalImpact.altText')}
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>{t('pages.brandStory.globalImpact.title')}</h2>
              <p>{t('pages.brandStory.globalImpact.paragraph1')}</p>
              <p>{t('pages.brandStory.globalImpact.paragraph2')}</p>
              <p>{t('pages.brandStory.globalImpact.paragraph3')}</p>
            </div>
          </div>
        </section>

        {/* Timeline Navigation */}
        <nav id="timeline-nav">
          <ul>
            {sections.map((section, index) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  data-year={section === 'journey' ? '1999' : section === 'innovation' ? '2015' : section === 'revelation' ? '2020' : '2021'}
                  className={activeSection === section ? 'active' : ''}
                  onClick={(e) => handleTimelineClick(e, section)}
                >
                  {t('pages.brandStory.navigation.goToItem')} {index + 1} {section === 'journey' ? '1999' : section === 'innovation' ? '2015' : section === 'revelation' ? '2020' : '2021'}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-controls">
            <button id="prev-btn" onClick={() => handleNavigation('prev')}>{t('pages.brandStory.navigation.previous')}</button>
            <button id="next-btn" onClick={() => handleNavigation('next')}>{t('pages.brandStory.navigation.next')}</button>
          </div>
        </nav>
      </main>
    </div>
  );
}