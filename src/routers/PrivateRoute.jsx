import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { LoginContext } from "../context/LoginContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { userData } = useContext(LoginContext);

    return (
        <Route
            {...rest}
            component={(props) =>
                !!userData.user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
