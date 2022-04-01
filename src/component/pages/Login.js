import React, { useState } from "react";
import Page from "./Page";
import logo from '../../img/logo.svg';
import LoginForm from "../forms/LoginForm";

function Login(props) {

    return  <Page>
                <div className="login">
                    <div className="login-block">
                        <img src={logo} className="logo" alt="logo" />
                        <LoginForm/>
                    </div>
                </div>
            </Page>
}

export default Login;