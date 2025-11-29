import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { type SlideData } from '../data/swiperData';

interface MainSwiperProps {
  slides: SlideData[];
}

const MainSwiperContainer1: React.FC<MainSwiperProps> = ({slides}) => {
  return (
    <section className='my-8'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCards]}
        effect={'cards'}
        grabCursor={true}
        cardsEffect={{
          perSlideOffset: 8,
          perSlideRotate: 2,
          slideShadows: false,
        }}
        className="mySwiper h-96 max-w-[930px]"
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide 
            key={slide.id}
            className="flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-lg bg-white"
          >
             {/* 이미지와 텍스트를 감싸는 컨테이너 */}
             <div className="relative w-full h-full group">
               {/* 1. 배경 이미지 */}
               <img 
                 src={slide.image} 
                 alt={slide.title}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
               />
               
               {/* 2. 텍스트 가독성을 위한 그라데이션 (아래에서 위로 어두워짐) */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

               {/* 3. 텍스트 및 버튼 영역 (절대 위치로 배치) */}
               <div className="absolute inset-0 flex flex-col justify-center items-start p-10 z-10 text-white">
                 
                 {/* (1) 상단 태그: Insights */}
                 <div className="text-sm font-semibold mb-3 flex items-center opacity-90">
                   <span className="mr-1.5 text-[8px]">●</span> Insights
                 </div>

                 {/* (2) 메인 타이틀 */}
                 <h2 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg mb-6 max-w-2xl line-clamp-3">
                   {slide.title}
                 </h2>

                 {/* (3) 하단 버튼: Details */}
                 <a 
                   href={slide.link} 
                   className="inline-block bg-black text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-gray-800 transition duration-300"
                 >
                   {slide.goto} &gt;
                 </a>

               </div>
             </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSwiperContainer1;