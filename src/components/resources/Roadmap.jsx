import React, { useState } from 'react';
import './roadmap.css';

const Roadmap = ({ imageSrc, heading, paragraph, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, listItems, listItems2, listItems3, listItems4, listItems5, listItems6, link }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	const openLinkInNewTab = () => {
		window.open(link, '_blank');
	};

	return (
		<div className="roadmap">
			<div className="mycontainer roadmap-flex">
				{/* Left Half - Photo */}
				<div className="photo-container" onClick={toggleFullScreen}>
					<img src={imageSrc} alt="Card" className="photo" />
					{isFullScreen && (
						<div className="fullscreen-overlay" onClick={toggleFullScreen}>
							<img
								src={imageSrc}
								alt="Card Fullscreen"
								className="fullscreen-photo"
							/>
						</div>
					)}
				</div>

				{/* Right Half - Content */}
				<div className="content-container">
					<h2 className="heading">{heading}</h2>
					<p className="paragraph">{paragraph}</p>
					{listItems.length > 0 && (
						<ul className="list">
							{listItems.map((item, index) => (
								<li key={index}> - {item}</li>
							))}
						</ul>
					)}
					{paragraph2 && (
						<>
							<p className="paragraph">{paragraph2}</p>
							{listItems2.length > 0 && (
								<ul className="list">
									{listItems2.map((item, index) => (
										<li key={index}> - {item}</li>
									))}
								</ul>
							)}
						</>
					)}
					{paragraph3 && (
						<>
							<p className="paragraph">{paragraph3}</p>
							{listItems3.length > 0 && (
								<ul className="list">
									{listItems3.map((item, index) => (
										<li key={index}> - {item}</li>
									))}
								</ul>
							)}
						</>
					)}
					{paragraph4 && (
						<>
							<p className="paragraph">{paragraph4}</p>
							{listItems3.length > 0 && (
								<ul className="list">
									{listItems4.map((item, index) => (
										<li key={index}> - {item}</li>
									))}
								</ul>
							)}
						</>
					)}
					{paragraph5 && (
						<>
							<p className="paragraph">{paragraph5}</p>
							{listItems3.length > 0 && (
								<ul className="list">
									{listItems5.map((item, index) => (
										<li key={index}> - {item}</li>
									))}
								</ul>
							)}
						</>
					)}
					{paragraph6 && (
						<>
							<p className="paragraph">{paragraph6}</p>
							{listItems3.length > 0 && (
								<ul className="list">
									{listItems6.map((item, index) => (
										<li key={index}> - {item}</li>
									))}
								</ul>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
