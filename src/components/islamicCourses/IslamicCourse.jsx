import React, { useState } from 'react';
import ResourcesCard from './ResourcesCard';
import './resources.css';
import aamirsir from './aamirsir.png';
import ustadaSophia from './ustada-sophia.png';

const Resources = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProfile, setCurrentProfile] = useState({});

    const instructors = [
        {
            name: 'Sophia Khan',
            title: 'Islamic Instructor | Motivational Speaker',
            image: ustadaSophia,
            description: 'Ustadha Sophia Khan is a motivational speaker, spiritual advisor, educator, and Muslim community leader, particularly recognized for her engaging and relatable teaching style, especially among Muslim youth and young adults. She serves as the Youth Girls Advisor at the Islamic Center of Frisco - Texas.Ustadha Sophia majored in Islamic Shariah Law in Arabic at the University of Sharjah, U.A.E., and holds a degree in Psychology with a concentration on Mental Health.With over seven years of study under the guidance of renowned Islamic scholars in the U.A.E., Ustadha Sophia also had the privilege of teaching a wide range of Islamic subjects to youth of all ages while working under the Awqaaf (U.A.E. Ministry of General Authority of Islamic Affairs & Endowments). Her specialties include Aqeedah (Islamic Creed), Adaab wa Akhlaaq (Islamic Character and Manners), Asmaa ul Husna (Names of Allah), and Tafseer (exegesis) of the Quran Ustadha Sophias primary mission is to help the younger generation strengthen their connection with Allah(subhanahu wa taala) and navigate lifes challenges through the guidance of the Quran, the Beautiful Names and Attributes of Allah, and Islamic Psychology. She is a sought-after speaker at various masajid, conferences, and events aimed at youth, college students, and young adults, and has been invited to speak at numerous university MSA gatherings, including those at UTD, UNT, Texas A&M, and UT Austin, among others. Outside of her teaching, you will find her at different DFW Muslim community events with her husband and two daughters. To stay updated on what she does - you can follow her on Instagram: @ustadhasophiakhan',
        },
        {
            name: 'Muhammad Aamir Usmani',
            title: 'Chief Advisor - UA',
            image: aamirsir,
            description: 'Muhammad Aamir Usmani has an extensive background in library technologies and serves as a Chief Advisor.',
        },
    ];

    const openModal = (profile) => {
        setCurrentProfile(profile);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <ResourcesCard />
            <h1 style={{ fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center' }} className='instruct'>
                Instructors
            </h1>
            <section className='instructor'>
                {instructors.map((instructor, index) => (
                    <div className="instructor-info" key={index}>
                        <h2>{instructor.name}</h2>
                        <h3>{instructor.title}</h3>
                        <button className='primary-btn' onClick={() => openModal(instructor)}>View Profile</button>
                    </div>
                ))}
            </section>

            {showModal && (
                <div style={styles.overlay}>
                    <div style={styles.modal}>
                        <button style={styles.closeButton} onClick={closeModal}>✕</button>
                        <div style={styles.modalContent}>
                            <img src={currentProfile.image} alt={currentProfile.name} style={styles.modalImage} />
                            <div style={styles.modalText}>
                                <h2 style={{ fontSize: '2.4rem' }}>{currentProfile.name}</h2>
                                <h3 style={{ fontSize: '1.4rem' }}>{currentProfile.title}</h3>
                                <p style={styles.scrollableText}>{currentProfile.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Resources;

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        width: '90%',
        maxWidth: '600px',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    },
    modalImage: {
        width: '100%',
        maxHeight: '300px',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    modalText: {
        maxHeight: '400px',
        overflowY: 'auto',
        textAlign: 'justify',
        padding: '0 1rem',
    },
    scrollableText: {
        fontSize: '1rem',
    },
    '@media (min-width: 600px)': {
        modal: {
            flexDirection: 'row',
        },
    },
};