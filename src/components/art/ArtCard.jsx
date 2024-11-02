import React from 'react';
import './art.css';
import { Link } from 'react-router-dom';
import { blog } from '../../dummydata';

const ArtCard = () => {
    return (
        <>
            <section className="coursesCard" style={{ marginTop: "6rem", marginBottom: "8rem", paddingTop: "0", paddingRight: "6rem" }}>
                <div className="mycontainer grid2">
                    {blog.map((val) => (
                        <div className="items " key={val.id}>
                            <div className="content flex">
                                <img src={val.cover} />
                            </div>
                            <div className='admin flexSB'>
                                <span style={{ display: "flex", flexDirection: "row", margin: "16px", color: "#273e06" }}>
                                    <i className='fa fa-image'></i>
                                    <label htmlFor='' style={{ marginLeft: "0.6rem" }}>{val.type}</label>
                                </span>
                            </div>

                            <div style={{ margin: "16px", marginTop: "0", color: "#273e06", fontSize: "1.4rem", textAlign: "left", fontWeight: "bold" }}>
                                <h2 className="arthead" >{val.title}</h2>
                            </div>
                            <Link to={`/${val.resourceRoute}`}> {/* Ensure route starts with / */}
                                <button className="outline-btn">See more...</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ArtCard;
