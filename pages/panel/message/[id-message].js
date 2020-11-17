import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SidebarProfile from '../../../components/sidebarProfile';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';



export default function messageSingle() {
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


        <div className="order-recived__section">
                    <div className="order-recived__head">
                      <span className="row"> 
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12"><Form.Control className="input-messanger" type="text" placeholder="نوشتن پیام" /></div>
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">  <Form.Control className="input-messanger-submit" type="submit" value="ارسال" /> </div>   
                        </span>
                       <span><Link href="/panel/message"><a> بازگشت <i className="lnr lnr-chevron-left"></i></a></Link></span> 
                    </div>
                    <div className="order-recived__content">
                    <div className="inbox-message"> 
            <div className="inbox-message-section">
           
            <div class="bubble bubble-bottom-left" contenteditable>
                <h5> محمد رضا احمدی </h5>
                <p> ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                <div class="paragraf-color__item">  20:35  </div>
            </div>

            <div class="bubble-you bubble-bottom-right" contenteditable>
                <h5> شما </h5>
                <p>   برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد </p>
                <div class="paragraf-color__item">  20:35  </div>
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
  