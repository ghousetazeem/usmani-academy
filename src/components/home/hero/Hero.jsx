import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../common/heading/Heading';
import './Hero.css';

const Hero = () => {
	return (
		<>
			<section className="hero">
				<div className="mycontainer">
					<div className="row">
						<Heading
							subtitle="Welcome to Usmani Academy"
							title="Empowering Minds, Shaping Futures"
						/>
						<p>
							Usmani Academy is to provide  high-quality education and fostering academic excellence through a diverse range of programs and resourses.
						</p>
						<div className="button">
							<Link to="/resources">
								<button className="primary-btn" style={{ fontSize: "1rem" }}>
									Start Now <i className="fa fa-long-arrow-alt-right"></i>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="margin"></div> */}
		</>
	);
};

export default Hero;
