import Header from '../components/header';
import Footer from '../components/footer';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import {useState,useRef} from 'react';
import CardBoxSearch from '../components/cardBoxSearch';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



export default function myshop() {
  const [show, setShow] = useState(false);
  const inputFile=useRef(null);
  const [form, setForm] = useState({
    weight:'',
    details:''
  });


  const [gallary, setGallary] = useState([]);


  const changeGallary = (event) => {
    if(event.target.files[0]){
      var image = URL.createObjectURL(event.target.files[0]);
      //axios upload image
      setGallary([
        ...gallary,
        image,
      ]);
    }
  }


  const removeGallary = (id) => {
    //axios delete image temp
    const list = gallary.filter((i, j) => j!=id);
    setGallary(list);
  }


  return (
      <>
      <Header />
  <div className="base">
    <div className="container">
       <div className="cover-parent">
          <div className="information-me">
            <div className="row rtl">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 pull-right">
              <div className="profile-img">
                <img src="/logovira.jpg" alt="" title="" />
              </div>
            </div>
            
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 shoping-name">
                <h1> ویراتیس </h1>
                <p><i className="lnr lnr-map-marker"></i> قزوین ولیعصر مجتمع نیایش طبقه سوم واحد 351 </p>
                <p className="mangement-home">  <span> با کیفیت در ساخت زیبا در طراحی </span> </p>
            </div>
            </div>
          </div>
       </div>

       <div className="row pt30">
        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <Tab.Container id="left-tabs-example" defaultActiveKey="r1">  
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 rtl">
                    <div className="select-tab__item">
                        <Nav>
                             <Nav.Link eventKey="r1"><span>محصولات</span></Nav.Link>
                             <Nav.Link eventKey="r2"><span>نظرات</span></Nav.Link>
                             <Nav.Link eventKey="r3"><span>سفارش اختصاصی</span></Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
              <Tab.Content>
                  <Tab.Pane eventKey="r1">
                    <div className="tab-section__show rtl">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <CardBoxSearch />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <CardBoxSearch />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <CardBoxSearch />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <CardBoxSearch />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <CardBoxSearch />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <CardBoxSearch />
                      </div>
                    </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r2">
                    <div className="tab-section__show rtl">
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
                      
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="r3">
                  <div className="tab-section__show rtl">
                  <div className="row">
                  <div className="col-lg-12 record-ads head-color__item pt30">
                  جهت انجام سفارش اختصاصی وزن ، توضیحات در مورد سفارش خود را بنویسید و در صورت نیاز عکس از طرح نمونه را آپلود کنید
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="right-text">
                  <div className="select-item__accordion pt30">
                  <label class="head-label">  انتخاب کنید </label>
                        <Accordion defaultActiveKey="0">
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                             طعم اسفنج
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-esfanj" type="radio" />
                                        <span> وانیلی  </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-esfanj" type="radio" />
                                        <span> شکلاتی </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-esfanj" type="radio" />
                                        <span> میکس  </span>
                                      </div>
                                    </div>
                                </div> 
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                             طعم خامه
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>
                              <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-cream" type="radio" />
                                        <span> وانیلی  </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-cream" type="radio" />
                                        <span> شکلاتی </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-cream" type="radio" />
                                        <span> توت فرنگی  </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-cream" type="radio" />
                                        <span>  گلاب  </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="select-cream" type="radio" />
                                        <span> موزی  </span>
                                      </div>
                                    </div>
                                </div>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                              میزان خامه کیک
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                              <Card.Body>
                              <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="reng" type="radio" />
                                        <span> کم  </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="reng" type="radio" />
                                        <span> متوسط </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input name="reng" type="radio" />
                                        <span> زیاد  </span>
                                      </div>
                                    </div>
                                </div>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                             مواد میانی
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                              <Card.Body>
                              <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input type="checkbox" />
                                        <span> گردو  </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input type="checkbox" />
                                        <span> موز </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input type="checkbox" />
                                        <span> توت فرنگی  </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input type="checkbox" />
                                        <span> آناناس </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input type="checkbox" />
                                        <span> چیپس شکلات </span>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                      <div className="select-item__ticked">
                                        <input type="checkbox" />
                                        <span> گردو بیشتر ( دو برابر )  </span>
                                      </div>
                                    </div>
                                </div>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                     </div>
                  </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="record-ads">
                  <label class="head-label">  وزن (گرم)  </label>
                      <input className="input-form__text" type='text' placeholder="گرم" />
                  </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="record-ads">
                  <label class="head-label">  متن روی کیک </label>
                      <input className="input-form__text" type='text' placeholder="مثال : تولدت مبارک" />
                  </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="record-ads">
                  <label class="head-label"> توضیحات </label>
                      <textarea rows="3" className="input-form__text" type='text' placeholder="توضیحات خود را وارد کنید" />
                  </div>
                    </div>
                  </div>
                  <input type="file" style={{display:'none'}} ref={inputFile} onChange={changeGallary} accept=".jpg , .png , .jpeg" />
                  <div className="row pt30">
                    <div className="col-lg-12 record-ads">
                    <label class="head-label"> تصاویر پیشنهادی شما </label>
                    <div className="upload-ads__show">
                  <div className="row">
                      {
                        gallary.map((row,i) => {
                          console.log([row,i]);
                          return (
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={i}>
                            <div className="preview-ads__uploaded">
                              <div className="trash-delete" onClick={() => removeGallary(i)}> <i className="lnr lnr-trash"></i> </div>
                              <img src={row}/>
                            </div>
                          </div>
                          )
                        })
                      }
                      {
                      gallary.length < 8 ?
                      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="upload-ads__image" onClick={() => {inputFile.current.click()}}>
                          <i className="lnr lnr-file-add"></i> 
                        </div>
                      </div>
                      : null
                      }   
                      {
                        gallary.length < 3 ?
                      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="preview-ads__uploaded">
                          <i className="lnr lnr-camera"></i> 
                        </div>
                      </div>
                      : null
                      }
                      {
                        gallary.length < 2 ?
                      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="preview-ads__uploaded">
                          <i className="lnr lnr-camera"></i> 
                        </div>
                      </div>
                      : null
                      }
                      
                      {
                        gallary.length < 1 ?
                      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="preview-ads__uploaded">
                          <i className="lnr lnr-camera"></i> 
                        </div>
                      </div>
                      : null
                      }
                  </div>
                  <div className="row">
                    <div className="col-12">
                    <div className="right-text paragraf-color__item pt30"> عکس  نمونه از کیک مورد نظر خود را اینجا آپلود کنید </div>
                      <div className="upload-image__image">
                        <img src="/upload-add.png" />
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
                          <a href="/checkout" className="button-custom__theme-colored"> ثبت سفارش </a>

                  </div>
                  </Tab.Pane>
                </Tab.Content>
          </Tab.Container>
          </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="general-box text-center">
                <div className="my-shop__tab__text">
                <h2> درباره ما </h2>
                <hr />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
              </div>
              <div className="general-box text-center">
              <div className="my-shop__tab__text">
              <h2> ارتباط با ما </h2>
                <hr />
              <p> <i className="lnr lnr-phone"></i> <span> تلفن : </span> <span> 02833991239 </span> </p>
              <p><i className="lnr lnr-map-marker"></i> قزوین ولیعصر مجتمع نیایش طبقه سوم واحد 351 </p>
                </div>
                </div>
                <div className="general-box text-center">
              <div className="my-shop__tab__text">
              <h2> شبکه های اجتماعی </h2>
                <hr />
                  <a href="#" className="social-icon__user-name"> <img src="/social/telegram.png" alt="" title="" />  </a>
                  <a href="#" className="social-icon__user-name"> <img src="/social/instagram.png" alt="" title="" />  </a>
                  <a href="#" className="social-icon__user-name"> <img src="/social/facebook.png" alt="" title="" />  </a>
                  <a href="#" className="social-icon__user-name"> <img src="/social/aparat.png" alt="" title="" />  </a>
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
