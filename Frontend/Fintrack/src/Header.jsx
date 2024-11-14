import React,{useContext} from "react";
import logo from "./image/capital-venture.png"
import notify from "./image/bell.png"
import search from "./image/search.png"
import "./Header.css";
import { UserContext } from "./UserContext";
const Header=()=>{
    const {username}=useContext(UserContext);
    return(<React.Fragment>
        <div  className="header-container">
            <div className="companyname">
                <img src={logo} alt="Company logo"/>
                <h1>Fintrack</h1>
            </div>
            <div className="menu-field">
                <div className="inside-container">
                    <div className="text">
                        <h2>Hi, {username} </h2>
                        <h4>September 16, 2024</h4>
                    </div>
                    <div className="tools">
                        <img src={notify} alt="notification bar" />
                        <img src={search} alt="search icon" />
                        <input type="text" name="search" id="" placeholder="Search here or ask me something" />
                    </div>
                </div>
            </div>

        </div>
    </React.Fragment>);
}
export default Header;