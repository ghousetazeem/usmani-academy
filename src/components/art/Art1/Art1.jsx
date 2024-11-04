// src/components/Art1.js
import React, { useState } from 'react';
import Roadmap from '../../resources/Roadmap';
import ArtForm from '../ArtForm';

// List of images for the slider
const images = [
    "https://img.freepik.com/free-photo/fantasy-eye-illustration_23-2151675421.jpg",
    "https://images.pexels.com/photos/1707640/pexels-photo-1707640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/25315989/pexels-photo-25315989/free-photo-of-paintings-of-cats-eye-and-a-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/982071/pexels-photo-982071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // Add more image URLs as needed
];

const Art1 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle next and previous clicks
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <Roadmap
                imageSrc={images[currentImageIndex]}
                heading="Eye painting (Summary of the art description in one line)"
                listItems={[
                    <p style={{ textAlign: 'start', marginTop: "-4rem" }}>
                        Art transcends boundaries, offering a unique way to express emotions, ideas, and culture. From painting to dance, each form captures aspects of the human experience, letting us see through others' perspectives. Art can heal, inspire, and provoke change, connecting people across time and space.
                        <p>Price: <span style={{ textAlign: 'center', fontSize: '2rem', color: '#6e9f27' }}>$45</span></p>
                    </p>

                ]}
            />
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', maxWidth: '80%', }}>
                <button onClick={handlePrevious} style={{
                    position: 'absolute',
                    left: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    zIndex: 1
                }}>
                    Previous
                </button>

                <div style={{
                    display: 'flex',
                    overflowX: 'auto',
                    width: '80%',
                    maxWidth: '600px',
                    padding: '0 50px',
                    scrollSnapType: 'x mandatory',
                    gap: '10px',
                }}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => setCurrentImageIndex(index)}
                            style={{
                                width: '80px',
                                height: '60px',
                                objectFit: 'cover',
                                cursor: 'pointer',
                                border: index === currentImageIndex ? '2px solid #007bff' : '2px solid transparent',
                                scrollSnapAlign: 'center'
                            }}
                        />
                    ))}
                </div>

                <button onClick={handleNext} style={{
                    position: 'absolute',
                    right: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    zIndex: 1
                }}>
                    Next
                </button>
            </div>
            <ArtForm />
        </>
    );
};

export default Art1;
