import React from "react";
import {Link} from "react-router-dom";
import dashboard from "./image/business-analysis.png";
import balance from "./image/wallet.png";
import transaction from "./image/transaction.png";
import bills from "./image/bill.png";
import expense from "./image/menu.png";
import goals from "./image/target.png";
import profile from "./image/user.png";
import "./Workspace.css";
const Workspace=()=>{
    return(<React.Fragment>
        <div className="ws-container">
            <div className="menu-list">
                <nav>
                <ul><Link to="/home/dashboard">
                    <li>
                        <img src={dashboard} alt="icon" />
                        <h4>Dashboard</h4>
                    </li>
                    </Link>
                    <Link to="/home/balance">
                    <li>
                        <img src={balance} alt="icon" />
                        <h4>Balance</h4>
                    </li>
                    </Link>
                    <Link to="/home/transaction">
                    <li>
                        <img src={transaction} alt="icon" />
                        <h4>Transaction</h4>
                    </li>
                    </Link>
                    <Link to="/home/bills">
                    <li>
                        <img src={bills} alt="icon" />
                        <h4>Bills</h4>
                    </li>
                    </Link>
                    <Link to="/home/expenses">
                    <li>
                        <img src={expense} alt="icon" />
                        <h4>Expenses</h4>
                    </li>
                    </Link>
                    <Link to="/home/goals">
                    <li>
                        <img src={goals} alt="icon" />
                        <h4>Goals</h4>
                    </li>
                    </Link>
                </ul>
                </nav>
            </div>
            <div className="account-centre">
                <div className="accounts">
                    <img src={profile} alt="profile pic" />
                    <h5>Jacob Jones</h5>
                </div>
            </div>
        </div>
    </React.Fragment>);
}
export default Workspace;