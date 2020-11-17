import Header from '../components/header';
import MenuHome from '../components/menuHome';
import Footer from '../components/footer';
import TagBannerBig from '../components/tagBannerBig';
import TagBannerSmall from '../components/tagBannerSmall';
import SwiperListShop from '../components/swiperListShop';
import SwiperContent from '../components/swiperContent';



export default function Home() {
  return ( 
  <> 
  <div className="background-menu">
    <div className="cover-menu">
          <Header page="home" />
          <MenuHome/>
    </div>
  </div>
<div className="background-box"> 
    <div className="container rtl">
    <h3 className="head-section__item"> <i className="lnr lnr-layers"></i> عنوان این بخش </h3>
        <div className="row">
          <TagBannerBig />
          <TagBannerSmall />
          <TagBannerSmall />
        </div>
        <div className="row">
          <TagBannerSmall />
          <TagBannerSmall />
          <TagBannerBig />
        </div>
        <div className="row">
          <TagBannerBig />
          <TagBannerSmall />
          <TagBannerSmall />
        </div>
    </div> 
</div>

<div className="background-box__colored" >
  <div className="container rtl">
  <h3 className="head-section__item"> <i className="lnr lnr-layers"></i> عنوان این بخش </h3>
      <div className="row">
        <SwiperListShop />
      </div>
  </div>
</div>
<div className="background-box"> 
    <div className="container rtl">
    <h3 className="head-section__item"> <i className="lnr lnr-layers"></i> عنوان این بخش </h3>
          <SwiperContent />
    </div> 
</div>
<div className="background-box"> 
    <div className="container rtl">
    <h3 className="head-section__item"> <i className="lnr lnr-layers"></i> عنوان این بخش </h3>
          <SwiperContent />
    </div> 
</div>
<div className="background-box"> 
    <div className="container rtl">
    <h3 className="head-section__item"> <i className="lnr lnr-layers"></i> عنوان این بخش </h3>
          <SwiperContent />
    </div> 
</div>
  <Footer />
   </>
  )
}