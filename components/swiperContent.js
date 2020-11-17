import { Swiper, SwiperSlide } from 'swiper/react';
import Nav from 'react-bootstrap/Nav'
import CardBox from './cardBox';

function SwiperContent() {

  
    return (
  <>
    <Swiper
        spaceBetween={0}
        slidesPerView={4}
        >
        
        <SwiperSlide><Nav.Link href="/product/a"> <CardBox /> </Nav.Link></SwiperSlide>
        <SwiperSlide><Nav.Link href="/product/a"> <CardBox /> </Nav.Link></SwiperSlide>
        <SwiperSlide><Nav.Link href="/product/a"> <CardBox /> </Nav.Link></SwiperSlide>
        <SwiperSlide><Nav.Link href="/product/a"> <CardBox /> </Nav.Link></SwiperSlide>
        <SwiperSlide><Nav.Link href="/product/a"> <CardBox /> </Nav.Link></SwiperSlide>
        <SwiperSlide><Nav.Link href="/product/a"> <CardBox /> </Nav.Link></SwiperSlide>
        <SwiperSlide><Nav.Link href="/product/a"> <CardBox /> </Nav.Link></SwiperSlide>

    </Swiper>
  </>
    );
  
  }
  
export default SwiperContent;
  