'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS
import './privacy-policy.css';

export default function PrivacyPolicyPage() {
  // Get translation function
  const { t } = useTranslation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="header-section">
        <h1>{t('pages.privacyPolicy.title')}</h1>
      </div>

      <div className="content-section">
        <h1 className="policy-title">{t('pages.privacyPolicy.policyTitle')}</h1>
        
        <p>{t('pages.privacyPolicy.intro.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.intro.paragraph2')}</p>
        
        <p>{t('pages.privacyPolicy.intro.paragraph3')}</p>
        
        <div className="toc">
          <a href="#information-we-collect">{t('pages.privacyPolicy.toc.informationWeCollect')}</a>
          <a href="#how-we-use-information">{t('pages.privacyPolicy.toc.howWeUseInformation')}</a>
          <a href="#cookies-use">{t('pages.privacyPolicy.toc.cookiesUse')}</a>
          <a href="#how-information-is-shared">{t('pages.privacyPolicy.toc.howInformationIsShared')}</a>
          <a href="#your-rights">{t('pages.privacyPolicy.toc.yourRights')}</a>
          <a href="#data-retention">{t('pages.privacyPolicy.toc.dataRetention')}</a>
          <a href="#analytics">{t('pages.privacyPolicy.toc.analytics')}</a>
          <a href="#children">{t('pages.privacyPolicy.toc.children')}</a>
          <a href="#information-security">{t('pages.privacyPolicy.toc.informationSecurity')}</a>
          <a href="#international">{t('pages.privacyPolicy.toc.international')}</a>
          <a href="#account-security">{t('pages.privacyPolicy.toc.accountSecurity')}</a>
          <a href="#changes">{t('pages.privacyPolicy.toc.changes')}</a>
          <a href="#contact">{t('pages.privacyPolicy.toc.contact')}</a>
        </div>
      </div>

      <div id="information-we-collect" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.informationWeCollect.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.intro')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.informationYouProvide.title')}</h4>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.accountInformation.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.accountInformation.content')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.additionalInformation.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.additionalInformation.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.additionalInformation.paragraph2')}</p>
        
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.additionalInformation.paragraph3')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.paymentInformation.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.paymentInformation.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.paymentInformation.paragraph2')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.informationFromServices.title')}</h4>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.deviceInformation.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.deviceInformation.content')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.geolocationInformation.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.geolocationInformation.content')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.usageInformation.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.usageInformation.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.usageInformation.paragraph2')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.informationWeCollect.thirdPartyInformation.title')}</h4>
        
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.thirdPartyInformation.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.informationWeCollect.thirdPartyInformation.paragraph2')}</p>
      </div>

      <div id="how-we-use-information" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.howWeUseInformation.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.howWeUseInformation.intro')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.howWeUseInformation.provideServices.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.howWeUseInformation.provideServices.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.howWeUseInformation.provideServices.paragraph2')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.howWeUseInformation.improveServices.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.howWeUseInformation.improveServices.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.howWeUseInformation.improveServices.paragraph2')}</p>
        
        <p>{t('pages.privacyPolicy.sections.howWeUseInformation.improveServices.paragraph3')}</p>
        
        <ul>
          <li>{t('pages.privacyPolicy.sections.howWeUseInformation.improveServices.bulletPoints.point1')}</li>
          <li>{t('pages.privacyPolicy.sections.howWeUseInformation.improveServices.bulletPoints.point2')}</li>
        </ul>
      </div>

      <div id="cookies-use" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.cookiesUse.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.cookiesUse.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.cookiesUse.paragraph2')}</p>
      </div>

      <div id="how-information-is-shared" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.howInformationIsShared.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.howInformationIsShared.intro')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.howInformationIsShared.whenYouAgree.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.howInformationIsShared.whenYouAgree.content')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.howInformationIsShared.externalProcessing.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.howInformationIsShared.externalProcessing.content')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.howInformationIsShared.legalReasons.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.howInformationIsShared.legalReasons.content')}</p>
      </div>

      <div id="your-rights" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.yourRights.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.yourRights.intro')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.yourRights.accessingData.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.yourRights.accessingData.content')}</p>
        
        <h4>{t('pages.privacyPolicy.sections.yourRights.editingData.title')}</h4>
        <p>{t('pages.privacyPolicy.sections.yourRights.editingData.content')}</p>
      </div>

      <div id="data-retention" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.dataRetention.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.dataRetention.content')}</p>
      </div>

      <div id="analytics" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.analytics.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.analytics.content')}</p>
      </div>

      <div id="children" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.children.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.children.content')}</p>
      </div>

      <div id="information-security" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.informationSecurity.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.informationSecurity.content')}</p>
      </div>

      <div id="international" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.international.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.international.content')}</p>
      </div>

      <div id="account-security" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.accountSecurity.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.accountSecurity.content')}</p>
      </div>

      <div id="changes" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.changes.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.changes.content')}</p>
      </div>

      <div id="contact" className="content-section">
        <h3>{t('pages.privacyPolicy.sections.contact.title')}</h3>
        
        <p>{t('pages.privacyPolicy.sections.contact.paragraph1')}</p>
        
        <p>{t('pages.privacyPolicy.sections.contact.paragraph2')}</p>
      </div>
    </main>
  );
}