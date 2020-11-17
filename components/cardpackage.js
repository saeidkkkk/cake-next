import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import FormLogin from '../components/formLogin';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function CardPackage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
  <>
    
      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="card-package">
          <div className="month-expire"><span>1</span></div>
          <div className="month-expire__text"><span>ماهه</span></div>
          <div className="cost-expire"><span>30000</span> <sub>تومان</sub> </div>
          <div className="button-custom__theme-colored pt30" onClick={handleShow}>   شروع کنید    </div>
        </div>
      </div>


      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton >
          <span> ساختن فروشگاه </span>
        </Modal.Header>
        <Modal.Body>
        <div className="container rtl pt30">
      <div className="row">
       
    <div className="general-box">
   
   {
    (1==1) ? (
    <>
    <div className="row rtl">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="make-store__form">
        <div className="pt5">
            <label> نام فروشگاه </label>
            <Form.Control type="text"/>
        </div>
        <div className="pt5">
            <label> نام کاربری </label>
            <InputGroup>
                 <FormControl type="text" className="left-text" />
                   <InputGroup.Prepend>
                     <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
           </InputGroup>
           <div className="green-text__succes"> نام کاربری آزاد میباشد </div>
           <div className="red-text__failed"> نام کاربری مجاز نمیباشد </div>
        </div>
        <div className="button-custom__theme-colored pt30"> ثبت فروشگاه </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="make-store__form">
        <div className="text-content__passage">
          <p> <i className="lnr lnr-layers"></i>  نام فروشگاه و نام کاربری را متناسب با کسب و کار خود انتخاب کنید  </p>
          <p> <i className="lnr lnr-layers"></i>  توجه داشته باشید که نام کاربری شما بخشی از آدرس صفحه شما میباشد  </p>
        </div>
        </div>
        </div>
    </div>
    </>
      
    ):(
      <div className="">
      <FormLogin />
      </div>
    )
}

        </div>
      </div>
    </div>
        </Modal.Body>
         
      </Modal>
  </>
    );
  
  }
  
  export default CardPackage;