'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS as module
import './brand-story.css';

// Define section ID type for type safety
type SectionId = 'journey' | 'innovation' | 'revelation' | 'global-impact';

export default function BrandStoryPage() {
  // We'll use translation in future updates
  const { } = useTranslation();
  const [activeSection, setActiveSection] = useState<SectionId>('journey');
  const sections: SectionId[] = ['journey', 'innovation', 'revelation', 'global-impact'];
  const sectionRefs = {
    journey: useRef<HTMLElement>(null),
    innovation: useRef<HTMLElement>(null),
    revelation: useRef<HTMLElement>(null),
    'global-impact': useRef<HTMLElement>(null),
  };

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
  }, [sections, setActiveSection]);

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
          alt="iQIBLA Banner – Technology for Faith"
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
          <h1>About iQIBLA</h1>
          <p className="subtitle">The World&apos;s No. 1 Muslim Technology Brand</p>
        </section>

        {/* Section 1: Cultural Convergence */}
        <section id="journey" className="story-section" ref={sectionRefs.journey}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/cultural-convergence.png" 
              alt="Jack Shao's Middle Eastern Journey"
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>Cultural Convergence: Jack Shao&apos;s Middle Eastern Journey</h2>
              <p>&quot;Jack Shao, the founder of iQIBLA, has been traveling in the Middle East since 1999, covering countries such as Saudi Arabia, Dubai, and Turkey, and founded Eleca Electronic Technology in the early years, with companies in Dubai, Riyadh, Istanbul, and Nigeria since 2001.</p>
              <p>He has a deep understanding of Islamic, Christian, Jewish and Chinese cultures.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Innovating the Future */}
        <section id="innovation" className="story-section" ref={sectionRefs.innovation}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/innovating-future.png" 
              alt="Jackshao's Path of Innovation"
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>Innovating the Future: Jackshao&apos;s Path of Innovation</h2>
              <p>Since 2015, Jackshao has founded a company that is dedicated to the development of smart technology, having invented the world&apos;s first children&apos;s locator watch phone (2011), the world&apos;s first Android watch phone, Omate (2013), and the world&apos;s first smart translator, Travis (2017), and he founded the Maxcares Smart Iot Ecosystem, which provides data services to more than 50 countries around the world.</p>
            </div>
          </div>
        </section>

        {/* Section 3: A Moment of Revelation */}
        <section id="revelation" className="story-section" ref={sectionRefs.revelation}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/moment-revelation.png" 
              alt="Birth of iQIBLA"
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>A Moment of Revelation: The Birth of iQIBLA</h2>
              <p>On the 1st day of December 2020, when Jackshao took a moment to think about how to create a tech brand that serves humanity, a revelation came to mind. A voice told him to build a tech brand comparable to Apple for the 2 billion Muslims around the world! Helping people to find their way with technology, the brand iQIBLA was born.</p>
              <p>After that, jackshao led a team of hundreds of the best engineering developers, software developers, designers and marketers to develop iQIBLA smart technology products from scratch.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Leading the Future */}
        <section id="global-impact" className="story-section" ref={sectionRefs['global-impact']}>
          <div className="content-wrapper">
            <Image 
              src="/images/brand-story/leading-future.png" 
              alt="iQIBLA Global Impact"
              width={1500}
              height={1500}
              className="section-image"
            />
            <div className="text-content">
              <h2>Leading the Future: iQIBLA&apos;s Global Impact</h2>
              <p>In 2021 released the world&apos;s first Smart Zamzam Ring - Zikr Ring, which is the newer generation of Smart Zamzam Rings that allows a person to record his Zamzam to Allah, the God of the world, every single day with the iQibla Life App. And served more than 2 million Muslims in two years. iQIBLA team is confident to serve more than 10 million Muslim users in three years, says Jackshao.</p>
              <p>In addition to Zikr Ring, iQIBLA has launched Qwatch, Qphone, Salat Counter and many other smart technology products.</p>
              <p>Today, iQIBLA has become the most popular technology brand among Muslims around the world.&quot;</p>
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
                  Go to item {index + 1} {section === 'journey' ? '1999' : section === 'innovation' ? '2015' : section === 'revelation' ? '2020' : '2021'}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-controls">
            <button id="prev-btn" onClick={() => handleNavigation('prev')}>Previous</button>
            <button id="next-btn" onClick={() => handleNavigation('next')}>Next</button>
          </div>
        </nav>
      </main>
    </div>
  );
}