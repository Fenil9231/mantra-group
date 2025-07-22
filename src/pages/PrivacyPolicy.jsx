import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import PageTitle from '../common/PageTitle';
import Service from '../components/Service';

const PrivacyPolicy = () => {
    return (
        <>
            <PageTitle title="Mantra Group - Privacy Policy" />
            
            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/contact"
                btnText="Contact Us"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Privacy Policy"
                pageName="Privacy Policy"
            />

            {/* Privacy Policy Content */}
            <section className="privacy-policy padding-y-120">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="terms-content">
                                <div className="text-center mb-5">
                                    <h1 className="mb-3">Privacy Policy</h1>
                                    <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
                                </div>


                                <div className="terms-section mb-5" id="information-collection">
                                    <h3 className="terms-section__title">1. Information We Collect</h3>
                                    <p className="terms-section__text">
                                        At Mantra Group, we collect information that you provide directly to us, such as when you:
                                    </p>
                                    <ul>
                                        <li>Create an account or register for our services</li>
                                        <li>Submit property listings or inquiries</li>
                                        <li>Contact us through our website or phone</li>
                                        <li>Subscribe to our newsletter or marketing communications</li>
                                        <li>Participate in surveys or promotional activities</li>
                                    </ul>
                                    <p className="terms-section__text">
                                        This information may include your name, email address, phone number, address, financial information, and property preferences.
                                    </p>
                                </div>

                                <div className="terms-section mb-5" id="information-usage">
                                    <h3 className="terms-section__title">2. How We Use Your Information</h3>
                                    <p className="terms-section__text">
                                        We use the information we collect to:
                                    </p>
                                    <ul>
                                        <li>Provide and improve our real estate services</li>
                                        <li>Process transactions and manage your account</li>
                                        <li>Communicate with you about properties and services</li>
                                        <li>Send you marketing communications (with your consent)</li>
                                        <li>Comply with legal obligations and protect our rights</li>
                                        <li>Analyze usage patterns to improve our website and services</li>
                                    </ul>
                                </div>

                                <div className="terms-section mb-5" id="information-sharing">
                                    <h3 className="terms-section__title">3. Information Sharing</h3>
                                    <p className="terms-section__text">
                                        We may share your information in the following circumstances:
                                    </p>
                                    <ul>
                                        <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                                        <li><strong>Service providers:</strong> With trusted third parties who assist in our operations</li>
                                        <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                                        <li><strong>Business transfers:</strong> In connection with mergers or acquisitions</li>
                                        <li><strong>Property listings:</strong> Information in listings may be shared with potential buyers/renters</li>
                                    </ul>
                                </div>

                                <div className="terms-section mb-5" id="data-security">
                                    <h3 className="terms-section__title">4. Data Security</h3>
                                    <p className="terms-section__text">
                                        We implement appropriate technical and organizational measures to protect your personal information:
                                    </p>
                                    <ul>
                                        <li>SSL Encryption</li>
                                        <li>Secure Authentication</li>
                                        <li>Secure Data Storage</li>
                                        <li>Access Controls</li>
                                        <li>Regular Security Audits</li>
                                        <li>Staff Training</li>
                                    </ul>
                                    <p className="terms-section__text">
                                        However, no method of transmission over the internet is 100% secure.
                                    </p>
                                </div>

                                <div className="terms-section mb-5" id="user-rights">
                                    <h3 className="terms-section__title">5. Your Rights</h3>
                                    <p className="terms-section__text">
                                        You have the following rights regarding your personal information:
                                    </p>
                                    <ul>
                                        <li>Access and update your personal information</li>
                                        <li>Request deletion of your personal data</li>
                                        <li>Opt-out of marketing communications</li>
                                        <li>Request a copy of your data</li>
                                        <li>Lodge a complaint with supervisory authorities</li>
                                    </ul>
                                </div>

                                <div className="terms-section mb-5" id="cookies">
                                    <h3 className="terms-section__title">6. Cookies and Tracking Technologies</h3>
                                    <p className="terms-section__text">
                                        We use cookies and similar tracking technologies to enhance your browsing experience:
                                    </p>
                                    <ul>
                                        <li>Analytics Cookies</li>
                                        <li>Functional Cookies</li>
                                        <li>Targeting Cookies</li>
                                        <li>Essential Cookies</li>
                                        <li>Preference Cookies</li>
                                        <li>Third-party Cookies</li>
                                    </ul>
                                    <p className="terms-section__text">
                                        You can control cookies through your browser settings.
                                    </p>
                                </div>

                                <div className="terms-section mb-5" id="third-party">
                                    <h3 className="terms-section__title">7. Third-Party Links</h3>
                                    <p className="terms-section__text">
                                        Our website may contain links to third-party websites. We encourage you to review 
                                        the privacy policies of any third-party sites you visit. We are not responsible for 
                                        the privacy practices or content of external sites.
                                    </p>
                                </div>

                                <div className="terms-section mb-5" id="children">
                                    <h3 className="terms-section__title">8. Children's Privacy</h3>
                                    <p className="terms-section__text">
                                        Our services are not intended for children under 13 years of age. We do not knowingly 
                                        collect personal information from children under 13. If you believe we have collected 
                                        information from a child under 13, please contact us immediately.
                                    </p>
                                </div>

                                <div className="terms-section mb-5" id="policy-changes">
                                    <h3 className="terms-section__title">9. Changes to This Privacy Policy</h3>
                                    <p className="terms-section__text">
                                        We may update this Privacy Policy from time to time. Here's how we'll keep you informed:
                                    </p>
                                    <ul>
                                        <li>Post updates on this page</li>
                                        <li>Update the "Last Updated" date</li>
                                        <li>Notify you via email for significant changes</li>
                                    </ul>
                                    <p className="terms-section__text">
                                        You are advised to review this Privacy Policy periodically for any changes.
                                    </p>
                                </div>

                                <div className="terms-section mb-5" id="contact-privacy">
                                    <h3 className="terms-section__title">10. Contact Us</h3>
                                    <p className="terms-section__text">
                                        If you have any questions about this Privacy Policy, please contact us:
                                    </p>
                                    <div className="contact-info">
                                        <p><strong>Mantra Group</strong></p>
                                        <p><strong>Website:</strong> <a href="https://mantragroup.ca" target="_blank" rel="noopener noreferrer">https://mantragroup.ca</a></p>
                                        <p><strong>Email:</strong> <a href="mailto:contact@mantragrp.com">contact@mantragrp.com</a></p>
                                        <p><strong>Phone:</strong> <a href="tel:+16475600736">+1 647-560-0736</a></p>
                                        <p><strong>Address:</strong> 4040 Steeles Ave W, Woodbridge, ON L4L 4Y5</p>
                                        <p><strong>Business Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <Service />

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default PrivacyPolicy;