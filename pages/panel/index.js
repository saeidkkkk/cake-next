import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SidebarProfile from '../../components/sidebarProfile'
import Form from 'react-bootstrap/Form'



export default function Profile(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <h1 className="head-section__item"> <i className="lnr lnr-users"></i> اطلاعات کاربر </h1>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="profile-section__data">
              <div className="profile-data__head"> نام نام خانوادگی : </div>
              <div className="profile-data__value"> سعید کریمی </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="profile-section__data">
              <div className="profile-data__head"> ایمیل : </div>
              <div className="profile-data__value"> saeidk1991@yahoo.com </div>
              <a className="edit-info" title="ویرایش" onClick={handleShow}> <i className="lnr lnr-pencil"></i> </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="profile-section__data">
              <div className="profile-data__head"> شماره همراه : </div>
              <div className="profile-data__value"> 09389773752 </div>
              <a className="edit-info" title="ویرایش" onClick={handleShow}> <i className="lnr lnr-pencil"></i> </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="profile-section__data">
              <div className="profile-data__head"> کد ملی : </div>
              <div className="profile-data__value"> 4310437451 </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="profile-section__data">
              <div className="profile-data__head"> شماره کارت : </div>
              <div className="profile-data__value"> 6277601250496617 </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="profile-section__data">
              <div className="profile-data__head"> شماره شبا : </div>
              <div className="profile-data__value"> IR 2120000000456656859869 </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="profile-section__data">
              <div className="profile-data__head"> رمز عبور : </div>
              <div className="profile-data__value"> ************* </div>
            </div>
          </div>
          <a className="button-custom__line__dotted" onClick={handleShow}> <i className="lnr lnr-pencil"></i>  ویرایش اطلاعات  </a>
        </div>
        </div>   
           
        </div>
        </div>
      </div>
      </div>
      <Footer />

      
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton >
        <span> اطلاعات شما </span> 
        </Modal.Header>
        <Modal.Body>
                      <div className="login-form__register">
                        <div className="row rtl">
                        
                          
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> نام و نام خانوادگی </label>
                          <Form.Control type="text"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> ایمیل</label>
                          <Form.Control type="email"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> شماره همراه</label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> کدملی</label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                          <hr />
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> شماره کارت </label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> شماره شبا </label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label>  رمز عبور جدید </label>
                          <Form.Control type="password"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> تکرار رمز عبور جدید</label>
                          <Form.Control type="passwoed"/>
                          </div>
                          </div>
                        <input className="input-form__submit" type='submit' value="ویرایش اطلاعات"/>
                        </div>
                      </div>
        </Modal.Body>
      </Modal>
      </>
  )
}
