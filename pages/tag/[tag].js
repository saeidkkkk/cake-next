import Header from '../../components/header';
import Footer from '../../components/footer';
import CardBoxSearch from '../../components/cardBoxSearch';



export default function tag() {
  return (
      <>
<Header />
<div className="base">
<div className="background-box"> 
  <div className="container rtl">
    <h3 className="head-section__item"> <i className="lnr lnr-layers"></i> عنوان این بخش </h3>
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <CardBoxSearch />
      </div>
    </div>
  </div> 
</div>
</div>
<Footer />
      </>
  )
}
