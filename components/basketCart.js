function BasketCart() {

    return (
  <>
  <div className="cart-section__cart">
    <div className="general-box">
                            <div className="cost-com-top">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-first"> قیمت کالاها : </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-num-litt"><span id="prices"> 0 </span> تومان </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-num-litt-per"> تخفیف کالاها : </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-num-litt-per"><span id="prices"> 0 </span> تومان </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cost-tot">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-first"> جمع : </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-num-litt"><span id="prices"> 0 </span> تومان </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-first"><i class="lnr lnr-cart"></i> هزینه ارسال : </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-num-litt"><span id="prices"> 0 </span> تومان </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cost-tot">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost"> قابل پرداخت: </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="heading-show-cost-num"><span id="prices"> 0 </span> تومان </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cost-tot">
                                
                                <a href="/pay" className="button-custom__theme-colored"> ادامه فرایند خرید </a>
                             
                            </div>
                           
                        </div>
                        </div>

  </>
    );
  
  }
  
  export default BasketCart;
  