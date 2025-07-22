import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import PageTitle from '../common/PageTitle';
import Service from '../components/Service';

const TermsAndConditions = () => {

    return (
        <>
            <PageTitle title="Mantra Group - Terms and Conditions" />
            
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
                pageTitle="Terms and Conditions"
                pageName="Terms and Conditions"
            />

            {/* Terms and Conditions Content */}
            <section className="terms-conditions padding-y-120">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="terms-content">
                                <div className="text-center mb-5">
                                    <h1 className="mb-3">Terms and Conditions</h1>
                                    <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">1. Acceptance of Terms</h3>
                                    <p className="terms-section__text">
                                        By accessing and using the Mantra Group website and services, you accept and agree to be 
                                        bound by the terms and provision of this agreement. If you do not agree to abide by the 
                                        above, please do not use this service.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">2. Use License</h3>
                                    <p className="terms-section__text">
                                        Permission is granted to temporarily download one copy of the materials on Mantra Group's 
                                        website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                                        not a transfer of title, and under this license you may not:
                                    </p>
                                    <ul>
                                        <li>Modify or copy the materials</li>
                                        <li>Use materials for commercial purposes</li>
                                        <li>Attempt to reverse engineer any software</li>
                                        <li>Remove any copyright or proprietary notations</li>
                                    </ul>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">3. Property Listings</h3>
                                    <p className="terms-section__text">
                                        All property listings on our platform are subject to the following terms:
                                    </p>
                                    <ul>
                                        <li>Information provided by third parties</li>
                                        <li>Prices subject to change</li>
                                        <li>Descriptions for informational purposes</li>
                                        <li>Photos may not reflect current condition</li>
                                        <li>Separate agreements required</li>
                                    </ul>
                                    <p className="terms-section__text">
                                        Always verify property details directly with our agents before making any decisions.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">4. User Accounts</h3>
                                    <p className="terms-section__text">
                                        When you create an account with us, you must provide information that is accurate, 
                                        complete, and current at all times. You are responsible for safeguarding the password 
                                        and for all activities that occur under your account.
                                    </p>
                                    <p className="terms-section__text">
                                        You agree not to disclose your password to any third party and to take sole responsibility 
                                        for activities under your account.
                                    </p>
                                    <ul>
                                        <li>Keep information updated</li>
                                        <li>Use strong passwords</li>
                                        <li>Protect your credentials</li>
                                        <li>Report suspicious activity</li>
                                    </ul>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">5. Prohibited Uses</h3>
                                    <p className="terms-section__text">
                                        You may not use our service for:
                                    </p>
                                    <ul>
                                        <li>Unlawful purposes</li>
                                        <li>Violating regulations or laws</li>
                                        <li>Infringing intellectual property</li>
                                        <li>Harassment or discrimination</li>
                                        <li>Submitting false information</li>
                                        <li>Uploading malicious code</li>
                                    </ul>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">6. Real Estate Services</h3>
                                    <p className="terms-section__text">
                                        Mantra Group provides real estate brokerage services subject to applicable laws and 
                                        regulations. Our services include:
                                    </p>
                                    <ul>
                                        <li>Property listing and marketing services</li>
                                        <li>Buyer and seller representation</li>
                                        <li>Market analysis and consultation</li>
                                        <li>Transaction coordination and support</li>
                                    </ul>
                                    <p className="terms-section__text">
                                        All real estate transactions are subject to separate brokerage agreements and applicable real estate laws.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">7. Disclaimer</h3>
                                    <p className="terms-section__text">
                                        The materials on Mantra Group's website are provided on an 'as is' basis. Mantra Group 
                                        makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                                        warranties including without limitation, implied warranties or conditions of merchantability, 
                                        fitness for a particular purpose, or non-infringement of intellectual property or other 
                                        violation of rights.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">8. Limitations</h3>
                                    <p className="terms-section__text">
                                        In no event shall Mantra Group or its suppliers be liable for any damages (including, 
                                        without limitation, damages for loss of data or profit, or due to business interruption) 
                                        arising out of the use or inability to use the materials on Mantra Group's website, even 
                                        if Mantra Group or an authorized representative has been notified orally or in writing of 
                                        the possibility of such damage.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">9. Accuracy of Materials</h3>
                                    <p className="terms-section__text">
                                        The materials appearing on Mantra Group's website could include technical, typographical, 
                                        or photographic errors. Mantra Group does not warrant that any of the materials on its 
                                        website are accurate, complete, or current. Mantra Group may make changes to the materials 
                                        contained on its website at any time without notice.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">10. Links</h3>
                                    <p className="terms-section__text">
                                        Our website may contain links to third-party websites. We have no control over 
                                        the content and practices of these sites and cannot accept responsibility for 
                                        their respective privacy policies.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">11. Modifications</h3>
                                    <p className="terms-section__text">
                                        We may revise these terms of service at any time without notice. By using this 
                                        website, you are agreeing to be bound by the then current version of these terms. 
                                        Please review these terms periodically for changes.
                                    </p>
                                </div>

                                <div className="terms-section mb-5">
                                    <h3 className="terms-section__title">12. Governing Law</h3>
                                    <p className="terms-section__text">
                                        These terms and conditions are governed by and construed in accordance with the 
                                        laws of Canada and you irrevocably submit to the exclusive jurisdiction of the 
                                        courts in that province. All disputes will be resolved under Canadian law.
                                    </p>
                                </div>

                                <div className="terms-section mb-5" id="contact-terms">
                                    <h3 className="terms-section__title">13. Contact Information</h3>
                                    <p className="terms-section__text">
                                        If you have any questions about these Terms and Conditions, please contact us:
                                    </p>
                                    <p className="terms-section__text">
                                        <strong>Company:</strong> Mantra Group<br />
                                        <strong>Website:</strong> <a href="https://mantragroup.ca" target="_blank" rel="noopener noreferrer">https://mantragroup.ca</a><br />
                                        <strong>Email:</strong> <a href="mailto:contact@mantragrp.com">contact@mantragrp.com</a><br />
                                        <strong>Phone:</strong> <a href="tel:+16475600736">+1 647-560-0736</a><br />
                                        <strong>Address:</strong> 4040 Steeles Ave W, Woodbridge, ON L4L 4Y5<br />
                                        <strong>Business Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM
                                    </p>
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

export default TermsAndConditions;