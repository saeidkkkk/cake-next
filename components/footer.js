
import Form from 'react-bootstrap/Form'


function Footer() {

  
    return (
  <>
    <footer>
    <div className="arc-footer"></div>
        <div className="container">
            <div className="row footer-section"> 
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 rtl">
                    <div className="footer-content">
                            <div className="footer-logo">
                            <img src="/cakess.png" alt=" لوگو سایت" title="logo" />
                            </div>
                            <div className="footer-content__item rtl">
                                <p> <i className="lnr lnr-map-marker"></i> تهران خیابان شریعتی خیابان نسیم نبش کوچه ارغوان ساختمان نیایش طبقه سوم  </p>
                                <p>  <i className="lnr lnr-phone"></i>  تلفن : <span> 02833991239 </span> </p>
                                <div className="icon-social"><a href="#"> <img src="/social/telegram.svg" alt="تلگرام" title="telegram" /></a> </div>
                                <div className="icon-social"><a href="#"> <img src="/social/instagram.svg" alt="اینستاگرام" title="instagram" /></a> </div>
                                <div className="icon-social"><a href="#"> <img src="/social/facebook.svg" alt="فیسبوک" title="facebook" /></a> </div>
                            </div>
                    </div>    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 rtl">
                    <div className="footer-content">
                            <div className="footer-head">
                            <h4> منوی اصلی </h4>
                            </div>
                            <div className="footer-content__item rtl">
                                <a href="/"> <i className="lnr lnr-home"></i> صفحه اصلی </a>
                                <a href="/about"> <i className="lnr lnr-picture"></i> درباره ما </a>
                                <a href="/search"> <i className="lnr lnr-list"></i> دسته بندی </a>
                                <a href="/login"> <i className="lnr lnr-pencil"></i> ثبت نام </a>
                                <a href="/term"> <i className="lnr lnr-flag"></i> قوانین و مقررات </a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 rtl">
                <div className="footer-content">
                            <div className="footer-head">
                            <h4> خدمات ما </h4>
                            </div>
                            <div className="footer-content__item rtl">
                                <a href="/product/a"> <i className="lnr lnr-gift"></i> سفارش کیک </a>
                                <a href="/search"> <i className="lnr lnr-cart"></i> خرید کیک </a>
                                <a href="/faq"> <i className="lnr lnr-store"></i> پرسش های متداول  </a>
                                <a href="/build-store"> <i className="lnr lnr-chart-bars"></i>  ساخت فروشگاه </a>
                                <a href="/privacy"> <i className="lnr lnr-laptop-phone"></i>   حریم خصوصی </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid rtl">
            <div className="row">
                <div className="col-12 law">
                    <a className="farahoosh" title="پردازشگر ایده رویش هوشمند" href="https://www.viratis.net/" target="_blank"> طراحی و توسعه توسط شرکت پردازشگر ایده رویش هوشمند
                        <span className="viratis-color">ویرا</span><span className="tis-color">تیس</span>
                        <div className="vira-img-link"><img src="/favicon2.png" alt="پردازشگر ایده رویش هوشمند" title="پردازشگر ایده رویش هوشمند"></img></div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  </>
    );
  
  }
  
  export default Footer;
  