function CardBoxSearch() {

  
    return (
  <>
    {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12"> */}
        <a href="/product/a">
            <div className="card-box"> 
                <div className="card-box-image"> 
                     <img src="/k3.jpg" alt="عکس محصول" title="product image" />
                     <div className="logo-shop"> <img src="/logovira.jpg" alt="فروشگاه" title="shop logo" /> </div>
                </div>
                <div className="card-box-caption"> 
                     <h4> عنوان نمونه  </h4>
                     <p> وزن : <span> 2 </span> <span> کیلوگرم </span> </p>
                     <p style={{ float:"right" }}> <i className="lnr lnr-map-marker"></i> <span> تهران </span>  </p>
                     <div className="cost-content"> 
                     <div className="cost-content__off">  
                     <div className="cost-off__percent"> 25 % </div>
                     <span className="cost-off__text"> 75000 </span>
                     </div>
                     <div className="cost-price"> <p> <span> 56000 </span> تومان </p> </div>
                      </div>
                </div>
            </div>
        </a>
    {/* </div> */}
  </>
    );
  
  }
  
  export default CardBoxSearch;
  