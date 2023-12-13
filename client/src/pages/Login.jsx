import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { navigate, useNavigate} from 'react-router-dom';
// import './src/index.css';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId='232858920977-llov97dcc4rp542aqj84teeillhgdf0t.apps.googleusercontent.com'>
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

  );
};

export default App;
