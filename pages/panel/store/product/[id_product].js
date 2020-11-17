import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import SidebarProfile from '../../../../components/sidebarProfile';



export default function editProduct() {
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
                    <h1 className="head-section__item"> <i className="lnr lnr-pencil"></i>  ویرایش آگهی </h1>
                      <div className="order-recived__section">
                        <div className="order-recived__content">
                            <div className="record-ads">
                              <label class="head-label">  قیمت (تومان) </label>
                                <input className="input-form__text" type='number' placeholder="تومان" />
                                <label class="head-label">  تخفیف (درصد) </label>
                                <input className="input-form__text" type='number' placeholder="درصد" />
                              <label class="head-label">  وزن (گرم)  </label>
                                <input className="input-form__text" type='number' placeholder="گرم" />
                                <label class="head-label"> توضیحات </label>
                                <textarea rows="3" className="input-form__text" type='text' placeholder="توضیحات خود را وارد کنید" />
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

