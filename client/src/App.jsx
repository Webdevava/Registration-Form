// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserProvider } from './UsrContext.jsx';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
