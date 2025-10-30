import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/pages-styles/About.css';

function About() {
    return (
        <div>
            <PageHeader 
                title="About Me" 
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />
            
            <main id="main-content">
                <section id="about-content">
                    <div className="headshot-container">
                        <img src={`${process.env.PUBLIC_URL}/images/headshot.png`} alt="Dylan Headshot" id="headshot" />
                    </div>
                    
                    <div className="about-text">
                        <h3>Hi, I'm Dylan</h3>
                        <p>I'm a 19-year-old college student with an insatiable passion for exploring the world. From bustling cities to tropical islands, I've been fortunate to visit multiple US states and international destinations. Each trip has shaped who I am today and fueled my desire to see even more of what our amazing planet has to offer.</p>
                        
                        <h3>Why I Travel</h3>
                        <p>Travel opens my mind to new cultures, perspectives, and experiences that I could never gain from staying in one place. Whether it's trying authentic local cuisine, meeting people from different backgrounds, or simply witnessing breathtaking landscapes, every journey teaches me something valuable about the world and myself. I believe that travel is the best education you can give yourself.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default About;

