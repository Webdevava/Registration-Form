  // Register.jsx

  import React, { useState } from 'react';
  import axios from 'axios';
  import { Link, useNavigate } from 'react-router-dom';

  const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('https://registration-form-uyc4.onrender.com/api/register', formData);
        console.log(response.data);
        // Redirect to login page after successful registration
        navigate('/login');
      } catch (error) {
        console.error('Registration failed:', error.response.data);
      }
    };

    return (
      <div className='register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <label>
        Username:
        </label>
        <input type="text" name="username" onChange={handleChange} placeholder='Username'/>
      <br />
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
      <button type="submit">Register</button>
        </form>
        <p>
          Have an account? <Link to="/login">Login</Link>.
        </p>
      </div>
    );
  };

  export default Register;
