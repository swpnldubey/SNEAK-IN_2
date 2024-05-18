import React from "react"                     
import "../index.css"
import sathaye from '../icons/sathaye.png'
import { Navigate } from "react-router-dom"
import like from '../icons/like.png'
import liked from '../icons/liked.png'

const Post = ({data}) => {
  return (       
    <div className="Post">
        <div className="pfp">
            <a href="/profile">
            <img src={sathaye} alt="not found" />
            <h4> <b>SATHAYE COLLEGE</b> </h4> </a>
          <div className="details">
            <p> {data.desc} </p>
          </div>
        </div>

        <img src={data.image} alt="" />

        <div className="post-info">
            {/* <img src={data.liked?liked: like} alt="" /> */}
            <span> <button className="event-btn">Register</button> </span>
        </div>

        {/* <span style={{color: "black", fontSize: '12px'}}>{data.likes} likes</span> */}

        {/* <div className="details"> */}
            {/* <h2><b>{data.username}</b></h2> */}
            {/* <p> {data.desc} </p>
        </div> */}
        <hr className="posting" />
    </div>
  
  )
}

export default Post;