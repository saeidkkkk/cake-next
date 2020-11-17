import Link from 'next/link';

function SidebarProfile () {

  
    return (
  <>
    <div className="general-box">
       <div className="row">
           <div className="col-lg-4 col-md-4 col-sm-12 col-12">
               <div className="profile-user__avatar">
                   <img src="/profile-user.svg" alt="حساب کاربری" title="user name profile" />
               </div>
           </div>
           <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="profile-user__contect">
                   <div className="profile-user__name"> سعید کریمی </div>
                   <div className="profile-user__phone"> 09389773752 </div>
               </div> 
           </div>
       </div>
       <hr />
       <div className="row">
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-chart-bars" /> <Link href="/panel">   داشبورد </Link> </div> </div>
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-dice" /> <Link href="/panel/order">   سفارش من </Link> </div> </div>
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-bookmark" /> <Link href="/panel/favorite">   علاقمندی ها </Link> </div> </div>
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-bubble" /> <Link href="/panel/comment">   نظرات </Link> </div> </div>
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-location" /> <Link href="/panel/address">   نشانی </Link> </div> </div>
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-layers" /> <Link href="/panel/session">   نشست ها </Link> </div> </div>
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-envelope" /> <Link href="/panel/message">   پیام ها </Link> <span className="notification-show">3</span> </div>  </div>
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-store" /> <Link href="/panel/store/management">    فروشگاه من </Link> </div> </div>
       </div>
       <hr/>
       <div className="row">
           <div className="col-lg-12 col-md-12 col-sm-4 col-6"> <div className="sidebar-profile__menu"> <i className="lnr lnr-exit" /> <Link href="#"> خروج </Link> </div> </div>
       </div>
    </div>
  </>
    );
  
  }
  
  export default SidebarProfile;
  