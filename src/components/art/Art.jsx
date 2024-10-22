import React from 'react';
import Back from '../common/back/Back';
import ArtCard from '../art/ArtCard'
import './art.css';

const Art = () => {
    return (
        <>
            <Back title="Art Gallery" img={'b3'} />
            <section className="blog padding">
                {/* <div className="blog-head">
					<div className="blog-title">Welcome To LernTek</div>
					<h4 className="blog-paragraph">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus fuga
						nobis hic est rerum magnam eligendi vero, aperiam velit nam illum unde omnis
						nostrum, cupiditate provident ipsam iure a odit.
					</h4>
					<button>Go To Form</button>
				</div> */}
                <div className="mycontainer gridblog">
                    <ArtCard />
                </div>
            </section>
        </>
    );
};

export default Art;