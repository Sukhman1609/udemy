import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
// import { NavLink } from 'react-router-dom';
import '../Styles/Login.css'
// import Home from '../Home';
const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logindata, setlogindata] = useState({
    email: '',
    password: '',
  });
   const onClose=()=>{
    window.location.href = '/';
   }
  const handleLogin = (e) => {
    console.log('Login Logic:', logindata);
    e.preventDefault();
  
    axios.post('https://sure-main.onrender.com/api/login', logindata)
      .then((res) => {
        alert(res.data.msg);
        console.log(res.data);
  
        
        if (res.data.msg === 'User logged in!!!') {
          localStorage.setItem("token", res.data.token);
          
          navigate('/');
        } else {
          console.log('Login failed:', res.data.msg);
        }
      })
      .catch(err => console.error(err));
  };
  if(setlogindata){
    console.log('abc')
  }
  

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <h2>Log in to Udemy</h2>
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="login-form">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
        </div>
        <div className="login-footer">
          <p>
            New to Udemy? <a href="/register">Sign up now</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
