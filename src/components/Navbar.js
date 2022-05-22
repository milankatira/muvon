import React, { useState } from "react";
import logo from "../asset/img/logo.svg";
import "./Homescreen.css";
import profile1 from "../asset/img/profile.jpg";
import profile2 from "../asset/img/profile-n.jpg";
import why from "../asset/img/why.svg";
import how from "../asset/img/how.svg";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Navbar() {
  return(
    <>
    
    
    <header className="header-area">
        <div className="navbar-area headroom " style={{"height":"77px","margin-left":"85","margin-top":"29"}}>
            <div className="">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg  ml-5" >
                        <Link to='/home'>
                                <img src={logo}alt="Logo" height={18} width={70}  />
                        </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                               <ul id="nav" className="navbar-nav m-auto">
                               <li className="nav-item ">
                                    <Link to='/findMovers'>Find Movers </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/about'>About Us </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/about'>Subscriptions </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/whyMuvan'>
                                       Why Muvan?</Link>                                    </li>
                                    <li className="nav-item">
                                    <Link to='/howorks'>
                                       How It Works?</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/Contact'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="navbar-btn d-none d-sm-inline-block">
                            <Link to='/login' className="theme-btn py-1 " data-scroll-nav="0"> Login
                              </Link> 
                              <Link to='/join' className="ml-2 mr-4 theme-btn py-1 " data-scroll-nav="0"> Sign Up
                              </Link>  </div>
                        </nav>
                    </div>
                </div> 
            </div> 
        </div> 


            
<div className="container header-hero-content" style={{"margin-top":"79px","height":"486px"}}>
  <div className="row">
    
    <div className="col-xs-12 col-sm-12 col-md-4">
      <div className="box mt-5">
      <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"><b> <span className="Main-color">Let's get you <br/> Muvan! </span> </b></h2>
                            <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" style={{"color":"black "}}><b>Ready to experience something different? Muvan is an all-in-one marketplace where you can Muv 1 box or a treadmill to a pallet and even an entire home locally or across the globe.</b></p>
                    
      </div>
    </div>
    
    <div className="col-xs-12 col-sm-12 col-md-8" >
      <div className="box " style={{"height":"485px","width":"700px"}}>
     <img src="assets/images/hero.svg" />
	  </div>
    </div>
  </div>
</div>

        
        
    </header>
    

    </>
  )
}
export default Navbar;