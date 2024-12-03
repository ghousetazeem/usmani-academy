import React, { useState } from 'react';
import Roadmap from '../../resources/Roadmap.jsx';
import Form from './Form.jsx';
import './popup.css'; // Updated CSS for popup styling

const TajweedofQuran = () => {
    const [popupContent, setPopupContent] = useState(null);

    const content = [
        {
            paragraph: "Course Instructor:",
            listItems: ["Ustadha Sophia Khan"],
        },
        {
            paragraph: "Course Date:",
            listItems: ["December 7, 2024 - June 28, 2025 (Every Saturday)"],
        },
        {
            paragraph: "Course Timings:",
            listItems: ["10:00am - 11:00am (CST)"],
        },
        {
            paragraph: "Location: Zoom (Online)",
            listItems: ["TOTAL # of Classes = 25 classes", "TOTAL # of Teaching Hours = 25 hrs"],
        },
        {
            paragraph: "Course Description 🔗",
            onClick: () => setPopupContent(
                "<h2>Course Description</h2>" +
                "<p><em>“Allah has the Most Beautiful Names. So call upon Him by them….” [7:180]</em></p>" +
                "<p>Are you searching for that connection with Allah (subhanu wa ta’ala) but do not know where to begin? Are you struggling to understand why certain life events are taking place (whether personal or universal) and how to remain thinking good of Allah (subhanu wa ta’ala) (i.e. husn adh-dhan billah)?</p>" +
                "<p>In this course, you will embark on a profound journey to explore the 99 Names of Allah (Asma-ul-Husna) — each one revealing a unique attribute and facet of the Divine. The Names of Allah are not only to be memorized, but understood deeply, as they offer insight into the nature of Allah and our relationship with Him. Through detailed explanations, real-life applications, and spiritual reflections, this course will guide you in how to internalize and reflect upon these sacred Names.</p>" +
                "<h3>You will learn:</h3>" +
                "<ul>" +
                "<li>The meanings and wisdom behind each of the 99 Names of Allah</li>" +
                "<li>How to integrate these Names into daily life for spiritual growth and mindfulness</li>" +
                "<li>The significance of these Names in Islamic worship and prayer</li>" +
                "<li>Practical ways to use the Names for personal reflection, healing, and supplication</li>" +
                "</ul>" +
                "<p>By the end of this course, you'll not only have a deeper understanding of Allah's transcendent qualities but also develop a closer, more intimate connection with the Creator. Whether you're seeking spiritual enrichment or aiming to strengthen your relationship with Allah, this course provides a powerful foundation for your journey - bi idnillahi ta’ala.</p>" +
                "<p>This course is tailored for all ages.</p>"
            ),
        },
        {
            paragraph: "Course Objectives 🔗",
            onClick: () => setPopupContent(
                "<h2>Course Objectives</h2>" +
                "<ul>" +
                "<li>To be able to reflect on the importance and significance of the Names of Allah</li>" +
                "<li>To be able to understand the perfection and all-encompassing nature of each Name.</li>" +
                "<li>To be able to work towards implementing the Names as we navigate through life and relationships.</li>" +
                "<li>To be able to enhance and beautify your du’aas by asking Allah using His Most Beautiful Names</li>" +
                "<li>To learn techniques on how to connect with the Qur’an through the Names that are being used in the Ayahs</li>" +
                "</ul>"
            ),
        },
        {
            paragraph: "Course Structure 🔗",
            onClick: () => setPopupContent(
                "<h2>Course Structure</h2>" +
                "<ul>" +
                "<li>Short weekly readings and assignments may be assigned (i.e. written reflections)</li>" +
                "<li>No exams will be given</li>" +
                "</ul>"
            ),
        },
        {
            paragraph: "Recommended Texts 🔗",
            onClick: () => setPopupContent(
                "<h2>Recommended Texts</h2>" +
                "<ul>" +
                "<li>Al-Jawziyyah, Imam ibn Qayyim, Asma Allah al-Husna (in Arabic)</li>" +
                "<li>As-Sa’adi, Sheikh Abdur Rahman Nasir, Explanation to the Beautiful and Perfect Names of Allah</li>" +
                "<li>Hirschfelder, Umm Abdurrahman Sakina, Who is Allah? His Names and Attributes and Their Significance to the Individual</li>" +
                "<li>Ibn Al-Uthaymin, Sheikh Muhammad, Exemplary Principles Concerning The Beautiful Names Attributes Of Allaah</li>" +
                "<li>Yousef, Jinan, Reflecting on the Names of Allah</li>" +
                "</ul>"
            ),
        },
    ];

    const closePopup = () => setPopupContent(null);

    const scrollToForm = () => {
        document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Roadmap
                imageSrc="https://thumbs.dreamstime.com/b/name-allah-327209716.jpg"
                heading="Connect with the names of Allah - Asmaa ul Husna"
                content={content.map(({ paragraph, listItems, onClick }) => ({
                    paragraph: (
                        <span
                            style={{ textDecoration: onClick ? 'underline' : 'none', cursor: onClick ? 'pointer' : 'default' }}
                            onClick={onClick}
                        >
                            {paragraph}
                        </span>
                    ),
                    listItems,
                }))}
            />
            <div id="registration-form">
                <Form />
            </div>
            {popupContent && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closePopup}>✖</button>
                        <div dangerouslySetInnerHTML={{ __html: popupContent }} />
                    </div>
                </div>
            )}
        </>
    );
};

export default TajweedofQuran;
