// src/pages/InsightListPage.tsx

import React from 'react';

// 1. 필요한 컴포넌트들을 불러옵니다.
// import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import MainSwiper1 from '../components/MainSwiperContainer1';
import MainSwiper2 from '../components/MainSwiperContainer2';
import MainSwiper3 from '../components/MainSwiperContainer3';
import IndexList from '../components/IndexList';
import { mainSwiperData } from '../data/swiperData';
const InsightListPage: React.FC = () => {
  return (
    <>
      {/* 2. Header */}
      {/* <Header /> */}

      {/* 2. 메인 콘텐츠 영역: 스와이퍼 + 카드 목록 */}
      {/* Container로 최대 너비를 제한하고, 내부를 flex로 가로 배치 */}
      <Container className="my-8 flex gap-10"> 
        
        {/* 2-1. 좌측 Swiper 영역 */}
        <div className="w-3/4 pl-4 pt-2">
          <MainSwiper1 slides={mainSwiperData} />
        </div>

        {/* 2-2. 우측 IndexList 영역 */}
        <div className="w-1/4 pt-10">
          <IndexList /> 
        </div>

      </Container>

          <section className="insight-filters">
            <MainSwiper2 />
          </section>

          <section>
            <MainSwiper3 />
          </section>
      <Footer />
    </>
  );
};

export default InsightListPage;