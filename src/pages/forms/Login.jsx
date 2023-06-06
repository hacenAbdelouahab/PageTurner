import React, { useContext, useState } from "react";
import "./forms.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  //Show password handler
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  //Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload: user })

        navigate('/')
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="form-items">
      <h1 className="form-title">Login to your Account</h1>
      <form onSubmit={handleLogin} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="Passwrod"
        />
        {showPassword && (
          <i
            onClick={showPasswordHandler}
            className="bi bi-eye-slash-fill show-password-icon"
          ></i>
        )}
        {!showPassword && (
          <i
            onClick={showPasswordHandler}
            className="bi bi-eye-fill show-password-icon"
          ></i>
        )}
        <button type="submit" className="form-btn">
          Login
        </button>
        {error && (
          <span className="wrong-credentials-span">
            Wrong email or password
          </span>
        )}
      </form>
      <div className="form-footer">
        Don't Have an account?
        <Link to="/register" className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
}
