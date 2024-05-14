
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
import bgimg1 from "../assets/images/carousel1.jpg"
import bgimg2 from "../assets/images/carousel2.jpg"
import bgimg3 from "../assets/images/carousel3.jpg"
export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slider image={bgimg1} text='Get your own wev development project'></Slider>
        </SwiperSlide>
        <SwiperSlide>
               <Slider image={bgimg2} text='Get your own wev development project'></Slider>
        </SwiperSlide>
        <SwiperSlide>
             <Slider image={bgimg3} text='Get your own wev development project'></Slider>
        </SwiperSlide>
       
   
      </Swiper>
    </div>
  );
}
