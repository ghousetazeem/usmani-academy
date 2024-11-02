import React from 'react'
import Roadmap from '../../resources/Roadmap'
import Form from './Form.jsx'


const AsmaeHusna = () => {
    return (
        <>
            <Roadmap
                imageSrc="https://thumbs.dreamstime.com/b/name-allah-327209716.jpg"
                heading="Beauty of Asma-e-husna"
                paragraph="SENSORS AND ELEMENTS (Elementary School)"
                listItems={['Proximity Sensor', 'Buzzers, LED, Jumper wires']}
                paragraph2="ARDUINO R3 AND MOTOR DRIVERS (Middle School)"
                listItems2={['Microprocessor and Microcontrollers', 'Arduino IDE', 'L293N & L293D Motor Drivers']}
                paragraph3="OBSTACLE AVOIDING ROBOT (Middle through High School)"
                listItems3={['Assembly and Wiring', 'Coding and Compilation']}
                paragraph4="BLUETOOTH ROBOTS (Middle through High School)"
                listItems4={['Assembly and Wiring', 'Coding and Compilation']}
                paragraph5="F45 DRONE (High School)"
                listItems5={['Assembly and Wiring  ', 'Flight Controller', 'Coding and Compilation']}
            />
            <Form />
        </>
    )
}

export default AsmaeHusna