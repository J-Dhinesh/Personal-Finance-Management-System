import React from "react";
import Header from "./Header";
import Workspace from "./Workspace";
import Contents from "./Contents";
import "./Home.css";
const Home=()=>{
    return(<React.Fragment>
        <div className="home">
        <div className="header">
            <Header />
        </div>
        <div className="workspace">
            <Workspace />  
        </div>
        <div className="contents">
            <Contents/>
        </div>
        </div>
    </React.Fragment>);
}
export default Home;