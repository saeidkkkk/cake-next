import Header from '../components/header';
import Footer from '../components/footer';
import TextSideImageRight from '../components/textSideImageRight';
import TextSideImageLeft from '../components/textSideImageLeft';


export default function AboutUs() {
  return (
      <>
<Header />
  <div className="background-box__back">
    <div className="text-content__header__cover">
    <div className="container rtl">
      <div className="text-content__header">
        <h1>  درباره ما </h1>
        <p>  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p>
      </div> 
    </div>
    </div>
  </div>
  <div className="background-box">
    <div className="container rtl">
      <TextSideImageRight />
      <TextSideImageLeft />
      <TextSideImageRight />
      <TextSideImageLeft />
    </div> 
</div>
      <Footer />
      </>
  )
}
