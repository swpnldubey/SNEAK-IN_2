import React from 'react';
import {UilSearch} from '@iconscout/react-unicons';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import postdata from '../postdata';
import Posts from './Posts'

function Platform() {
  return (
    <div className="Home">
      <GoogleOAuthProvider clientId='232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com'>
        <Google />
      </GoogleOAuthProvider>
    </div>
  );
}

const Google = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // const handleSuccessfulLogout = (res) => (
  //     navigate ('/')
  //     );

  // const onLogoutSuccess = () => {
  //   handleSuccessfulLogout();
  //   setIsLoggedIn(false);
  // };

  return (
   <div className="Home">
          <h1 className='sneak_in'> <a href='/'> SNEAK IN </a> </h1>

          <div className='logout-btn'> 
                {/* <googleLogout clientId="232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com" onLogoutSuccess={onLogoutSuccess}> */}
                <googleLogout clientId="232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com" >
                  <a href="/"> <button>Logout</button> </a>
                </googleLogout>
          </div>

          <div className="Search">
              <input type="text" placeholder='Explore' />
              <span className="s-icon">
                  <UilSearch />
              </span>
          </div>
          <hr />

          {/* <div className='posts'>
            <div className='post'>
                <img src="./icons/sathaye.jpg" alt="not found" />
                <h4>Sathaye College</h4>
            </div>

          </div> */}

          <Posts/>

          <br />
          <br />
          <br />
 I   </div>
  )
}


export default Platform;