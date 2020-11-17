import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SidebarProfile from '../../../components/sidebarProfile';
import MessageItem from '../../../components/messageItem';


export default function message() {
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
        <h1 className="head-section__item"> <i className="lnr lnr-envelope"></i> پیام ها </h1>
        
        <div className="manage-shop__container">
            <div className="inbox-message"> 
            <div className="inbox-message-section">
            <MessageItem id="0" name="محمد علی رحمتی" date="99.06.08" notification="0" />
             <MessageItem id="1" name="محمد علی رحمتی" date="99.06.08" notification="4" />
             <MessageItem id="2" name="محمد علی رحمتی" date="99.06.08" notification="2" />
             <MessageItem id="3" name="محمد علی رحمتی" date="99.06.08" notification="0" />
             <MessageItem id="4" name="محمد علی رحمتی" date="99.06.08" notification="5" />
             <MessageItem id="5" name="محمد علی رحمتی" date="99.06.08" notification="0" />
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
  