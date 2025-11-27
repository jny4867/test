import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

import img1 from '../assets/insight/img1.png';
import img2 from '../assets/insight/img2.jpg';
import img3 from '../assets/insight/img3.jpg';
import img4 from '../assets/insight/img4.png';
import img5 from '../assets/insight/img5.png';

const MainSwiperContainer1: React.FC = () => {
  return (
    <section className='my-8'>
      <Swiper

        modules={[Navigation, Pagination, Autoplay, EffectCards]}
        
        // 'cards'로 설정하면 3D 카드 효과가 적용됨
        effect={'cards'}
        grabCursor={true}
        
        cardsEffect={{
          perSlideOffset: 8, // 카드 간의 간격 (픽셀)
          perSlideRotate: 2, // 카드 회전 각도
          slideShadows: false, // 그림자 여부 
        }}

        className="mySwiper h-96 max-w-[930px]"
        
        // 슬라이드 옵션
        slidesPerView={1}
        // spaceBetween은 cards 이펙트에서는 자동으로 처리되므로 제거하거나 무시
        
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
      >
        {/* 슬라이드 내용들 */}
        <SwiperSlide className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
           <img src={img1} alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        
        <SwiperSlide className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
           <img src={img2} alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
           <img src={img3} alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        
        <SwiperSlide className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
           <img src={img4} alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
           <img src={img5} alt="Slide 5" className="w-full h-full object-cover" />
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default MainSwiperContainer1;