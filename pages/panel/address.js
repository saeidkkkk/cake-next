

import Header from '../../components/header';
import Footer from '../../components/footer';
import SidebarProfile from '../../components/sidebarProfile';

import AddressModal from '../../components/addressModal';
import Address from '../../components/address';


export default function address(props) {

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
        <h1 className="head-section__item"> <i className="lnr lnr-location" /> نشانی ها </h1>
                <Address />
                <AddressModal />
                
        </div>   
        </div>
        </div>
      </div>
      </div>
      <Footer />


    
      </>
  )
}
