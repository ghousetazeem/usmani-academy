import React from 'react';
import './Success.css'; // Import the CSS file

const Success = () => {
    return (
        <div className="success-container">
            <div className="success-card">
                <svg viewBox="0 0 24 24" className="success-icon">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div className="success-text">
                    <h3 className="success-title">Payment Done!</h3>
                    <p className="success-message">Thank you for completing your secure online payment.</p>
                    <p> Have a great day! </p>
                    <div className="button-container">
                        <a href="/resources" className="success-button">
                            GO BACK
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;
