import React, { useState } from "react";
import CustomerHeader from "./CustomerHeader";
import "./moving_confirm.css"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa"
import Footer from "../Footer";
function MovingConfirm() {

    return (
        <>
            <CustomerHeader />
            <div className="container" style={{ "margin-top": "100px" }}>
                <div className="row">
                    <div class="col-sm-12 col-lg-6 text-center">
                        <h2 style={{ "color": "orangered" }}>Appartment Move</h2>
                        <div class="button-row button-row1 w-100">
                            <button class="button is-active">1 RK </button>
                            <button class="button">1 RHK </button>
                            <button class="button">2 RHK</button>
                            <button class="button">3 RHK</button>
                            <button class="button">4 RHK</button>
                            <button class="button">Studio</button>

                        </div>

                        <div className="container p-5  mt-2 d-flex justify-content-center align-items-center " style={{ "border-radius": "25px", "border": " 2px dotted #000000" }}>
                        <p className="p-1 rounded-circle" style={{"background-color":"#524C4C"}}><FaPlus color="white" /></p>
                        </div>
                        <div className="container border mt-2 d-flex justify-content-between  align-items-center" style={{ "border-radius": "25px" }}>
                            <p>Sofa</p>
                            <button className="btn"><FaPlus /></button>
                            <p>1</p>
                            <button className="btn"><FaMinus /></button>
                            <input type="checkbox" />
                            <p>Foldable</p>
                        </div>
                        <div className="container border mt-2" style={{ "border-radius": "25px" }}>
                            <textarea className="border-0" rows="3" cols="63" placeholder="Start Destination"></textarea>
                        </div>
                        <div className="container border mt-2" style={{ "border-radius": "25px" }}>
                            <textarea className="border-0" rows="3" cols="63" placeholder="End Destination"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6" >
                            <br />
                            <br />
                        <div className="container d-flex justify-content-center  align-items-center " style={{ "background": "#E7F3E2", "border-radius": "25px" }}>
                            <FaPhoneAlt style={{ "color": "green" }} />
                            <p className="pl-3" style={{ "color": "green" }}>Reach Out to us if you have any questions: 810-220-9114 </p>
                        </div>

                        <div className="container border mt-2" style={{"border-radius": "25px", "background": "#F2F2F2"}}>
                            <div style={{"font-weight":"bolder","color":"black" }}>Estimated Price </div>
                            <br />
                            <div  style={{"font-weight":"bolder" ,"color":"black"}} className="text-center">$2000 - 4000</div>

                        </div>
                    <br/>
                        <div className="container mt-2">
                            <div class="upload__box">
                                <div class="upload__btn-box">
                                    <label class="upload__btn  d-flex justify-content-center align-items-center"  style={{"height":"100px"}}>
                                        <p className="p-1 rounded-circle" style={{"background-color":"#524C4C"}}><FaPlus color="white" /></p>
                                        <input type="file" multiple="" data-max_length="20" class="upload__inputfile" />
                                    </label>
                                </div>
                                <div class="upload__img-wrap"></div>
                            </div>
                        </div>
                        <div className="container border mt-2" style={{ "border-radius": "25px" }}>
                            <textarea className="border-0" rows="3" cols="65" placeholder="Note:"></textarea>
                        </div>
                        <div className="container text-center mt-2">
                            <button className="main-btn" style={{"width":"160px","height":"53px"}}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default MovingConfirm;