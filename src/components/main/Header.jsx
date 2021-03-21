import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { logOutAction } from "../../actions/loginActions";
import { deleteUserOnCookie } from "../../cookies/cookies";

const Header = () => {
    const history = useHistory();

    const { userData, dispatchUserData } = useContext(LoginContext);

    const onClickLogout = () => {
        dispatchUserData(logOutAction());
        deleteUserOnCookie();
        history.push("/home");
    };

    return (
        <div className="header">
            <h1>Storage App</h1>
            <div className="nav">
                <NavLink to="/home">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/storage">
                    <p>Storage</p>
                </NavLink>
                {!userData.user ? (
                    <NavLink to="/login">
                        <p>Login</p>
                    </NavLink>
                ) : (
                    <div onClick={onClickLogout}>
                        <p>Logout</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
