import NavbarO from "./NavbarO";
import "./Find.css";
import { FaTruck } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";


import { BsSearch } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import dhl from "../asset/img/dhl.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";



function FindMovers() {


    return (
        <>

            <NavbarO />
            <div style={{ "margin-top": "100px" }}>

                <div class="row justify-content-around">
                    <div className="col-lg-2"></div>
                    <div class="col-lg-6 col-sm-12 text-center">
                        <h3 className="Main-color">Find Best Movers Here</h3> <br />
                        <div class="input-group pl-1" style={{ "width": "100%", "border-radius": "18px", "border": " 2px solid #dee2e6" }}>
                            <input type="text" class="form-control border-0" style={{ "border-radius": "18px" }} placeholder="Search this blog" />
                            <div class="input-group-append">
                                <button class="btn border-right" type="button">
                                    <BsSliders className="Main-color" />
                                </button>
                                <button class="btn " type="button">
                                    <BsSearch className="Main-color" />
                                </button>

                            </div>
                        </div>
                        <div className="d-flex justify-content-between pl-2 pt-2">
                            <p><b>Movers for You: <span className="Main-color">Popular</span></b></p>
                            <p className="d-flex"  >Sort By :


                                <div class="dropdown">
                                    <button class="btn pl-4 dropdown-toggle" style={{ "color": "orangered", "border-radius": "25px", "border": " 2px solid black" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Near you
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div style={{ "height": "500px", "width": "100%", "overflow-y": "scroll" }}>
                            <div className="container" style={{ "width": "100%" }}>
                                <div className="card p-3" style={{ "border-radius": "18px" }}>
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" height={96} width={103} style={{ "border-radius": "25px" }} src={dhl} />

                                        <span className="text-left w-25 pl-3" >
                                            <h6>DHL Express </h6>
                                            <p style={{ 'color': '#798795' }}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: 221 Moves</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><span className="mt-3 py-1 theme-btn">View Details </span></div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className="container" style={{ "width": "100%" }}>
                                <div className="card p-3" style={{ "border-radius": "18px" }}>
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" height={96} width={103} style={{ "border-radius": "25px" }} src={dhl} />

                                        <span className="text-left w-25  pl-3" >
                                            <h6>DHL Express </h6>
                                            <p style={{ 'color': '#798795' }}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: 221 Moves</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><span className="mt-3 py-1 theme-btn">View Details </span></div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>   <div className="container" style={{ "width": "100%" }}>
                                <div className="card p-3" style={{ "border-radius": "18px" }}>
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" height={96} width={103} style={{ "border-radius": "25px" }} src={dhl} />

                                        <span className="text-left w-25  pl-3" >
                                            <h6>DHL Express </h6>
                                            <p style={{ 'color': '#798795' }}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: 221 Moves</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><span className="mt-3 py-1 theme-btn">View Details </span></div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>   <div className="container" style={{ "width": "100%" }}>
                                <div className="card p-3" style={{ "border-radius": "18px" }}>
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" height={96} width={103} style={{ "border-radius": "25px" }} src={dhl} />

                                        <span className="text-left w-25  pl-3" >
                                            <h6>DHL Express </h6>
                                            <p style={{ 'color': '#798795' }}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: 221 Moves</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><span className="mt-3 py-1 theme-btn">View Details </span></div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>   <div className="container" style={{ "width": "100% " }}>
                                <div className="card p-3" style={{ "border-radius": "18px" }}>
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" height={96} width={103} style={{ "border-radius": "25px" }} src={dhl} />

                                        <span className="text-left w-25  pl-3" >
                                            <h6>DHL Express </h6>
                                            <p style={{ 'color': '#798795' }}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: 221 Moves</p>
                                            <p style={{ 'color': '#798795' }}><FaCheckCircle />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><span className="mt-3 py-1 theme-btn">View Details </span></div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-sm-12 ">
                        <div class="card border-0" style={{ "width": "100%" }}>
                            <div className="text-center border-bottom">
                                <img src={dhl} height={96} width={103} className="border " style={{ "border-radius": "18px" }} alt="..." />
                                <p className="pt-1">Brian Dix</p>

                                <p style={{ "color": "gray" }}> <i className="fa fa-map-marker mr-1"></i> Dummy Data </p>
                            </div>

                            <div class="card-body border-bottom">
                                <h5 class="card-title">About Move:</h5>
                                <p class="card-text">Lorem Ipsum is simply dud it to make a type </p>
                            </div>

                            <div class="card-body border-bottom">
                                <h5 class="card-title">History:</h5>
                                <p className="card-text">Total Jobs: 112 </p>
                                <p className="card-text "><span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <p style={{ "color": "gray" }}>(4.8 Success Score) </p></p>

                            </div>

                            <div class="card-body border-bottom">
                                <h5 class="card-title">Contact:</h5>
                                <p class="card-text">Contact Number: +1 (909) - 707 - 707 </p>
                                <p class="card-text">Address:  97 E Camino Del Abedul, Sahuarita, AZ 85629</p>


                            </div>


                            <div className="text-center"><span className="theme-btn mt-2 py-1 ">Connect</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FindMovers;