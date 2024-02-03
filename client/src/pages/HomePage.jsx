// Homepage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../UsrContext";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { user, logoutUser, setUser } = useUserContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://registration-form-uyc4.onrender.com/api/user",
          {
            withCredentials: true,
          }
        );
        console.log("Token:", document.cookie);
        setUser(response.data); // Make sure setUser is updating the context correctly
      } catch (error) {
        console.error("Failed to fetch user:", error.message);
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setUser]); // Include setUser in the dependency array

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://registration-form-uyc4.onrender.com/api/logout"
      );
      // Update the context to logout the user
      logoutUser();
      // Redirect to the login page after successful logout
      // You can use react-router-dom history or navigate here
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        <p>Login to continue</p>
        <Link to="/login" className="LoginBtn">
          LogIn
        </Link>
      </div>
    );
  }

  return (
    <div className="homepage">
      <h1>Homepage</h1>
      {user ? (
        <div className="contain">
          <p className="message">Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="contain">
          <p className="message">Login to start</p>
          <Link to="/login" className="LoginBtn">
            LogIn
          </Link>
        </div>
      )}
    </div>
  );
};

export default Homepage;
