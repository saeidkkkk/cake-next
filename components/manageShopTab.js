import Link from 'next/link';

function ManageShopTab() {

  
    return (
  <>
    <div className="manage-shop__tab" >
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <Link href="/panel/store/management" ><a className="shop-tab__item"> تنظیمات</a></Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <Link href="/panel/store/product" ><a className="shop-tab__item">آگهی من</a></Link>  
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <Link href="/panel/store/order" ><a className="shop-tab__item">سفارش ها</a></Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <Link href="/a" ><a className="shop-tab__item">فروشگاه من</a></Link>
            </div>
        </div>
    </div>
  </>
    );
  
  }
  
  export default ManageShopTab;