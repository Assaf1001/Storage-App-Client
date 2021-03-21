import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginContextProvider from "../context/LoginContext";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import HomePage from "../components/HomePage";
import LoginPage from "../components/login/LoginPage";
import StoragePage from "../components/storage/StoragePage";
import NotFoundPage from "../components/main/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={HomePage} />

                <PublicRoute path="/login" component={LoginPage} />
                <PrivateRoute path="/storage" component={StoragePage} />

                <Route component={NotFoundPage} />
            </Switch>
            {/* <Footer /> */}
        </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;
