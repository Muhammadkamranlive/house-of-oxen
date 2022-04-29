function Navbar() {
    return (
        <>
            <header class="shadow-sm">
                {/* <!-- Topbar--> */}
                <div class="topbar topbar-dark bg-dark">
                    <div class="container">
                        <div class="topbar-text dropdown d-md-none"><a class="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Useful links</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="tel:00331697720">
                                    <i class="fa-solid fa-phone text-muted me-2">
                                        </i>(00) 33 169 7720</a>
                                    </li>
                                <li><a class="dropdown-item" href="#">
                               <i class="fa fa-map text-muted me-2">
                                </i>Order tracking</a></li>
                            </ul>
                        </div>
                        <div class="topbar-text text-nowrap d-none d-md-inline-block">
                        <i class="fa-solid fa-phone"></i>
                        <span class="text-muted me-1">Support
                        </span>
                        <a class="topbar-link" href="tel:00331697720">(00) 33 169 7720</a></div>
                        
                        <div class="ms-3 text-nowrap">
                            <a class="topbar-link me-4 d-none d-md-inline-block" href="#">
                            <i class="fa fa-location"></i>Order tracking</a>
                            <div class="topbar-text dropdown disable-autohide">
                             <a class="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                <img class="me-2" src="en.png" width="20" alt="English"/>Eng / $</a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li class="dropdown-item">
                                        <select class="form-select form-select-sm">
                                            <option value="usd">$ USD</option>
                                            <option value="eur">€ EUR</option>
                                            <option value="ukp">£ UKP</option>
                                            <option value="jpy">¥ JPY</option>
                                        </select>
                                    </li>
                                    <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="fr.png" width="20" alt="Français"/>Français</a></li>
                                    <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="de.png" width="20" alt="Deutsch"/>Deutsch</a></li>
                                    <li><a class="dropdown-item" href="#"><img class="me-2" src="it.png" width="20" alt="Italiano" />Italiano</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.--> */}
                <div class="navbar-sticky bg-light">
                    <div class="navbar navbar-expand-lg navbar-light">
                        <div class="container">
                            <a class="navbar-brand d-none d-sm-block flex-shrink-0" href="/">
                               House of Oxen</a>
                            <a class="navbar-brand d-sm-none flex-shrink-0 me-2" href="/">
                            House of Oxen</a>
                            <div class="input-group d-none d-lg-flex mx-4">
                                <input class="form-control rounded-end pe-5" type="text" placeholder="Search for live auctions" />
                                <i class="fa fa-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                            </div>
                            <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button><a class="navbar-tool navbar-stuck-toggler" href="#">
                                    <span class="navbar-tool-tooltip">Expand menu</span>
                                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon fa fa-bars"></i></div></a><a class="navbar-tool d-none d-lg-flex" href="#"><span class="navbar-tool-tooltip">Wishlist</span>
                                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon fa fa-heart"></i></div></a><a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon fa fa-user"></i></div>
                                    <div class="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
                                <div class="navbar-tool dropdown ms-3">
                                    <a class="navbar-tool-icon-box bg-secondary dropdown-toggle" href="$"><span class="navbar-tool-label">4</span>
                                    <i class="navbar-tool-icon fa-solid fa-cart-shopping"></i></a><a class="navbar-tool-text" href="https://cartzilla.createx.studio/shop-cart.html"><small>My Cart</small>$265.00</a>
                                    {/* <!-- Cart dropdown--> */}
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <div class="widget widget-cart px-3 pt-2 pb-3" style={{width: "20rem"}}>
                                            <div style={{height: "15rem"}} data-simplebar="init" data-simplebar-auto-hide="false"><div class="simplebar-wrapper" style={{margin: "0px -16px 0px 0px"}}>
                                                <div class="simplebar-height-auto-observer-wrapper">
                                                    <div class="simplebar-height-auto-observer">
                                                    </div>
                                                    </div>
                                                    <div class="simplebar-mask">
                                                <div class="simplebar-offset" style={{right: "0px; bottom: 0px"}}>
                                                <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{height:"auto", overflow: "hidden"}}>
                                                    <div class="simplebar-content" style={{padding: "0px 16px 0px 0px"}}>
                                                    <div class="widget-cart-item py-2 border-bottom">
                                                    <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div class="d-flex align-items-center">
                                                        <a class="flex-shrink-0" href="#">
                                                            <img src="h3.jpg" width="64" alt="Product"/></a>
                                                        <div class="ps-2">
                                                            <h6 class="widget-product-title">
                                                            <a href="#">PIEDMONTESE</a></h6>
                                                            <div class="widget-product-meta"><span class="text-accent me-2">$9.<small>00</small></span><span class="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget-cart-item py-2 border-bottom">
                                                    <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div class="d-flex align-items-center">
                                                        <a class="flex-shrink-0" href="#">
                                                            <img src="h3.jpg" width="64" alt="Product"/></a>
                                                        <div class="ps-2">
                                                            <h6 class="widget-product-title">
                                                            <a href="#">PIEDMONTESE</a></h6>
                                                            <div class="widget-product-meta"><span class="text-accent me-2">$9.<small>00</small></span><span class="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget-cart-item py-2 border-bottom">
                                                    <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div class="d-flex align-items-center">
                                                        <a class="flex-shrink-0" href="#">
                                                            <img src="h3.jpg" width="64" alt="Product"/></a>
                                                        <div class="ps-2">
                                                            <h6 class="widget-product-title">
                                                            <a href="#">PIEDMONTESE</a></h6>
                                                            <div class="widget-product-meta"><span class="text-accent me-2">$9.<small>00</small></span><span class="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget-cart-item py-2 border-bottom">
                                                    <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div class="d-flex align-items-center">
                                                        <a class="flex-shrink-0" href="#">
                                                            <img src="h3.jpg" width="64" alt="Product"/></a>
                                                        <div class="ps-2">
                                                            <h6 class="widget-product-title">
                                                            <a href="#">PIEDMONTESE</a></h6>
                                                            <div class="widget-product-meta"><span class="text-accent me-2">$9.<small>00</small></span><span class="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="simplebar-placeholder" style={{width:"0px",height: "0px"}}>
                                                </div>
                                                </div>
                                            <div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}>
                                            <div class="simplebar-scrollbar simplebar-visible" ></div></div><div class="simplebar-track simplebar-vertical" >
                                            <div class="simplebar-scrollbar simplebar-visible" ></div></div></div>
                                            <div class="d-flex flex-wrap justify-content-between align-items-center py-3">
                                                <div class="fs-sm me-2 py-2"><span class="text-muted">Subtotal:</span><span class="text-accent fs-base ms-1">$26544.<small>00</small></span></div><a class="btn btn-outline-secondary btn-sm" href="#">Expand cart<i class="fa fa-arrow-right ms-1 me-n1"></i></a>
                                            </div><a class="btn btn-primary btn-sm d-block w-100" href="#"><i class="fa fa-credit-card me-2 fs-base align-middle"></i>Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                        <div class="container">
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                {/* <!-- Search--> */}
                                <div class="input-group d-lg-none my-3">
                                    <i class="fa fa-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                    <input class="form-control rounded-start" type="text" placeholder="Search for live auctions" />
                                </div>
                                {/* <!-- Departments menu--> */}
                                <ul class="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown">
                                        <i class="fa-solid fa-grip me-2"></i>Breeds</a>
                                        <div class="dropdown-menu px-2 pb-4">
                                            <div class="d-flex flex-wrap flex-sm-nowrap">
                                                <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                    <div class="widget widget-links">
                                                      <a class="d-block overflow-hidden rounded-3 mb-3" href="#">
                                                        <img src="h1.jpg" className="img-fluid" alt="Clothing"/></a>
                                                        <h6 class="fs-base mb-2">Oxen</h6>
                                                        <ul class="widget-list">
                                                            <li class="widget-list-item mb-1">
                                                            <a class="widget-list-link" href="#">Red Sindhi</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hallikar</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Amritmahal</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                    <div class="widget widget-links">
                                                      <a class="d-block overflow-hidden rounded-3 mb-3" href="#">
                                                        <img src="h3.jpg" className="img-fluid" alt="Clothing"/></a>
                                                        <h6 class="fs-base mb-2">Oxen</h6>
                                                        <ul class="widget-list">
                                                            <li class="widget-list-item mb-1">
                                                            <a class="widget-list-link" href="#">Red Sindhi</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hallikar</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Amritmahal</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                    <div class="widget widget-links">
                                                      <a class="d-block overflow-hidden rounded-3 mb-3" href="#">
                                                        <img src="h2.jpg" className="img-fluid" alt="Clothing"/></a>
                                                        <h6 class="fs-base mb-2">Oxen</h6>
                                                        <ul class="widget-list">
                                                            <li class="widget-list-item mb-1">
                                                            <a class="widget-list-link" href="#">Red Sindhi</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hallikar</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Amritmahal</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div class="d-flex flex-wrap flex-sm-nowrap">
                                            <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                    <div class="widget widget-links">
                                                      <a class="d-block overflow-hidden rounded-3 mb-3" href="#">
                                                        <img src="h1.jpg" className="img-fluid" alt="Clothing"/></a>
                                                        <h6 class="fs-base mb-2">Oxen</h6>
                                                        <ul class="widget-list">
                                                            <li class="widget-list-item mb-1">
                                                            <a class="widget-list-link" href="#">Red Sindhi</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hallikar</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Amritmahal</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                    <div class="widget widget-links">
                                                      <a class="d-block overflow-hidden rounded-3 mb-3" href="#">
                                                        <img src="h5.jpg" className="img-fluid" alt="Clothing"/></a>
                                                        <h6 class="fs-base mb-2">Oxen</h6>
                                                        <ul class="widget-list">
                                                            <li class="widget-list-item mb-1">
                                                            <a class="widget-list-link" href="#">Red Sindhi</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hallikar</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Amritmahal</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                    <div class="widget widget-links">
                                                      <a class="d-block overflow-hidden rounded-3 mb-3" href="#">
                                                        <img src="h4.jpg" className="img-fluid" alt="Clothing"/></a>
                                                        <h6 class="fs-base mb-2">Oxen</h6>
                                                        <ul class="widget-list">
                                                            <li class="widget-list-item mb-1">
                                                            <a class="widget-list-link" href="#">Red Sindhi</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hallikar</a></li>
                                                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Amritmahal</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                {/* <!-- Primary menu--> */}
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                                       
                                    </li>
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Auctions</a>
                                        <div class="dropdown-menu p-0">
                                            <div class="d-flex flex-wrap flex-sm-nowrap px-2">
                                                <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                    <div class="widget widget-links mb-4">
                                                        <h6 class="fs-base mb-3">Oxen Breeds</h6>
                                                        <ul class="widget-list">
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">ANGUS</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">BELTED GALLOWAY</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">BRAHMAN</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">CHAROLAIS</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">DEXTER</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">GELBVIEH</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">HEREFORD</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">PIEDMONTESE</a></li>
                </ul>
                                                    </div>
                                                    
                                                   
                                                </div>
                                                <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                    <div class="widget widget-links mb-4">
                                                        <h6 class="fs-base mb-3">Cow Breeds</h6>
                                                        <ul class="widget-list">
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">ANGUS</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">BELTED GALLOWAY</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">BRAHMAN</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">CHAROLAIS</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">DEXTER</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">GELBVIEH</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">HEREFORD</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">PIEDMONTESE</a></li>
                </ul>
                                                    </div>
                                                  
                                                </div>
                                                <div class="mega-dropdown-column pt-1 pt-lg-4 px-2 px-lg-3">
                                                    <div class="widget widget-links mb-4">
                                                        <h6 class="fs-base mb-3">Dear Breeds</h6>
                                                        <ul class="widget-list">
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">ANGUS</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">BELTED GALLOWAY</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">BRAHMAN</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">CHAROLAIS</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">DEXTER</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">GELBVIEH</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">HEREFORD</a></li>
                <li class="widget-list-item">
                <a class="widget-list-link" href="#">PIEDMONTESE</a></li>
                                                       </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Results</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                            <a class="dropdown-item" href="#">
                                                <div class="d-flex">
                                                    <div class="lead text-muted pt-1">
                                                    <i class="fa fa-heart">
                                                    </i>
                                                </div>
                                                <div class="ms-2">
                                                <span class="d-block text-heading">Oxen Breeds</span>
                                                <small class="d-block text-muted">Auction Results </small></div>
                                                </div>
                                                </a>
                                            </li>
                                            <li class="dropdown-divider"></li>
                                            <li>
                                            <a class="dropdown-item" href="#">
                                                <div class="d-flex">
                                                    <div class="lead text-muted pt-1">
                                                    <i class="fa-solid fa-cow"></i>
                                                    </div>
                                                    <div class="ms-2">
                                                    <span class="d-block text-heading">Cow Breads<span class="badge bg-info ms-2">40+</span></span><small class="d-block text-muted">Auction Results</small></div>
                                                </div>
                                            </a>
                                            </li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="#">
                                                <div class="d-flex">
                                                    <div class="lead text-muted pt-1">
                                                    <i class="fa-solid fa-cow"></i></div>
                                                    <div class="ms-2"><span class="d-block text-heading">Dear Breeds<span class="badge bg-success ms-2">40+</span></span><small class="d-block text-muted">Auction Results</small></div>
                                                </div></a></li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="#">
                                                <div class="d-flex">
                                                    <div class="lead text-muted pt-1">
                                                    <i class="fa-solid fa-cow"></i></div>
                                                    <div class="ms-2">
                                                        <span class="d-block text-heading">Goats</span><small class="d-block text-muted">Auction Results</small></div>
                                                </div></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;