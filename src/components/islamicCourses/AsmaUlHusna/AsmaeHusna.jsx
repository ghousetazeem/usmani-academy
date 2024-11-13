import React from 'react';
import Roadmap from '../../resources/Roadmap';
import Form from './Form.jsx';

const AsmaeHusna = () => {
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
            paragraph: "Course Description",
            listItems: ["Assembly and Wiring", "Flight Controller", "Coding and Compilation"],
        },
    ];

    return (
        <>
            <Roadmap
                imageSrc="https://thumbs.dreamstime.com/b/name-allah-327209716.jpg"
                heading="Connect with the names of Allah - Asmaa ul Husna"
                content={content}
            />
            <Form />
        </>
    );
};

export default AsmaeHusna;
