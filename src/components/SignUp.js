import React, { useState } from "react";
import "./sign.css";
import logo from "../asset/img/logo.svg";
import login from "../asset/img/login.svg"
import { Link } from "react-router-dom";
import axios from "axios";
function SignUp() {

const [user ,setUser] = React.useState({
    Email:"",
    Password:"",
    ContNo:"",
    Dte:"",
    tpye:""

})

function RegisterUser(){
    axios.post("http://localhost:9002/RegiterAuthenticate",user);

}
    return (
  <>
  <div id="container">
        <div id="left">
            <div className="d-flex justify-content-center"> <img src={logo} height="130" width="250" /></div>
            <div className="text-center"><h6 style={{"color":"white"}}>We Make Moving Simplified
                <p id="lorem " style={{"color":"white"}}>
                </p>     </h6></div>
            <div className="d-flex  justify-content-start" style={{"height":"70vh","width":"100%"}}> <img src={login}/></div>
        
        </div>
        <div id="right">
                    <div id="card">
                        <div id="card-content">
                            <div id="card-title">
                                <h4>Sign Up with Us</h4>
                              
                            </div>
                            <form class="form">
                                <p for="user-email" style={{ "padding-top": "13px" }}>
                                        Email
                                </p>
                                <input id="user-email" value={user.Email} onChange={(e) => {
                                    setUser({...user , Email:e.target.value})}} class="border border-dark rounded form-content inputd" type="email" name="email" autocomplete="on" required />
                                <p for="user-password" style={{"padding-top":"22px"}}>Password
                                </p>
                                <input id="user-password" value={user.Password} onChange={(e) => { setUser({...user,Password:e.target.value})}} class=" border border-dark rounded   form-content inputd" type="password" name="password" required />
                                <p for="user-password" style={{"padding-top":"22px"}}> Confirm Password
                                </p>
                                <input id="user-password" value={user.ContNo} onChange={(e) => {setUser({...user, ContNo:e.target.value})}} class=" border border-dark rounded   form-content inputd" type="password" name="password" required />
                                <p for="user-password" style={{"padding-top":"22px"}}>Contact Number
                                </p>
                                <input id="user-password"   class=" border border-dark rounded   form-content inputd" type="text" name="password" required />
                                
                               
                               <Link to="/customerDash"> <input id="submit-btn" className="text-center" type="submit" name="submit" value="Sign Up" /></Link>
                                <a href="#" id="signup">Already a registered Vendor? <a><b>  LOGIN</b></a></a>
                            </form>
                        </div>
                    </div>

                </div>


  </div>
  
  </>
  )
}
export default SignUp
        

