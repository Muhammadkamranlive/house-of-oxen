import PageTitle from "../PageTitle";
import VerticalChart from "./Bar";
import Donut from "./Donut";
import Revenue from "./Revenue";

function AdminMaicontent() {
    return (
        <>

            <header >

                {/* <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.--> */}
                <div class="navbar-sticky bg-light">
                    <div class="navbar navbar-expand-lg navbar-light">
                        <div class="container">
                            <a class="navbar-brand d-none d-sm-block flex-shrink-0" href="/">
                                </a>
                            <a class="navbar-brand d-sm-none flex-shrink-0 me-2" href="/">
                                House of Oxen</a>
                            <a href="#">
                                <i className="fa fa-bars"></i>
                            </a>
                            <div class="input-group d-none d-lg-flex mx-4">
                                <input class="form-control rounded-end pe-5" type="text" placeholder="Search for live Auctions" />
                                <i class="fa fa-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                            </div>
                            <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button><a class="navbar-tool navbar-stuck-toggler" href="#"><span class="navbar-tool-tooltip">Expand menu</span>
                                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon fa fa-bars"></i>
                                    </div></a>
                                   
                                    
                                    <a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="https:#signin-modal" data-bs-toggle="modal">
                                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon fa fa-user"></i></div>
                                    <div class="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
                                <div class="navbar-tool dropdown ms-3">
                                    <a class="navbar-tool-icon-box bg-secondary dropdown-toggle" href="#">
                                    <span class="navbar-tool-label "></span>
                                    <i class="navbar-tool-icon fa fa-user"></i></a><a class="navbar-tool-text" href="#"><small>Isameel Lakhan</small>Profile</a>
                                    {/* <!-- Cart dropdown--> */}
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <div class="widget widget-cart px-3 pt-2 pb-3" style={{ width: "10rem" }}>
                                           
                                            <div class="d-flex flex-wrap justify-content-between align-items-center py-3">

                                            </div><a class="btn btn-primary btn-sm d-block w-100" href="#">
                                           <i class="fa fa-user me-2 fs-base align-middle">
                                            </i>logout</a>
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
                                    <input class="form-control rounded-start" type="text" placeholder="Search for live Auctions" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>






            <div class="row " style={{ backgroundColor: "rgb(249,251,254)" }}>
                <div class="col-lg-6 mt-5">

                    <div class="row mb-4">
                        <div className="col-sm-6 mb-4">
                            <div class="card shadow border-0 widget-flat ">
                                <div class="card-body half-circle">
                                    <div class="float-end">
                                        <i class="mdi mdi-account-multiple widget-icon"></i>
                                    </div>
                                    <h5 class="text-white fw-normal mt-0" title="Number of Customers">Customers</h5>
                                    <h3 class="mt-3 mb-3 text-white">36,254</h3>
                                    <p class="mb-0 text-muted">
                                        <span class="text-success me-2"><i class="fa fa-arrow-up"></i> 5.27%</span>
                                        <span class="text-nowrap text-white">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div class="card shadow border-0 widget-flat ">
                                <div class="card-body half-circle">
                                    <div class="float-end">
                                        <i class="mdi mdi-account-multiple widget-icon"></i>
                                    </div>
                                    <h5 class="text-white fw-normal mt-0" title="Number of Customers">Customers</h5>
                                    <h3 class="mt-3 mb-3 text-white">36,254</h3>
                                    <p class="mb-0 text-muted">
                                        <span class="text-success me-2"><i class="fa fa-arrow-up"></i> 5.27%</span>
                                        <span class="text-nowrap text-white">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div class="card shadow border-0 widget-flat ">
                                <div class="card-body half-circle">
                                    <div class="float-end">
                                        <i class="mdi mdi-account-multiple widget-icon"></i>
                                    </div>
                                    <h5 class="text-white fw-normal mt-0" title="Number of Customers">Customers</h5>
                                    <h3 class="mt-3 mb-3 text-white">36,254</h3>
                                    <p class="mb-0 text-muted">
                                        <span class="text-success me-2"><i class="fa fa-arrow-up"></i> 5.27%</span>
                                        <span class="text-nowrap text-white">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div class="card shadow border-0 widget-flat ">
                                <div class="card-body half-circle">
                                    <div class="float-end">
                                        <i class="mdi mdi-account-multiple widget-icon"></i>
                                    </div>
                                    <h5 class="text-white fw-normal mt-0" title="Number of Customers">Customers</h5>
                                    <h3 class="mt-3 mb-3 text-white">36,254</h3>
                                    <p class="mb-0 text-muted">
                                        <span class="text-success me-2"><i class="fa fa-arrow-up"></i> 5.27%</span>
                                        <span class="text-nowrap text-white">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        

                    </div>



                </div>

                <div class="col-lg-6 mt-5">
                    <div class="card border-0 shadow py-lg-5">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="header-title">Projections Vs Actuals</h4>
                                <div class="dropdown">
                                    <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">

                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>

                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>

                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>

                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                    </div>
                                </div>
                            </div>

                            <VerticalChart />

                        </div>
                    </div>

                </div>


            </div>
            <div class="row" style={{ backgroundColor: "rgb(249,251,254)" }}>
                <div class="col-lg-8">
                    <div class="card border-0 shadow widget-flat">
                        <div class="card-body">
                            <div class="float-end">
                                <i class="mdi mdi-currency-usd widget-icon"></i>
                            </div>
                            <h5 class="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
                            <h3 class="mt-3 mb-3">$6,254</h3>
                            <p class="mb-0 text-muted">
                                <span class="text-danger me-2"><i class="mdi mdi-arrow-down-bold"></i> 7.00%</span>
                                <span class="text-nowrap">Since last month</span>
                            </p>
                            <Revenue />
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div className="card shadow border-0" style={{ height: "350px" }}>
                        <div className="card-header pt-4">
                            <h3>TOTAL SALES</h3>
                        </div>
                        <div className="card-body">
                            <Donut />
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 my-5">
                    <div className="card shadow border-0">
                       
                           
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h4 class="header-title">Top Selling Products</h4>
                                        <a href="javascript:void(0);" class="btn btn-sm btn-link">Export <i class="mdi mdi-download ms-1"></i></a>
                                    </div>

                                    <div class="table-responsive">
                                        <table class="table table-centered table-nowrap table-hover mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">ASOS Ridley High Waist</h5>
                                                        <span class="text-muted font-13">07 April 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$79.49</h5>
                                                        <span class="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">82</h5>
                                                        <span class="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$6,518.18</h5>
                                                        <span class="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">Marco Lightweight Shirt</h5>
                                                        <span class="text-muted font-13">25 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$128.50</h5>
                                                        <span class="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">37</h5>
                                                        <span class="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$4,754.50</h5>
                                                        <span class="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">Half Sleeve Shirt</h5>
                                                        <span class="text-muted font-13">17 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$39.99</h5>
                                                        <span class="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">64</h5>
                                                        <span class="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$2,559.36</h5>
                                                        <span class="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">Lightweight Jacket</h5>
                                                        <span class="text-muted font-13">12 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$20.00</h5>
                                                        <span class="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">184</h5>
                                                        <span class="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$3,680.00</h5>
                                                        <span class="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">Marco Shoes</h5>
                                                        <span class="text-muted font-13">05 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$28.49</h5>
                                                        <span class="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">69</h5>
                                                        <span class="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="font-14 my-1 fw-normal">$1,965.81</h5>
                                                        <span class="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                












        </>
    );
}

export default AdminMaicontent;