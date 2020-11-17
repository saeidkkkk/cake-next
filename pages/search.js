import {useRouter} from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';
import SearchHome from '../components/searchHome';
import CardBoxSearch from '../components/cardBoxSearch';
import HashtagClose from '../components/hashtagClose';
import Form from 'react-bootstrap/Form';
import ReactSlider from 'react-slider';






export default function search() {

  const router=useRouter();
  console.log(router.query);
 
  return (
      <>
      <Header />

      <div className="container">
        <div className="pt15">
          <SearchHome />
        </div>
        <div className="general-box">
        <div className="general-box-rose">
          <div className="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="filter-box__range pt15">
                <div className="right-text">
                  <div class="head-color__item">  قیمت (هزار تومان) </div>
                  <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 100]}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                  pearling
                  minDistance={5}
                  />
                </div>
              </div>
              
            </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="filter-box__range pt15">
                <div className="right-text">
                  <div class="head-color__item">  وزن ( کیلوگرم ) </div>
                  <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 100]}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                  pearling
                  minDistance={5}
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="filter-box__range pt15">
                <div className="right-text">
                  <div class="head-color__item">  قیمت (هزار تومان) </div>
                  <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 100]}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                  pearling
                  minDistance={5}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12 pt5">
            <div className="button-custom__theme-colored" style={{border:"solid 1px #ced4da"}}> <i className="lnr lnr-funnel"></i> فیلتر </div>
            </div> */}
          </div>
        </div>
        <div className="pt15">
          <div className="search-hashtag">
            <div className="row">
              <HashtagClose />
              <HashtagClose />
              <HashtagClose />
              <HashtagClose />
              <HashtagClose />
              <HashtagClose />
            </div>
          </div>
        </div>
        </div>
        {/* <div className="general-box" style={{direction: "ltr"}}>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <Form.Control as="select">
                    <option value="0">پربازدیدترین</option>
                    <option value="1">گرانترین</option>
                    <option value="2">ارزانترین</option>
                    <option value="3">جدیدترین</option>
            </Form.Control>
            </div>
        </div> */}
        <div className="row rtl">
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
      <Footer />
      </>
  )
}
