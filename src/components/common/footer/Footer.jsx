import React from 'react';
import { blog } from '../../../dummydata';
import './footer.css';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="mycontainer padding flex-footer flex-padding">
					<div className="box logo" style={{ flex: '1' }}>
						<h1>Usmani Academy</h1>
						<span>Empowering Minds, Shaping Futures</span>
						<p>
							Usmani Academy is to provide  high-quality education and fostering academic excellence through a diverse range of programs and resourses.
						</p>

						<i className="fab fa-linkedin icon"></i>
						<i className="fab fa-twitter icon"></i>
						<i className="fab fa-instagram icon"></i>
					</div>
					<div className="link-box">
						<div className="box link">
							<h3>Explore</h3>
							<ul>
								<li>Home</li>
								<li>Courses</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</div>

						<div className="box last">
							<h3>Have a Questions?</h3>
							<ul>
								<li>
									<i className="fa fa-map"></i>
									2330N Oliver St. Wichita, Kansas 67220
								</li>
								<li>
									<i className="fa fa-phone-alt"></i>
									3165703507

								</li>
								<li>
									<i className="fa fa-paper-plane"></i>
									info@usmaniacademy.com
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<div className="legal">
				<p>
					Copyright ©2024 All rights reserved | Made with <i className="fa fa-heart"></i>{' '}
					by <span>Usmani Academy</span> Team
				</p>
			</div>
		</>
	);
};

export default Footer;
