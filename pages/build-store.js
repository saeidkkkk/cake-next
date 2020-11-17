
import Header from '../components/header';
import Footer from '../components/footer';
import TextContentImageRight from '../components/textContentImageRight';
import TextContentImageLeft from '../components/textContentImageLeft';
import CardPackage from '../components/cardpackage';
import VintageBest from '../components/vintageBest';




export default function buildStore() {

  return (
      <>
<Header />
  <div className="background-box__back-build">
    <div className="text-content__header__cover">
    <div className="container rtl">
      <div className="text-content__header">
        <h1>  چرا فروشگاه بسازیم </h1>
        <p>  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p>
      </div> 
    </div>
    </div>
  </div>
  <div className="background-box__colored">
    <div className="container rtl">
      <TextContentImageRight />
      <TextContentImageLeft />
      <TextContentImageRight />
      <TextContentImageLeft />
    </div> 
</div>
<div className="background-box">
    <div className="container rtl pt30">
    <h3 className="head-section__item"> <i className="lnr lnr-layers"></i>   امکانات فروشگاه ساز شهر شیرین </h3>
      <div className="row">
        <VintageBest /><VintageBest /><VintageBest /><VintageBest /><VintageBest /><VintageBest />
        <VintageBest /><VintageBest /><VintageBest /><VintageBest /><VintageBest /><VintageBest />
        <VintageBest /><VintageBest /><VintageBest /><VintageBest /><VintageBest /><VintageBest />
      </div>
    </div> 
</div>
<div className="background-box__colored">
    <div className="container rtl pt30">
    <h3 className="head-section__item"> <i className="lnr lnr-layers"></i>   برای شروع یکی از پکیج های زیر را انتخاب کنید </h3>
      <div className="row">
        <CardPackage />
        <CardPackage />
        <CardPackage />
      </div>
     
    </div> 
</div>
<div className="background-box">
    
</div>
      <Footer />


    

      </>
  )
}
