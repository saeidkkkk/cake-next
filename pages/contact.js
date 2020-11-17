
import Header from "../components/header";
import Footer from "../components/footer";



export default function contact() {
  return (
      <>
        <Header />
        
        <div className="base">
        <div className="container">
          <div className="form-general-box__edge">
            <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact-image__back">
                <div className="cover-menu__contact">
                    <div className="contact-content__address rtl">
                      <h1>  تماس با ما  </h1>
                      <p> <i className="lnr lnr-map-marker"></i>  آدرس :  <span> تهران خیابان شریعتی خیابان نسیم نبش کوچه ارغوان ساختمان نیایش طبقه سوم  </span>  </p>
                      <p>  <i className="lnr lnr-phone"></i>  تلفن : <span> 02833991239 </span> </p>
                      <p> <i className="lnr lnr-bubble"></i> شبکه های اجتماعی </p>
                      <div className="icon-social"><a href="#"> <img src="/social/telegram.svg" alt="تلگرام" title="telegram" /></a> </div>
                      <div className="icon-social"><a href="#"> <img src="/social/instagram.svg" alt="اینستاگرام" title="instagram" /></a> </div>
                      <div className="icon-social"><a href="#"> <img src="/social/facebook.svg" alt="فیسبوک" title="facebook" /></a> </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
            <div className="form-content__template">
                        
                      <div className="login-form__register">
                        <div>
                        <label class="head-label" for="name"> نام و نام خانوادگی </label>
                        <input className="input-form__text" type='text'/>
                        <label class="head-label" for="name"> ایمیل</label>
                        <input className="input-form__text" type='email'/>
                        <label class="head-label" for="name"> پیام شما </label>
                        <textarea className="input-form__text" type="text"></textarea>
                        <input className="input-form__submit" type='submit' value="ارسال"/>
                        
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
