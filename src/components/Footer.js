import logo from "../asset/img/logo.svg"
function Footer() {

    return (
        <>

            <footer class="footer-distributed">

                <div class="footer-left">

                    <img src={logo} alt="" />
                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>



                </div>

                <div class="footer-center">

                    <div>
                        <p class="">
                            <h4 style={{ "color": "#f14836" }}><b>Quick Links </b></h4>

                            <ul style={{ "color": "black", "font-weight": "bolder" }}>
                                <li> <a href="#">Find Movers </a> </li>
                                <li>  <a href="#">About Us </a> </li>
                                <li> <a href="#">Subscriptions</a> </li>
                                <li> <a href="#">Why Muvan?</a> </li>
                                <li> <a href="#">How It Works ?</a> </li>
                            </ul>
                        </p>
                    </div>




                </div>

                <div class="footer-right">
                    <div className="">
                        <a className="main-btn " style={{ "width": "200px" }} data-scroll-nav="0" href="#pricing">Login</a>
                    </div>
                    <br />
                    <div className="">
                        <a className="main-btn" style={{ "width": "200px" }} data-scroll-nav="0" href="#pricing">Sign Up</a>
                    </div>


                </div>

            </footer>
        </>
    )
}

export default Footer;