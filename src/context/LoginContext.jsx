import React, { createContext, useReducer } from "react";
import { getUserFromCookie } from "../cookies/cookies";
import logInReducer, { intialUserDataState } from "../reducers/loginReducer";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const cookieUserData = getUserFromCookie();
    const [userData, dispatchUserData] = useReducer(
        logInReducer,
        cookieUserData || intialUserDataState
    );

    return (
        <LoginContext.Provider value={{ userData, dispatchUserData }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;
