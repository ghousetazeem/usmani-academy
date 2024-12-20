import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	const [click, setClick] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScrolled = () => {
			const scrolled = window.scrollY > 0;
			setIsScrolled(scrolled);
		};
		window.addEventListener('scroll', handleScrolled);
		return () => {
			window.removeEventListener('scroll', handleScrolled);
		};
	}, []);
	return (
		<>
			<header className={isScrolled ? 'scrolled header-color' : ''}>
				<div className="mycontainer">
					<nav className="flexSB header-color">
						<a href="/">
							<div className="start">
								<img className="logoImg" src="../logo-acad.png" />
								<div>
									<div className="button">Usmani Academy</div>
									<div style={{ fontSize: "16px", textAlign: "center", marginTop: "-0.8rem", fontWeight: "460", letterSpacing: "1px" }} className="button">Teaching and Learning</div>
								</div>

							</div>
						</a>
						<ul
							className={click ? 'mobile-nav' : 'flexSB '}
							onClick={() => setClick(false)}
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/resources">Courses</Link>
							</li>
							{/* <li>
								<Link to="/about">About</Link>
							</li> */}
							{/* <li>
								<Link to="/art">Art Gallery</Link>
							</li> */}
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>

						<button type="button" className="toggle" onClick={() => setClick(!click)}>
							{click ? (
								<i className="fa fa-times"> </i>
							) : (
								<i className="fa fa-bars"></i>
							)}
						</button>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
