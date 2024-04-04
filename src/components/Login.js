import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    function onSubmit() {
        //code for checking user credentials
        //if credential is valid, login success
        navigate('/dashboard');
    }

    return <>
        <h1>Login</h1>
        <button onClick={onSubmit}>Login</button>
    </>
}