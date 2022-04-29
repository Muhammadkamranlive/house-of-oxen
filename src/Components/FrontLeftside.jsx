function FrontLeftSide() {
    return ( 
    <>
    <section class="container pt-lg-5  mb-4 mb-sm-5">
        <div class="row">

          <div class="col-md-5" >
            <div class="d-flex flex-column  overflow-hidden rounded-3"  style={{backgroundColor: "#f6f8fb"}}>
              <div class="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                <div>
                  <h3 class="mb-1">WLivestock Cattle Sales</h3>
                  <a class="fs-md" href="#">Start Biding
                  <i class="fa fa-arrow-right fs-xs align-middle ms-1"></i></a>
                </div>
                
              </div>
              <a class="d-none d-md-block mt-auto" href="#">
                  <img class="d-block w-100 border-0 shadow" src="cat.jpg" alt="For Women"/></a>
            </div>
          </div>
         
          <div class="col-md-7 pt-4 pt-md-0">
            <div className="container">
                <div className="row">
                   {
                    [1,2,3,4,5,6].map((item, index) => {
                        return (
                          <div class="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div class="card product-card card-static p-2">
                            <button class="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist" data-bs-original-title="Add to wishlist" aria-label="Add to wishlist">
                              <i class="fa fa-heart"></i></button><a class="card-img-top d-block overflow-hidden" href="#">
                              <img src="h1.jpg" className="img-fluid" alt="Product"/></a>
                            <div class="card-body py-2"><a class="product-meta d-block fs-xs pb-1" href="#">Animals</a>
                              <h3 class="product-title fs-sm"><a href="#">Red Sindhi (oxen)</a></h3>
                              <div class="d-flex justify-content-between">
                                <div class="product-price"><span class="text-accent">$1267.<small>99</small></span></div>
                                <div class="star-rating">
                                  <i class="fa fa-star active"></i>
                                  <i class="fa fa-star active"></i>
                                  <i class="fa fa-star active"></i>
                                  <i class="fa fa-star active"></i>
                                  <i class="fa fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        )
                    })
                   }
                    
                    
                </div>
            </div>
          </div>
        </div>
      </section>
    
    
    </> 
    );
}

export default FrontLeftSide;