import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css'
const Signup=()=>{
    const username=useRef();
    const password=useRef();
    const getData=()=>{
        if(username.current.value==="" || password.current.value===""){
            alert("Please fill all the fields");
        }
        else{
            alert("Registered Successfully");
        }
    }
    return(<React.Fragment>
        <div className="signup-container">
            <div className="signup-interior">
                <div className="login-content">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please log in with your personal info</p>
                    <Link to="/signin"><button>SIGN IN</button></Link>
                </div>
                <div className="register-content">
                    <h1>Create Account</h1>
                    <input type="text" ref={username} id="" placeholder='Username' autoFocus/>
                    <br />
                    <input type="password" ref={password} id="" placeholder='Password'/>
                    <p>Already have an account?</p>
                    <button onClick={getData}>SIGN UP</button>
                </div>
                
            </div>
        </div>
    </React.Fragment>);
}
export default Signup;