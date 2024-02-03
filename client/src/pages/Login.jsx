// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../UsrContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { loginUser } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData, {
        withCredentials: true,
      });

      console.log(response.data);

      // Store the user data in the context
      loginUser(response.data);

      // Redirect to the dashboard or home page after successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          </label>
          <input type="email" name="email" onChange={handleChange} placeholder='Email'/>
        <br />
        <label>
          Password:
          </label>
          <input type="password" name="password" onChange={handleChange} placeholder='Password'/>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        New here? <Link to="/register">Create Account</Link>.
      </p>
    </div>
  );
};

export default Login;
