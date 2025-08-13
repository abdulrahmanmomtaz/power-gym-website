import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        
        <form>
          {isSignUp && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="auth-btn">
            {isSignUp ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="toggle-text">
          {isSignUp ? "Do you have an account?" : "Don't have an account?"}{" "}
          <span onClick={toggleForm} className="toggle-link">
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>

        <button className="home-btn" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}

export default AuthPage;
