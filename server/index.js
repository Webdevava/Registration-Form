const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('./Models/User');
<<<<<<< HEAD
const Project = require('./Models/Project');
=======
>>>>>>> 8b59862bbd3b2f0969b413b9c54b0e518a9653a8
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({extended:false}));
app.use(cors({ credentials: true, origin: 'http://localhost:5174' }));
app.use(cors({ credentials: true, origin: 'https://webdevava.vercel.app' }));
app.use(cors({ credentials: true, origin: 'https://login-registration-mern.vercel.app' }));
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Registration route
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set the JWT token as a cookie with updated settings
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour (in milliseconds)
      sameSite: 'None',
      secure: true, // Required if using 'None'
    });

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

<<<<<<< HEAD
=======

>>>>>>> 8b59862bbd3b2f0969b413b9c54b0e518a9653a8
// User route
app.get('/api/user', async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use process.env.JWT_SECRET

    const userEmail = decoded.email;

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ username: user.username, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Logout route
app.post('/api/logout', (req, res) => {
  // Clear the JWT token cookie
  res.clearCookie('token');
  res.status(200).send('Logout successful');
});



<<<<<<< HEAD

//create
app.post('/api/project', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    console.log(req.body)
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//read all
app.get('/api/project', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//read by id
app.get('/api/project/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete
app.delete('/api/project/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





=======
>>>>>>> 8b59862bbd3b2f0969b413b9c54b0e518a9653a8
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
