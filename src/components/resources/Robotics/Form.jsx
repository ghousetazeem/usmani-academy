import React, { useRef, useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import '../form.css'

function Form() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    // Stripe payment function
    const buyfunction = async () => {
        // Determine the base URL based on environment
        const baseUrl = window.location.hostname === "localhost"
            ? "http://localhost:3000" // Local backend
            : "https://usmani-academy-backend.vercel.app"; // Hosted backend

        try {
            let response = await axios.post(`${baseUrl}/robotics-payment`);
            if (response && response.status === 200) {
                window.location.href = response.data.url;
            }
        } catch (error) {
            console.error("There was an error with the payment request", error);
            setLoading(false); // Reset loader if error occurs
        }
    };

    const sendEmail = () => {
        return emailjs
            .sendForm('service_v2tgif3', 'template_6lcsknl', form.current, 'hVRjQU-0qQWPCIa4h')
            .then(
                () => {
                    console.log('Email sent successfully!');
                },
                (error) => {
                    console.log('Email sending failed...', error.text);
                }
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
        setLoading(true);  // Show loader
        buyfunction();
    };

    return (
        <div className="container">
            <h2 className="form-h2">Registration Form</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" id="firstname" name="firstname" placeholder="Eg. Muhammad" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Eg. Ismail" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Eg. ismail123@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course">Course:</label>
                        <input type="text" id="course" name="course" placeholder="Eg. Math/Asma-ul-husna, etc..." required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone Number:</label>
                        <input type="tel" id="telephone" name="telephone" placeholder="Eg. 3164031898" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="card_holder_name">Card Holder Name (As mentioned on the card):</label>
                        <input type="text" id="card_holder_name" name="card_holder_name" placeholder="Eg. MUHAMMAD USMANI" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Enter your message here..."></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" disabled={loading}>
                        {loading ? <span className="loader"></span> : 'Register and Pay'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
