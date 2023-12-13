import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

    
  const Register = () => {
    // const navigate = useNavigate();
    //       const [formData, setFormData] = useState({
    //           name: '',
    //           collegeName: '',
    //           class: '',
    //       });

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      // Define the initial state of your form here. For example:
      name: '',
      collegeName: '',
      class: '',
      // Add more fields as needed
    });
          const handleChange = (e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
          };

          // const handleSubmit = async (e) => {
          //     e.preventDefault();
          //     try {
          //         const response = await axios.post('http://localhost:5000/register', formData);
          //         console.log('POST request successful:', response.data);
          //        if (response.data.success) {
          //        navigate('/platform'); // redirect to home page
          //        console.log('navigate function called');
          //        } else {
          //         console.log('navigate function not called');
          //        }
          //     } catch (error) {
          //         console.log('POST request failed:', error);
          //     }
          // };

          
            const handleSubmit = (e) => {
              e.preventDefault();
          
              fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('POST request successful:', data);
          
                  if (data.success) {
                    console.log('Redirecting to /platform');
                    navigate('/platform'); // redirect to the platform page
                    console.log('Redirected successfully');
                  } else {
                    console.log('Registration failed:', data.message);
                  }
                })
                .catch((error) => {
                  console.log('POST request failed:', error);
                });
            };

          return (
              <div class='flex items-center justify-center min-h-screen font-ClashDisplay-Medium'>
                <div class='max-w-md mx-auto '>  
                  <h1> <a href="/"> SNEAK IN </a> </h1>
                  <br />
                  <br />
                    <h2>Register</h2>
                  
                  <form onSubmit={handleSubmit}>

                      <label>Name:</label>
                      <input type="text" name="name" placeholder='abc xyz'  onChange={handleChange} required />

                      <label>College Name:</label> 
                      <input type="text" name="collegeName" placeholder='Sathaye College'  onChange={handleChange} required />

                      <label>Class:</label>
                      <input type="text" name="class" placeholder='TYBA'  onChange={handleChange} required />
                      <br />

                      <button  type="submit"> SUBMIT </button>
                  </form>
                  </div>
              </div>
          );
      };

export default Register;

