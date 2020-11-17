import Header from '../components/header';
import Footer from '../components/footer';
import BasketCart from '../components/basketCart';
import Form from 'react-bootstrap/Form';
import AddressModal from '../components/addressModal';
import TimeSending from '../components/timeSending';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import FormLogin from '../components/formLogin';



export default function checkout() {

  return (
      <>
       <Header />

<div className="base">
  <div className="container">
  <div className="cart-heading"> 
    <h1> صورت حساب </h1>
    </div>
    <hr />
    <div className="row rtl">
     <div className="col-lg-9 col-md-8 col-sm-12 col-12">

    <div className="general-box">
   
   {
    (1==1) ? (
    <>
      <div className="select-address__cart">
        <label class="head-label"> انتخاب آدرس</label>
        <Form.Control as="select">
          <option value="0"> قزوین قزوین خیابان نوروزیان حکمت 58 پلاک 20 </option>
          <option value="1">تهران تهران بزرگراه اشرفی اصفهانی کوچه گلزار دوم پلاک 19</option>
        </Form.Control>                
      </div>                    
      <div className="send-section__customer ">
        <div className="address-show__content__details"> <i className="lnr lnr-user" /> نام و نام خانوادگی : <span> سعید کریمی </span>  </div> 
        <div className="address-show__content__details">  <i className="lnr lnr-phone" /> تماس : <span> 09389773752 </span>  </div>
      </div>
      <AddressModal />
    </>
      
    ):(
      <div className="">
      <FormLogin />
      </div>
    )
}

        </div>
          <div className="general-box">
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
                              <h6> عنوان محصول </h6>
                              <div>  وزن : <span> 1200 </span> گرم </div>
                              <div className="order-recived__content__price"> قیمت : <span> 127000 </span> تومان </div>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>



              <div className="row pt30">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <Tab.Container id="left-tabs-example" defaultActiveKey="r1">  
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 rtl">
                    <div className="select-tab__item-cart">
                        <Nav>
                             <Nav.Link eventKey="r1"><span>شنبه</span><br /><span className="date-cart">99/08/16</span></Nav.Link>
                             <Nav.Link eventKey="r2"><span>یکشنبه</span><br /><span className="date-cart">99/08/16</span></Nav.Link>
                             <Nav.Link eventKey="r3"><span>دوشنبه</span><br /><span className="date-cart">99/08/16</span></Nav.Link>
                             <Nav.Link eventKey="r4"><span>سه شنبه</span><br /><span className="date-cart">99/08/16</span></Nav.Link>
                             <Nav.Link eventKey="r5"><span>چهارشنبه</span><br /><span className="date-cart">99/08/16</span></Nav.Link>
                             <Nav.Link eventKey="r6"><span>پنجشنبه</span><br /><span className="date-cart">99/08/16</span></Nav.Link>
                             <Nav.Link eventKey="r7"><span>جمعه</span><br /><span className="date-cart">99/08/16</span></Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
              <Tab.Content>
                  <Tab.Pane eventKey="r1">
                    <div className="tab-section__show rtl">
                     <TimeSending />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r2">
                    <div className="tab-section__show rtl">
                    <TimeSending />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r3">
                  <div className="tab-section__show rtl">
                    <TimeSending />
                  </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r4">
                    <div className="tab-section__show rtl">
                 <TimeSending />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r5">
                    <div className="tab-section__show rtl">
                    <TimeSending />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r6">
                  <div className="tab-section__show rtl">
                    <TimeSending />
                  </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r7">
                  <div className="tab-section__show rtl">
                    <TimeSending />
                  </div>
                  </Tab.Pane>
                </Tab.Content>
          </Tab.Container>
          </div>
        
       </div>


</div>

<div className="general-box">
    <div className="send-section__customer">
    <div className="cart-heading"> 
    <div> شیوه ارسال </div>
    </div>
    <div className="type-sending">
      <input name="select-type" type="radio" />
      <span> با آژانس یا تاکسی اینترنتی به آدرس من ارسال شود </span>
    </div>
    <div className="type-sending">
      <input name="select-type" type="radio" />
      <span> خودم برای تحویل محصول به آدرس فروشندگان مراجعه میکنم </span>
    </div>
    
      
    </div>
    {/* <div className="pay-show">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <span className="pay-show__head"> مبلغ قابل پرداخت : </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <span className="pay-show__cost"> <span> 125000 </span> <sub> تومان </sub> </span>
        </div>
      </div>
    </div> */}
      </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
      <BasketCart />
    </div>
      </div>
  </div>
</div>

<Footer />



      </>
  )
}
