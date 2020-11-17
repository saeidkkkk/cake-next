import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import SidebarProfile from '../../../../components/sidebarProfile';
import ManageShopTab from '../../../../components/manageShopTab';


export default function managementProduct() {
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
                    <div className="renew-section">
                          <div className="row">
                              <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                                <p>  جهت تمدید آگهی خود ، تیک آگهی مورد نظر را فعال کرده و و روی "تمدید آگهی" کلیک کنید </p>
                              </div>
                              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                <a href="/build-store" className="button-custom__colored"> تمدید آگهی </a>
                              </div>
                          </div>
                        </div>
                      <div className="row rtl">
                      <div class="table-responsive">
                                <table class="table table-striped table-color-custom text-center">
                                    <thead>
                                        <tr>
                                            <th> تمدید </th>
                                            <th> عنوان </th>
                                            <th> ثبت تاریخ  </th>
                                            <th>انقضا آگهی</th>
                                            <th> وضعیت </th>
                                            <th> عملیات </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-shadow"> <input type="checkbox" /> </td>
                                            <td class="text-shadow"> کیک شکلاتی</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">99/5/21</td>
                                            <td class="text-shadow"> فعال </td>
                                            <td>
                                            <a href="/product/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                                <a href="/panel/store/product/gf" class="table-btn edit-btn-color" title="ویرایش"> <i class="lnr lnr-pencil"></i></a>
                                                <a href="#" class="table-btn download-btn-color" title="حذف"> <i class="lnr lnr-cross"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow"> <input type="checkbox" /> </td>
                                            <td class="text-shadow"> کیک شکلاتی</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">99/5/21</td>
                                            <td class="text-shadow"> فعال </td>
                                            <td>
                                            <a href="/product/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                                <a href="/panel/store/product/gf" class="table-btn edit-btn-color" title="ویرایش"> <i class="lnr lnr-pencil"></i></a>
                                                <a href="#" class="table-btn download-btn-color" title="حذف"> <i class="lnr lnr-cross"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow"> <input type="checkbox" /> </td>
                                            <td class="text-shadow"> کیک شکلاتی</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">99/5/21</td>
                                            <td class="text-shadow"> فعال </td>
                                            <td>
                                                <a href="/product/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                                <a href="/panel/store/product/gf" class="table-btn edit-btn-color" title="ویرایش"> <i class="lnr lnr-pencil"></i></a>
                                                <a href="#" class="table-btn download-btn-color" title="حذف"> <i class="lnr lnr-cross"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow"> <input type="checkbox" /> </td>
                                            <td class="text-shadow"> کیک شکلاتی</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">99/5/21</td>
                                            <td class="text-shadow"> فعال </td>
                                            <td>
                                            <a href="/product/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                                <a href="/panel/store/product/gf" class="table-btn edit-btn-color" title="ویرایش"> <i class="lnr lnr-pencil"></i></a>
                                                <a href="#" class="table-btn download-btn-color" title="حذف"> <i class="lnr lnr-cross"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-shadow"> <input type="checkbox" /> </td>
                                            <td class="text-shadow"> کیک شکلاتی</td>
                                            <td class="text-shadow">99/4/21</td>
                                            <td class="text-shadow">99/5/21</td>
                                            <td class="text-shadow"> فعال </td>
                                            <td>
                                            <a href="/product/a" class="table-btn show-btn-color" title="مشاهده"> <i class="lnr lnr-eye"></i></a>
                                                <a href="/panel/store/product/gf" class="table-btn edit-btn-color" title="ویرایش"> <i class="lnr lnr-pencil"></i></a>
                                                <a href="#" class="table-btn download-btn-color" title="حذف"> <i class="lnr lnr-cross"></i></a>
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
