// src/components/Header.tsx

import React from 'react';

// 💡 팁: props가 없다면 인터페이스는 생략 가능합니다.
// interface HeaderProps {
//   // 여기에 props 타입을 정의합니다.
//   isLoggedIn: boolean;
// }

// React.FC<PropsType> 형태로 컴포넌트 타입을 정의합니다.
const MainSwiperContainer2: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Yanolja Research Swipe Container 2</div>
      <nav>
        {/* 네비게이션 메뉴 */}
      </nav>
    </header>
  );
};

export default MainSwiperContainer2;