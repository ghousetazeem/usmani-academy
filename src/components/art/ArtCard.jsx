import React, { useState } from "react";
import { blog } from "../../dummydata";
import "./art.css"; // Assuming you'll add custom CSS here

const ArtCard = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className={selectedImage ? "blur-background" : ""}>
                {blog.map((val, index) => (
                    <div className="blog-card items shadow" key={index}>
                        <div className="img" onClick={() => handleImageClick(val.cover)}>
                            <img src={val.cover} alt={val.title} />
                        </div>
                        <div className="text">
                            <div className="admin flexSB">
                                <span>
                                    <i className="fa fa-area-chart"></i>
                                    <label htmlFor="">{val.type}</label>
                                </span>
                            </div>
                            <h1>{val.title}</h1>
                            <button className="blog-btn">Buy</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for full-screen image */}
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close-modal">&times;</span>
                    <div className="modal-content-wrapper">
                        <img className="modal-content" src={selectedImage} alt="Full Screen" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ArtCard;
