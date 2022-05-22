import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import WannaJoin from "./components/WannaJoin";
import ContactUs from "./components/ContactUs";
import About from "./components/About"
import HowWorks from "./components/HowWorks";
import Why from "./components/Why";
import SignUpScreen from "./components/SignUpCompany";
import SignUpCompany from "./components/SignUpCompany";
import Dashboard_Customer from "./components/Customer/Dashboard_Customer";
import MovingSelection from "./components/Customer/MovingSelection";
import Chat from "./components/Customer/Chat";
import CustomerPost from "./components/Customer/CustomerPost";
import Dashboard_Vendor from "./components/Vendor/Dashboard_Vendor";
import ChatVendor from "./components/Vendor/ChatVendor";
import MovingConfirm from "./components/Customer/MovingConfirm";
import FindMovers from "./components/FindMovers"

const App = () => {
  return (
<Router>
    <Switch>



      {/* Vendor Routes */}


      <Route exact path="/Dashboard">
        <Dashboard_Vendor />
      </Route>
      <Route exact path="/chat-vendor">
        <ChatVendor />
      </Route>
   
 


       {/* Customer Routes */}
      <Route exact path="/customerDash">
        <Dashboard_Customer />
      </Route>
      <Route exact path="/customerpost">
        <CustomerPost />
      </Route>
      <Route exact path="/chat">
        <Chat />
      </Route>
      <Route exact path="/MovingSelection">
        <MovingSelection />
      </Route>
      <Route exact path="/Confirm">
        <MovingConfirm />
      </Route>

      {/* Public  Routes */}
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/howorks">
        <HowWorks />
      </Route>
      <Route exact path="/whyMuvan">
        <Why />
      </Route>
      <Route exact path="/signupCompany">
        <SignUpCompany />
      </Route>
      <Route  exact path="/login">
        <Login />
      </Route>
      <Route  exact path="/join">
        <WannaJoin />
      </Route>
     
      <Route exact path="/home">
        <HomeScreen />
      </Route>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route exact path="/about">
        <About />
      </Route> 
      <Route exact path="/Contact">
        <ContactUs />
      </Route>
      <Route exact path="/findMovers">
        <FindMovers />
      </Route> 
      <Redirect  exact to="/" />  
    </Switch>
    </Router>
  );
};

export default App;
