import React from 'react';
import Roadmap from '../../resources/Roadmap';
import Form from './Form.jsx';

const HappyMuslim = () => {
    const content = [
        {
            paragraph: "SENSORS AND ELEMENTS (Elementary School)",
            listItems: ['Proximity Sensor', 'Buzzers, LED, Jumper wires'],
        },
        {
            paragraph: "ARDUINO R3 AND MOTOR DRIVERS (Middle School)",
            listItems: ['Microprocessor and Microcontrollers', 'Arduino IDE', 'L293N & L293D Motor Drivers'],
        },
        {
            paragraph: "OBSTACLE AVOIDING ROBOT (Middle through High School)",
            listItems: ['Assembly and Wiring', 'Coding and Compilation'],
        },
        {
            paragraph: "BLUETOOTH ROBOTS (Middle through High School)",
            listItems: ['Assembly and Wiring', 'Coding and Compilation'],
        },
        {
            paragraph: "F45 DRONE (High School)",
            listItems: ['Assembly and Wiring', 'Flight Controller', 'Coding and Compilation'],
        },
    ];

    return (
        <>
            <Roadmap
                imageSrc="https://images.pexels.com/photos/7249320/pexels-photo-7249320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                heading="How to be a Happy Muslim"
                content={content}
            />
            <Form />
        </>
    );
};

export default HappyMuslim;
