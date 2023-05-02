import React from 'react';
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="forms">
        <h3 className="form-header">Register to Book Library</h3>
        <input type="text" placeholder="Username here...." name="name" id="name" className="inputs" />
        <input type="email" placeholder="Enter mail" name="email" id="mail" className="inputs" />
        <input type="password" placeholder="Password" className="inputs" />
        <input type="password" placeholder="Repeat password" className="inputs" />
        <Link to="/add-book" className="form-btn">Register</Link>
        <span className="mt-8">Already registered? <Link to="/login" className="underline">Login</Link></span>
    </form>
  )
}

export default RegisterForm