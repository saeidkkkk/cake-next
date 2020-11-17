import CatSwiper from './catSwiper';
import SearchHome from './searchHome';



function MenuHome() {

  
    return (
  <>
  <div className="container">
    <div className="menu-section">
      <h1> فروشگاه اینترنتی شهر شیرین </h1>
      <h2>  اولین فروشگاه آنلاین سفارش کیک   </h2>
    </div>
      <SearchHome />
      <CatSwiper />
      </div>
      <div className="arc-header"></div>
  </>
    );
  
  }
  
  export default MenuHome;
  