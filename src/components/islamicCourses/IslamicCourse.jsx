import React from 'react';
import ResourcesCard from './ResourcesCard';
import './resources.css'

const Resources = () => {
    return (
        <>
            <ResourcesCard />
            <h1 className='instruct'>Instructors</h1>
            <section className='instructor'>
                <img src="https://images.pexels.com/photos/8489309/pexels-photo-8489309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="None" />
                <div className="instructor-info">
                    <h2>Muhammad Aamir Usmani</h2>
                    <h3>Chief Advisor - Usmani Academy | Director - Library Technologies </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet totam provident natus quia ullam sed fugiat hic. Aperiam eius error ratione quis reprehenderit in, ut tempore doloremque earum et.</p>
                    <br />
                    <h3>Expertise:</h3>
                    <h4>Islamic History, Philosphy</h4>
                    <br />
                    <h3>Experience:</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi impedit necessitatibus non eveniet provident inventore nesciunt fugiat</li>
                        <br />
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi impedit necessitatibus non eveniet provident inventore nesciunt fugiat</li>
                        <br />
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio quod ab harum. Praesentium, necessitatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, debitis nostrum! Rerum? </li>
                    </ul>
                </div>

            </section>
        </>
    );
};

export default Resources;
