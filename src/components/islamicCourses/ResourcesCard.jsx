import React from 'react';
import './resources.css';
import { Link } from 'react-router-dom';
import { iresourcesCard } from '../../dummydata';

const ResourcesCard = () => {
    return (
        <>
            <section className="coursesCard">
                <div className="mycontainer grid2">
                    {iresourcesCard.map((val) => (
                        <div className="items" key={val.id}>
                            <div className="content flex">
                                <img src={val.cover} alt={val.coursesName} />
                            </div>
                            <div className="price">
                                <h2 style={{ color: 'black' }}>{val.courseTitle}</h2>
                            </div>
                            <Link to={`/${val.resourceRoute}`}> {/* Ensure route starts with / */}
                                <button className="outline-btn">Get Started</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ResourcesCard;
