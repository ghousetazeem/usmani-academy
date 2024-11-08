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
						<span>Teaching and Learning</span>
						<p>
							Usmani Academy is to provide  high-quality education and fostering academic excellence through a diverse range of programs and resources.
						</p>
						<a href="https://www.instagram.com/usmani_academy?igsh=MW9qNXgwZjNzM3A0ZA%3D%3D&utm_source=qr"><i className="fab fa-instagram icon"></i></a>
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
									12405 E Lincoln Ct, Wichita, KS 67207
								</li>
								<li>
									<i className="fa fa-phone-alt"></i>
									3162356743

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
					Copyright ©2024 All rights reserved | <span>Usmani Academy</span> Team
				</p>
			</div>
		</>
	);
};

export default Footer;
