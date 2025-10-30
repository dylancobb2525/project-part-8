import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/pages-styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult('Sending...');

        const formDataToSend = new FormData();
        formDataToSend.append('access_key', '27101fda-dbb2-4b12-b0d5-990a46122157');
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('message', formData.message);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResult('Error: ' + data.message);
            }
        } catch (error) {
            setResult('Error sending message. Please try again.');
        }
    };

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
                        <form onSubmit={handleSubmit} id="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn">Send Message</button>
                            
                            {result && <div id="contact-result" className={result.includes('Error') ? 'error' : 'success'}>{result}</div>}
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

