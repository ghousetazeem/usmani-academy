import React from 'react';
import './about.css';
import Back from '../common/back/Back';
import AboutCard from './AboutCard';
import Faq from './Faq';
import Team from '../team/Team';

const About = () => {
	return (
		<>
			<AboutCard />
			<Faq />
			<Team />
		</>
	);
};

export default About;
