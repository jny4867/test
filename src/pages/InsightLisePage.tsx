// src/pages/InsightListPage.tsx

import React from 'react';

// 1. 필요한 컴포넌트들을 불러옵니다.
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import MainSwiper1 from '../components/MainSwiperContainer1';
import MainSwiper2 from '../components/MainSwiperContainer2';
import MainSwiper3 from '../components/MainSwiperContainer3';

const InsightListPage: React.FC = () => {
  return (
    <>
      {/* 2. Header */}
      <Header />

      {/* 3. 메인 콘텐츠 영역 (Container로 감싸서 중앙 정렬) */}
      <main>
        {/* 메인 스와이퍼 영역 (페이지 상단의 큰 슬라이더 등) */}
        <section>
          <MainSwiper1 />
        </section>

        {/* 필터 및 목록 영역 */}
          {/* MainSwiper2, 3는 필터링/추천 영역일 수 있습니다. */}
          <section className="insight-filters">
            <MainSwiper2 />
          </section>
          
          {/* 추가적인 섹션 */}
          <section>
            <MainSwiper3 />
          </section>
        <Container>
            <section> 
                SNS
            </section>
        </Container>
      </main>

      {/* 4. Footer */}
      <Footer />
    </>
  );
};

export default InsightListPage;