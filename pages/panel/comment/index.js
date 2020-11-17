import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SidebarProfile from '../../../components/sidebarProfile'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'


export default function comment() {
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
        <h1 className="head-section__item"> <i className="lnr lnr-bubble"></i> نظرات </h1>
        <div className="row">
        <Tab.Container id="left-tabs-example" defaultActiveKey="r1">
<div className="container">
        <div className='row'>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="pt30">
              <div className="slider-select__item">
                    <Nav>
                            <Nav.Link eventKey="r1"><span>در انتظار ثبت نظر</span></Nav.Link>
                            <Nav.Link eventKey="r2"><span>نظرات شما</span></Nav.Link>
                    </Nav>
                </div>
              </div>
            </div>
        </div>
</div>
<div className="container"> 
  <Tab.Content>
        <Tab.Pane eventKey="r1">
        <div className="tab-contet__section">
                <div className="row">
                   <div className="order-recived__section">
                    <div className="order-recived__head">
                      <span> 28 تیر 99  <span> | </span> <span> sc-187239 </span> </span>  <span className="link-color__click"> <a  href="/panel/comment/a"> ثبت دیدگاه <i className="lnr lnr-chevron-left"></i>  </a>  </span> 
                    </div>
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
                                <div className="order-recived__content__price"> قیمت : <span> 127000 </span> تومان </div>
                              </div>
                          </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey="r2">
          <div className="tab-contet__section">
                <div className="row">
                   <div className="order-recived__section">
                    <div className="order-recived__content">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                            <a href="/product/a">
                              <div className="order-recived__content__image">
                                <img src="/k3.jpg" alt="عکس محصول" title="image of product"  />
                              </div>
                              <div className="pt15"> عنوان محصول </div>
                              </a>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                                <div className="pt15"> کیفیت خوبی داشت </div>
                                <div className="rate-product__good"> <i className="lnr lnr-thumbs-up"></i>  <span> 3.7 </span>  </div>
                                <div className="order-recived__content__price"> <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.  </p> </div>
                              
                          </div>
                        </div>
                    </div>
                   </div>
                   <div className="order-recived__section">
                    <div className="order-recived__content">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                          <a href="/product/a">
                              <div className="order-recived__content__image">
                                <img src="/k3.jpg" alt="عکس محصول" title="image of product"  />
                              </div>
                              <div className="pt15"> عنوان محصول </div>
                              </a>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                                <div className="pt15"> محصول مناسبی نبود </div>
                                <div className="rate-product__bad"> <i className="lnr lnr-thumbs-down"></i>  <span> 1.5 </span>  </div>
                                <div className="order-recived__content__price"> <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.  </p> </div>
                              
                          </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
          
        </Tab.Pane>
  </Tab.Content>
</div>
</Tab.Container>
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
