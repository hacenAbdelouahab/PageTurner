import React, { useState } from 'react'
import './forms.css'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("") ; 
  const [password, setPassword] = useState("") ; 
  const [showPassword, setShowPassword] = useState(false)

  //Show password handler

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className="form-items">
      <h1 className="form-title">Login to your Account</h1>
      <form className='form'>
        <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email" placeholder='email' />
        <input 
        value={password}
        onChange={e => setPassword(e.target.value)}
        type={showPassword ? "text" : "password"} 
        placeholder='Passwrod' 
        />
        {showPassword && <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i> }
        {!showPassword && <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i> }
        <button className='form-btn'>Login</button>
      </form>
      <div className="form-footer">
        Don't Have an account?
        <Link to="/register" className='form-link'>
          Register
        </Link>
      </div>
    </div>
  )
}
