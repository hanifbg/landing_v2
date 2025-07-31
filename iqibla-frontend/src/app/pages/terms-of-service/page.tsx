'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS
import './terms-of-service.css';

export default function TermsOfServicePage() {
  // Get translation function
  const { t } = useTranslation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="header-section">
        <h1>{t('pages.termsOfService.title')}</h1>
      </div>

      <div className="content-section">
        <h1 className="policy-title">{t('pages.termsOfService.policyTitle')}</h1>
        
        <p>{t('pages.termsOfService.intro')}</p>
        
        <div className="toc">
          <a href="#use-of-service">{t('pages.termsOfService.toc.useOfService')}</a>
          <a href="#creating-account">{t('pages.termsOfService.toc.creatingAccount')}</a>
          <a href="#content-ownership">{t('pages.termsOfService.toc.contentOwnership')}</a>
          <a href="#prohibited-activities">{t('pages.termsOfService.toc.prohibitedActivities')}</a>
          <a href="#termination">{t('pages.termsOfService.toc.termination')}</a>
          <a href="#disclaimers">{t('pages.termsOfService.toc.disclaimers')}</a>
          <a href="#indemnity">{t('pages.termsOfService.toc.indemnity')}</a>
          <a href="#limitation-liability">{t('pages.termsOfService.toc.limitationLiability')}</a>
          <a href="#dispute-resolution">{t('pages.termsOfService.toc.disputeResolution')}</a>
          <a href="#general-terms">{t('pages.termsOfService.toc.generalTerms')}</a>
          <a href="#additional-terms">{t('pages.termsOfService.toc.additionalTerms')}</a>
          <a href="#contact-us">{t('pages.termsOfService.toc.contactUs')}</a>
          <a href="#paid-services">{t('pages.termsOfService.toc.paidServices')}</a>
        </div>
      </div>

      <div id="use-of-service" className="content-section">
        <h3>{t('pages.termsOfService.sections.useOfService.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.useOfService.paragraph1')}</p>
        
        <p>{t('pages.termsOfService.sections.useOfService.paragraph2')}</p>
        
        <p>{t('pages.termsOfService.sections.useOfService.paragraph3')}</p>
      </div>

      <div id="creating-account" className="content-section">
        <h3>{t('pages.termsOfService.sections.creatingAccount.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.creatingAccount.paragraph1')}</p>
        
        <p>{t('pages.termsOfService.sections.creatingAccount.paragraph2')}</p>
      </div>

      <div id="content-ownership" className="content-section">
        <h3>{t('pages.termsOfService.sections.contentOwnership.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.contentOwnership.paragraph1')}</p>
        
        <p>{t('pages.termsOfService.sections.contentOwnership.paragraph2')}</p>
        
        <p>{t('pages.termsOfService.sections.contentOwnership.paragraph3')}</p>
      </div>

      <div id="prohibited-activities" className="content-section">
        <h3>{t('pages.termsOfService.sections.prohibitedActivities.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.intro')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities1')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities2')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities3')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities4')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities5')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities6')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities7')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities8')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities9')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities10')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities11')}</p>
        
        <p>{t('pages.termsOfService.sections.prohibitedActivities.activities12')}</p>
      </div>

      <div id="termination" className="content-section">
        <h3>{t('pages.termsOfService.sections.termination.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.termination.content')}</p>
      </div>

      <div id="disclaimers" className="content-section">
        <h3>{t('pages.termsOfService.sections.disclaimers.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.disclaimers.content')}</p>
      </div>

      <div id="indemnity" className="content-section">
        <h3>{t('pages.termsOfService.sections.indemnity.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.indemnity.content')}</p>
      </div>

      <div id="limitation-liability" className="content-section">
        <h3>{t('pages.termsOfService.sections.limitationLiability.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.limitationLiability.paragraph1')}</p>
        
        <p>{t('pages.termsOfService.sections.limitationLiability.paragraph2')}</p>
        
        <p>{t('pages.termsOfService.sections.limitationLiability.paragraph3')}</p>
        
        <p>{t('pages.termsOfService.sections.limitationLiability.paragraph4')}</p>
      </div>

      <div id="dispute-resolution" className="content-section">
        <h3>{t('pages.termsOfService.sections.disputeResolution.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.disputeResolution.warning')}</p>
        
        <p>{t('pages.termsOfService.sections.disputeResolution.paragraph1')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.governingLaw.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.governingLaw.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.informalResolution.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.informalResolution.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.arbitrationAgreement.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.arbitrationAgreement.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.optOut.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.optOut.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.exceptions.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.exceptions.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.noClassActions.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.noClassActions.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.judicialForum.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.judicialForum.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.disputeResolution.limitationOnClaims.title')}</strong> {t('pages.termsOfService.sections.disputeResolution.limitationOnClaims.content')}</p>
      </div>

      <div id="general-terms" className="content-section">
        <h3>{t('pages.termsOfService.sections.generalTerms.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.generalTerms.paragraph1')}</p>
        
        <p>{t('pages.termsOfService.sections.generalTerms.paragraph2')}</p>
        
        <p>{t('pages.termsOfService.sections.generalTerms.paragraph3')}</p>
        
        <p>{t('pages.termsOfService.sections.generalTerms.paragraph4')}</p> 
        
        <p>{t('pages.termsOfService.sections.generalTerms.paragraph5')}</p>
        
        <p>{t('pages.termsOfService.sections.generalTerms.paragraph6')}</p>
      </div>

      <div id="additional-terms" className="content-section">
        <h3>{t('pages.termsOfService.sections.additionalTerms.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.additionalTerms.content')}</p>
      </div>

      <div id="contact-us" className="content-section">
        <h3>{t('pages.termsOfService.sections.contactUs.title')}</h3>
        
        <h5>{t('pages.termsOfService.sections.contactUs.subtitle')}</h5>
        
        <p>{t('pages.termsOfService.sections.contactUs.content')}</p>
      </div>

      <div id="paid-services" className="content-section">
        <h3>{t('pages.termsOfService.sections.paidServices.title')}</h3>
        
        <p>{t('pages.termsOfService.sections.paidServices.intro.paragraph1')}</p>
        
        <p>{t('pages.termsOfService.sections.paidServices.intro.paragraph2')}</p>
        
        <h4>{t('pages.termsOfService.sections.paidServices.paidServicesSection.title')}</h4>
        
        <p>{t('pages.termsOfService.sections.paidServices.paidServicesSection.content')}</p>
        
        <h4>{t('pages.termsOfService.sections.paidServices.subscriptionsSection.title')}</h4>
        
        <p><strong>{t('pages.termsOfService.sections.paidServices.subscriptionsSection.autoRenew.title')}</strong> {t('pages.termsOfService.sections.paidServices.subscriptionsSection.autoRenew.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.paidServices.subscriptionsSection.cancellation.title')}</strong> {t('pages.termsOfService.sections.paidServices.subscriptionsSection.cancellation.content')}</p>
        
        <p>{t('pages.termsOfService.sections.paidServices.subscriptionsSection.promotionalCommunications')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.paidServices.subscriptionsSection.noRefunds.title')}</strong> {t('pages.termsOfService.sections.paidServices.subscriptionsSection.noRefunds.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.paidServices.subscriptionsSection.freeTrials.title')}</strong> {t('pages.termsOfService.sections.paidServices.subscriptionsSection.freeTrials.content')}</p>
        
        <p><strong>{t('pages.termsOfService.sections.paidServices.subscriptionsSection.priceChanges.title')}</strong> {t('pages.termsOfService.sections.paidServices.subscriptionsSection.priceChanges.content')}</p>
        
        <h4>{t('pages.termsOfService.sections.paidServices.oneTimePurchases.title')}</h4>
        
        <p>{t('pages.termsOfService.sections.paidServices.oneTimePurchases.content')}</p>
        
        <h4>{t('pages.termsOfService.sections.paidServices.paymentBilling.title')}</h4>
        
        <p>{t('pages.termsOfService.sections.paidServices.paymentBilling.paragraph1')}</p>
        
        <p>{t('pages.termsOfService.sections.paidServices.paymentBilling.paragraph2')}</p>
        
        <h4>{t('pages.termsOfService.sections.paidServices.representations.title')}</h4>
        
        <p>{t('pages.termsOfService.sections.paidServices.representations.content')}</p>
      </div>
    </main>
  );
}