import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SidebarProfile from '../../../components/sidebarProfile';
import ManageShopTab from '../../../components/manageShopTab';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'




export default function management() {
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
                    <h1 className="head-section__item"> <i className="lnr lnr-store"></i>  فروشگاه من </h1>
                    <ManageShopTab />
                    <div className="manage-shop__container">
                      <div className="row rtl">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="pt5">
                                <label className="head-label"> نام فروشگاه </label>
                                  <Form.Control type="text"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="pt5">
                              <label className="head-label"> نام کاربری </label>
                              <InputGroup>
                                 <FormControl type="text" className="left-text" />
                                 <InputGroup.Prepend>
                                   <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                              </InputGroup>
                              <div className="green-text__succes"> نام کاربری آزاد میباشد </div>
                               <div className="red-text__failed"> نام کاربری مجاز نمیباشد </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="pt5">
                        <label className="head-label"> استان </label>
                                <Form.Control as="select">
                                  <option value="0">انتخاب استان</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                              <label className="head-label"> شهر </label>
                                <Form.Control as="select">
                                  <option value="0"> انتخاب شهر</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="pt5">
                        <label className="head-label"> نشانی </label>
                        <Form.Control type="text"/>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="pt5">
                        <label className="head-label"> تلفن ثابت</label>
                        <Form.Control type="number"/>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="pt5">
                        <label className="head-label"> تلفن همراه</label>
                        <Form.Control type="number"/>
                        </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="pt5">
                        <label className="head-label"> شعار فروشگاه </label>
                        <Form.Control type="text"/>
                        </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="pt5">
                        <label className="head-label"> درباره ما </label>
                        <Form.Control type="text"/>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="pt5">
                              <label className="head-label">  تلگرام </label>
                              <InputGroup>
                                 <FormControl type="text" className="left-text" />
                                 <InputGroup.Prepend>
                                   <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                              </InputGroup>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="pt5">
                              <label className="head-label">  اینستاگرام </label>
                              <InputGroup>
                                 <FormControl type="text" className="left-text" />
                                 <InputGroup.Prepend>
                                   <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                              </InputGroup>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="chooose-picture">
                        <div className="pt15">
                        <label className="head-label"> عکس پروفایل</label>
                        <Form>
                            <Form.File id="formcheck-api-regular">
                              <Form.File.Label></Form.File.Label>
                              <Form.File.Input />
                            </Form.File>
                        </Form>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="chooose-picture">
                        <div className="pt15">
                        <label className="head-label"> عکس کاور </label>
                        <Form>
                            <Form.File id="formcheck-api-regular">
                              <Form.File.Label></Form.File.Label>
                              <Form.File.Input />
                            </Form.File>
                        </Form>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <input className="input-form__submit" type='submit' value="ثبت تنظیمات"/>
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
