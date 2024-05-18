import React from 'react';
import {UilSearch} from '@iconscout/react-unicons';
<<<<<<< HEAD
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
=======
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import postdata from '../postdata';
import Posts from './Posts'
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967

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
<<<<<<< HEAD
          <h1 className='sneak_in'> <a href='/'> SNEAK <span>IN</span> </a> </h1>
          {/* <Navbar /> */}

          {/* <div className='logout-btn'> 
                <googleLogout clientId="232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com" onLogoutSuccess={onLogoutSuccess}>
                } <googleLogout clientId="232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com" >
=======
          <h1 className='sneak_in'> <a href='/'> SNEAK IN </a> </h1>

          <div className='logout-btn'> 
                {/* <googleLogout clientId="232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com" onLogoutSuccess={onLogoutSuccess}> */}
                <googleLogout clientId="232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com" >
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
                  <a href="/"> <button>Logout</button> </a>
                </googleLogout>
          </div>

          <div className="Search">
              <input type="text" placeholder='Explore' />
              <span className="s-icon">
                  <UilSearch />
              </span>
<<<<<<< HEAD
          </div> */}

          {/* <div className='posts'>
            <div className='post'>
                {/* <img src="./icons/sathaye.jpg" alt="not found" /> */}
                {/* <h4>Sathaye College</h4>
            </div>
          </div> */}

=======
          </div>
          <hr />

          {/* <div className='posts'>
            <div className='post'>
                <img src="./icons/sathaye.jpg" alt="not found" />
                <h4>Sathaye College</h4>
            </div>

          </div> */}

          <Posts/>
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967

          <br />
          <br />
          <br />
 I   </div>
  )
}


export default Platform;