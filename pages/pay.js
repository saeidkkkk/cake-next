import Header from '../components/header';
import Footer from '../components/footer';



export default function pay() {
  return (
    <>
    <Header />
    <div className="base">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="pay-section">
                    {
                        (1==1) ? (
                        <>
                        <div className="pay-succes">
                            <span className="pay-succes-head"> پرداخت با موفقیت انجام شد </span>
                            <div className="pay-code">
                                <div className="head-color__item"> <span>کد پیگیری :</span> <span> 769635 </span> </div>
                                <div className="head-color__item"> <span>کد تراکنش :</span> <span> 768439073 </span> </div>
                            </div>
                        </div>
                        </>
                        
                        ):(
                        <div className="pay-failed">
                            <span className="pay-failed-head"> تراکنش انجام نشد </span>
                            <div className="pay-code">
                                <div className="head-color__item"> <span>کد پیگیری :</span> <span> 769635 </span> </div>
                            </div>
                        </div>
                        )
                    }

                    <div className="order-code__section">
                        <div className="order-code__head"> <span> کد سفارش : </span>  <span> SC-497461 </span> </div>
                        <div className="order-type"> <span> نوع سفارش : </span>  <span> اکانت</span> </div>
                    </div>

                    <a href="/" className="button-custom__line__dotted"> بازگشت به صفحه اصلی </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
