import React, { useState } from 'react';
import ResourcesCard from './ResourcesCard';
import './resources.css';
import rizwan from './image.png';

const Resources = () => {
	const [showModal, setShowModal] = useState(false);
	const [currentProfile, setCurrentProfile] = useState({});

	const instructors = [
		{
			name: 'Muhammad Rizwan', title: 'Chief Operating Officer - Usmani Academy', image: rizwan, description: 'Mohammed Rizwan is an entrepreneurial leader with expertise in robotics, digital marketing, and engineering. With a Bachelor’s in Electronics and Instrumentation and pursuing a Master’s in Computing, he co-founded The Ingentas Corp, leading projects in drone technology and robotics education, impacting over 4,000 students. He also founded ZVAN, delivering impactful marketing campaigns across India. Rizwan’s notable projects include the MIMOSA Suit, a women’s safety device, and DOORITY, a machine learning security system. He chaired Club Optimus, organizing major robotics competitions and earning national accolades. His skills span IoT, machine learning, PCB design, and digital marketing. Recognized for strategic thinking, he has secured patents, led events, and excelled in national competitions. Currently, he is President of the Muslim Student Association and a Graduate Senator at Wichita State University.',
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