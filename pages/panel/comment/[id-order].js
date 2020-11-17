import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SidebarProfile from '../../../components/sidebarProfile'
import Form from 'react-bootstrap/Form'


export default function commentSingle() {
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
        <h1 className="head-section__item"> <i className="lnr lnr-bubble" /> ثبت نظر </h1>
        <div className="tab-contet__section">
          <div className="comment-section__policy"> <h2> نظر خود را در مورد محصول با نمره 1 تا 5 اعلام کنید </h2>  </div>
                <div className="row">
                   <div className="order-recived__section" style={{backgroundColor: "#fff3f3"}}>
                    <div className="order-recived__content">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                            <div className="pt15">
                              <div className="order-recived__content__image">
                                <img src="/k3.jpg" alt="عکس محصول" title="image of product"  />
                              </div>
                              <div className="pt15"> عنوان محصول </div>
                              </div>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                             <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="pt15">
                                <label> ارزش خرید </label>
                                  <Form.Control as="select">
                                  <option value="0">نمره شما</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                  </Form.Control>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="pt15">
                                <label> بسته بندی </label>
                                  <Form.Control as="select">
                                          <option value="0">نمره شما</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                  </Form.Control>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="pt15">
                                <label> کیفیت </label>
                                  <Form.Control as="select">
                                  <option value="0">نمره شما</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                  </Form.Control>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="pt15">
                                <label> طراحی </label>
                                  <Form.Control as="select">
                                  <option value="0">نمره شما</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                  </Form.Control>
                                  </div>
                              </div>
                            </div>  
                          </div>
                        </div>
                    </div>  
                   </div>

                   <div className="order-recived__section">
                    <div className="order-recived__content">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                             
                          <div className="login-form__register">
                        <div>
                        <label class="head-label" > عنوان نظر </label>
                        <input className="input-form__text" type='text'/>
                        <label class="head-label" > توضیحات </label>
                        <textarea className="input-form__text" type="text"></textarea>
                        <input className="input-form__submit" type='submit' value="ثبت نظر"/>

                        <div className="comment-section__policy"> <p> با “ثبت نظر” موافقت خود را با قوانین انتشار نظرات در شهرشیرین اعلام می‌کنم. </p>  </div>
                        
                        </div>
                      </div>
                             
                          </div>

                          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                             <div className="comment-section__policy">  
                                 <h2>  دیگران را با نوشتن نظرات خود، برای انتخاب این محصول راهنمایی کنید.  </h2>

                                 <p> در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی محصول ارائه‌ی اطلاعات مشخص و دقیق برای راهنمایی سایر کاربران در فرآیند خرید یک محصول توسط ایشان است. </p>

                                 <p> با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست راهنمایی در این بخش خودداری کرده و سوالات خود را در بخش «پرسش و پاسخ» مطرح کنید.  </p>

                                 <p> هرگونه نقد و نظر در خصوص سایت شهرشیرین، مشکلات دریافت خدمات و درخواست محصول و نیز گزارش تخلف فروش و غیره را با ایمیل  info@viratis.net  یا با شماره‌ی  33991239 - 028  در میان بگذارید و از نوشتن آن‌ها در بخش نظرات خودداری کنید. </p>
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
      </div>
      </div>
      <Footer />
      </>
  )
}
