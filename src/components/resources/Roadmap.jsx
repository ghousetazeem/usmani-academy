import React, { useState } from 'react';
import './roadmap.css';

const Roadmap = ({
	imageSrc,
	heading,
	content = [],
	link
}) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	const openLinkInNewTab = () => {
		if (link) {
			window.open(link, '_blank');
		}
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
					{content.map((section, index) => (
						<div key={index}>
							{section.paragraph && <p className="paragraph">{section.paragraph}</p>}
							{section.listItems && section.listItems.length > 0 && (
								<ul className="list">
									{section.listItems.map((item, itemIndex) => (
										<li key={itemIndex}> - {item}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
