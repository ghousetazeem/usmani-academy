import React from 'react';
import Roadmap from '../Roadmap';
import Form from './Form';

const English = () => {
    const content = [
        {
            paragraph: "English Language and Literature: (Late middle school and High school)",
            listItems: ['Grammar and Writing', 'Essay Writing', 'Literary Analysis'],
        },
        {
            paragraph: "SAT/ACT English Preparation: (High Schools)",
            listItems: ['Critical Reading', 'Vocabulary Building', 'Essay Writing Techniques'],
        },
        {
            paragraph: "ESL (English as a Second Language): (Elementary to all Ages)",
            listItems: ['Speaking and Pronunciation', 'Listening and Comprehension'],
        },
        {
            paragraph: "Elementary Reading and Phonics: (Elementary)",
            listItems: ['Phonemic Awareness', 'Decoding and Word Recognition', 'Reading Fluency'],
        },
        {
            paragraph: "Spelling and Vocabulary Development: (Elementary)",
            listItems: ['Word Lists and Spelling Rules', 'Contextual Vocabulary Usage', 'Word Games and Activities'],
        },
        {
            paragraph: "English Projects: (Elementary and Middle school)",
            listItems: ['Book Reports', 'Research Projects', 'Oral Presentations'],
        },
    ];

    return (
        <>
            <Roadmap
                imageSrc="https://wallpapers.com/images/hd/english-3168-x-4752-wallpaper-8hgofnbobyx3lanc.jpg"
                heading="English course description"
                content={content}
            />
            <Form />
        </>
    );
};

export default English;
