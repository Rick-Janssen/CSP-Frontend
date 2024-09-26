import React from 'react';
import './LandingPage.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom'; 

const LandingPage = () => {
    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/home'); 
    };
    
    return (
        <div className="landing-container">
            <section className="center-section">
                <h1>RateIt</h1>
                <p className="tagline">The number 1 place to find Croatian and Dutch products.</p>
                <p>Your go-to platform for quick product reviews.</p>
                <button className="primary-button" onClick={handleGetStarted}>
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default LandingPage;
