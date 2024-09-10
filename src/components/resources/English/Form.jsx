import React, { useRef } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import './form.css'

function Form() {
    const [date, setDate] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const form = useRef();

    // Stripe payment function
    const buyfunction = async () => {
        // Determine the base URL based on environment
        const baseUrl = window.location.hostname === "localhost"
            ? "http://localhost:3000" // Local backend
            : "https://test-hosting-eight.vercel.app"; // Hosted backend

        try {
            let response = await axios.post(`${baseUrl}/english-payment`);
            if (response && response.status === 200) {
                window.location.href = response.data.url;
            }
        } catch (error) {
            console.error("There was an error with the payment request", error);
            setLoading(false); // Reset loader if error occurs
        }
    };

    // Email sending function
    const sendEmail = () => {
        return emailjs
            .sendForm('service_arbk5fo', 'template_81oh6mn', form.current, '8XeobQ8Xq4I9YSnjv')
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
        setLoading(true);  // Show loader
        buyfunction();
    };

    return (
        <div className="container">
            <h2>Registration Form</h2>
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
                        <label htmlFor="rollnumber">Roll Number:</label>
                        <input type="text" id="rollnumber" name="rollnumber" placeholder="Eg. 8764..." required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone Number:</label>
                        <input type="tel" id="telephone" name="telephone" placeholder="Eg. 3164031898" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="parents_whatsapp">Parent's WhatsApp Number:</label>
                        <input type="tel" id="parents_whatsapp" name="parents_whatsapp" placeholder="Eg. 3164031898" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Enter your message here..."></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" disabled={loading}>
                        {loading ? <span className="loader"></span> : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
