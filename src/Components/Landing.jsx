import React from 'react';
import Footer from './Footer';
import FrontLeftSide from './FrontLeftside';
import RightSide from './RightSide';

function Landing() {
    return (
        <><main class="page-wrapper">
            {/* sgn in sign up model */}
            <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-secondary">
                            <ul class="nav nav-tabs card-header-tabs" role="tablist">
                                <li class="nav-item"><a class="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true">
                                <i class="fa-solid fa-lock me-2 mt-n1"></i>Sign in</a></li>
                                <li class="nav-item"><a class="nav-link fw-medium" href="#signup-tab" data-bs-toggle="tab" role="tab" aria-selected="false">
                                <i class="fa fa-user me-2 mt-n1"></i>Sign up</a></li>
                            </ul>
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body tab-content py-4">
                            <form class="needs-validation tab-pane fade show active" autocomplete="off" novalidate="" id="signin-tab">
                                <div class="mb-3">
                                    <label class="form-label" for="si-email">Email address</label>
                                    <input class="form-control" type="email" id="si-email" placeholder="johndoe@example.com" required="" />
                                    <div class="invalid-feedback">Please provide a valid email address.</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="si-password">Password</label>
                                    <div class="password-toggle">
                                        <input class="form-control" type="password" id="si-password" required="" />
                                        <label class="password-toggle-btn" aria-label="Show/hide password">
                                            <input class="password-toggle-check" type="checkbox" /><span class=" fas fa-eye"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-3 d-flex flex-wrap justify-content-between">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="si-remember" />
                                        <label class="form-check-label" for="si-remember">Remember me</label>
                                    </div><a class="fs-sm" href="#">Forgot password?</a>
                                </div>
                                <button class="btn btn-primary btn-shadow d-block w-100" type="submit">Sign in</button>
                            </form>
                            <form class="needs-validation tab-pane fade" autocomplete="off" novalidate="" id="signup-tab">
                                <div class="mb-3">
                                    <label class="form-label" for="su-name">Full name</label>
                                    <input class="form-control" type="text" id="su-name" placeholder="John Doe" required="" />
                                    <div class="invalid-feedback">Please fill in your name.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="su-email">Email address</label>
                                    <input class="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required="" />
                                    <div class="invalid-feedback">Please provide a valid email address.</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="su-password">Password</label>
                                    <div class="password-toggle">
                                        <input class="form-control" type="password" id="su-password" required="" />
                                        <label class="password-toggle-btn" aria-label="Show/hide password">
                                            <input class="password-toggle-check" type="checkbox" /><span class="fas fa-eye"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="su-password-confirm">Confirm password</label>
                                    <div class="password-toggle">
                                        <input class="form-control" type="password" id="su-password-confirm" required="" />
                                        <label class="password-toggle-btn" aria-label="Show/hide password">
                                            <input class="password-toggle-check" type="checkbox" /><span class="fa fa-eye" ></span>
                                        </label>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-shadow d-block w-100" type="submit">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* sgn in sign up model Ended */}

            {/* <!-- Hero slider--> */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="px-lg-5 tns-item tns-fadeIn tns-slide-active" style={{ backgroundColor: "rgb(0,92,69)", left: "0%;" }} id="tns2-item0">
                                        <div class="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                            <img class="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="header1.png" alt="Women Sportswear" />
                                            <div class="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style={{ maxWidth: "35rem", zIndex: "10" }}>
                                                <div class="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                                    <h3 class="h2 text-light fw-light pb-1 from-bottom">Hurry up! Limited time offer.</h3>
                                                    <h2 class="text-light display-5 from-bottom delay-1">Breeds of Cattle<br></br> and Buffalo Live Auctions</h2>
                                                    <p class="fs-lg text-light pb-3 from-bottom delay-2">Hallikar Amritmahal Khillari Kangayam Bargur. &amp; much more...</p>
                                                    <div class="d-table scale-up delay-4 mx-auto mx-lg-0 mt-5">
                                                        <a class="btn btn-primary mt-5" href="/">Shop Now<i class="fa fa-arrow-right ms-2 me-n1"></i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                </div>
                <div class="carousel-item">
                <div class="px-lg-5 tns-item tns-fadeIn tns-slide-active" style={{ backgroundColor: "rgb(0,92,69)", left: "0%;" }} id="tns2-item0">
                                        <div class="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                            <img class="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="header2.png" alt="Women Sportswear" />
                                            <div class="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style={{ maxWidth: "35rem", zIndex: "10" }}>
                                                <div class="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                                    <h3 class="h2 text-light fw-light pb-1 from-bottom">Hurry up! Limited time offer.</h3>
                                                    <h2 class="text-light display-5 from-bottom delay-1">Breeds of Cattle<br></br> and Buffalo Live Auctions</h2>
                                                    <p class="fs-lg text-light pb-3 from-bottom delay-2">Hallikar Amritmahal Khillari Kangayam Bargur. &amp; much more...</p>
                                                    <div class="d-table scale-up delay-4 mx-auto mx-lg-0 mt-5">
                                                        <a class="btn btn-primary mt-5" href="/">Shop Now<i class="fa fa-arrow-right ms-2 me-n1"></i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                </div>
                <div class="carousel-item">
                <div class="px-lg-5 tns-item tns-fadeIn tns-slide-active" style={{ backgroundColor: "rgb(0,92,69)", left: "0%"}} id="tns2-item0">
                                        <div class="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                            <img class="d-block order-lg-2 me-lg-n5 flex-shrink-0 " src="header4.png" alt="Women Sportswear" />
                                            <div class="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style={{ maxWidth: "35rem", zIndex: "10" }}>
                                                <div class="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                                    <h3 class="h2 text-light fw-light pb-1 from-bottom">Hurry up! Limited time offer.</h3>
                                                    <h2 class="text-light display-5 from-bottom delay-1">Breeds of Cattle<br></br> and Buffalo Live Auctions</h2>
                                                    <p class="fs-lg text-light pb-3 from-bottom delay-2">Hallikar Amritmahal Khillari Kangayam Bargur. &amp; much more...</p>
                                                    <div class="d-table scale-up delay-4 mx-auto mx-lg-0 mt-5">
                                                        <a class="btn btn-primary mt-5" href="/">Shop Now<i class="fa fa-arrow-right ms-2 me-n1"></i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true">
            
                </span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

             {/* <!-- Hero slider ended--> */}
            <FrontLeftSide/>
            <RightSide/>
            <FrontLeftSide/>
            <RightSide/>
            <Footer/>
            {/* <!-- Toolbar for handheld devices (Default)--> */}
            <div class="handheld-toolbar">
            <div class="d-table table-layout-fixed w-100">
            <a class="d-table-cell handheld-toolbar-item" href="#">
            <span class="handheld-toolbar-icon">
            <i class="fa fa-heart"></i>
            </span>
            <span class="handheld-toolbar-label">Wishlist</span>
            </a>
            <a class="d-table-cell handheld-toolbar-item" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onclick="window.scrollTo(0, 0)"><span class="handheld-toolbar-icon">
            <i class="fa fa-bars"></i>
            </span>
            <span class="handheld-toolbar-label">Menu</span>
            </a>
            <a class="d-table-cell handheld-toolbar-item" href="#">
            <span class="handheld-toolbar-icon">
            <i class="fa fa-cart-shopping"></i>
            <span class="badge bg-success rounded-pill ms-1">4</span></span>
            <span class="handheld-toolbar-label">$26599.00</span></a></div>
            </div>
          </main>
        </>
    );
}

export default Landing;