import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import CityButton from './cityButton';


function SearchHome() {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  
    return (
  <>
  
  
    <div className="search-section">
        <div className="search-parent__item">
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-12 d-lg-block d-md-none d-sm-none d-none"><div className="magnifier-search"><i className="lnr lnr-magnifier"></i></div></div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12"><input type="type" placeholder="جستجو" /></div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-12"> 
          <a className="button-custom__modal__form" onClick={handleShow}><i className="lnr lnr-list"/>دسته</a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-12"> 
          <a className="button-custom__modal__form" onClick={handleShow}> <i className="lnr lnr-map-marker"/>شهر</a>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 col-12"><input type="submit" value="جستجو"></input></div>
          </div>  
              
        </div>
    </div>

    <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton >
          <span> انتخاب شهر یا استان </span>
        </Modal.Header>
        <Modal.Body>
          <div className="row city-section">
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
          <CityButton />
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
    );
  
  }
  
  export default SearchHome;
  