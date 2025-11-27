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

const InsightListPage: React.FC = () => {
  return (
    <>
      {/* 2. Header */}
      {/* <Header /> */}

      {/* 2. 메인 콘텐츠 영역: 스와이퍼 + 카드 목록 */}
      {/* Container로 최대 너비를 제한하고, 내부를 flex로 가로 배치 */}
      <Container className="my-8 flex gap-8"> 
        
        {/* 2-1. 좌측 Swiper 영역 (더 큰 너비 차지) */}
        <div className="w-2/3"> {/* Swiper가 2/3 너비 차지 */}
          <MainSwiper1 /> 
        </div>

        {/* 2-2. 우측 IndexList 영역 (더 작은 너비 차지) */}
        <div className="w-1/3"> {/* IndexList가 1/3 너비 차지 */}
          {/* IndexList 컴포넌트는 이미 flex-col로 세로 배치되어 있다고 가정 */}
          <IndexList /> 
        </div>

      </Container>

        {/* 필터 및 목록 영역 */}
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