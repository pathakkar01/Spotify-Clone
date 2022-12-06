import React from "react";
import "./Login.css";
import AppLogo from "../UI/AppLogo";
import { authUrl } from "../../Helper/Spotify";

const Login = () => {
  return (
    <div className="login">
      <div>
        <AppLogo />
      </div>
      <a href={authUrl}>Log in with Spotify</a>
    </div>
  );
};

export default Login;
