import React from 'react';
import PageHeader from '../components/PageHeader';
import './Contact.css';

function Contact() {
    return (
        <div>
            <PageHeader 
                title="Contact Me" 
                subtitle="Get in touch with me about travel recommendations or questions"
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />
            
            <main id="main-content">
                <div className="contact-container">
                    <div className="contact-form-section">
                        <h3>Send me a Message</h3>
                        <form method="POST" id="contact-form">
                            <input type="hidden" name="access_key" value="27101fda-dbb2-4b12-b0d5-990a46122157" />
                            
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" required></textarea>
                            </div>
                            
                            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                            
                            <button type="submit" className="submit-btn">Send Message</button>
                            
                            <div id="contact-result"></div>
                        </form>
                    </div>
                    
                    <div className="contact-info-section">
                        <h3>Travel Tips & Recommendations</h3>
                        <p>I'd love to hear about your travel experiences and share recommendations! Whether you're planning a trip to one of the destinations I've visited or have questions about traveling, feel free to reach out.</p>
                        
                        <div className="contact-details">
                            <h4>What I can help with:</h4>
                            <ul>
                                <li>Travel recommendations for destinations I've visited</li>
                                <li>Tips for first-time travelers</li>
                                <li>Best times to visit certain locations</li>
                                <li>Budget travel advice</li>
                                <li>Must-see attractions and hidden gems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contact;

