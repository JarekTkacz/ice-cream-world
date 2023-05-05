import React from 'react';
import '../App.css';
import '../components/UsersTesti.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Testimonials from '../testimonials.json'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function UsersTesti() {

    return (
      <section className='testi_main'>
      <div className='slide'>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
         
          {
            Testimonials && Testimonials.map( types =>
              {
                return(
                  <SwiperSlide className='boxmain'>
                      <div className='slicebox' key={types.id}>
                        <div styleName='testname'>{types.name}</div><br />
                        <div styleName='testtext'>{types.text}</div>
                      </div>
                  </SwiperSlide>
                )
                            
              })
          }
         
      </Swiper>
      </div>  
      </section>    
    );
      
}
export default UsersTesti;