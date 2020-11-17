import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AddressModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
  <>
    <a className="button-custom__line__dotted" onClick={handleShow}> <i className="lnr lnr-plus-circle"></i>  افزودن آدرس جدید  </a>


    <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton >
        <span> ثبت نشانی </span> 
        </Modal.Header>
        <Modal.Body>
                      <div className="login-form__register">
                        <div className="row rtl">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> استان </label>
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
                          <label> شهر </label>
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
                          <label> نشانی </label>
                          <Form.Control type="text"/>
                          </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                          <div className="pt5">
                          <label> پلاک</label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                          <div className="pt5">
                          <label> واحد</label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> کدپستی</label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                          <hr />
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> نام و نام خانوادگی </label>
                          <Form.Control type="text"/>
                          </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="pt5">
                          <label> شماره همراه</label>
                          <Form.Control type="number"/>
                          </div>
                          </div>
                        <input className="input-form__submit" type='submit' value="ثبت آدرس"/>
                        </div>
                      </div>
        </Modal.Body>
      </Modal>
  </>
    );
  
  }
  
  export default AddressModal;
  