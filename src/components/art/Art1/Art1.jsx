// src/components/Art1.js
import React from 'react';
import Roadmap from '../../resources/Roadmap';
import ArtForm from '../ArtForm';

const Art1 = () => {
    return (
        <>
            <Roadmap
                imageSrc="https://img.freepik.com/free-photo/fantasy-eye-illustration_23-2151675421.jpg"
                heading="Eye painting (Summary of the art description in one line)"
                listItems={[
                    <p style={{ textAlign: 'center', marginTop: "-4rem" }}>
                        Art transcends boundaries, offering a unique way to express emotions, ideas, and culture. From painting to dance, each form captures aspects of the human experience, letting us see through others' perspectives. Art can heal, inspire, and provoke change, connecting people across time and space.
                    </p>
                ]}
            />
            <ArtForm />
        </>
    );
};

export default Art1;
