import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


  const Register = () => {
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      college: '',
      studentClass: '',
    });
          const handleChange = (e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
          };

          const handleSubmit = async (e) => {
              e.preventDefault();
              try {
                  const response = await axios.post('http://localhost:5000/register', formData);
                  console.log('POST request successful:', response.data);
              if (response.data.success) {
                 navigate('/platform'); // redirect to home page
                 console.log('navigate function called');
                 } else {
                  console.log('navigate function not called');
                 }
              } catch (error) {
                  console.log('POST request failed:', error);
                  console.error('Error details:', error.response);
              }
          };

          return (
              <div class='flex items-center justify-center min-h-screen font-ClashDisplay-Medium'>
                <div class='max-w-md mx-auto '>  
                  <h1> <a href="/"> SNEAK IN </a> </h1>
                  <br />
                  <br />
                    <h2>Register</h2>

                  <form onSubmit={handleSubmit}>

                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="username"
                      />
                      <input
                          type="text"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          placeholder="ABC college"
                      />
                      <input
                          type="text"
                          name="studentClass"
                          value={formData.studentClass}
                          onChange={handleChange}
                          placeholder="TYBA"
                      />

                      <button type="submit"> SUBMIT </button>
                  </form>
                  </div>
              </div>
          );
      };

export default Register;

