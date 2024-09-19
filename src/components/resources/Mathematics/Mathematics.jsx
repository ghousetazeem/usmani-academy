import React from 'react'
import Roadmap from '../Roadmap'
import '../roadmap.css'
import Form from './Form'

const Mathematics = () => {
    return (
        <>
            <Roadmap
                imageSrc="https://images.pexels.com/photos/5905611/pexels-photo-5905611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                heading="Mathematics Course"
                paragraph="Elementary"
                listItems={['Basic math operations', 'Functional properties', 'Shapes', 'Geometry I', 'Basic fractions', 'Simple division']}
                paragraph2="Middle"
                listItems2={['Integers & rational numbers', 'Geometry II', 'Lines & angles I', 'Algebra I', 'Graphs', 'Statistics']}
                paragraph3="High"
                listItems3={['Sequence and series', 'Geometry III', 'Complex numbers', 'Lines & angles II', 'Domains & functions', 'Algebra II', 'Triangles', 'Trigonometry', 'Calculus']}

            />
            <Form />
        </>
    )
}

export default Mathematics