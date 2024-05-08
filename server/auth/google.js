import express from 'express';
const axios = require('axios');
// import { createAuthHandler, GoogleOAuthProvider } from '@react-oauth/google';
import pkg from '@react-oauth/google';
const router = express.Router();
const { createAuthHandler, GoogleOAuthProvider } = pkg;

const googleProvider = new GoogleOAuthProvider({
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
});

// Create an authentication handler for the Google OAuth provider
const authHandler = createAuthHandler(googleProvider);

const Google = () => {
  const authHandler = createAuthHandler(googleProvider);

  router.get('/auth/google', async (req, res, next) => {
    try {
      await authHandler(req, res);
      const user = req.auth;
      res.json({ success: true, user });
    } catch (error) {
      console.error('Google OAuth error:', error.message);
      res.status(500).json({ success: false, message: 'Google OAuth error', error: error.message });
    }
  });
};

export default Google;

// Route for handling the Google OAuth callback
// router.get('/auth/google', async (req, res, next) => {
//   try {
//       // Authenticate using the OAuth provider
//       await authHandler(req, res);

//       // The user is authenticated, and you can access user information from req.auth
//       const user = req.auth;
//       res.json({ success: true, user });
//   } catch (error) {
//       // Handle OAuth authentication errors
//       console.error('Google OAuth error:', error.message);
//       res.status(500).json({ success: false, message: 'Google OAuth error', error: error.message });
//   }
// });

// export default router;

// router.post('/auth/google', async (req, res) => {
//   try {
//     const tokenId = req.body.tokenId;

//     // Perform Google OAuth verification
//     // ...

//     // Check if the user is registered in your database
//     const isUserRegistered = /* Logic to check user registration */;

//     res.status(200).json({
//       success: true,
//       isUserRegistered,
//       user: /* User data if needed */,
//     });
//   } catch (error) {
//     console.error('Google authentication error:', error);
//     res.status(500).json({ success: false, message: 'Authentication error' });
//   }
// });

// module.exports = router;
