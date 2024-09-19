import React from 'react'
import Roadmap from '../Roadmap'
import Form from './Form'

const English = () => {
    return (
        <>
            <Roadmap
                imageSrc="https://wallpapers.com/images/hd/english-3168-x-4752-wallpaper-8hgofnbobyx3lanc.jpg"
                heading="English course description"
                paragraph="English Language and Literature: (Late middle school and High school)"
                listItems={['Grammar and Writing', 'Essay Writing', 'Literary Analysis']}
                paragraph2="SAT/ACT English Preparation: (High Schools)"
                listItems2={['Critical Reading', 'Vocabulary Building', 'Essay Writing Techniques']}
                paragraph3="ESL (English as a Second Language): (Elementary to all Ages)"
                listItems3={['Speaking and Pronunciation', 'Listening and Comprehension']}
                paragraph4="Elementary Reading and Phonics: (Elementary)"
                listItems4={['Phonemic Awareness', 'Decoding and Word Recognition', 'Reading Fluency']}
                paragraph5="Spelling and Vocabulary Development: (Elementary)"
                listItems5={['Word Lists and Spelling Rules', 'Contextual Vocabulary Usage', 'Word Games and Activities']}
                paragraph6="English Projects: (Elementary and Middle school)"
                listItems6={['Book Reports', 'Research Projects', 'Oral Presentations']}
            />
            <Form />
        </>
    )
}

export default English