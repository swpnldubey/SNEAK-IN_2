import 'dotenv/config';
import './database.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { verifyAccessToken, checkIfUserIsRegistered } from '../auth/google';
import User from './user';
import Google from './auth/google.js';

// const env = require('./env'); // Import environment variables

// const app = express();

// app.get('/api/env', (req, res) => {
//     // Implement authentication/authorization if needed
//     // For simplicity, we'll assume basic authentication here
//     const isAuthorized = req.headers.authorization === 'your_secret_token'; // Replace with your authentication logic
  
//     if (isAuthorized) {
//       res.json(env);
//     } else {
//       res.status(401).send('Unauthorized');
//     }
//   });  

app.use(cors({
    origin: 'http://localhost:3000' 
}));
app.use(bodyParser.json());


// Example callback logic
router.get('/auth/google', async (req, res) => {
  try {
      // Verify the access token (pseudo code, actual implementation may vary)
      const userData = await verifyAccessToken(req.query.accessToken);

      // Check if the user is registered
      const isUserRegistered = await checkIfUserIsRegistered(userData.email);

      if (isUserRegistered) {
          // User is registered, perform actions like creating a session
          // Redirect to the home page or platform
          res.redirect('/platform');
      } else {
          // User is not registered, redirect to the registration page
          res.redirect('/register');
      }
  } catch (error) {
      // Handle errors
      console.error('Error handling Google OAuth callback:', error);
      res.status(500).send('Internal Server Error');
  }
});

app.use('/', Google)

// app.post('/register', async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json({ success: true, message: 'User registered successfully'});
//   } catch (error) {
//     console.error("Detailed Error:", error); // Log detailed error
//     res.status(500).json({ success: false, message: 'Error registering user', error: error.message });
//   }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



