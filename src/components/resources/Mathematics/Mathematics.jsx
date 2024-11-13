import React from 'react';
import Roadmap from '../Roadmap';
import '../roadmap.css';
import Form from './Form';

const Mathematics = () => {
    const content = [
        {
            paragraph: "Elementary",
            listItems: [
                'Basic math operations',
                'Functional properties',
                'Shapes',
                'Geometry I',
                'Basic fractions',
                'Simple division',
            ],
        },
        {
            paragraph: "Middle",
            listItems: [
                'Integers & rational numbers',
                'Geometry II',
                'Lines & angles I',
                'Algebra I',
                'Graphs',
                'Statistics',
            ],
        },
        {
            paragraph: "High",
            listItems: [
                'Sequence and series',
                'Geometry III',
                'Complex numbers',
                'Lines & angles II',
                'Domains & functions',
                'Algebra II',
                'Triangles',
                'Trigonometry',
                'Calculus',
            ],
        },
    ];

    return (
        <>
            <Roadmap
                imageSrc="https://images.pexels.com/photos/5905611/pexels-photo-5905611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                heading="Maths Course"
                content={content}
            />
            <Form />
        </>
    );
};

export default Mathematics;
