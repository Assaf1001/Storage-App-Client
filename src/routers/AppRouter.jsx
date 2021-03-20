import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginContextProvider from "../context/LoginContext";
import HomePage from "../components/HomePage";
import LoginPage from "../components/login/LoginPage";

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={HomePage} />

                <PublicRoute path="/login" component={LoginPage} />
                <PrivateRoute path="/storage" />

                <Route />
            </Switch>
        </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;
