import Header from '../components/header';
import Footer from '../components/footer';
import {useState,useRef} from 'react';
import Modal from 'react-bootstrap/Modal';
import CityButton from '../components/cityButton';
import Link from 'next/link';





export default function New() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inputFile=useRef(null);
  const [form, setForm] = useState({
    title:'',
    description:'',
    city:'',
    category:'',
    price:'',
    offer:'',
    time:'',
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
      <div className="container rtl">
      <h1 className="head-section__item">  ثبت آگهی </h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12"> 
            <div className="general-box">
              <div className="record-ads">
                  <label class="head-label"> دسته بندی </label>
                      <a className="input-select__modal" onClick={handleShow}><i className="lnr lnr-list"/>دسته</a>
                  <label class="head-label"> مکان </label>
                      <a className="input-select__modal" onClick={handleShow}><i className="lnr lnr-map-marker"/>مکان</a>
                  <label class="head-label"> عنوان آگهی </label>
                      <input className="input-form__text" type='text' placeholder="عنوان آگهی خود را وارد کنید" />
                  <label class="head-label"> توضیحات </label>
                      <textarea rows="3" className="input-form__text" type='text' placeholder="توضیحات خود را وارد کنید" />
                  <label class="head-label">  قیمت (تومان) </label>
                      <input className="input-form__text" type='number' placeholder="تومان" />
                  <label class="head-label">  وزن (گرم)  </label>
                      <input className="input-form__text" type='number' placeholder="گرم" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="general-box">
            <input type="file" style={{display:'none'}} ref={inputFile} onChange={changeGallary} accept=".jpg , .png , .jpeg" />
            <div className="row">
              <div className="col-lg-12 record-ads">
              <label class="head-label"> آپلود عکس </label>
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
                    <div className="right-text paragraf-color__item pt30"> با استفاده از عکس مناسب و با کیفیت میتوانید محصول خود را بهتر به مشتریانتان معرفی کنید </div>
                      <div className="upload-image__image">
                        <img src="/upload-add.png" />
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
            </div>
            <div className="general-box">
            <div className="button-custom__theme-colored"> ثبت آگهی </div>
            <div className="right-text paragraf-color__item pt30"> با کلیک بر روی دکمه <span> " ثبت آگهی "  </span> تمامی <span className="link-color__click"> <Link href="/term"> قوانین و مقررات  </Link> </span> استفاده از این سایت را میپذیرم </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      

      <Modal show={show} onHide={handleClose} centered size="md">
        <Modal.Header closeButton >
          <span> انتخاب شهر یا استان </span>
        </Modal.Header>
        <Modal.Body>
          <div className="row rtl">
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          </div>
        </Modal.Body>
      </Modal>

      </>
  )
}
