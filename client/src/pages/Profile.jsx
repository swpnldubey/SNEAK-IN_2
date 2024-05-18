import React from 'react'
import building from '../icons/sathaye_bldng.jpg'
import sathaye from '../icons/sathaye_with_bg.png'
import Posts from './Posts'



const Profile = () => {
  return (
    <div className="profile">
       <h1 className='sneak_in'> <a href='/'> SNEAK IN </a> </h1>
      
      <div className="profileImages">
        <img src={building} alt="not found" />
        <img src={sathaye} alt="not found" />
      </div>

      <div className="follow-btn">
             <button> sneak in </button>
      </div>
      
      <div className="profileInfo">
        <h4> <b>SATHAYE COLLEGE</b> </h4>
        <span>@sathaye</span>
        <p>Helping students excell in education since 1959.</p>
      </div>

      <div className="followers">
        <span> <b>0</b> Sneaks</span>
      </div>

    <hr id='profile'/>

    <Posts />



    </div>
  )
};

export default Profile;