function CardBox() {

  
    return (
  <>
  
        <a>
            <div className="card-box"> 
                <div className="card-box-image"> 
                     <img src="/k3.jpg" alt="عکس محصول" title="product image" />
                     <div className="logo-shop"> <img src="/logovira.jpg" alt="فروشگاه" title="shop logo" /> </div>
                </div>
                <div className="card-box-caption"> 
                     <h4> عنوان نمونه  </h4>
                     <p> وزن : <span> 2 </span> <span> کیلوگرم </span> </p>
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
    
  </>
    );
  
  }
  
  export default CardBox;
  