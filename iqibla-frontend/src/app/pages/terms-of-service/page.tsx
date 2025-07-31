'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

// Import CSS
import './terms-of-service.css';

export default function TermsOfServicePage() {
  // We'll use translation in future updates
  const { } = useTranslation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="header-section">
        <h1>Terms of Service</h1>
      </div>

      <div className="content-section">
        <h1 className="policy-title">iQibla Terms of Service</h1>
        
        <p>Please read these Terms of Service (&quot;Terms&quot;) carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using the iQibla Service, you agree to comply with and be bound by these Terms.</p>
        
        <div className="toc">
          <a href="#use-of-service">USE OF THE iQibla SERVICE</a>
          <a href="#creating-account">CREATING AN ACCOUNT</a>
          <a href="#content-ownership">CONTENT AND OWNERSHIP</a>
          <a href="#prohibited-activities">PROHIBITED ACTIVITIES</a>
          <a href="#termination">TERMINATION</a>
          <a href="#disclaimers">DISCLAIMERS</a>
          <a href="#indemnity">INDEMNITY</a>
          <a href="#limitation-liability">LIMITATION OF LIABILITY</a>
          <a href="#dispute-resolution">DISPUTE RESOLUTION</a>
          <a href="#general-terms">GENERAL TERMS</a>
          <a href="#additional-terms">ADDITIONAL TERMS</a>
          <a href="#contact-us">CONTACT US</a>
          <a href="#paid-services">TERMS FOR PAID SERVICES</a>
        </div>
      </div>

      <div id="use-of-service" className="content-section">
        <h3>USE OF THE iQibla SERVICE</h3>
        
        <p>The iQibla Service is provided solely for your personal, non-commercial use. You may download and use the iQibla application on your mobile device, and access the iQibla website.</p>
        
        <p>You may not use the iQibla Service if you are under 13 years of age. If you are under 18 years of age (or the age of legal majority where you live), you may only use the iQibla Service under the supervision of a parent or legal guardian who agrees to be bound by these Terms.</p>
        
        <p>iQibla may change or discontinue, temporarily or permanently, any feature, component, or content of the iQibla Service at any time without notice. iQibla is not liable to you or to any third party for any modification, suspension, or discontinuance of any feature, component, or content of the iQibla Service. We reserve the right to determine the timing and content of software updates, which may be automatically downloaded and installed by iQibla products without prior notice to you.</p>
      </div>

      <div id="creating-account" className="content-section">
        <h3>CREATING AN ACCOUNT</h3>
        
        <p>Full use of the iQibla Service requires that you create an account by providing us with information such as your name, email, and a password. You agree to provide accurate, current, and complete information and to update this information to maintain its accuracy. You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account. You agree to notify iQibla immediately of any unauthorized use of your account.</p>
        
        <p>If you connect to the iQibla Service using your Facebook or other third-party service credentials, you authorize us to access and use certain information from that third-party service.</p>
      </div>

      <div id="content-ownership" className="content-section">
        <h3>CONTENT AND OWNERSHIP</h3>
        
        <p>The iQibla Service contains content owned or licensed by iQibla (&quot;iQibla Content&quot;). iQibla Content is protected by copyright, trademark, patent, trade secret, and other laws, and iQibla owns and retains all rights in the iQibla Content and the iQibla Service.</p>
        
        <p>iQibla hereby grants you a limited, revocable, non-sublicensable license to reproduce and display the iQibla Content (excluding any software code) solely for your personal use in connection with using the iQibla Service.</p>
        
        <p>Content you submit, post, or display on or through the iQibla Service is your content (&quot;Your Content&quot;). You retain all rights to Your Content that you post to the iQibla Service. By making Your Content available on or through the iQibla Service you grant to iQibla a non-exclusive, transferable, sublicensable, worldwide, royalty-free license to use, copy, modify, publicly display, publicly perform, and distribute Your Content in connection with operating and providing the iQibla Service to you and to other users.</p>
      </div>

      <div id="prohibited-activities" className="content-section">
        <h3>PROHIBITED ACTIVITIES</h3>
        
        <p>You agree not to engage in any of the following prohibited activities:</p>
        
        <p>Copying, distributing, or disclosing any part of the iQibla Service in any medium, including without limitation by any automated or non-automated &quot;scraping&quot;.</p>
        
        <p>Using any automated system, including without limitation &quot;robots,&quot; &quot;spiders,&quot; &quot;offline readers,&quot; etc., to access the iQibla Service in a manner that sends more request messages to the iQibla servers than a human can reasonably produce in the same period of time by using a conventional online web browser.</p>
        
        <p>Transmitting spam, chain letters, or other unsolicited email.</p>
        
        <p>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the iQibla Service.</p>
        
        <p>Taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure.</p>
        
        <p>Uploading invalid data, viruses, worms, or other software agents through the iQibla Service.</p>
        
        <p>Collecting or harvesting any personally identifiable information, including account names, from the iQibla Service.</p>
        
        <p>Using the iQibla Service for any commercial solicitation purposes.</p>
        
        <p>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity.</p>
        
        <p>Interfering with the proper working of the iQibla Service.</p>
        
        <p>Accessing any content on the iQibla Service through any technology or means other than those provided or authorized by the iQibla Service.</p>
        
        <p>Bypassing the measures we may use to prevent or restrict access to the iQibla Service, including without limitation features that prevent or restrict use or copying of any content or enforce limitations on use of the iQibla Service or the content therein.</p>
      </div>

      <div id="termination" className="content-section">
        <h3>TERMINATION</h3>
        
        <p>We reserve the right to suspend or deactivate your account or your access to certain aspects or all of the iQibla Service, or to terminate these Terms, at our sole discretion, at any time and without notice or liability to you. Upon any such suspension, deactivation, or termination, we may delete or remove Your Content and other information related to your account. You may close your account at any time by contacting <a href="https://www.iqibla.com/pages/contact-us">Customer Support</a>. Upon any termination of these Terms or suspension, termination, or discontinuation of the iQibla Service or your account, the following provisions of these Terms will survive: Sections 1, 5, 6, 9, 10, 11, 13, 14, 16, 17, 19, 20, 21, 22, 23, 24, 25.</p>
      </div>

      <div id="disclaimers" className="content-section">
        <h3>DISCLAIMERS</h3>
        
        <p>THE iQibla SERVICE AND iQibla CONTENT ARE PROVIDED &quot;AS IS,&quot; WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ALL EXPRESS OR IMPLIED WARRANTIES ARISING OUT OF OR RELATED TO THESE TERMS OR THE iQibla SERVICE, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. We make no warranty that the iQibla Service or iQibla Content will meet your requirements or be available on an uninterrupted, secure, or error-free basis. We make no warranty regarding the quality, accuracy, timeliness, truthfulness, completeness, or reliability of the iQibla Service or any iQibla Content.</p>
      </div>

      <div id="indemnity" className="content-section">
        <h3>INDEMNITY</h3>
        
        <p>You will indemnify and hold harmless iQibla or its officers, directors, employees, affiliates, agents, licensees, and contractors from and against any claims, suits, actions, demands, disputes, allegations, or investigations brought by any third party, governmental authority, or industry body, and all liabilities, damages, losses, costs, and expenses, including without limitation reasonable attorneys&apos; fees, arising out of or in any way connected with (i) your access to or use of the iQibla Service, (ii) Your Content, (iii) your breach or alleged breach of any warranties made by you hereunder or your violation of any other provision of these Terms, or (iv) your violation of any law or the rights of a third-party. We reserve the right to assume control of the defense of any third-party claim that is subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses.</p>
      </div>

      <div id="limitation-liability" className="content-section">
        <h3>LIMITATION OF LIABILITY</h3>
        
        <p>NEITHER iQibla, ITS SUPPLIERS, OR LICENSEES, NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE iQibla SERVICE WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE, OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE iQibla SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT iQibla HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.</p>
        
        <p>IN NO EVENT WILL iQibla&apos;S TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE iQibla SERVICE EXCEED THE AMOUNTS YOU HAVE PAID TO iQibla FOR USE OF THE iQibla SERVICE OR ONE HUNDRED DOLLARS ($100), IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO iQibla, AS APPLICABLE.</p>
        
        <p>THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN iQibla AND YOU.</p>
        
        <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.</p>
      </div>

      <div id="dispute-resolution" className="content-section">
        <h3>DISPUTE RESOLUTION</h3>
        
        <p>PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES AND CLAIMS WITH US AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US.</p>
        
        <p>You agree that any dispute between you and iQibla arising out of or relating to these Terms of Service, the iQibla Service, or any other iQibla products or services (collectively, &quot;Disputes&quot;) will be governed by the arbitration procedure outlined below.</p>
        
        <p>Governing Law: Except as otherwise required by applicable law, the Terms of Service and the resolution of any Disputes shall be governed by and construed in accordance with the laws of local without regard to its conflict of laws principles.</p>
        
        <p>Informal Dispute Resolution: We want to address your concerns without needing a formal legal case. Before filing a claim against iQibla, you agree to try to resolve the Dispute informally by contacting support@iQibla.com. We&apos;ll try to resolve the Dispute informally by contacting you through email. If a dispute is not resolved within 15 days after submission, you or iQibla may bring a formal proceeding.</p>
        
        <p>We Both Agree To Arbitrate: You and iQibla agree to resolve any Disputes through final and binding arbitration, except as set forth under Exceptions to Agreement to Arbitrate below.</p>
        
        <p>Opt-out of Agreement to Arbitrate: You can decline this agreement to arbitrate by contacting support@iQibla.com within 30 days of first accepting these Terms of Service and stating that you (include your first and last name) decline this arbitration agreement.</p>
        
        <p>Exceptions to Agreement to Arbitrate: Either party may bring a lawsuit solely for injunctive relief to stop unauthorized use or abuse of the iQibla products or iQibla Service, or infringement of intellectual property rights (for example, trademark, trade secret, copyright or patent rights) without first engaging in arbitration or the informal dispute-resolution process described above.</p>
        
        <p>No Class Actions: You may only resolve Disputes with iQibla on an individual basis, and may not bring a claim as a plaintiff or a class member in a class, consolidated, or representative action. Class arbitration, class actions, private attorney general actions, and consolidation with other arbitration are not allowed under our agreement.</p>
        
        <p>Judicial Forum for Disputes: Except as otherwise required by applicable law, in the event that the agreement to arbitrate is found not to apply to you or your claim, you and iQibla agree that any judicial proceeding (other than small claims actions) will be brought in the courts of local. Both you and iQibla consent to venue and personal jurisdiction there. We both agree to waive our right to a jury trial.</p>
        
        <p>Limitation on Claims: Regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to your use of the iQibla products or iQibla Service must be filed within one (1) year after such claim or cause of action arose, or else that claim or cause of action will be barred forever.</p>
      </div>

      <div id="general-terms" className="content-section">
        <h3>GENERAL TERMS</h3>
        
        <p>Except as otherwise stated herein, these Terms constitute the entire and exclusive understanding and agreement between iQibla and you regarding the iQibla Service, and these Terms supersede and replace any and all prior oral or written understandings or agreements between iQibla and you regarding the iQibla Service and iQibla Content.</p>
        
        <p>We will notify you before we make material changes to these Terms and give you an opportunity to review the revised Terms before continuing to use the iQibla Service. When you use the iQibla Service after a modification becomes effective, you are telling us that you accept the modified Terms.</p>
        
        <p>If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect.</p>
        
        <p>You may not assign, delegate, or transfer these Terms, by operation of law or otherwise, without iQibla&apos;s prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null. iQibla may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors, and permitted assigns.</p>
        
        <p>Any notices or other communications provided by iQibla under these Terms, including those regarding modifications to these Terms, will be given: (i) via email or (ii) by posting to the iQibla Service. For notices made by e-mail, the date of receipt on the message will be deemed the date on which such notice is transmitted.</p>
        
        <p>iQibla&apos;s failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of iQibla. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.</p>
      </div>

      <div id="additional-terms" className="content-section">
        <h3>ADDITIONAL TERMS MAY APPLY</h3>
        
        <p>Additional terms may apply to certain products or services. In the event that there is a conflict between these Terms and any additional terms, the additional terms will control.</p>
      </div>

      <div id="contact-us" className="content-section">
        <h3>CONTACT US</h3>
        
        <h5>PLEASE CONTACT US IF YOU HAVE ANY QUESTIONS ABOUT THESE TERMS.</h5>
        
        <p>You may contact us at support@iQibla.com or at our mailing address below.</p>
      </div>

      <div id="paid-services" className="content-section">
        <h3>iQibla TERMS FOR PAID SERVICES</h3>
        
        <p>These iQibla Terms for Paid Services (the &quot;Paid Service Terms&quot;) apply to your purchase and use of any paid iQibla services, including automatically renewing subscription services, personalized live coaching services (&quot;Live Coaching Services&quot;), and one-time purchases (collectively the &quot;Paid Services&quot;). These Paid Service Terms only apply to services we offer for purchase, and do not apply to the sale of our physical goods (&quot;Products&quot;). For payment terms related to the sale of Products, please see our <a href="https://www.iqibla.com/pages/shipping-policy">Shipping Policy</a>.</p>
        
        <p>By purchasing or using a Paid Service, you agree to be bound by the iQibla Terms of Service, which incorporate these Paid Service Terms and include a mandatory arbitration provision, and any separate terms and conditions presented to you in conjunction with your use of the Paid Services. If you do not accept these terms, do not purchase, access, or use our Paid Services.</p>
        
        <h4>1. PAID SERVICES</h4>
        
        <p>Paid Services include content and personalized, interactive services. They may be one-time purchases or automatically renewing subscription services, like our Programs and Live Coaching Services (&quot;Subscriptions&quot;). Please see the product page for your specific Paid Services for more information. We may make changes to, suspend, or discontinue Paid Services at any time for any reason, and we have the sole discretion to determine which portions of the iQibla Service require payment.</p>
        
        <h4>2. SUBSCRIPTIONS</h4>
        
        <p><strong>Automatically Renewing Subscriptions.</strong> Your Subscription term may vary, for example, with monthly or annual automatic renewal terms (a &quot;Subscription Term&quot;), as described in the course of your transaction. <strong>Your Subscription will automatically renew for additional Subscription Terms as long as your Subscription continues, until you cancel it or we suspend or stop providing the Subscription in accordance with our Terms of Service.</strong> Unless otherwise indicated by us, you will be charged prior to, or at the beginning of, each renewal term. Before charging you for a Subscription Term, we will notify you of the applicable fees, and the renewal will occur at the price then in effect for the Paid Service.</p>
        
        <p><strong>Subscription Cancellation. You may cancel your Subscription at any time. Your cancellation will take effect at the end of the current Subscription Term.</strong></p>
        
        <p>In the event you cancel your Subscription, note that we may still send you promotional communications about iQibla, unless you opt out of receiving those communications by following the unsubscribe instructions provided in the communications.</p>
        
        <p><strong>No Refunds on Subscriptions.</strong> When you cancel a Subscription, you cancel only future charges for your Subscription. You will not receive a refund for the current Subscription Term you paid for, but you will continue to have full access to that Subscription until the end of that current Subscription Term. At any time for any reason, we may provide a refund, discount, or other consideration (&quot;credits&quot;) to some or all of our users. The amount and form of such credits, and the decision to provide them, are at our sole and absolute discretion. The provision of credits in one instance does not entitle you to credits in the future for similar instances, nor does it obligate us to provide credits in the future.</p>
        
        <p><strong>Free Trials.</strong> From time to time, we may offer free trials of certain Subscriptions for specified periods of time without payment. If we offer you a free trial, the specific terms of your free trial will be provided in the marketing materials describing the particular trial. <strong>Once your free trial ends, we (or our third-party payment processor) will begin billing your designated payment method on a recurring basis for your Subscription (plus any applicable taxes and other charges) for as long as your Subscription continues, unless you cancel your Subscription prior to the end of your free trial.</strong> Instructions for canceling your Subscription are described in the sections above. To avoid any charges, you must cancel your Subscription before the end of your free trial period. Before charging you at the end of the your free trial period, we will notify you of the applicable fees.</p>
        
        <p><strong>Price Changes.</strong> We reserve the right to adjust pricing for our Paid Services or any components thereof in any manner and at any time. Any price changes will take effect following notice to you.</p>
        
        <h4>3. ONE-TIME PURCHASES</h4>
        
        <p>Certain Paid Services are one-time purchases, and not subscription-based. One-time purchases may not be canceled and you are not entitled to a refund for such services.</p>
        
        <h4>4. PAYMENT AND BILLING</h4>
        
        <p>You authorize iQibla to charge your chosen payment method for the Paid Services. By providing a payment method that we accept, you represent and warrant that you are authorized to use the designated payment method and that you authorize us (or our third-party payment processor) to charge your payment method for the total amount of your purchase (including any applicable taxes and other charges). If the payment method cannot be verified, is invalid or is otherwise not acceptable, your Paid Service may be suspended or canceled. You must resolve any problem we encounter in relation to the payment method you select in order to proceed with your use of the Service.</p>
        
        <p>Please note that if you accept a promotional offer or make changes to your Paid Services, the amount billed may vary. It may also fluctuate due to changes in applicable taxes or currency exchange rates. You authorize us (or our third-party payment processor) to charge your payment method for the corresponding amount.</p>
        
        <h4>5. REPRESENTATIONS, WARRANTIES, AND COVENANTS</h4>
        
        <p>Any Paid Services are personal to you and may not be used by any other person. You will not allow anyone else to use your Paid Services, and you will not transfer any Subscription or disclose your password to any other person. You will report to iQibla any unauthorized or prohibited use of your Paid Services.</p>
      </div>
    </main>
  );
}