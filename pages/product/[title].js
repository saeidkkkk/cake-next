import Header from '../../components/header';
import Footer from '../../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import Nav from 'react-bootstrap/Nav';
import SwiperContent from '../../components/swiperContent';


export default function singleProduct() {
  return (
      <>
        <Header />

        <div className="base">
          <div className="container">
            <div className="general-box">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-item__show text-right">
                    <h1> کیک شکلاتی ناملی </h1><span className="paragraf-color__item"> SC-367991 </span>
                    <div className="head-color__item pt15"> وزن :  <span> 2 </span> کیلوگرم </div>
                    <div className="head-color__item pt15"> قیمت :  <span className="pay-show__cost"> 120000 </span> <sub> تومان </sub> </div>
                    {
                        (1==1) ? (
                        <>
                        <div className="head-color__item pt15"> <i className="lnr lnr-store"></i> نام فروشگاه :  <span> ناملی </span>  </div>
                        <div className="sell-product">
                          <div className="row">
                            <div  className="col-lg-6 col-md-12 col-sm-12 col-12">
                              <a href="/checkout" className="button-custom__theme-colored pt15"> <i className="lnr lnr-cart"></i> خرید محصول </a>
                            </div>
                            <div  className="col-lg-6 col-md-12 col-sm-12 col-12">
                              <a href="/a" className="button-custom__colored pt15"> <i className="lnr lnr-select"></i> سفارش اختصاصی </a>
                            </div>
                          </div>
                        </div>
                        </>
                        ):(
                        <div className="head-color__item pt15"> <i className="lnr lnr-phone"></i>   شماره تماس :  <span className="head-color__item-mark"> 09123236956 </span>  </div>
                        )
                    }
                    <div className="paragraf-color__item pt15"> <i className="lnr lnr-map-marker"></i>  <span> قزوین </span> - <span> قزوین </span>  </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  >
                  <SwiperSlide><Nav.Link > <div className="product-slide__image"><img src="/k5.jpg" alt="عنوان محصول" title="cake" /></div> </Nav.Link></SwiperSlide>
                  <SwiperSlide><Nav.Link > <div className="product-slide__image"><img src="/k5.jpg" alt="عنوان محصول" title="cake" /></div> </Nav.Link></SwiperSlide>
                  <SwiperSlide><Nav.Link > <div className="product-slide__image"><img src="/k5.jpg" alt="عنوان محصول" title="cake" /></div> </Nav.Link></SwiperSlide>
                  <SwiperSlide><Nav.Link > <div className="product-slide__image"><img src="/k5.jpg" alt="عنوان محصول" title="cake" /></div> </Nav.Link></SwiperSlide>
                  <SwiperSlide><Nav.Link > <div className="product-slide__image"><img src="/k5.jpg" alt="عنوان محصول" title="cake" /></div> </Nav.Link></SwiperSlide>
                  <SwiperSlide><Nav.Link > <div className="product-slide__image"><img src="/k5.jpg" alt="عنوان محصول" title="cake" /></div> </Nav.Link></SwiperSlide>
                </Swiper>
                </div>
              </div>
            </div>
            <div className="general-box">
              <div className="product-item__show text-right">
                <h2 className="head-color__item"> توضیحات </h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
              </div>
            </div>
            <div className="background-box"> 
              <div className="rtl">
              <h3 className="head-section__item"> <i className="lnr lnr-layers"></i> محصولات مشابه </h3>
                <SwiperContent />
              </div> 
            </div>
          </div>
        </div>






        <Footer />
      </>
  )
}
