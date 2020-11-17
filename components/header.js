import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import CityButton from './cityButton';



function Header(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
  <>
  
  <div className={`header-show  ${props.page == 'home' ? '' : 'background-other-menu'}`}>
  
    <Navbar collapseOnSelect expand="lg"  variant="dark">
        
      <div className="container">
          
          <Navbar.Brand href="#home">
            <div className="header-logo">
              <img src="/cakess.png" />
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
           
           
        
          <Nav className="ml-5 rtl">
            <div className="header-login rtl">
            <div className="button-custom-header" style={{backgroundColor:"forestgreen"}}> <Link href="/new">   ثبت آگهی </Link> </div>
                <div className="button-custom-header" onClick={handleShow} style={{backgroundColor:"rgba(0,0,0,0.3)"}}> <i className="lnr lnr-map-marker" /><Link href="#">   شهر </Link>    </div>
                {
                  (1==1) ? (
                    <Link href="/login" ><a className="button-custom-header"><i className="lnr lnr-enter" /> ورود</a></Link>
                    ) : (
                    <a className="button-custom-header"> سعید کریمی </a>
                  )}
            </div>
            </Nav>
            <Nav className="ml-auto rtl">
            <div className="headr-link__item"> <Nav.Link> <Link href="/">صفحه اصلی</Link></Nav.Link></div>
            <div className="headr-link__item"> <Nav.Link><Link href="/about"> درباره ما</Link></Nav.Link></div>
              <NavDropdown title="خدمات" id="collasible-nav-dropdown" className="headr-link__item">
                <div className="drop-section">
                <NavDropdown.Item href="/search">سفارش کیک</NavDropdown.Item>
                <NavDropdown.Item href="/search"> تم تولد </NavDropdown.Item>
                <NavDropdown.Item href="/search">شیرینی</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/build-store"> ساخت فروشگاه </NavDropdown.Item>
                </div>
              </NavDropdown>
              <div className="headr-link__item"> <Nav.Link><Link href="/contact">تماس با ما</Link></Nav.Link></div>
            </Nav>

           
          </Navbar.Collapse>

        </div>

    </Navbar> 

   
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

export default Header;
