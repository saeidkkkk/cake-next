import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperListItem from './swiperListItem'





function SwiperListShop() {
   
    return (
  <>

 <Tab.Container id="left-tabs-example" defaultActiveKey="r1">

    <div className="container">
        
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="slider-select__item">
                        <Nav>
                            <Swiper
                            spaceBetween={50}
                            slidesPerView={8}
                            >
                                <SwiperSlide><Nav.Link eventKey="r1"><span>تهران</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r2"><span>شیراز</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r3"><span>قزوین</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r4"><span>مشهد</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r5"><span>رشت</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r6"><span>زنجان</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r7"><span>کرمانشاه</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r8"><span>ساری</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r9"><span>کرج</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r10"><span>تبریز</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r11"><span>ارومیه</span></Nav.Link></SwiperSlide>
                                <SwiperSlide><Nav.Link eventKey="r12"><span>اهواز</span></Nav.Link></SwiperSlide>
                            
                            </Swiper>
                        </Nav>
                    </div>
                </div>
            </div>
        
    </div>
     
    <div className="container"> 
      <Tab.Content>
            <Tab.Pane eventKey="r1">
                <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r2">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r3">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                       
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r4">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r5">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r6">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r7">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r8">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r9">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r10">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r11">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="r12">
            <div className="swiper-contet__section">
                    <div className="row">
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                        <SwiperListItem />
                    </div>
                </div>
            </Tab.Pane>
      </Tab.Content>
    </div>
</Tab.Container>

  </>
    );
  
  }
  
  export default SwiperListShop;
  