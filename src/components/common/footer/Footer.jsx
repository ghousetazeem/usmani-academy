import React from 'react';
import { blog } from '../../../dummydata';
import './footer.css';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="mycontainer padding flex-footer flex-padding">
					<div className="box logo" style={{ flex: '1' }}>
						<h1>ACADEMIA</h1>
						<span>ONLINE EDUCATION & LEARNING</span>
						<p>
							A small river named Duden flows by their place and supplies it with the
							necessary regelialia.
						</p>

						<i className="fab fa-linkedin icon"></i>
						<i className="fab fa-twitter icon"></i>
						<i className="fab fa-instagram icon"></i>
					</div>
					<div className="link-box">
						<div className="box link">
							<h3>Explore</h3>
							<ul>
								<li>About Us</li>
								<li>Services</li>
								<li>Courses</li>
								<li>Blog</li>
								<li>Contact us</li>
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
									+2 392 3929 210
								</li>
								<li>
									<i className="fa fa-paper-plane"></i>
									lerntek@gmail.com
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<div className="legal">
				<p>
					Copyright ©2024 All rights reserved | Made with <i className="fa fa-heart"></i>{' '}
					by <span>LernTek</span> Team
				</p>
			</div>
		</>
	);
};

export default Footer;
