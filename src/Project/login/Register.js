import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css'; // Create this CSS file for styling

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const onClose=()=>{
    window.location.href = '/';
   }

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post('https://sure-main.onrender.com/api/register', data)
      .then((res) => {
        alert(res.data.msg);
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        alert('User registration failed. Please try again.');
      });
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h1>Join Udemy</h1>
        <span className="close-button" style={{position:'relative',left:'290px',top:'-55px'}} onClick={onClose}>
            &times;
          </span>
        <form onSubmit={handleRegister}>
          <label>
            Full Name:
            <input
              className="inputField"
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              className="inputField"
              type="number"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              className="inputField"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="inputField"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </label>
          <br />

          <button className="register-button" type="submit">
            Register
          </button>
          <br />
          <p>
            Already have an account? <NavLink to="/login">Login here</NavLink>.
          </p>
        </form>
      </div>
      {/* <div className="quote">
        Learn anything, anytime, anywhere!
      </div> */}
    </div>
  );
};

export default Register;
