'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS
import './privacy-policy.css';

export default function PrivacyPolicyPage() {
  // We'll use translation in future updates
  const { } = useTranslation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="header-section">
        <h1>Privacy Policy</h1>
      </div>

      <div className="content-section">
        <h1 className="policy-title">iQibla Privacy Policy</h1>
        
        <p>At iQibla, we care about Muslims worship. We appreciate that you are trusting us with worship information that is important to you, and we want to make it clear about how we use it.</p>
        
        <p>Here we describe the privacy practices for our devices, applications, software, websites, products, and services (the &quot;Services&quot;). You will learn about the data we collect, how we use it, the controls we give you over your information, and the measures we take to keep it safe.</p>
        
        <p>Specifically, we&apos;ll cover:</p>
        
        <div className="toc">
          <a href="#information-we-collect">INFORMATION WE COLLECT</a>
          <a href="#how-we-use-information">HOW WE USE INFORMATION</a>
          <a href="#cookies-use">COOKIES USE</a>
          <a href="#how-information-is-shared">HOW INFORMATION IS SHARED</a>
          <a href="#your-rights">YOUR RIGHTS TO ACCESS AND CONTROL YOUR PERSONAL DATA</a>
          <a href="#data-retention">DATA RETENTION</a>
          <a href="#analytics">ANALYTICS AND ADVERTISING SERVICES PROVIDED BY OTHERS</a>
          <a href="#children">OUR POLICIES FOR CHILDREN</a>
          <a href="#information-security">INFORMATION SECURITY</a>
          <a href="#international">OUR INTERNATIONAL OPERATIONS AND DATA TRANSFERS</a>
          <a href="#account-security">ACCOUNT AND SECURITY</a>
          <a href="#changes">CHANGES TO THIS POLICY</a>
          <a href="#contact">WHO WE ARE AND HOW TO CONTACT US</a>
        </div>
      </div>

      <div id="information-we-collect" className="content-section">
        <h3>INFORMATION WE COLLECT</h3>
        
        <p>When you use our Services, we collect the following types of information.</p>
        
        <h4>INFORMATION YOU PROVIDE US</h4>
        
        <h4>ACCOUNT INFORMATION</h4>
        <p>Some information is required to create an account on our Services, such as your name, email address, password, date of birth, gender, height, weight, and in some cases your mobile telephone number. This is the only information you have to provide to create an account with us. You may also choose to provide other types of information, such as a profile photo, biography, country information, and community username.</p>
        
        <h4>ADDITIONAL INFORMATION</h4>
        <p>To help improve your experience or enable certain features of the Services, you may choose to provide us with additional information, like your logs for weight, sleep, or health tracking; an alarm; and messages on discussion boards or to your friends on the Services.</p>
        
        <p>You may also connect with friends on the Services or invite friends who have not yet joined by providing their email addresses, accessing social networking accounts, or using the contact list on your mobile device. We do not store your contact list and delete it after it is used for adding contacts as friends.</p>
        
        <p>If you contact us or participate in a survey, contest, or promotion, we collect the information you submit such as your name, contact information, and message.</p>
        
        <h4>PAYMENT AND CARD INFORMATION</h4>
        <p>Some iQibla devices support payments and transactions with third parties. If you activate this feature, you must provide certain information for identification and verification, such as your name, credit, debit or other card number, card expiration date, and CVV code. This information is encrypted and sent to your card network, which upon approval sends back to your device a token, which is a set of random digits for engaging in transactions without exposing your card number. For your convenience, we store the last four digits of your card number and your card issuer&apos;s name and contact information. You can remove the token from your account using your account settings. We do not store your transaction history.</p>
        
        <p>If you purchase iQibla merchandise on our website, you provide your payment information, including your name, credit or debit card number, card expiration date, CVV code, and billing address. We do not store this payment information. We store your shipping address to fulfill your order. Note that third-party payment processors may retain this information in accordance with their own privacy policies and terms.</p>
        
        <h4>INFORMATION WE RECEIVE FROM YOUR USE OF OUR SERVICES</h4>
        
        <h4>DEVICE INFORMATION</h4>
        <p>Your device collects data to estimate a variety of metrics like the number of steps you take, your distance traveled, calories burned, weight, heart rate, sleep stages, active minutes, and location. The data collected varies depending on which device you use. When your device syncs with our applications or software, data recorded on your device is transferred from your device to our servers.</p>
        
        <h4>GEOLOCATION INFORMATION</h4>
        <p>The Services include features that use precise geolocation data, including GPS signals, device sensors, Wi-Fi access points, and cell tower IDs. We collect this type of data if you grant us access to your location. You can always remove our access using your iQibla device or mobile device settings. We may also derive your approximate location from your IP address.</p>
        
        <h4>USAGE INFORMATION</h4>
        <p>When you access or use our Services, we receive certain usage or network activity information. This includes information about your interaction with the Services, for example, when you view or search content, install applications or software, create or log into your account, pair your device to your account, or open or interact with an application on your iQibla device.</p>
        
        <p>We also collect data about the devices and computers you use to access the Services, including IP addresses, browser type, language, operating system, iQibla or mobile device information (including device and application identifiers), the referring web page, pages visited, location (depending on the permissions you have granted us), and cookie information.</p>
        
        <h4>INFORMATION WE RECEIVE FROM THIRD PARTIES</h4>
        
        <p>If you choose to connect your account on our Services to your account on another service, we may receive information from the other service. For example, if you connect to Facebook or Google, we may receive information like your name, profile picture, age range, language, email address, and friend list. You may also choose to grant us access to your exercise or activity data from another service. You can stop sharing the information from the other service with us by removing our access to that other service.</p>
        
        <p>We may partner with third parties, in such cases, those companies may provide us with your name, email address, or similar information (like a telephone number or subscriber ID) so that we can invite you to participate or determine your eligibility for particular benefits, such as discounts or free services.</p>
      </div>

      <div id="how-we-use-information" className="content-section">
        <h3>HOW WE USE INFORMATION</h3>
        
        <p>We use the information we collect for the following purposes.</p>
        
        <h4>PROVIDE AND MAINTAIN THE SERVICES</h4>
        <p>Using the information we collect, we are able to deliver the Services to you and honor our Terms of Service contract with you. For example, we need to use your information to provide you with your iQibla dashboard tracking your exercise, activity, and other trends; to enable the community features of the Services; and to give you customer support.</p>
        
        <p>For the Services community features, we may use your information to help you find and connect with other users and to allow other users to find and connect with you. For example, your account contact information allows other users to add you as a friend. When another user has your email or mobile phone number in their contact list or in their friend network on a connected service, we show that user that you are a user of the Services.</p>
        
        <h4>IMPROVE, PERSONALIZE, AND DEVELOP THE SERVICES</h4>
        <p>We use the information we collect to improve and personalize the Services and to develop new ones. For example, we use the information to troubleshoot and protect against errors; perform data analysis and testing; conduct research and surveys; and develop new features and Services.</p>
        
        <p>When you allow us to collect precise location information, we use that information to provide and improve features of the Services such as accurate Qibla direction and times of prayer.</p>
        
        <p>We also use your information to make inferences and show you more relevant content. Here are some examples:</p>
        
        <ul>
          <li>Information like your height, weight, gender, and age allows us to improve the accuracy of your daily exercise and activity statistics like the number of calories you burned and the distance you traveled.</li>
          <li>Based on your sleep data, we may make inferences about your sleeping patterns and provide you with customized insights to help you improve your sleep.</li>
        </ul>
      </div>

      <div id="cookies-use" className="content-section">
        <h3>COOKIES USE</h3>
        
        <p>We use cookies and similar technologies to provide, protect, and improve our Services. For example, we use these technologies to remember your user preferences, understand how you use our website and Services, and personalize content.</p>
        
        <p>You can configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is set. However, if you reject cookies, some features of our Services may not function properly.</p>
      </div>

      <div id="how-information-is-shared" className="content-section">
        <h3>HOW INFORMATION IS SHARED</h3>
        
        <p>We do not share your personal information except in the limited circumstances described below.</p>
        
        <h4>WHEN YOU AGREE OR DIRECT US TO SHARE</h4>
        <p>You may direct us to disclose your information to others, such as when you use our community features like the forums, 7-day leaderboard, and other social tools. For certain information, we provide you with privacy preferences in account settings and other tools to control how your information is visible to other users of the Services.</p>
        
        <h4>FOR EXTERNAL PROCESSING</h4>
        <p>We transfer information to our corporate affiliates, service providers, and other partners who process it for us, based on our instructions, and in compliance with this policy and any other appropriate confidentiality and security measures. These partners provide us with services globally, including for customer support, information technology, payments, sales, marketing, data analysis, research, and surveys.</p>
        
        <h4>FOR LEGAL REASONS</h4>
        <p>We may preserve or disclose information about you to comply with a law, regulation, legal process, or governmental request; to assert legal rights or defend against legal claims; or to prevent, detect, or investigate illegal activity, fraud, abuse, violations of our terms, or threats to the security of the Services or the physical safety of any person.</p>
      </div>

      <div id="your-rights" className="content-section">
        <h3>YOUR RIGHTS TO ACCESS AND CONTROL YOUR PERSONAL DATA</h3>
        
        <p>We give you account settings and tools to access and control your personal data, as described below, regardless of where you live. If you live in the European Economic Area, United Kingdom, and Switzerland (the &quot;Designated Countries&quot;), you have a number of legal rights with respect to your information, which your account settings and tools allow you to exercise, as outlined below.</p>
        
        <h4>ACCESSING AND EXPORTING DATA</h4>
        <p>By logging into your account, you can access much of your personal information, including your dashboard with your daily exercise and activity statistics. Using your account settings, you can also download information in a commonly used file format, including data about your activities, body, foods, and sleep.</p>
        
        <h4>EDITING AND DELETING DATA</h4>
        <p>Your account settings let you change and delete your personal information. For instance, you can edit or delete the profile data you provide and delete your account if you wish.</p>
      </div>

      <div id="data-retention" className="content-section">
        <h3>DATA RETENTION</h3>
        
        <p>We keep your account information, like your name, email address, and password, for as long as your account is in existence because we need it to operate your account. In some cases, when you give us information for a feature of the Services, we delete the data after it is no longer needed for the feature. For instance, when you provide your contact list for finding friends on the Services, we delete the list after it is used for adding contacts as friends. We keep other information, like your exercise or activity data, until you use your account settings or tools to delete the data or your account because we use this data to provide you with your personal statistics and other aspects of the Services. We also keep information about you and your use of the Services for as long as necessary for our legitimate business interests, for legal reasons, and to prevent harm, including as described in the How We Use Information and How Information Is Shared sections.</p>
      </div>

      <div id="analytics" className="content-section">
        <h3>ANALYTICS AND ADVERTISING SERVICES PROVIDED BY OTHERS</h3>
        
        <p>We work with partners who provide us with analytics and advertising services. This includes helping us understand how users interact with the Services, serving advertisements on our behalf across the internet, and measuring the performance of those advertisements. These companies may use cookies and similar technologies to collect information about your interactions with the Services and other websites and applications.</p>
      </div>

      <div id="children" className="content-section">
        <h3>OUR POLICIES FOR CHILDREN</h3>
        
        <p>We appreciate the importance of taking additional measures to protect children&apos;s privacy. Persons under the age of 13, or any higher minimum age in the jurisdiction where that person resides, are not permitted to create accounts unless their parent has consented in accordance with applicable law. If we learn that we have collected the personal information of a child under the relevant minimum age without parental consent, we will take steps to delete the information as soon as possible. Parents who believe that their child has submitted personal information to us and would like to have it deleted may contact us at privacy@iqibla.com.</p>
      </div>

      <div id="information-security" className="content-section">
        <h3>INFORMATION SECURITY</h3>
        
        <p>We work hard to keep your data safe. We use a combination of technical, administrative, and physical controls to maintain the security of your data. This includes using Transport Layer Security (&quot;TLS&quot;) to encrypt many of our Services. No method of transmitting or storing data is completely secure, however. If you have a security-related concern, please contact customer support.</p>
      </div>

      <div id="international" className="content-section">
        <h3>OUR INTERNATIONAL OPERATIONS AND DATA TRANSFERS</h3>
        
        <p>We operate internationally and transfer information to the United States and other countries for the purposes described in this policy. We rely on multiple legal bases to lawfully transfer personal data around the world. These include your consent, the EU-US and Swiss-US Privacy Shield, and EU Commission approved model contractual clauses, which require certain privacy and security protections.</p>
      </div>

      <div id="account-security" className="content-section">
        <h3>ACCOUNT AND SECURITY</h3>
        
        <p>You are responsible for safeguarding your password and for controlling access to your account. We encourage you to use strong passwords and to log out after using the Services. If you believe your account has been compromised, please contact customer support immediately.</p>
      </div>

      <div id="changes" className="content-section">
        <h3>CHANGES TO THIS POLICY</h3>
        
        <p>We will notify you before we make material changes to this policy and give you an opportunity to review the revised policy before deciding if you would like to continue to use the Services. You can review previous versions of the policy in our archive.</p>
      </div>

      <div id="contact" className="content-section">
        <h3>WHO WE ARE AND HOW TO CONTACT US</h3>
        
        <p>If you have questions, suggestions, or concerns about this policy, or about our use of your information, please contact us at privacy@iqibla.com.</p>
        
        <p>If you live in the European Economic Area, United Kingdom, or Switzerland, iQibla, Inc. is the data controller responsible for the personal data we collect. You can contact our Data Protection Officer at dpo@iqibla.com.</p>
      </div>
    </main>
  );
}