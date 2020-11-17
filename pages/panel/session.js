import Header from '../../components/header';
import Footer from '../../components/footer';
import SidebarProfile from '../../components/sidebarProfile'


export default function session() {
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
            <h1 className="head-section__item"> <i className="lnr lnr-layers"></i> نشست ها </h1>
              <div className="order-recived__section">
                 <div className="session-section">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="session-platform__logo">
                          <img src="/social/android.svg" />
                        </div>    
                        <div className="session-platform__info">
                          <h2> اندروید </h2>
                          <p>  81.235.123.1 <span> ( نشست فعلی ) </span>  </p>
                        </div>  
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">   
                        <div className="session-platform__time">
                          <p> <i className="lnr lnr-clock"></i>   آخرین مشاهده :  <span>  20:35 </span>  </p>
                          <form> <input type="submit" value="حذف نشست" />  </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="order-recived__section">
                 <div className="session-section">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="session-platform__logo">
                          <img src="/social/win10.svg" />
                        </div>    
                        <div className="session-platform__info">
                          <h2> ویندوز </h2>
                          <p>  81.235.123.1 <span> ( نشست فعلی ) </span>  </p>
                        </div>  
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">   
                        <div className="session-platform__time">
                          <p> <i className="lnr lnr-clock"></i>   آخرین مشاهده :  <span>  20:35 </span>  </p>
                          <form> <input type="submit" value="حذف نشست" />  </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div> 
              <div className="order-recived__section">
                 <div className="session-section">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="session-platform__logo">
                          <img src="/social/apple.svg" />
                        </div>    
                        <div className="session-platform__info">
                          <h2> مکینتاش </h2>
                          <p>  81.235.123.1 <span> ( نشست فعلی ) </span>  </p>
                        </div>  
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">   
                        <div className="session-platform__time">
                          <p> <i className="lnr lnr-clock"></i>   آخرین مشاهده :  <span>  20:35 </span>  </p>
                          <form> <input type="submit" value="حذف نشست" />  </form>
                        </div>
                      </div>
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
