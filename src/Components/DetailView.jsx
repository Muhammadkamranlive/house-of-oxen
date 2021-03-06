import PageTitle from "./PageTitle";
import Reviews from "./Reviews";

function DetailView() {
    return (
        <>
            <PageTitle />
            <div class="container">
                <div class="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                    <div class="px-lg-3">
                        <div class="row">

                            <div class="col-lg-7 pe-lg-0 pt-lg-4">
                                <div class="product-gallery">
                                    <div class="product-gallery-preview order-sm-2">

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5 pt-4 pt-lg-0">
                                <div class="product-details ms-auto pb-3">
                                    <div class="d-flex justify-content-between align-items-center mb-2"><a href="#reviews" data-scroll>
                                        <div class="star-rating">
                                            <i class="star-rating-icon ci-star-filled active">
                                            </i>
                                            <i class="star-rating-icon ci-star-filled active">
                                            </i>
                                            <i class="star-rating-icon ci-star-filled active">
                                            </i>
                                            <i class="star-rating-icon ci-star-filled active">
                                            </i>
                                            <i class="star-rating-icon ci-star"></i>
                                        </div><span class="d-inline-block fs-sm text-body align-middle mt-1 ms-1">74 Reviews</span></a>
                                        <button class="btn-wishlist me-0 me-lg-n3" type="button" data-bs-toggle="tooltip" title="Add to wishlist"><i class="ci-heart"></i></button>
                                    </div>
                                    <div class="mb-3"><span class="h3 fw-normal text-accent me-1">$18.<small>99</small></span>
                                        <del class="text-muted fs-lg me-3">$25.<small>00</small></del><span class="badge bg-danger badge-shadow align-middle mt-n2">Sale</span>
                                    </div>
                                    <div class="fs-sm mb-4"><span class="text-heading fw-medium me-1">Color:</span><span class="text-muted" id="colorOption">Red/Dark blue/White</span></div>
                                    <div class="position-relative me-n4 mb-3">
                                        <div class="form-check form-option form-check-inline mb-2">
                                            <input class="form-check-input" type="radio" name="color" id="color1" data-bs-label="colorOption" value="Red/Dark blue/White" checked />
                                            <label class="form-option-label rounded-circle" for="color1"><span class="form-option-color rounded-circle" ></span></label>
                                        </div>
                                        <div class="form-check form-option form-check-inline mb-2">
                                            <input class="form-check-input" type="radio" name="color" id="color2" data-bs-label="colorOption" value="Beige/White/Dark grey" />
                                            <label class="form-option-label rounded-circle" for="color2"><span class="form-option-color rounded-circle" ></span></label>
                                        </div>
                                        <div class="form-check form-option form-check-inline mb-2">
                                            <input class="form-check-input" type="radio" name="color" id="color3" data-bs-label="colorOption" value="Dark grey/White/Orange" />
                                            <label class="form-option-label rounded-circle" for="color3"><span class="form-option-color rounded-circle" ></span></label>
                                        </div>
                                        <div class="product-badge product-available mt-n1"><i class="ci-security-check"></i>Product available</div>
                                    </div>
                                    <form class="mb-grid-gutter" method="post">
                                        <div class="mb-3">
                                            <div class="d-flex justify-content-between align-items-center pb-1">
                                                <label class="form-label" for="product-size">Size:</label><a class="nav-link-style fs-sm" href="#size-chart" data-bs-toggle="modal"><i class="ci-ruler lead align-middle me-1 mt-n1"></i>Size guide</a>
                                            </div>
                                            <select class="form-select" required id="product-size">
                                                <option value="">Select size</option>
                                                <option value="xs">XS</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="l">L</option>
                                                <option value="xl">XL</option>
                                            </select>
                                        </div>
                                        <div class="mb-3 d-flex align-items-center">
                                            <select class="form-select me-3" style={{ width: "5rem" }}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <button class="btn btn-primary btn-shadow d-block w-100" type="submit"><i class="ci-cart fs-lg me-2"></i>Add to Cart</button>
                                        </div>
                                    </form>

                                    <div class="accordion mb-4" id="productPanels">
                                        <div class="accordion-item">
                                            <h3 class="accordion-header"><a class="accordion-button" href="#productInfo" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="productInfo"><i class="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Product info</a></h3>
                                            <div class="accordion-collapse collapse show" id="productInfo" data-bs-parent="#productPanels">
                                                <div class="accordion-body">
                                                    <h6 class="fs-sm mb-2">Composition</h6>
                                                    <ul class="fs-sm ps-4">
                                                        <li>Elastic rib: Cotton 95%, Elastane 5%</li>
                                                        <li>Lining: Cotton 100%</li>
                                                        <li>Cotton 80%, Polyester 20%</li>
                                                    </ul>
                                                    <h6 class="fs-sm mb-2">Art. No.</h6>
                                                    <ul class="fs-sm ps-4 mb-0">
                                                        <li>183260098</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h3 class="accordion-header"><a class="accordion-button collapsed" href="#shippingOptions" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="shippingOptions"><i class="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>Shipping options</a></h3>
                                            <div class="accordion-collapse collapse" id="shippingOptions" data-bs-parent="#productPanels">
                                                <div class="accordion-body fs-sm">
                                                    <div class="d-flex justify-content-between border-bottom pb-2">
                                                        <div>
                                                            <div class="fw-semibold text-dark">Courier</div>
                                                            <div class="fs-sm text-muted">2 - 4 days</div>
                                                        </div>
                                                        <div>$26.50</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between border-bottom py-2">
                                                        <div>
                                                            <div class="fw-semibold text-dark">Local shipping</div>
                                                            <div class="fs-sm text-muted">up to one week</div>
                                                        </div>
                                                        <div>$10.00</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between border-bottom py-2">
                                                        <div>
                                                            <div class="fw-semibold text-dark">Flat rate</div>
                                                            <div class="fs-sm text-muted">5 - 7 days</div>
                                                        </div>
                                                        <div>$33.85</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between border-bottom py-2">
                                                        <div>
                                                            <div class="fw-semibold text-dark">UPS ground shipping</div>
                                                            <div class="fs-sm text-muted">4 - 6 days</div>
                                                        </div>
                                                        <div>$18.00</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between pt-2">
                                                        <div>
                                                            <div class="fw-semibold text-dark">Local pickup from store</div>
                                                            <div class="fs-sm text-muted">&mdash;</div>
                                                        </div>
                                                        <div>$0.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h3 class="accordion-header"><a class="accordion-button collapsed" href="#localStore" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="localStore"><i class="ci-location text-muted fs-lg align-middle mt-n1 me-2"></i>Find in local store</a></h3>
                                            <div class="accordion-collapse collapse" id="localStore" data-bs-parent="#productPanels">
                                                <div class="accordion-body">
                                                    <select class="form-select">
                                                        <option value>Select your country</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="France">France</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="UK">United Kingdom</option>
                                                        <option value="USA">USA</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <label class="form-label d-inline-block align-middle my-2 me-3">Share:</label><a class="btn-share btn-twitter me-2 my-2" href="#"><i class="ci-twitter"></i>Twitter</a><a class="btn-share btn-instagram me-2 my-2" href="#"><i class="ci-instagram"></i>Instagram</a><a class="btn-share btn-facebook my-2" href="#"><i class="ci-facebook"></i>Facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center py-md-3">
                    <div class="col-lg-5 col-md-6 offset-lg-1 order-md-2">
                        <img class="d-block rounded-3" src="prod-img.jpg" alt="Image" /></div>
                    <div class="col-lg-4 col-md-6 offset-lg-1 py-4 order-md-1">
                        <h2 class="h3 mb-4 pb-2">High quality materials</h2>
                        <h6 class="fs-base mb-3">Soft cotton blend</h6>
                        <p class="fs-sm text-muted pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.</p>
                        <h6 class="fs-base mb-3">Washing instructions</h6>
                        <ul class="nav nav-tabs mb-3" role="tablist">
                            <li class="nav-item"><a class="nav-link active" href="#wash" data-bs-toggle="tab" role="tab"><i class="ci-wash fs-xl"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="#bleach" data-bs-toggle="tab" role="tab"><i class="ci-bleach fs-xl"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="#hand-wash" data-bs-toggle="tab" role="tab"><i class="ci-hand-wash fs-xl"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="#ironing" data-bs-toggle="tab" role="tab"><i class="ci-ironing fs-xl"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="#dry-clean" data-bs-toggle="tab" role="tab"><i class="ci-dry-clean fs-xl"></i></a></li>
                        </ul>
                        <div class="tab-content text-muted fs-sm">
                            <div class="tab-pane fade show active" id="wash" role="tabpanel">30?? mild machine washing</div>
                            <div class="tab-pane fade" id="bleach" role="tabpanel">Do not use any bleach</div>
                            <div class="tab-pane fade" id="hand-wash" role="tabpanel">Hand wash normal (30??)</div>
                            <div class="tab-pane fade" id="ironing" role="tabpanel">Low temperature ironing</div>
                            <div class="tab-pane fade" id="dry-clean" role="tabpanel">Do not dry clean</div>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center py-4 py-lg-5">
                    <div class="col-lg-5 col-md-6 offset-lg-1">
                        <img class="d-block rounded-3" src="prod-map.png" alt="Map" /></div>
                    <div class="col-lg-4 col-md-6 offset-lg-1 py-4">
                        <h2 class="h3 mb-4 pb-2">Where is it made?</h2>
                        <h6 class="fs-base mb-3">Apparel Manufacturer, Ltd.</h6>
                        <p class="fs-sm text-muted pb-2">???Sam Tower, 6 Road No 32, Dhaka 1875, Bangladesh</p>
                        <div class="d-flex mb-2">
                            <div class="me-4 pe-2 text-center">
                                <h4 class="h2 text-accent mb-1">3258</h4>
                                <p>Workers</p>
                            </div>
                            <div class="me-4 pe-2 text-center">
                                <h4 class="h2 text-accent mb-1">43%</h4>
                                <p>Female</p>
                            </div>
                            <div class="text-center">
                                <h4 class="h2 text-accent mb-1">57%</h4>
                                <p>Male</p>
                            </div>
                        </div>
                        <h6 class="fs-base mb-3">Factory information</h6>
                        <p class="fs-sm text-muted pb-md-2">???Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
            </div>
            <Reviews />
        </>
    );
}

export default DetailView;