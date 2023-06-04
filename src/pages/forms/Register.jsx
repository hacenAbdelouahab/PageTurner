import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <div className="form-items">
      <h1 className="form-title">Create new account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
      <div className="form-footer">
        Already have an account ?{" "}
        <Link to="/login" className="forms-link">
          Login
        </Link>
      </div>
    </div>
  );
}
