import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import SidebarProfile from '../../../../components/sidebarProfile';
import ManageShopTab from '../../../../components/manageShopTab';


export default function managementOrder() {
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
                    <h1 className="head-section__item"> <i className="lnr lnr-store"></i>  فروشگاه من </h1>
                    <ManageShopTab />
                    <div className="manage-shop__container">
                      <div className="row rtl">
                      <div class="table-responsive">
                                <table class="table table-striped table-color-custom text-center">
                                    <thead>
                                        <tr>
                                            <th>کد سفارش</th>
                                            <th> تاریخ  </th>
                                            <th>وضعیت</th>
                                            <th> قیمت </th>
                                            <th> عملیات </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-shadow">sc-76498</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">ارسال شده</td>
                                            <td class="text-shadow"> <span> 126000 </span> تومان  </td>
                                            <td>
                                                <a href="/panel/store/order/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow">sc-76498</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">در حال انجام</td>
                                            <td class="text-shadow"> <span> 126000 </span> تومان  </td>
                                            <td>
                                                <a href="/panel/store/order/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow">sc-76498</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">در حال بررسی</td>
                                            <td class="text-shadow"> <span> 126000 </span> تومان  </td>
                                            <td>
                                                <a href="/panel/store/order/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow">sc-76498</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">ارسال شده</td>
                                            <td class="text-shadow"> <span> 126000 </span> تومان  </td>
                                            <td>
                                                <a href="/panel/store/order/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow">sc-76498</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">ارسال شده</td>
                                            <td class="text-shadow"> <span> 126000 </span> تومان  </td>
                                            <td>
                                                <a href="/panel/store/order/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
