import React, { useState } from 'react';
<<<<<<< HEAD
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
=======
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { navigate, useNavigate} from 'react-router-dom';
// import './src/index.css';
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
=======
      <GoogleOAuthProvider clientId='232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com'>
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}

const Login = () => {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSuccessfulLogin = (response) => {
    console.log('User is successfully logged in:', response);
  
    // Assuming the server response includes a 'userIsRegistered' field
    const userIsRegistered = response.userIsRegistered;
  
    // Check if the user is registered and redirect accordingly
    if (userIsRegistered) {
      navigate('/platform');
    } else {
      navigate('/register');
    }
  };
  

  // const handleSuccessfulLogin = async (response) => {
  //   console.log('User is successfully logged in:', response);

  //   try {
  //     const serverResponse = await axios.post('http://localhost:5000/auth/google', { tokenId: response.tokenId });

  //     if (serverResponse.data.success) {
  //       const { name, college, className } = serverResponse.data.user;

  //       if (serverResponse.data.isUserRegistered) {
  //         navigate('/platform');
  //       } else {
  //         navigate('/register');
  //       }
  //     } else {
  //       console.error('Server response error:', serverResponse.data.message);
  //     }
  //   } catch (error) {
  //     console.error('Axios error:', error);
  //   }
  // };

  const onLoginSuccess = (response) => {
    handleSuccessfulLogin(response);
    setIsLoggedIn(true);
  };

  const onLoginFailure = (error) => {
    console.error('Google login failed:', error.message);
    // Display an error message to the user
    alert('Google login failed. Please try again.');
  };

  return (
    <div class='flex min-h-screen'>
      <div class='max-w-md mx-auto space-y-3'>
        <div>
          <h1 id='login'> <a href="/"> SNEAK IN </a> </h1>
          <div class="register">
            <h3>
              Register/Log-In to SNEAK IN
            </h3>
            <p id="experience">& experience college like never before.</p>

            <GoogleLogin 
            scope="openid profile email"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
          >
              
            
            <button id='login-button'>Sign-in with Google</button>
            </GoogleLogin>

          </div>
        </div>
      </div>
    </div>
=======
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSuccessfulLogin = (response) => {
      console.log('User is successfully logged in:', response);
      navigate('/register');
    };

    const handleSuccessfulLogout = () => {
      console.log('User is successfully logged out');
    };

    const onLoginSuccess = (response) => {
      handleSuccessfulLogin(response);
      setIsLoggedIn(true);
    };

    const onLogoutSuccess = () => {
      handleSuccessfulLogout();
      setIsLoggedIn(false);
    };

  return (
  <div class='flex min-h-screen'>
 
        <div class='max-w-md mx-auto space-y-3'> 

            <div>  
                <h1 id='login'> <a href="/"> SNEAK IN </a> </h1>
            
            <div class="register">
                <h3>
                    Register/Log-In to SNEAK IN
                </h3>
                <p id="experience">& experience college like never before.</p>

                {/* <a href="http://localhost:3000" id="login-button"> Sign In with Google </a> */}

                <GoogleLogin scope="openid profile email" onSuccess={onLoginSuccess}>
                  <button id='login-button'>Sign-in with Google</button>
                </GoogleLogin>
             </div>
            </div>
            </div>
     </div>

>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
  );
};

export default App;
