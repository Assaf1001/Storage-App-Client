import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { logOutAction } from "../../actions/loginActions";
import { deleteUserOnCookie } from "../../cookies/cookies";

const Header = () => {
    const history = useHistory();

    const { dispatchUserData } = useContext(LoginContext);

    const onClickLogout = () => {
        dispatchUserData(logOutAction());
        deleteUserOnCookie();
        history.push("/home");
    };

    return (
        <div>
            <h1>Header</h1>
            <button onClick={onClickLogout}>Logout</button>
        </div>
    );
};

export default Header;
