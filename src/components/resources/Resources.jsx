import React from 'react';
import Back from '../common/back/Back';
import ResourcesCard from './ResourcesCard';
import './resources.css'

const Resources = () => {
	return (
		<>
			<ResourcesCard />
			<h1 className='instruct'>Instructors</h1>
			<section className='instructor'>
				<img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="None" />
				<div className="instructor-info">
					<h2>FNU Raees ul Haq Mohammad Rizwan</h2>
					<h3>Chief Operating Office (COO) - Usmani Academy</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet totam provident natus quia ullam sed fugiat hic. Aperiam eius error ratione quis reprehenderit in, ut tempore doloremque earum et.</p>
					<br />
					<h3>Expertise:</h3>
					<h4>Robotics, Math, English, Philosphy</h4>
					<br />
					<h3>Experience:</h3>
					<ul>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi impedit necessitatibus non eveniet provident inventore nesciunt fugiat</li>
						<br />
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio quod ab harum. Praesentium, necessitatibus! </li>
					</ul>
				</div>

			</section>
		</>
	);
};

export default Resources;
