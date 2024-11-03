/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Signin.css";
// import Home from './Home';

const Signin = ({setIsAuthenticated}) => {
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();
    console.log(typeof  setIsAuthenticated);

    const validate = () => {
        if (username.current.value === "" || password.current.value === "") {
            alert("Please fill all the fields");
        } 
        else if (username.current.value === "admin" && password.current.value === "admin123") {
            alert("Login Successful");
            setIsAuthenticated(true);
            navigate('/home');
        } 
        else {
            alert("Invalid Credentials");
        }
    };

    return (
        <React.Fragment>
            <div className="login-container">
                <div className="login-interior">
                    <div className="signin-content">
                        <h1>Sign In</h1>
                        <input type="text" ref={username} placeholder='Username' autoFocus />
                        <br />
                        <input type="password" ref={password} placeholder='Password' />
                        <p>Already have an account?</p>
                        <button onClick={validate}>SIGN IN</button>
                    </div>
                    <div className="signup-content">
                        <h1>Hello...!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <Link to="/signup"><button>SIGN UP</button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signin;
