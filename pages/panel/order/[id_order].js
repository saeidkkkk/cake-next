import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SidebarProfile from '../../../components/sidebarProfile'


export default function orderSingle() {
  return (
      <>
        <Header />
        <div className="base">
      <div className="container rtl">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 col-12"> 
          <SidebarProfile />
          </div>
         <div className="col-lg-9 col-md-8 col-sm-12 col-12 rtl">

        <div className="general-box">
        <h1 className="head-section__item"> <i className="lnr lnr-dice"></i> جزییات سفارش   </h1>
       
            <div className="order-recived__section">
                <div className="order-recived__head">
                   <span> 28 تیر 99  <span> | </span> <span> sc-187239 </span> </span>  <span className="link-color__click"> <a  href="#"> دریافت فاکتور<i className="lnr lnr-chevron-left"></i>  </a>  </span> 
                </div>
            </div> 

            <div className="order-recived__section">
              <div className="order-recived__content">
                <div className="address-show__content__details"> ارسال به : </div>
                <div className="address-show__content__head"> <i className="lnr lnr-map-marker" /> ولیعصر بلوار آیت الله خامنه ای مجتمع نیایش طبقه سوم واحد 351 شرکت ویراتیس </div>     
              </div>
            </div> 

            <div className="order-recived__section">
              <div className="order-recived__content">
              <div className="order-recived__content__price"> قیمت کل : <span> 127000 </span> تومان </div>     
              </div>
            </div>

            <div className="order-recived__section">
            <div className="order-recived__content">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                              <div className="order-recived__content__image">
                                <img src="/k3.jpg" alt="عکس محصول" title="image of product"  />
                              </div>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                              <div className="order-recived__content__text">
                                <div> عنوان محصول </div>
                                <div className="order-recived__content__price"> قیمت واحد : <span> 127000 </span> تومان </div>
                              </div>
                          </div>
                        </div>
                    </div>
            </div>
       
        </div>   
        </div>
        </div>
      </div>
      </div>
      <Footer /> 
      </>
  )
}
