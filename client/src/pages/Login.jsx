import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}

const Login = () => {
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
  );
};

export default App;
