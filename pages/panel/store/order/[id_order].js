import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import SidebarProfile from '../../../../components/sidebarProfile'
import Link from 'next/link';


export default function managementOrderSingle() {
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
                   <span> 28 تیر 99  <span> | </span> <span> sc-187239 </span> </span>  
                </div>
            </div> 
            <div className="order-recived__section">
              <div className="order-recived__content">
                <div className="address-show__content__head">  آدرس مشتری : </div>
                <div className="address-show__content__details"> <i className="lnr lnr-map-marker" /> ولیعصر بلوار آیت الله خامنه ای مجتمع نیایش طبقه سوم واحد 351 شرکت ویراتیس </div>
                <div className="address-show__content__head">  اطلاعات مشتری : </div>  
                <div className="address-show__content__details pt15"> <i className="lnr lnr-user" /> نام و نام خانوادگی : <span> سعید کریمی </span>  </div>
                <div className="address-show__content__details pt15">  <i className="lnr lnr-phone" /> تماس : <span> 09389773752 </span>  </div>  
                <div className="address-show__content__details pt15">  <i className="lnr lnr-envelope" />  کد پستی : <span> 3416666998 </span>  </div>   
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
                               <div className="link-color__click pt15"> <Link href="../../message"> جزییات سفارش مشتری </Link> </div> 
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
