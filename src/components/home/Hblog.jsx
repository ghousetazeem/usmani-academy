import React from "react"
import "../art/art.css"
import { blog } from "../../dummydata"

// copy code of blog => blogCard

const HAbout = () => {
  return (
    <>
      {blog.map((val) => (
        <div className='blog-card items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
              <span>
                <i className='fa fa-user'></i>
                <label htmlFor=''>{val.type}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <button className="blog-btn">Read More</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default HAbout